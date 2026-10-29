import React, { useState, useEffect } from 'react';
import { ActiveTab, Navbar } from './components/Navbar';
import { ImageUploadZone } from './components/ImageUploadZone';
import { ClassificationResultCard } from './components/ClassificationResultCard';
import { BreedExplorer } from './components/BreedExplorer';
import { BreedComparison } from './components/BreedComparison';
import { AnatomyGuide } from './components/AnatomyGuide';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { HistoryView } from './components/HistoryView';
import { BioscienceView } from './components/BioscienceView';
import { LoadingState } from './components/LoadingState';
import { ErrorState } from './components/ErrorState';
import { Footer } from './components/Footer';
import { BreedModal } from './components/BreedModal';
import { HistoryDrawer } from './components/HistoryDrawer';
import { ProjectLabReportModal } from './components/ProjectLabReportModal';
import { StudentJournalDrawer } from './components/StudentJournalDrawer';
import { AuthProvider } from './firebase/authContext';
import { SettingsProvider } from './context/SettingsContext';
import { SettingsView } from './components/SettingsView';
import { ClassificationResult, BreedInfo, ScanHistoryItem } from './types/breed';
import { SampleImageItem, SAMPLE_BREED_IMAGES } from './data/sampleImages';
import { classifyBreedImage } from './services/classifierService';
import { INDIAN_BOVINE_BREEDS, INDIAN_BREEDS_CATALOG } from './data/indigenousBreeds';
import {
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Dna,
  GraduationCap,
  Cloud,
  FileText,
  AlertTriangle,
  Info
} from 'lucide-react';

const STORAGE_KEY = 'indian_bovine_history_v2';

function MainAppContent() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentResult, setCurrentResult] = useState<ClassificationResult | null>(null);
  const [currentImagePreview, setCurrentImagePreview] = useState<string | null>(null);
  const [classificationError, setClassificationError] = useState<string | null>(null);

  // Modals & Drawers
  const [modalBreed, setModalBreed] = useState<BreedInfo | null>(null);
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);
  const [isJournalOpen, setIsJournalOpen] = useState<boolean>(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);
  const [history, setHistory] = useState<ScanHistoryItem[]>([]);

  // Navigation link states
  const [explorerQuery, setExplorerQuery] = useState<string>('');
  const [compareBreedA, setCompareBreedA] = useState<string>('Gir');
  const [compareBreedB, setCompareBreedB] = useState<string>('Murrah');

  // Load history from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setHistory(parsed);
        }
      }
    } catch (e) {
      console.warn('Could not load history from localStorage', e);
    }
  }, []);

  const saveToHistory = (result: ClassificationResult, imagePreviewUrl: string) => {
    const newItem: ScanHistoryItem = {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      timestamp: Date.now(),
      imagePreviewUrl,
      result
    };

    setHistory((prev) => {
      const updated = [newItem, ...prev].slice(0, 25);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (err) {
        console.warn('Storage limit reached, could not save item to localStorage');
      }
      return updated;
    });
  };

  const handleClearHistory = () => {
    setHistory([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  const handleImageSelected = async (
    base64Image: string,
    hint?: string,
    sample?: SampleImageItem,
    engine?: 'mobilenet' | 'cloud' | 'auto'
  ) => {
    setCurrentImagePreview(base64Image);
    setIsLoading(true);
    setClassificationError(null);

    try {
      // Always execute real AI classification pipeline on the actual image
      const result = await classifyBreedImage({
        imageBase64: base64Image,
        hint: hint || sample?.subtitle,
        engine: engine || 'auto'
      });

      setCurrentResult(result);
      saveToHistory(result, base64Image);
    } catch (err: any) {
      console.error('Classification failure:', err);
      setClassificationError(
        err.message || 'Phenotypic classification could not identify registered bovine traits in this image.'
      );
    } finally {
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleResetClassifier = () => {
    setCurrentResult(null);
    setCurrentImagePreview(null);
    setClassificationError(null);
  };

  const handleCompareWith = (breedName: string) => {
    setCompareBreedA(breedName);
    const found = INDIAN_BOVINE_BREEDS.find((b) => b.name.toLowerCase() === breedName.toLowerCase());
    if (found) {
      const counterpart = INDIAN_BOVINE_BREEDS.find(
        (b) => b.category === found.category && b.name.toLowerCase() !== found.name.toLowerCase()
      );
      if (counterpart) {
        setCompareBreedB(counterpart.name);
      } else {
        setCompareBreedB(INDIAN_BOVINE_BREEDS[0].name);
      }
    }
    setActiveTab('compare');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreBreed = (breedName: string) => {
    setExplorerQuery(breedName);
    setActiveTab('breeds');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClassifyBreedFromExplorer = (breed: BreedInfo) => {
    setActiveTab('classify');
    handleImageSelected(breed.imageUrl, `${breed.name} (${breed.category} - ${breed.stateOfOrigin})`);
  };

  const handleSelectHistoryScan = (item: ScanHistoryItem) => {
    setCurrentResult(item.result);
    setCurrentImagePreview(item.imagePreviewUrl);
    setActiveTab('classify');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7] dark:bg-stone-950 text-stone-900 dark:text-stone-100 selection:bg-amber-500/20 selection:text-amber-900 font-sans transition-colors duration-200">
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        historyCount={history.length}
        onOpenHistory={() => setIsHistoryOpen(true)}
        onOpenJournal={() => setIsJournalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {activeTab === 'home' && (
          <HomeView
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectSample={(sample) => {
              setActiveTab('classify');
              handleImageSelected(sample.imageUrl, `${sample.title} (${sample.category} - ${sample.state})`, undefined, 'auto');
            }}
            historyCount={history.length}
          />
        )}

        {activeTab === 'classify' && (
          <div className="space-y-8">
            {isLoading ? (
              <LoadingState
                imagePreviewUrl={currentImagePreview}
                onCancel={() => setIsLoading(false)}
                message="Analyzing Bovine Specimen..."
              />
            ) : classificationError ? (
              <ErrorState
                title="Classification Could Not Complete"
                message={classificationError}
                onRetry={() => {
                  setClassificationError(null);
                  setCurrentResult(null);
                }}
                onSelectSample={() => {
                  setClassificationError(null);
                  handleImageSelected(SAMPLE_BREED_IMAGES[0].imageUrl, undefined, SAMPLE_BREED_IMAGES[0]);
                }}
              />
            ) : currentResult && currentImagePreview ? (
              <ClassificationResultCard
                result={currentResult}
                imagePreviewUrl={currentImagePreview}
                onReset={handleResetClassifier}
                onCompareWith={handleCompareWith}
                onExploreBreed={handleExploreBreed}
                onOpenReportModal={() => setIsReportModalOpen(true)}
              />
            ) : (
              <div className="space-y-10">
                <ImageUploadZone
                  onImageSelected={handleImageSelected}
                  isLoading={isLoading}
                />

                {/* Academic & Agricultural Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs flex items-start gap-4 hover:border-amber-400/60 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 font-bold">
                      <ShieldCheck className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm">
                        ICAR-NBAGR Bovine Registry
                      </h4>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        Strictly cross-referenced against 73 certified accessions for Indian Desi Zebu Cattle (<em>Bos indicus</em>) and Riverine Buffaloes (<em>Bubalus bubalis</em>).
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs flex items-start gap-4 hover:border-amber-400/60 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 font-bold">
                      <Dna className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm">
                        Biotechnology & CSN2 Genomics
                      </h4>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        Maps Proline-67 A2 beta-casein genetics, chromosomal karyotypes (2n=60 vs 2n=50), and HSP70 heat-shock resilience loci.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs flex items-start gap-4 hover:border-amber-400/60 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center flex-shrink-0 font-bold">
                      <GraduationCap className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm">
                        Academic Project Evaluation Sheet
                      </h4>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        Format and export printable lab evaluation reports with student register numbers, faculty rubrics, and field notes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {(activeTab === 'breeds' || (activeTab as string) === 'explorer') && (
          <BreedExplorer
            initialSearch={explorerQuery}
            onSelectBreed={(breed) => setModalBreed(breed)}
            onCompareBreed={handleCompareWith}
            onClassifyBreed={handleClassifyBreedFromExplorer}
          />
        )}

        {activeTab === 'history' && (
          <HistoryView
            history={history}
            onSelectScan={handleSelectHistoryScan}
            onClearHistory={handleClearHistory}
            onNavigateToClassify={() => {
              setActiveTab('classify');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'about' && <AboutView />}

        {activeTab === 'compare' && (
          <BreedComparison
            initialBreedA={compareBreedA}
            initialBreedB={compareBreedB}
          />
        )}

        {activeTab === 'guide' && (
          <div className="space-y-8">
            <BioscienceView />
            <div className="pt-6 border-t border-stone-200">
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-4">
                Field Anatomy &amp; Morphological Identification Guide
              </h3>
              <AnatomyGuide />
            </div>
          </div>
        )}
        {activeTab === 'settings' && (
          <SettingsView
            historyCount={history.length}
            onClearHistory={handleClearHistory}
            onNavigateToClassify={() => {
              setActiveTab('classify');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Deep-Dive Breed Modal */}
      <BreedModal
        breed={modalBreed}
        onClose={() => setModalBreed(null)}
        onCompareWith={(bName) => {
          setModalBreed(null);
          handleCompareWith(bName);
        }}
      />

      {/* Printable Academic Lab Report Modal */}
      <ProjectLabReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        result={currentResult}
        imagePreviewUrl={currentImagePreview || ''}
      />

      {/* Cloud Firestore Student Journal Drawer */}
      <StudentJournalDrawer
        isOpen={isJournalOpen}
        onClose={() => setIsJournalOpen(false)}
        onSelectScanBreed={(bName) => handleExploreBreed(bName)}
      />

      {/* Local Scan History Drawer */}
      <HistoryDrawer
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={history}
        onSelectScan={handleSelectHistoryScan}
        onClearHistory={handleClearHistory}
      />

      {/* Modern Academic & Agricultural Footer */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenJournal={() => setIsJournalOpen(true)}
        onOpenReportModal={() => setIsReportModalOpen(true)}
      />
    </div>
  );
}

export default function App() {
  return (
    <SettingsProvider>
      <AuthProvider>
        <MainAppContent />
      </AuthProvider>
    </SettingsProvider>
  );
}
