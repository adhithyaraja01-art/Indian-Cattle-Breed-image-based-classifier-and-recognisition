import React from 'react';
import { BreedInfo } from '../types/breed';
import { X, MapPin, ShieldCheck, HeartHandshake, Activity, Layers, ArrowLeftRight, Dna, ExternalLink } from 'lucide-react';

interface BreedModalProps {
  breed: BreedInfo | null;
  onClose: () => void;
  onCompareWith: (breedName: string) => void;
}

export const BreedModal: React.FC<BreedModalProps> = ({ breed, onClose, onCompareWith }) => {
  if (!breed) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 my-8">
        {/* Modal Image Hero */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-stone-900 overflow-hidden">
          <img
            src={breed.imageUrl}
            alt={breed.name}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/80 text-white hover:bg-stone-800 transition-colors backdrop-blur-xs"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on Hero */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide bg-amber-500 text-stone-950">
                {breed.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-800/80 text-amber-200 border border-amber-400/20 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                {breed.nbagrStatus}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-800/80 text-stone-200 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {breed.stateOfOrigin}
              </span>
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                {breed.nbagrCode}
              </span>
            </div>

            <div className="flex items-baseline gap-3">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-50">
                {breed.name}
              </h2>
              <span className="text-xl font-serif text-amber-300">
                ({breed.vernacularName})
              </span>
            </div>
            <p className="text-xs text-stone-300 font-mono mt-0.5 italic">
              {breed.scientificName}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Description */}
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            {breed.description}
          </p>

          {/* Biotechnology & Genomics Section */}
          <div className="bg-emerald-50/60 rounded-2xl border border-emerald-200 p-4 space-y-3">
            <h3 className="font-bold text-xs uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
              <Dna className="w-4 h-4 text-emerald-600" />
              Bioscience & Genomic Profile (College Project Specimen)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-800">
              <div className="bg-white p-2.5 rounded-xl border border-emerald-200/60">
                <span className="text-stone-500 block text-[10px] font-semibold uppercase">CSN2 Beta-Casein Allele</span>
                <span className="font-bold text-emerald-900">{breed.genomics.csn2Allele}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-emerald-200/60">
                <span className="text-stone-500 block text-[10px] font-semibold uppercase">Karyotype (Chromosomes)</span>
                <span className="font-bold text-stone-900 font-mono">{breed.genomics.karyotype}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-emerald-200/60">
                <span className="text-stone-500 block text-[10px] font-semibold uppercase">Milk Fat Regulator Gene</span>
                <span className="font-medium text-stone-800">{breed.genomics.fatRegulatorGene}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-emerald-200/60">
                <span className="text-stone-500 block text-[10px] font-semibold uppercase">Thermal Resilience</span>
                <span className="font-medium text-stone-800">{breed.genomics.thermalGene}</span>
              </div>
            </div>
            {breed.genomics.ncbiLocusLink && (
              <div className="pt-1 flex items-center justify-between text-[11px] text-emerald-800 font-mono">
                <span>UniProt: {breed.genomics.uniprotAccession || 'P02666'}</span>
                <a
                  href={breed.genomics.ncbiLocusLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-900 font-semibold underline underline-offset-2"
                >
                  <span>NCBI Reference Locus</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>

          {/* Physical Traits Grid */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-stone-900 flex items-center gap-2 border-b pb-2">
              <Layers className="w-4 h-4 text-amber-600" />
              Morphological Characteristics
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                <span className="font-semibold text-stone-500 block mb-0.5">Horns</span>
                <span className="text-stone-900 font-medium">{breed.physicalTraits.horns}</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                <span className="font-semibold text-stone-500 block mb-0.5">Ears</span>
                <span className="text-stone-900 font-medium">{breed.physicalTraits.ears}</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                <span className="font-semibold text-stone-500 block mb-0.5">Coat & Skin</span>
                <span className="text-stone-900 font-medium">{breed.physicalTraits.coatColor}</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                <span className="font-semibold text-stone-500 block mb-0.5">Face Profile</span>
                <span className="text-stone-900 font-medium">{breed.physicalTraits.faceProfile}</span>
              </div>
            </div>
          </div>

          {/* Productivity */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-stone-900 flex items-center gap-2 border-b pb-2">
              <Activity className="w-4 h-4 text-amber-600" />
              Agricultural Utility & Yield
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200">
                <span className="font-semibold text-amber-800 block mb-0.5">Utility</span>
                <span className="text-stone-900 font-bold">{breed.productivity.primaryUtility}</span>
              </div>
              {breed.productivity.averageYield && (
                <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200">
                  <span className="font-semibold text-amber-800 block mb-0.5">Yield</span>
                  <span className="text-stone-900 font-bold">{breed.productivity.averageYield}</span>
                </div>
              )}
              {breed.productivity.fatPercentage && (
                <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200">
                  <span className="font-semibold text-amber-800 block mb-0.5">Fat %</span>
                  <span className="text-stone-900 font-bold">{breed.productivity.fatPercentage}</span>
                </div>
              )}
              <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200">
                <span className="font-semibold text-amber-800 block mb-0.5">Hardiness</span>
                <span className="text-emerald-700 font-bold">{breed.productivity.hardiness}</span>
              </div>
            </div>

            <p className="text-xs text-stone-600 italic">
              Heat and climate adaptation: {breed.productivity.heatTolerance}
            </p>
          </div>

          {/* Heritage */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-stone-900 flex items-center gap-2 border-b pb-2">
              <HeartHandshake className="w-4 h-4 text-amber-600" />
              Cultural Lineage & Pastoral Custodians
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {breed.historicalSignificance}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-semibold text-stone-500">Communities:</span>
              {breed.pastoralCommunities.map((c, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-stone-100 text-stone-800 text-xs">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-stone-100 px-6 py-4 border-t border-stone-200 flex items-center justify-between">
          <button
            onClick={() => {
              onClose();
              onCompareWith(breed.name);
            }}
            className="flex items-center gap-1.5 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors"
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>Compare {breed.name}</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-white hover:bg-stone-200 text-stone-800 font-medium text-xs rounded-xl border border-stone-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
