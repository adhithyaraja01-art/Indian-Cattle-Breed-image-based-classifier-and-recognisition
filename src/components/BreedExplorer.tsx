import React, { useState, useMemo } from 'react';
import { BreedCategory, BreedInfo } from '../types/breed';
import { INDIAN_BREEDS_CATALOG } from '../data/indigenousBreeds';
import { filterBreeds } from '../utils/classifierLogic';
import { Search, Filter, MapPin, Eye, ArrowLeftRight, ShieldCheck, Sparkles, Play } from 'lucide-react';
import { EmptyState } from './EmptyState';

interface BreedExplorerProps {
  onSelectBreed: (breed: BreedInfo) => void;
  onCompareBreed: (breedName: string) => void;
  onClassifyBreed?: (breed: BreedInfo) => void;
  initialSearch?: string;
}

const CATEGORIES: (BreedCategory | 'All')[] = [
  'All',
  'Cattle',
  'Buffalo'
];

export const BreedExplorer: React.FC<BreedExplorerProps> = ({
  onSelectBreed,
  onCompareBreed,
  onClassifyBreed,
  initialSearch = ''
}) => {
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<BreedCategory | 'All'>('All');
  const [selectedState, setSelectedState] = useState<string>('All');
  const [selectedUtility, setSelectedUtility] = useState<string>('All');

  // Extract all unique states from catalog
  const availableStates = useMemo(() => {
    const statesSet = new Set<string>();
    INDIAN_BREEDS_CATALOG.forEach((b) => {
      // Split if multiple states (e.g. Punjab & Rajasthan)
      const parts = b.stateOfOrigin.split(/[,&/]/);
      parts.forEach((p) => {
        const trimmed = p.replace(/\(.*?\)/g, '').trim();
        if (trimmed && trimmed.length > 2 && !trimmed.toLowerCase().includes('origin')) {
          statesSet.add(trimmed);
        }
      });
    });
    return ['All', ...Array.from(statesSet).sort()];
  }, []);

  const cattleCount = useMemo(
    () => INDIAN_BREEDS_CATALOG.filter((b) => b.category === 'Cattle').length,
    []
  );
  const buffaloCount = useMemo(
    () => INDIAN_BREEDS_CATALOG.filter((b) => b.category === 'Buffalo').length,
    []
  );

  const filteredBreeds = useMemo(() => {
    let result = filterBreeds(INDIAN_BREEDS_CATALOG, searchQuery, selectedCategory, selectedState);
    if (selectedUtility !== 'All') {
      result = result.filter((b) =>
        b.productivity.primaryUtility.toLowerCase().includes(selectedUtility.toLowerCase())
      );
    }
    return result;
  }, [searchQuery, selectedCategory, selectedState, selectedUtility]);

  return (
    <div className="space-y-6">
      {/* Header and Filter Controls */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2 border border-amber-300/40">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Complete ICAR-NBAGR National Roster: 53 Cattle &amp; 20 Buffalo Breeds
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Indian Cattle &amp; Buffalo Breed Directory (73 Registered)
            </h2>
            <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
              Every officially registered indigenous Indian Zebu cattle (<em>Bos indicus</em>, 53 breeds) and Indian river buffalo (<em>Bubalus bubalis</em>, 20 breeds) recognized by the National Bureau of Animal Genetic Resources, complete with certified accession numbers, chromosomal karyotypes, and <em>CSN2</em> A2 genomics.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold text-xs sm:text-sm">
              Showing {filteredBreeds.length} of {INDIAN_BREEDS_CATALOG.length} Breeds
            </span>
          </div>
        </div>

        {/* Search Input, State Filter & Utility Filter */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="relative md:col-span-2">
            <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, vernacular, district, or accession (e.g. Sahiwal, Kangayam, Murrah)..."
              className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-11 pr-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-stone-400 hover:text-stone-700 bg-stone-200 px-2 py-0.5 rounded-md"
              >
                Clear
              </button>
            )}
          </div>

          <div className="relative">
            <Filter className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-10 pr-4 py-3 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 appearance-none cursor-pointer"
            >
              <option value="All">All States of Origin ({availableStates.length - 1} States)</option>
              {availableStates.filter((s) => s !== 'All').map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <select
              value={selectedUtility}
              onChange={(e) => setSelectedUtility(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 appearance-none cursor-pointer"
            >
              <option value="All">All Utilities</option>
              <option value="Milch">Milch (Dairy)</option>
              <option value="Draught">Draught (Work)</option>
              <option value="Dual">Dual-Purpose</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const count =
              cat === 'All'
                ? INDIAN_BREEDS_CATALOG.length
                : cat === 'Cattle'
                ? cattleCount
                : buffaloCount;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200/80 hover:text-stone-900'
                }`}
              >
                <span>{cat === 'All' ? 'All Registered Breeds' : cat === 'Cattle' ? 'Cattle (Bos indicus)' : 'Buffalo (Bubalus bubalis)'}</span>
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                  selectedCategory === cat ? 'bg-amber-800 text-amber-100' : 'bg-stone-200 text-stone-700'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Breed Cards */}
      {filteredBreeds.length === 0 ? (
        <EmptyState
          icon={Search}
          title="No Matching Registered Breeds Found"
          description="Try adjusting your search terms, selecting 'All' categories, or resetting the state and utility filters."
          primaryActionLabel="Reset All Filters"
          onPrimaryAction={() => {
            setSearchQuery('');
            setSelectedCategory('All');
            setSelectedState('All');
            setSelectedUtility('All');
          }}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBreeds.map((breed) => (
            <div
              key={breed.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg hover:border-amber-400 transition-all group flex flex-col justify-between"
            >
              {/* Card Thumbnail */}
              <div
                className="relative aspect-[16/10] bg-stone-900 overflow-hidden cursor-pointer"
                onClick={() => onSelectBreed(breed)}
              >
                <img
                  src={breed.imageUrl}
                  alt={breed.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      breed.category === 'Cattle'
                        ? 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80'
                        : 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />

                <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    breed.category === 'Cattle' ? 'bg-amber-500 text-stone-950' : 'bg-blue-500 text-white'
                  } shadow-xs`}>
                    {breed.category} ({breed.scientificName})
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-stone-900/80 text-amber-300 backdrop-blur-xs border border-amber-400/20 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-amber-400" />
                    {breed.nbagrStatus}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-serif font-bold text-lg text-amber-100 group-hover:text-amber-300 transition-colors">
                      {breed.name}
                    </h3>
                    <span className="text-sm font-serif text-amber-300/80">
                      ({breed.vernacularName})
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-stone-300 mt-0.5">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span className="truncate">{breed.stateOfOrigin}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {breed.description}
                </p>

                {/* NBAGR Accession and Genomic markers */}
                <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 bg-stone-100 px-2.5 py-1.5 rounded-md">
                  <span className="truncate font-semibold text-stone-700">{breed.nbagrCode}</span>
                  <span className="font-semibold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    {breed.genomics.karyotype}
                  </span>
                </div>

                {/* Key specs badge */}
                <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-stone-100">
                  <div className="bg-stone-50 p-2 rounded-lg">
                    <span className="text-stone-400 font-medium block">Utility</span>
                    <span className="text-stone-900 font-semibold truncate block">
                      {breed.productivity.primaryUtility}
                    </span>
                  </div>
                  <div className="bg-stone-50 p-2 rounded-lg">
                    <span className="text-stone-400 font-medium block">Yield / Trait</span>
                    <span className="text-stone-900 font-semibold truncate block">
                      {breed.productivity.averageYield || breed.productivity.hardiness}
                    </span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 pt-2 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => onSelectBreed(breed)}
                    className="flex-1 py-2 px-3 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    <span>View Profile</span>
                  </button>

                  {onClassifyBreed && (
                    <button
                      type="button"
                      onClick={() => onClassifyBreed(breed)}
                      className="py-2 px-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl transition-colors flex items-center gap-1 shadow-xs"
                      title="Run classification on this breed"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Classify</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => onCompareBreed(breed.name)}
                    className="py-2 px-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs rounded-xl transition-colors flex items-center gap-1"
                    title="Compare breed"
                  >
                    <ArrowLeftRight className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Compare</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
