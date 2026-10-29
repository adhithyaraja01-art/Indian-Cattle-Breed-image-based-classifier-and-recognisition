import React, { useRef, useState } from 'react';
import { Upload, Camera, Sparkles, Image as ImageIcon, X, HelpCircle, CheckCircle2, ChevronDown, Award, Cpu, Zap, Cloud } from 'lucide-react';
import { SAMPLE_BREED_IMAGES, SampleImageItem } from '../data/sampleImages';
import { INDIAN_BOVINE_BREEDS } from '../data/indigenousBreeds';
import { CameraModal } from './CameraModal';

import { useSettings } from '../context/SettingsContext';

interface ImageUploadZoneProps {
  onImageSelected: (base64Image: string, hint?: string, sample?: SampleImageItem, engine?: 'mobilenet' | 'cloud' | 'auto') => void;
  isLoading: boolean;
}

export const ImageUploadZone: React.FC<ImageUploadZoneProps> = ({ onImageSelected, isLoading }) => {
  const { settings, t } = useSettings();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [userHint, setUserHint] = useState<string>('');
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [isCameraOpen, setIsCameraOpen] = useState<boolean>(false);
  const [activeSample, setActiveSample] = useState<SampleImageItem | null>(null);
  const [sampleCategoryFilter, setSampleCategoryFilter] = useState<'All' | 'Cattle' | 'Buffalo'>('All');
  const [aiEngine, setAiEngine] = useState<'mobilenet' | 'cloud' | 'auto'>(settings.defaultAiEngine || 'auto');
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    processFile(file);
  };

  const processFile = (file: File) => {
    setUploadError(null);

    // 1. Validate file format against configured allowed formats
    const isAllowedFormat = settings.allowedFormats.includes(file.type as any) ||
      (file.type === '' && file.name.match(/\.(jpe?g|png|webp)$/i));

    if (!isAllowedFormat) {
      const allowedNames = settings.allowedFormats.map(f => f.replace('image/', '').toUpperCase()).join(', ');
      setUploadError(`File format "${file.type || file.name.split('.').pop()}" is not permitted. Configured formats in Settings: ${allowedNames}.`);
      return;
    }

    // 2. Validate file size against configured limit
    const maxBytes = settings.maxFileSizeMb * 1024 * 1024;
    if (file.size > maxBytes) {
      const currentMb = (file.size / (1024 * 1024)).toFixed(1);
      setUploadError(`File size (${currentMb} MB) exceeds your configured maximum limit of ${settings.maxFileSizeMb} MB. You can increase this in ⚙️ Settings.`);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setSelectedImage(reader.result);
        setActiveSample(null);
        setUploadError(null);
      }
    };
    reader.onerror = () => {
      setUploadError('Failed to read image file. Please try another photograph.');
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleSelectSample = (sample: SampleImageItem) => {
    setSelectedImage(sample.imageUrl);
    setActiveSample(sample);
    setUserHint(`${sample.title} (${sample.state})`);
  };

  const handleBreedPickerSelect = (breedId: string) => {
    if (!breedId) return;
    const found = INDIAN_BOVINE_BREEDS.find((b) => b.id === breedId);
    if (!found) return;

    setUserHint(`${found.name} (${found.category} - ${found.stateOfOrigin})`);
    if (!selectedImage) {
      setSelectedImage(found.imageUrl);
      const sampleMatch = SAMPLE_BREED_IMAGES.find((s) => s.title.toLowerCase().includes(found.name.toLowerCase()));
      if (sampleMatch) {
        setActiveSample(sampleMatch);
      }
    }
  };

  const handleClear = () => {
    setSelectedImage(null);
    setActiveSample(null);
    setUserHint('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = () => {
    if (!selectedImage) return;
    onImageSelected(selectedImage, userHint, undefined, aiEngine);
  };

  const filteredSamples = SAMPLE_BREED_IMAGES.filter((s) => {
    if (sampleCategoryFilter === 'All') return true;
    return s.category === sampleCategoryFilter;
  });

  return (
    <div className="w-full bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden">
      {/* Top Banner / Heading */}
      <div className="bg-gradient-to-r from-amber-800 via-amber-900 to-stone-900 p-6 sm:p-8 text-white relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-3 border border-amber-300/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Complete ICAR-NBAGR National Roster: 53 Cattle &amp; 20 Buffalo Breeds
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-50">
            Classify Every Indian Cattle &amp; Buffalo Breed
          </h2>
          <p className="mt-2 text-stone-300 text-sm sm:text-base leading-relaxed">
            Upload or photograph any officially registered indigenous Indian Zebu cattle (<em>Bos indicus</em>, 53 breeds) or Indian river buffalo (<em>Bubalus bubalis</em>, 20 breeds). Evaluates horn curvature, cranial dome, dewlap, coat phenotype, and links official ICAR-NBAGR accession codes and <em>CSN2</em> A2 beta-casein genomics.
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Pre-Trained AI Model Recognition Engine Selector Bar */}
        <div className="bg-stone-50 border border-stone-200/90 rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-700 flex items-center justify-center font-bold">
              <Cpu className="w-4 h-4 text-amber-700" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-stone-900 uppercase tracking-wide">
                  AI Computer Vision Engine
                </span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border flex items-center gap-1 ${
                  aiEngine === 'auto'
                    ? 'bg-amber-100 text-amber-900 border-amber-300'
                    : aiEngine === 'cloud'
                    ? 'bg-purple-100 text-purple-900 border-purple-300'
                    : 'bg-emerald-100 text-emerald-900 border-emerald-300'
                }`}>
                  <Zap className="w-2.5 h-2.5 fill-current" />
                  {aiEngine === 'auto' ? 'Auto Hybrid (Recommended)' : aiEngine === 'cloud' ? 'Server Gemini 3.8 Flash' : 'Edge MobileNet v2'}
                </span>
              </div>
              <p className="text-[11px] text-stone-500 mt-0.5">
                {aiEngine === 'auto'
                  ? 'Server Gemini 3.8 Flash with automatic on-device Edge MobileNet fallback'
                  : aiEngine === 'cloud'
                  ? 'Cloud Multimodal Taxonomist (Protected backend /api/classify proxy)'
                  : 'TensorFlow.js MobileNet v2 running client-side with 0ms network latency'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 self-start md:self-auto bg-stone-200/70 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setAiEngine('auto')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                aiEngine === 'auto'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Auto Hybrid</span>
            </button>

            <button
              type="button"
              onClick={() => setAiEngine('cloud')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                aiEngine === 'cloud'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Cloud Gemini</span>
            </button>

            <button
              type="button"
              onClick={() => setAiEngine('mobilenet')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                aiEngine === 'mobilenet'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Edge MobileNet</span>
            </button>
          </div>
        </div>

        {/* Persistent Hidden File Input with Configured MIME Types */}
        <input
          ref={fileInputRef}
          type="file"
          accept={settings.allowedFormats.join(',')}
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Upload Error Banner */}
        {uploadError && (
          <div className="bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-800 rounded-xl p-4 text-xs text-red-900 dark:text-red-200 flex items-start justify-between gap-3 animate-fadeIn">
            <div className="flex items-start gap-2.5">
              <span className="text-red-600 dark:text-red-400 font-bold text-base leading-none">⚠️</span>
              <div>
                <span className="font-bold block">Upload Error:</span>
                <span className="leading-relaxed">{uploadError}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setUploadError(null)}
              className="text-red-600 hover:text-red-800 p-1 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Dropzone / Image Preview Area */}
        {!selectedImage ? (
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center transition-all cursor-pointer ${
              isDragOver
                ? 'border-amber-500 bg-amber-50/60 scale-[0.99]'
                : 'border-stone-300 hover:border-amber-500 hover:bg-amber-50/20 bg-stone-50/50'
            }`}
            onClick={() => fileInputRef.current?.click()}
          >

            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-4 shadow-inner">
              <Upload className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-bold text-stone-900 mb-1">
              Drag &amp; Drop your animal photograph here
            </h3>
            <p className="text-stone-500 text-sm mb-2">
              Supports {settings.allowedFormats.map(f => f.replace('image/', '').toUpperCase()).join(', ')} up to {settings.maxFileSizeMb} MB. Side profile or head shots yield the highest phenotypic accuracy.
            </p>
            <p className="text-[11px] text-amber-700 dark:text-amber-400 mb-5 font-mono">
              Configured via ⚙️ Settings (Format &amp; Size validation active)
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm rounded-xl shadow-md transition-colors flex items-center gap-2"
              >
                <ImageIcon className="w-4 h-4 text-amber-400" />
                Browse Files
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCameraOpen(true);
                }}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm rounded-xl shadow-md shadow-amber-500/20 transition-all flex items-center gap-2"
              >
                <Camera className="w-4 h-4" />
                Take Photo
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-stone-950 border border-stone-200 aspect-[16/10] sm:aspect-[21/9] max-h-96 flex items-center justify-center shadow-inner group">
              <img
                src={selectedImage}
                alt="Selected breed candidate"
                className="w-full h-full object-contain"
              />

              {/* Clear Button */}
              <button
                type="button"
                onClick={handleClear}
                className="absolute top-3 right-3 p-2 bg-stone-900/80 hover:bg-red-600 text-white rounded-full backdrop-blur-sm transition-colors shadow-lg"
                title="Remove photo"
              >
                <X className="w-5 h-5" />
              </button>

              {activeSample && (
                <div className="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-md text-amber-300 text-xs px-3 py-1.5 rounded-lg border border-amber-500/30 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  Verified Specimen: {activeSample.title} ({activeSample.category} • {activeSample.state})
                </div>
              )}
            </div>

            {/* Optional Hint & Direct Breed Selector Input */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-stone-800 text-sm font-semibold">
                  <HelpCircle className="w-4 h-4 text-amber-600" />
                  <span>Field Observation Notes / Breed Clue:</span>
                </div>
                <div className="text-xs text-stone-500 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>Select any of 73 ICAR-NBAGR breeds or type notes:</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={userHint}
                  onChange={(e) => setUserHint(e.target.value)}
                  placeholder="e.g. Sahiwal, Kangayam, Ongole, Murrah, Bhadawari, Vechur..."
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500"
                />

                <div className="relative">
                  <select
                    onChange={(e) => handleBreedPickerSelect(e.target.value)}
                    className="w-full appearance-none bg-white border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 pr-8"
                    defaultValue=""
                  >
                    <option value="" disabled>-- Or pick from all 73 NBAGR registered breeds --</option>
                    <optgroup label="Cattle (Bos indicus - 53 Registered Breeds)">
                      {INDIAN_BOVINE_BREEDS.filter(b => b.category === 'Cattle').map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.name} ({b.stateOfOrigin} - {b.productivity.primaryUtility})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Buffalo (Bubalus bubalis - 20 Registered Breeds)">
                      {INDIAN_BOVINE_BREEDS.filter(b => b.category === 'Buffalo').map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.name} ({b.stateOfOrigin} - {b.productivity.primaryUtility})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                  <ChevronDown className="w-4 h-4 text-stone-400 absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Configured AI Engine Selector */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-amber-700" />
                <div>
                  <span className="text-xs font-bold text-stone-900 block">AI Classification Pipeline:</span>
                  <span className="text-[11px] text-stone-500 block">Select active vision model architecture</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-stone-200 shadow-2xs w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setAiEngine('auto')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    aiEngine === 'auto'
                      ? 'bg-amber-600 text-white shadow-2xs font-semibold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Auto (Hybrid)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setAiEngine('mobilenet')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    aiEngine === 'mobilenet'
                      ? 'bg-amber-600 text-white shadow-2xs font-semibold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Edge MobileNet v2</span>
                </button>

                <button
                  type="button"
                  onClick={() => setAiEngine('cloud')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    aiEngine === 'cloud'
                      ? 'bg-amber-600 text-white shadow-2xs font-semibold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  <Cloud className="w-3.5 h-3.5" />
                  <span>Cloud API (Gemini/ICAR)</span>
                </button>
              </div>
            </div>

            {/* Submit Action */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={handleClear}
                className="w-full sm:w-auto px-5 py-2.5 text-stone-600 hover:text-stone-900 font-medium text-sm rounded-xl border border-stone-300 hover:bg-stone-100 transition-colors"
              >
                Choose Different Image
              </button>

              <button
                type="button"
                disabled={isLoading}
                onClick={handleSubmit}
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-base rounded-xl shadow-lg shadow-amber-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Analyzing Phenotypic Traits...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-amber-200" />
                    <span>Classify Breed Now</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Quick Test Samples */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-700">
                1-Click Instant AI Evaluation on Registered Breeds:
              </span>
              <span className="text-xs text-stone-500 ml-2">
                Click any specimen below to run instant vision analysis
              </span>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 self-start sm:self-auto">
              {(['All', 'Cattle', 'Buffalo'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSampleCategoryFilter(cat)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors ${
                    sampleCategoryFilter === cat
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {cat === 'All' ? 'All (14)' : cat === 'Cattle' ? 'Cattle (8)' : 'Buffalo (6)'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
            {filteredSamples.map((sample) => {
              const isSelected = activeSample?.id === sample.id;
              return (
                <button
                  key={sample.id}
                  type="button"
                  onClick={() => handleSelectSample(sample)}
                  className={`group text-left rounded-xl overflow-hidden border p-2 transition-all relative flex flex-col ${
                    isSelected
                      ? 'border-amber-600 bg-amber-50 ring-2 ring-amber-500/40 shadow-md'
                      : 'border-stone-200 bg-stone-50 hover:border-amber-400 hover:bg-white'
                  }`}
                >
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-stone-200 mb-1.5 relative">
                    <img
                      src={sample.imageUrl}
                      alt={sample.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className={`absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[9px] font-bold backdrop-blur-xs ${
                      sample.category === 'Cattle' ? 'bg-amber-900/80 text-amber-200' : 'bg-slate-900/80 text-blue-200'
                    }`}>
                      {sample.category}
                    </span>
                  </div>
                  <div className="font-semibold text-xs text-stone-900 truncate">
                    {sample.title}
                  </div>
                  <div className="text-[10px] text-stone-500 truncate">
                    {sample.state}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Live Camera Modal */}
      <CameraModal
        isOpen={isCameraOpen}
        onClose={() => setIsCameraOpen(false)}
        onCapture={(dataUrl) => {
          setSelectedImage(dataUrl);
          setActiveSample(null);
          setIsCameraOpen(false);
        }}
      />
    </div>
  );
};
