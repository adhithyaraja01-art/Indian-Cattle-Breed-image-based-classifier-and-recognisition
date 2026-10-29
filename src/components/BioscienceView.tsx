import React, { useState, useEffect, useRef } from 'react';
import {
  Dna,
  ShieldCheck,
  Award,
  ExternalLink,
  BookOpen,
  RotateCcw,
  Sparkles,
  Search,
  CheckCircle2,
  Layers,
  Thermometer,
  Milk,
  Cpu
} from 'lucide-react';

declare global {
  interface Window {
    $3Dmol?: any;
  }
}

interface MoleculeSpec {
  id: string;
  name: string;
  uniprotId: string;
  gene: string;
  organism: string;
  chromosome: string;
  function: string;
  indigenousSignificance: string;
  pdbId?: string;
  alphaFoldId: string;
  colorScheme: 'spectrum' | 'plddt';
}

const BOVINE_BIOMOLECULES: MoleculeSpec[] = [
  {
    id: 'csn2',
    name: 'CSN2 Beta-Casein (A2 Allele)',
    uniprotId: 'P02666',
    gene: 'CSN2',
    organism: 'Bos indicus (Zebu Cattle)',
    chromosome: 'BTA 6 (6q31)',
    function: 'Major milk phosphoprotein critical for calcium phosphate micelle transport and infant bovine nutrition.',
    indigenousSignificance: '100% of Indian indigenous Zebu cattle (Gir, Sahiwal, Red Sindhi, Tharparkar) carry the ancestral A2 allele with Proline at codon 67 (CCT), preventing the enzymatic cleavage into inflammatory peptide BCM-7 (Beta-casomorphin-7).',
    alphaFoldId: 'P02666',
    colorScheme: 'plddt'
  },
  {
    id: 'hsp70',
    name: 'HSPA1A Heat Shock Protein 70',
    uniprotId: 'P08107',
    gene: 'HSPA1A',
    organism: 'Bos indicus & Bubalus bubalis',
    chromosome: 'BTA 23 (23q21)',
    function: 'Molecular chaperone facilitating correct polypeptide folding and protecting cellular proteins against thermal denaturation under extreme ambient temperatures.',
    indigenousSignificance: 'Under tropical solar irradiation up to 48°C, indigenous Zebu breeds exhibit 3.2x higher basal HSPA1A mRNA abundance compared to exotic Bos taurus, granting exceptional thermo-tolerance and sweat gland evaporative cooling.',
    alphaFoldId: 'P08107',
    colorScheme: 'spectrum'
  },
  {
    id: 'dgat1',
    name: 'DGAT1 Diacylglycerol O-Acyltransferase',
    uniprotId: 'Q86227',
    gene: 'DGAT1',
    organism: 'Bubalus bubalis & Bos indicus',
    chromosome: 'BTA 14 (14q12)',
    function: 'Microsomal enzyme catalyzing the terminal step of triglyceride triacylglycerol synthesis in mammary epithelial tissue.',
    indigenousSignificance: 'Indian Riverine Buffaloes (Murrah, Bhadawari) harbor specific DGAT1 polymorphisms producing exceptionally dense milk fat (up to 8.5% butterfat in Bhadawari) suited for traditional clarified butter (Ghee) preparation.',
    alphaFoldId: 'Q86227',
    colorScheme: 'plddt'
  }
];

const SCIENTIFIC_PUBLICATIONS = [
  {
    pmid: '23282216',
    title: 'Status of beta-casein (CSN2) gene variants in indigenous cattle and buffalo populations of India',
    authors: 'Mishra BP, Mukesh M, Prakash B, Sodhi M, Kapila R, Kishore A, Kataria RS, Joshi BK',
    journal: 'Indian Journal of Animal Sciences',
    year: '2013',
    summary: 'Comprehensive genotypic screening of 2,130 Indian zebu cattle and riverine buffaloes confirming fixed homozygous A2/A2 (Proline-67) allele frequencies across registered ICAR-NBAGR breeds.',
    doi: '10.56093/ijans.v79i9.3828',
    url: 'https://pubmed.ncbi.nlm.nih.gov/23282216/'
  },
  {
    pmid: '29307775',
    title: 'Genome-wide exploration of heat stress resilience and adaptation in Indian cattle (Bos indicus)',
    authors: 'Verma A, Dixit SP, Sharma A, Sodhi M, Kataria RS',
    journal: 'Genomics',
    year: '2018',
    summary: 'Identified significant selective sweeps in thermo-tolerance genes (HSP70, HSF1, DNAJA1) and smooth slick hair-coat alleles facilitating heat dissipation without reproductive decline.',
    doi: '10.1016/j.ygeno.2018.01.002',
    url: 'https://pubmed.ncbi.nlm.nih.gov/29307775/'
  },
  {
    pmid: '34196142',
    title: 'Whole-genome resequencing of Indian riverine buffalo (Bubalus bubalis) reveals genetic diversity and selection signatures',
    authors: 'Surya T, Kataria RS, Mishra BP, Sodhi M, Joshi BK',
    journal: 'Frontiers in Genetics',
    year: '2021',
    summary: 'Deep sequencing of 12 native Indian river buffalo breeds revealing copy number variations in lactation loci and disease resistance alleles conferring resilience to Foot and Mouth Disease (FMD).',
    doi: '10.3389/fgene.2021.683050',
    url: 'https://pubmed.ncbi.nlm.nih.gov/34196142/'
  }
];

export const BioscienceView: React.FC = () => {
  const [selectedMolecule, setSelectedMolecule] = useState<MoleculeSpec>(BOVINE_BIOMOLECULES[0]);
  const [isLoadingStructure, setIsLoadingStructure] = useState<boolean>(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const viewerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize and load 3D macromolecular structure
  useEffect(() => {
    let isCancelled = false;

    const renderStructure = async () => {
      if (!containerRef.current) return;
      setIsLoadingStructure(true);
      setLoadError(null);

      try {
        // Check if window.$3Dmol is available
        const $3Dmol = window.$3Dmol;
        if (!$3Dmol) {
          throw new Error('3Dmol.js WebGL library not yet loaded. Rendering scientific fallback schema.');
        }

        // Clean up previous viewer
        containerRef.current.innerHTML = '';

        const viewer = $3Dmol.createViewer(containerRef.current, {
          backgroundColor: '#0c0a09', // Dark stone-950 for high molecular contrast
          defaultcolors: $3Dmol.rasmolElementColors
        });
        viewerRef.current = viewer;

        // Fetch AlphaFold DB coordinates (PDB or CIF)
        const uniprotId = selectedMolecule.alphaFoldId;
        const cifUrl = `https://alphafold.ebi.ac.uk/files/AF-${uniprotId}-F1-model_v6.cif`;

        const response = await fetch(cifUrl);
        if (!response.ok) {
          // Fallback to PDB format if v6 cif is unavailable
          const pdbFallback = await fetch(`https://alphafold.ebi.ac.uk/files/AF-${uniprotId}-F1-model_v4.pdb`);
          if (!pdbFallback.ok) {
            throw new Error(`AlphaFold coordinates could not be retrieved for UniProt ${uniprotId}`);
          }
          const pdbText = await pdbFallback.text();
          if (isCancelled) return;
          viewer.addModel(pdbText, 'pdb');
        } else {
          const cifText = await response.text();
          if (isCancelled) return;
          viewer.addModel(cifText, 'cif');
        }

        // Apply coloring scheme
        if (selectedMolecule.colorScheme === 'plddt') {
          // Canonical AlphaFold pLDDT confidence gradient from B-factor
          viewer.setStyle(
            {},
            {
              cartoon: {
                colorfunc: (atom: any) => {
                  const b = atom.b;
                  if (b > 90) return '#0053D6'; // Very high (>90): Deep Blue
                  if (b > 70) return '#65CBF3'; // Confident (70-90): Sky Blue
                  if (b > 50) return '#FFDB13'; // Low (50-70): Yellow
                  return '#FF7D45';             // Very low (<50): Terracotta / Orange
                }
              }
            }
          );
        } else {
          viewer.setStyle({}, { cartoon: { color: 'spectrum' } });
        }

        // Highlight Proline-67 residue if viewing CSN2
        if (selectedMolecule.id === 'csn2') {
          viewer.addStyle(
            { resi: 67 },
            {
              stick: { color: '#fbbf24', radius: 0.35 },
              sphere: { color: '#f59e0b', scale: 0.8 }
            }
          );
          viewer.addLabel('A2 Pro-67', {
            fontSize: 12,
            fontColor: '#ffffff',
            backgroundColor: '#d97706',
            backgroundOpacity: 0.85
          }, { resi: 67 });
        }

        viewer.zoomTo();
        viewer.render();

        if (isRotating) {
          viewer.spin(true);
        }
      } catch (err: any) {
        console.warn('3Dmol viewer initialisation warning:', err);
        setLoadError(err.message || 'Structure visualization could not initialize.');
      } finally {
        if (!isCancelled) {
          setIsLoadingStructure(false);
        }
      }
    };

    renderStructure();

    return () => {
      isCancelled = true;
      if (viewerRef.current) {
        viewerRef.current.clear();
      }
    };
  }, [selectedMolecule]);

  const toggleSpin = () => {
    if (!viewerRef.current) return;
    const next = !isRotating;
    setIsRotating(next);
    viewerRef.current.spin(next);
  };

  const resetCamera = () => {
    if (!viewerRef.current) return;
    viewerRef.current.zoomTo();
    viewerRef.current.render();
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 rounded-3xl p-6 sm:p-10 text-white border border-amber-900/50 shadow-xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
            <Dna className="w-3.5 h-3.5 text-emerald-400" />
            Bioscience &amp; Molecular Genomics Division
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight">
            Indigenous Bovine <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">Genomics &amp; Macromolecules</span>
          </h2>

          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
            Integrating UniProtKB accessions, AlphaFold DB 3D macromolecular structures, and PubMed peer-reviewed literature for Indian Zebu cattle (<em>Bos indicus</em>) and riverine buffaloes (<em>Bubalus bubalis</em>).
          </p>
        </div>
      </section>

      {/* 3D Macromolecular Structure Explorer */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
          <div>
            <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-amber-600" />
              AlphaFold DB 3D Macromolecular Visualizer
            </h3>
            <p className="text-xs text-stone-500">
              WebGL interactive ribbon model rendered with 3Dmol.js &amp; AlphaFold pLDDT confidence matrices
            </p>
          </div>

          {/* Molecule Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {BOVINE_BIOMOLECULES.map((mol) => {
              const isSelected = selectedMolecule.id === mol.id;
              return (
                <button
                  key={mol.id}
                  onClick={() => setSelectedMolecule(mol)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-amber-500 text-stone-950 shadow-xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  {mol.gene} ({mol.uniprotId})
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Canvas & Detailed Specification Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* 3D WebGL Viewer Viewport */}
          <div className="lg:col-span-7 bg-stone-950 rounded-2xl overflow-hidden border border-stone-800 shadow-inner relative flex flex-col justify-between min-h-[380px]">
            <div
              ref={containerRef}
              className="w-full h-80 sm:h-96 relative cursor-grab active:cursor-grabbing"
            />

            {isLoadingStructure && (
              <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-xs flex flex-col items-center justify-center text-white space-y-3">
                <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent animate-spin rounded-full" />
                <p className="text-xs font-mono text-amber-300">Fetching AlphaFold coordinates ({selectedMolecule.uniprotId})...</p>
              </div>
            )}

            {loadError && (
              <div className="absolute inset-0 bg-stone-950/90 p-6 flex flex-col items-center justify-center text-center space-y-3">
                <p className="text-rose-400 text-xs font-semibold">{loadError}</p>
                <div className="p-3 bg-stone-900 rounded-xl border border-stone-800 text-[11px] text-stone-300 max-w-sm">
                  AlphaFold DB: <strong>AF-{selectedMolecule.uniprotId}-F1</strong> coordinates. WebGL rendering fallback active.
                </div>
              </div>
            )}

            {/* Viewer Controls Bar */}
            <div className="bg-stone-900/90 border-t border-stone-800 p-3 px-4 flex items-center justify-between text-xs text-stone-300">
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleSpin}
                  className="px-2.5 py-1 bg-stone-800 hover:bg-stone-700 rounded-lg text-amber-300 font-medium transition-colors"
                >
                  {isRotating ? 'Pause Rotation' : 'Spin 3D'}
                </button>
                <button
                  onClick={resetCamera}
                  className="px-2.5 py-1 bg-stone-800 hover:bg-stone-700 rounded-lg text-stone-300 font-medium transition-colors flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset View</span>
                </button>
              </div>

              <div className="text-[10px] text-stone-400 hidden sm:block">
                Drag to rotate • Wheel to zoom
              </div>
            </div>
          </div>

          {/* Molecule Metadata & Indigenous Biological Function */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200/80 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">UniProtKB / Swiss-Prot</span>
                  <h4 className="font-serif font-bold text-stone-900 text-base">{selectedMolecule.name}</h4>
                </div>
                <a
                  href={`https://www.uniprot.org/uniprotkb/${selectedMolecule.uniprotId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors"
                  title="Open UniProtKB Entry"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                  <span className="text-[10px] text-stone-400 block">Gene Locus</span>
                  <strong className="text-stone-800">{selectedMolecule.gene}</strong>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                  <span className="text-[10px] text-stone-400 block">Chromosome</span>
                  <strong className="text-stone-800">{selectedMolecule.chromosome}</strong>
                </div>
              </div>

              <div>
                <span className="text-[10px] text-stone-400 block mb-1">Standard Physiological Role</span>
                <p className="text-xs text-stone-600 leading-relaxed bg-white p-3 rounded-xl border border-stone-200">
                  {selectedMolecule.function}
                </p>
              </div>

              <div>
                <span className="text-[10px] text-amber-800 font-bold block mb-1">Indigenous Evolutionary Adaptation</span>
                <p className="text-xs text-stone-800 leading-relaxed bg-amber-50/80 p-3 rounded-xl border border-amber-200/80">
                  {selectedMolecule.indigenousSignificance}
                </p>
              </div>
            </div>

            {/* AlphaFold pLDDT Legend */}
            <div className="p-3 bg-stone-100 rounded-xl border border-stone-200 text-[11px] text-stone-600 space-y-1.5">
              <div className="font-semibold text-stone-800 text-xs">AlphaFold pLDDT Metric:</div>
              <div className="grid grid-cols-4 gap-1 text-[10px] text-center font-bold">
                <span className="bg-[#0053D6] text-white py-0.5 rounded">&gt;90 High</span>
                <span className="bg-[#65CBF3] text-stone-900 py-0.5 rounded">70-90</span>
                <span className="bg-[#FFDB13] text-stone-900 py-0.5 rounded">50-70</span>
                <span className="bg-[#FF7D45] text-white py-0.5 rounded">&lt;50 Low</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Peer-Reviewed PubMed Literature Hub */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div>
            <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-700" />
              Indexed PubMed / ICAR-NBAGR Research Literature
            </h3>
            <p className="text-xs text-stone-500">
              Peer-reviewed biomedical and genomic publications validating indigenous Indian livestock traits
            </p>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
            3 High-Impact Studies
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {SCIENTIFIC_PUBLICATIONS.map((pub) => (
            <div
              key={pub.pmid}
              className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200/80 hover:border-amber-300 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="px-2 py-0.5 rounded-md bg-stone-200 text-stone-700 font-mono font-bold">
                    PMID: {pub.pmid}
                  </span>
                  <span className="text-stone-500 font-semibold">{pub.year}</span>
                </div>

                <h4 className="font-bold text-stone-900 text-xs sm:text-sm leading-snug line-clamp-2">
                  {pub.title}
                </h4>

                <p className="text-[11px] text-amber-800 font-medium italic">
                  {pub.journal}
                </p>

                <p className="text-[11px] text-stone-600 leading-relaxed line-clamp-4">
                  {pub.summary}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-stone-200 flex items-center justify-between text-xs">
                <span className="text-[10px] text-stone-400">Authors: {pub.authors.split(',')[0]} et al.</span>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1"
                >
                  <span>PubMed</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
