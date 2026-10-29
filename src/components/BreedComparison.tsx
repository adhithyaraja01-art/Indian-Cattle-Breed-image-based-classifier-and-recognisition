import React, { useState } from 'react';
import { BreedInfo } from '../types/breed';
import { INDIAN_BREEDS_CATALOG } from '../data/indigenousBreeds';
import { compareBreeds } from '../utils/classifierLogic';
import { ArrowLeftRight, Check, X, ShieldCheck, MapPin, Award } from 'lucide-react';

interface BreedComparisonProps {
  initialBreedA?: string;
  initialBreedB?: string;
}

export const BreedComparison: React.FC<BreedComparisonProps> = ({
  initialBreedA = 'Gir',
  initialBreedB = 'Sahiwal'
}) => {
  const [breedAName, setBreedAName] = useState<string>(initialBreedA);
  const [breedBName, setBreedBName] = useState<string>(initialBreedB);

  const breedA = INDIAN_BREEDS_CATALOG.find((b) => b.name.toLowerCase() === breedAName.toLowerCase()) || INDIAN_BREEDS_CATALOG[0];
  const breedB = INDIAN_BREEDS_CATALOG.find((b) => b.name.toLowerCase() === breedBName.toLowerCase()) || INDIAN_BREEDS_CATALOG[1];

  const diff = compareBreeds(breedA, breedB);

  return (
    <div className="space-y-6">
      {/* Selector Controls Card */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2">
              <ArrowLeftRight className="w-3.5 h-3.5 text-amber-600" />
              Side-by-Side Breed Differential
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Compare Indigenous Indian Breeds
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Analyze physical anatomy, milk butterfat yield, climate endurance, and pastoral lineage across two registered Indian breeds.
            </p>
          </div>
        </div>

        {/* Dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-stone-50 p-6 rounded-2xl border border-stone-200">
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-2">
              Select First Breed (Breed A)
            </label>
            <select
              value={breedA.name}
              onChange={(e) => setBreedAName(e.target.value)}
              className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm font-semibold text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 shadow-xs cursor-pointer"
            >
              {INDIAN_BREEDS_CATALOG.map((b) => (
                <option key={b.id} value={b.name}>
                  {b.name} ({b.vernacularName}) - {b.category} [{b.stateOfOrigin}]
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-2">
              Select Second Breed (Breed B)
            </label>
            <select
              value={breedB.name}
              onChange={(e) => setBreedBName(e.target.value)}
              className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm font-semibold text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 shadow-xs cursor-pointer"
            >
              {INDIAN_BREEDS_CATALOG.map((b) => (
                <option key={b.id} value={b.name}>
                  {b.name} ({b.vernacularName}) - {b.category} [{b.stateOfOrigin}]
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Visual Side-by-Side Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Breed A Card */}
        <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs">
          <div className="relative aspect-[16/9] bg-stone-900">
            <img
              src={breedA.imageUrl}
              alt={breedA.name}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80';
              }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500 text-stone-950">
                {breedA.category}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-serif font-bold text-2xl text-amber-100">{breedA.name}</h3>
              <p className="text-sm font-serif text-amber-300">({breedA.vernacularName})</p>
            </div>
          </div>
          <div className="p-5 text-xs text-stone-600 space-y-2">
            <p className="line-clamp-3">{breedA.description}</p>
          </div>
        </div>

        {/* Breed B Card */}
        <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs">
          <div className="relative aspect-[16/9] bg-stone-900">
            <img
              src={breedB.imageUrl}
              alt={breedB.name}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80';
              }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500 text-stone-950">
                {breedB.category}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-serif font-bold text-2xl text-amber-100">{breedB.name}</h3>
              <p className="text-sm font-serif text-amber-300">({breedB.vernacularName})</p>
            </div>
          </div>
          <div className="p-5 text-xs text-stone-600 space-y-2">
            <p className="line-clamp-3">{breedB.description}</p>
          </div>
        </div>
      </div>

      {/* Comparison Matrix Table */}
      <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
        <div className="p-5 bg-stone-900 text-white flex items-center justify-between">
          <h3 className="font-serif font-bold text-lg text-amber-200">
            Anatomical & Productivity Comparison Table
          </h3>
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1 text-emerald-400">
              <Check className="w-3.5 h-3.5" /> Same Species: {diff.sameSpecies ? 'Yes' : 'No'}
            </span>
            <span className="flex items-center gap-1 text-amber-300">
              <MapPin className="w-3.5 h-3.5" /> Same Origin: {diff.sameState ? 'Yes' : 'No'}
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-stone-100 border-b border-stone-200 text-stone-700">
                <th className="p-4 font-bold uppercase tracking-wider text-[11px] w-1/4">Feature / Metric</th>
                <th className="p-4 font-bold text-amber-950 w-3/8 border-l border-stone-200 bg-amber-50/40">
                  {breedA.name} ({breedA.category})
                </th>
                <th className="p-4 font-bold text-amber-950 w-3/8 border-l border-stone-200 bg-amber-50/40">
                  {breedB.name} ({breedB.category})
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-800">
              <tr>
                <td className="p-4 font-semibold text-stone-600">ICAR-NBAGR Accession</td>
                <td className="p-4 border-l border-stone-200 font-mono text-xs font-bold text-amber-900">{breedA.nbagrCode}</td>
                <td className="p-4 border-l border-stone-200 font-mono text-xs font-bold text-amber-900">{breedB.nbagrCode}</td>
              </tr>

              <tr className="bg-emerald-50/50">
                <td className="p-4 font-semibold text-emerald-900">Karyotype (Chromosomes)</td>
                <td className="p-4 border-l border-stone-200 font-mono text-xs font-bold text-emerald-800">{breedA.genomics.karyotype}</td>
                <td className="p-4 border-l border-stone-200 font-mono text-xs font-bold text-emerald-800">{breedB.genomics.karyotype}</td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-stone-600">CSN2 Beta-Casein Allele</td>
                <td className="p-4 border-l border-stone-200 font-semibold text-amber-700">{breedA.genomics.csn2Allele}</td>
                <td className="p-4 border-l border-stone-200 font-semibold text-amber-700">{breedB.genomics.csn2Allele}</td>
              </tr>

              <tr className="bg-stone-50/50">
                <td className="p-4 font-semibold text-stone-600">Home Tract & State</td>
                <td className="p-4 border-l border-stone-200">{breedA.homeTract} ({breedA.stateOfOrigin})</td>
                <td className="p-4 border-l border-stone-200">{breedB.homeTract} ({breedB.stateOfOrigin})</td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-stone-600">Primary Agricultural Purpose</td>
                <td className="p-4 border-l border-stone-200 font-bold text-stone-900">{breedA.productivity.primaryUtility}</td>
                <td className="p-4 border-l border-stone-200 font-bold text-stone-900">{breedB.productivity.primaryUtility}</td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-stone-600">Lactation Yield / Output</td>
                <td className="p-4 border-l border-stone-200">{breedA.productivity.averageYield || 'N/A'}</td>
                <td className="p-4 border-l border-stone-200">{breedB.productivity.averageYield || 'N/A'}</td>
              </tr>

              <tr className="bg-stone-50/50">
                <td className="p-4 font-semibold text-stone-600">Butterfat %</td>
                <td className="p-4 border-l border-stone-200">{breedA.productivity.fatPercentage || 'N/A'}</td>
                <td className="p-4 border-l border-stone-200">{breedB.productivity.fatPercentage || 'N/A'}</td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-stone-600">Horn Structure & Shape</td>
                <td className="p-4 border-l border-stone-200">{breedA.physicalTraits.horns}</td>
                <td className="p-4 border-l border-stone-200">{breedB.physicalTraits.horns}</td>
              </tr>

              <tr className="bg-stone-50/50">
                <td className="p-4 font-semibold text-stone-600">Ear Conformation</td>
                <td className="p-4 border-l border-stone-200">{breedA.physicalTraits.ears}</td>
                <td className="p-4 border-l border-stone-200">{breedB.physicalTraits.ears}</td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-stone-600">Coat Color & Pattern</td>
                <td className="p-4 border-l border-stone-200">{breedA.physicalTraits.coatColor}</td>
                <td className="p-4 border-l border-stone-200">{breedB.physicalTraits.coatColor}</td>
              </tr>

              <tr className="bg-stone-50/50">
                <td className="p-4 font-semibold text-stone-600">Forehead & Facial Profile</td>
                <td className="p-4 border-l border-stone-200">{breedA.physicalTraits.faceProfile}</td>
                <td className="p-4 border-l border-stone-200">{breedB.physicalTraits.faceProfile}</td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-stone-600">Typical Adult Weight</td>
                <td className="p-4 border-l border-stone-200">
                  Male: {breedA.productivity.weightMaleKg} | Female: {breedA.productivity.weightFemaleKg}
                </td>
                <td className="p-4 border-l border-stone-200">
                  Male: {breedB.productivity.weightMaleKg} | Female: {breedB.productivity.weightFemaleKg}
                </td>
              </tr>

              <tr className="bg-stone-50/50">
                <td className="p-4 font-semibold text-stone-600">Thermal & Climate Adaptation</td>
                <td className="p-4 border-l border-stone-200">{breedA.productivity.heatTolerance}</td>
                <td className="p-4 border-l border-stone-200">{breedB.productivity.heatTolerance}</td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-stone-600">Pastoral Custodians</td>
                <td className="p-4 border-l border-stone-200">{breedA.pastoralCommunities.join(', ')}</td>
                <td className="p-4 border-l border-stone-200">{breedB.pastoralCommunities.join(', ')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
