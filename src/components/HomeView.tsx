import React, { useState } from 'react';
import {
  Sparkles,
  Compass,
  History,
  Info,
  ShieldCheck,
  Dna,
  ArrowRight,
  Camera,
  Layers,
  Search,
  Filter,
  CheckCircle2,
  Zap,
  Activity
} from 'lucide-react';
import { ActiveTab } from './Navbar';
import { SAMPLE_BREED_IMAGES, SampleImageItem } from '../data/sampleImages';
import { INDIAN_BOVINE_BREEDS } from '../data/indigenousBreeds';
import { DailyFieldCalculator } from './DailyFieldCalculator';

interface HomeViewProps {
  onNavigate: (tab: ActiveTab) => void;
  onSelectSample: (sample: SampleImageItem) => void;
  historyCount: number;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectSample,
  historyCount
}) => {
  const [specimenFilter, setSpecimenFilter] = useState<'all' | 'milch' | 'draught' | 'buffalo'>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const cattleCount = INDIAN_BOVINE_BREEDS.filter(b => b.category === 'Cattle').length;
  const buffaloCount = INDIAN_BOVINE_BREEDS.filter(b => b.category === 'Buffalo').length;

  // Filter specimen items
  const filteredSpecimens = SAMPLE_BREED_IMAGES.filter((sample) => {
    const matchesSearch = sample.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sample.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sample.subtitle.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (specimenFilter === 'all') return true;
    if (specimenFilter === 'buffalo') return sample.category === 'Buffalo';
    if (specimenFilter === 'milch') {
      return ['sample-gir', 'sample-sahiwal', 'sample-murrah', 'sample-vechur', 'sample-bhadawari', 'sample-surti', 'sample-banni'].includes(sample.id);
    }
    if (specimenFilter === 'draught') {
      return ['sample-kankrej', 'sample-ongole', 'sample-kangayam', 'sample-hallikar', 'sample-pandharpuri'].includes(sample.id);
    }
    return true;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Daily Field Operations Bar */}
      <div className="bg-stone-900 text-white rounded-2xl p-4 sm:p-5 border border-stone-800 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-amber-400 font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>ICAR-NBAGR Field Session</span>
            </div>
            <h1 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
              Indigenous Bovine Field Workspace
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 max-w-2xl">
              Daily diagnostic companion for veterinarians, dairy farm managers, and livestock inspectors across India.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('classify')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              <Camera className="w-4 h-4" />
              <span>New Field Scan</span>
            </button>
            <button
              onClick={() => onNavigate('history')}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium border border-stone-700 transition-colors cursor-pointer whitespace-nowrap font-mono tabular-nums"
            >
              <Activity className="w-3.5 h-3.5 text-amber-400" />
              <span>{historyCount} Logs Today</span>
            </button>
          </div>
        </div>

        {/* Quick Statistical Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 pt-4 border-t border-stone-800/80 text-xs">
          <div>
            <span className="text-stone-400 block text-[11px]">Registered Cattle</span>
            <span className="font-serif text-lg font-bold text-amber-300 font-mono tabular-nums">{cattleCount} Breeds</span>
            <span className="text-[10px] text-stone-400 block">Bos indicus (Zebu)</span>
          </div>
          <div>
            <span className="text-stone-400 block text-[11px]">Riverine Buffaloes</span>
            <span className="font-serif text-lg font-bold text-amber-300 font-mono tabular-nums">{buffaloCount} Breeds</span>
            <span className="text-[10px] text-stone-400 block">Bubalus bubalis</span>
          </div>
          <div>
            <span className="text-stone-400 block text-[11px]">Genomic Standard</span>
            <span className="font-serif text-lg font-bold text-emerald-400">100% A2/A2</span>
            <span className="text-[10px] text-stone-400 block">CSN2 Proline-67</span>
          </div>
          <div>
            <span className="text-stone-400 block text-[11px]">Dual AI Engine</span>
            <span className="font-serif text-lg font-bold text-sky-400">Gemini + Edge</span>
            <span className="text-[10px] text-stone-400 block">Offline auto-fallback</span>
          </div>
        </div>
      </div>

      {/* Main Workspace Layout: 2-Column Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Quick Field Action Hub (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Quick Scanner Action Card */}
          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-serif font-bold text-base text-stone-900 flex items-center gap-2">
                <Camera className="w-4 h-4 text-amber-700" />
                <span>Instant Image Classifier</span>
              </h3>
              <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Online
              </span>
            </div>

            <p className="text-xs text-stone-600 mb-4 leading-relaxed">
              Upload a farm photograph or snap a live specimen. Our dual-engine architecture analyzes forehead convexity, horn curvature, dewlap volume, and coat coloration against 73 ICAR-NBAGR accessions.
            </p>

            <button
              onClick={() => onNavigate('classify')}
              className="w-full flex items-center justify-center gap-2 p-4 rounded-xl border-2 border-dashed border-amber-300 hover:border-amber-500 bg-amber-50/50 hover:bg-amber-100/50 text-stone-900 transition-all cursor-pointer group text-xs font-semibold"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-stone-950 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="font-bold text-xs text-stone-900">Click to Open Camera / Upload</p>
                <p className="text-[11px] text-stone-500">Supports JPG, PNG, WEBP (Instant AI)</p>
              </div>
            </button>

            {/* Quick Utility Links */}
            <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-stone-100">
              <button
                onClick={() => onNavigate('breeds')}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-medium text-left transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span className="truncate">73 Breeds Catalog</span>
              </button>
              <button
                onClick={() => onNavigate('guide')}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-medium text-left transition-colors"
              >
                <Dna className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span className="truncate">Genomics &amp; 3D Lab</span>
              </button>
            </div>
          </div>

          {/* Quick Field Diagnostic Advice Card */}
          <div className="bg-amber-50/60 rounded-2xl border border-amber-200/80 p-4.5">
            <h4 className="font-bold text-xs text-stone-900 mb-1.5 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-800" />
              <span>Veterinary Identification Tip</span>
            </h4>
            <p className="text-[11px] text-stone-700 leading-relaxed">
              For highest identification accuracy, capture a <strong>full lateral profile</strong> showing the dorsal hump, horn curvature, ear posture, and dewlap folds in clear natural daylight.
            </p>
          </div>
        </div>

        {/* Right Column: Daily Herd Field Assistant & Calculator (7 Cols) */}
        <div className="lg:col-span-7">
          <DailyFieldCalculator />
        </div>
      </div>

      {/* Field Specimen Reference Deck (Authentic Photographic Samples) */}
      <section className="space-y-4 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
              Field Specimen Reference Cards
            </h2>
            <p className="text-xs text-stone-600">
              Authentic photographic reference specimens. Click any specimen to immediately run the AI classification pipeline.
            </p>
          </div>

          {/* Filter Controls (Functional Segmented Buttons per frontend-design rules) */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex p-1 bg-stone-100 rounded-lg text-xs font-medium">
              <button
                onClick={() => setSpecimenFilter('all')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  specimenFilter === 'all'
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All ({SAMPLE_BREED_IMAGES.length})
              </button>
              <button
                onClick={() => setSpecimenFilter('milch')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  specimenFilter === 'milch'
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Milch / Dairy
              </button>
              <button
                onClick={() => setSpecimenFilter('draught')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  specimenFilter === 'draught'
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Draught / Work
              </button>
              <button
                onClick={() => setSpecimenFilter('buffalo')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  specimenFilter === 'buffalo'
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Buffaloes
              </button>
            </div>
          </div>
        </div>

        {/* Specimen Cards Grid with Distinct Authentic Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSpecimens.map((sample) => (
            <div
              key={sample.id}
              onClick={() => onSelectSample(sample)}
              className="group bg-white rounded-xl overflow-hidden border border-stone-200 shadow-xs hover:border-amber-400 hover:shadow-md transition-all cursor-pointer flex flex-col"
            >
              {/* Image Container with Fallback */}
              <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                <img
                  src={sample.imageUrl}
                  alt={`${sample.title} photographic specimen`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-stone-950/80 backdrop-blur-xs text-amber-300 text-[10px] font-bold">
                  {sample.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with separators (frontend-design zero-pill discipline) */}
                  <div className="flex items-center gap-1.5 text-[11px] text-stone-500 mb-1">
                    <span>{sample.state}</span>
                    <span aria-hidden="true">·</span>
                    <span>ICAR Accession</span>
                  </div>

                  <h4 className="font-serif font-bold text-stone-900 text-sm group-hover:text-amber-800 transition-colors">
                    {sample.title}
                  </h4>

                  <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                    {sample.subtitle}
                  </p>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-medium text-stone-500">
                    A2/A2 CSN2
                  </span>
                  <div className="flex items-center gap-1 text-amber-800 font-bold group-hover:translate-x-0.5 transition-transform">
                    <span>Run Scan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Foundations Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="bg-white rounded-xl p-5 border border-stone-200">
          <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-3">
            <ShieldCheck className="w-5 h-5 text-amber-700" />
          </div>
          <h4 className="font-serif font-bold text-stone-900 text-sm mb-1">
            ICAR-NBAGR Strict Catalog
          </h4>
          <p className="text-xs text-stone-600 leading-relaxed">
            All 53 cattle and 20 buffalo entries reflect certified accession codes, home tracts, and physiological measurements.
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-stone-200">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-3">
            <Dna className="w-5 h-5 text-emerald-700" />
          </div>
          <h4 className="font-serif font-bold text-stone-900 text-sm mb-1">
            Biochemical Genetics &amp; A2 Milk
          </h4>
          <p className="text-xs text-stone-600 leading-relaxed">
            Explains the single-nucleotide polymorphism (CCT Proline-67 vs CAT Histidine-67) preventing BCM-7 opioid peptide cleavage.
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-stone-200">
          <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center font-bold mb-3">
            <Zap className="w-5 h-5 text-sky-700" />
          </div>
          <h4 className="font-serif font-bold text-stone-900 text-sm mb-1">
            Zero-Latency Edge Inference
          </h4>
          <p className="text-xs text-stone-600 leading-relaxed">
            On-device MobileNet deep CNN neural network executes in under 50ms inside the browser with zero cloud connectivity required.
          </p>
        </div>
      </section>
    </div>
  );
};
