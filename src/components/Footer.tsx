import React from 'react';
import { ActiveTab } from './Navbar';
import { useAuth } from '../firebase/authContext';
import { ShieldCheck, Dna, Cloud, Award, ExternalLink, Heart, GraduationCap } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: ActiveTab) => void;
  onOpenJournal?: () => void;
  onOpenReportModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenJournal,
  onOpenReportModal
}) => {
  const { currentUser } = useAuth();

  return (
    <footer className="bg-stone-900 border-t border-amber-950 text-stone-300 text-xs mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand & Project Mission */}
          <div className="space-y-4 md:col-span-1">
            <div
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-3 cursor-pointer select-none group inline-flex"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700 flex items-center justify-center shadow-md text-stone-950 font-bold text-xl ring-2 ring-amber-400/20 group-hover:scale-105 transition-transform flex-shrink-0">
                <span className="text-xl" role="img" aria-label="Bovine">🐂</span>
              </div>
              <div>
                <h4 className="font-serif tracking-tight text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  Indian Breed Classification
                </h4>
                <p className="text-[11px] text-amber-400/80">
                  Phenotypic & Genomic AI Suite
                </p>
              </div>
            </div>

            <p className="text-stone-400 leading-relaxed text-[11px]">
              Academic research initiative honoring India&apos;s indigenous livestock genetic heritage. Aligned with ICAR-NBAGR accession standards, A2 beta-casein genomics, and Wood&apos;s gamma lactation modeling.
            </p>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-stone-800 border border-stone-700/80 text-[10px] text-stone-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{currentUser ? `Signed In: ${currentUser.displayName || currentUser.email}` : 'Guest Session (Local Storage)'}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h5 className="font-serif font-bold text-stone-100 text-sm tracking-wide text-amber-400">
              Navigation
            </h5>
            <ul className="space-y-2 text-stone-400 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Home Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('classify')}
                  className="hover:text-amber-300 transition-colors"
                >
                  AI Phenotypic Classifier
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('breeds')}
                  className="hover:text-amber-300 transition-colors"
                >
                  73 Indigenous Breeds Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('guide')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Bioscience & Genomics Explorer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('compare')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Breed Comparative Analysis
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('history')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Field Scan History
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-300 transition-colors"
                >
                  About Methodology
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('settings')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span>⚙️ Settings &amp; Preferences</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Scientific Framework & Registry Standards */}
          <div className="space-y-3">
            <h5 className="font-serif font-bold text-stone-100 text-sm tracking-wide text-amber-400">
              Scientific Standards
            </h5>
            <ul className="space-y-2 text-stone-400 text-xs">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <span>ICAR-NBAGR Registered Accessions</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Dna className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>CSN2 A2 Allele (UniProt P02666)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Dna className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                <span>HSP70 Chaperone (UniProt P08107)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>Wood’s Incomplete Gamma Lactation</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                <span>BTA Karyotypes (2n=60 / 2n=50)</span>
              </li>
            </ul>
          </div>

          {/* Academic Evaluation Tools */}
          <div className="space-y-3">
            <h5 className="font-serif font-bold text-stone-100 text-sm tracking-wide text-amber-400">
              Academic Lab Tools
            </h5>
            <div className="space-y-2.5">
              {onOpenJournal && (
                <button
                  onClick={onOpenJournal}
                  className="w-full text-left px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700/80 border border-stone-700/60 text-stone-200 transition-all flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <Cloud className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Student Lab Journal</span>
                  </span>
                  <span className="text-[10px] text-amber-400 group-hover:translate-x-0.5 transition-transform">Firestore &rarr;</span>
                </button>
              )}

              {onOpenReportModal && (
                <button
                  onClick={onOpenReportModal}
                  className="w-full text-left px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700/80 border border-stone-700/60 text-stone-200 transition-all flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Project Evaluation Sheet</span>
                  </span>
                  <span className="text-[10px] text-amber-400 group-hover:translate-x-0.5 transition-transform">Print &rarr;</span>
                </button>
              )}

              <p className="text-[10px] text-stone-500 pt-1 leading-relaxed">
                Animal Biotechnology &amp; Computer Science Mini-Project. Designed for academic review &amp; indigenous livestock conservation.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <p>
            © {new Date().getFullYear()} Indian Breed Classification. ICAR-NBAGR Recognized Cattle &amp; Buffalo Breeds.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-stone-400">Strictly Indian Zebu (<em>Bos indicus</em>) &amp; Riverine Buffalo (<em>Bubalus bubalis</em>)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
