import React, { useState } from 'react';
import { ClassificationResult } from '../types/breed';
import { useAuth } from '../firebase/authContext';
import { X, Printer, GraduationCap, CheckCircle2, ShieldCheck, Dna, FileText } from 'lucide-react';

interface ProjectLabReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: ClassificationResult | null;
  imagePreviewUrl: string;
}

export const ProjectLabReportModal: React.FC<ProjectLabReportModalProps> = ({
  isOpen,
  onClose,
  result,
  imagePreviewUrl
}) => {
  const { currentUser, userProfile } = useAuth();
  const [studentRegNo, setStudentRegNo] = useState<string>('310625104010');
  const [labSection, setLabSection] = useState<string>('Lab Batch B - Section 4');
  const [facultyGuide, setFacultyGuide] = useState<string>('Dr. K. Ramanathan, Ph.D. (Animal Biotechnology)');

  if (!isOpen || !result) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-300 my-8 flex flex-col">
        {/* Modal Controls Toolbar (Hidden in Print) */}
        <div className="px-6 py-4 bg-stone-900 text-white flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-amber-400" />
            <h3 className="font-serif font-bold text-base">College Mini Project: Academic Lab Evaluation Report</h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-md transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF Report</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Report Sheet */}
        <div className="p-8 sm:p-12 space-y-6 text-stone-900 bg-white font-sans max-h-[85vh] overflow-y-auto print:max-h-none print:p-0">
          {/* Institution Header */}
          <div className="border-b-2 border-stone-900 pb-5 text-center space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-800">
              <ShieldCheck className="w-4 h-4" />
              ICAR-NBAGR Bovine & Bubaline Evaluation Standards
            </div>
            <h1 className="text-xl sm:text-2xl font-serif font-extrabold uppercase tracking-tight text-stone-950">
              Department of Animal Biotechnology & Computer Science
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 font-medium">
              {userProfile?.collegeName || 'Engineering & Technology College / University Campus'}
            </p>
            <p className="text-xs text-stone-500 font-mono mt-1">
              Course: Mini Project in AI Vision & Animal Genetic Diversity (AY 2025–2026)
            </p>
          </div>

          {/* Student & Project Metadata Form Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs">
            <div>
              <span className="font-bold text-stone-500 block">Student Investigator:</span>
              <span className="font-bold text-stone-900 text-sm">
                {currentUser?.displayName || 'Student Researcher'}
              </span>
            </div>
            <div>
              <span className="font-bold text-stone-500 block">Register / Roll No:</span>
              <input
                type="text"
                value={studentRegNo}
                onChange={(e) => setStudentRegNo(e.target.value)}
                className="font-mono font-bold text-stone-900 bg-transparent border-b border-stone-300 w-full focus:outline-none print:border-none"
              />
            </div>
            <div>
              <span className="font-bold text-stone-500 block">Batch / Section:</span>
              <input
                type="text"
                value={labSection}
                onChange={(e) => setLabSection(e.target.value)}
                className="font-medium text-stone-900 bg-transparent border-b border-stone-300 w-full focus:outline-none print:border-none"
              />
            </div>
            <div>
              <span className="font-bold text-stone-500 block">Date of Evaluation:</span>
              <span className="font-mono font-medium text-stone-800">
                {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
              </span>
            </div>
          </div>

          {/* Project Title Banner */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <h2 className="text-base font-bold text-amber-950">
              PROJECT TITLE: Automated Image-Based Classification and Bioscience Characterization of Registered Indian Cattle and River Buffalo Breeds
            </h2>
          </div>

          {/* Specimen and Prediction Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-stone-200 rounded-2xl overflow-hidden bg-stone-900 aspect-square flex items-center justify-center relative">
              <img
                src={imagePreviewUrl}
                alt="Photographed Specimen"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 text-amber-300 font-mono text-[10px]">
                Specimen ID: #BOV-{Date.now().toString().slice(-6)}
              </span>
            </div>

            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center justify-between border-b pb-2">
                <div>
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wide">
                    Identified Indian Breed:
                  </span>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-serif font-bold text-stone-900">
                      {result.predictedBreed}
                    </h3>
                    <span className="text-lg font-serif text-stone-600">
                      ({result.vernacularName})
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-stone-500 block">AI Match Confidence</span>
                  <span className="text-2xl font-black text-amber-700">{result.confidence}%</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="font-semibold text-stone-500 block">Taxonomic Category:</span>
                  <span className="font-bold text-stone-900">{result.category} ({result.scientificName})</span>
                </div>
                <div>
                  <span className="font-semibold text-stone-500 block">ICAR-NBAGR Code:</span>
                  <span className="font-mono font-bold text-amber-900">{result.nbagrCode}</span>
                </div>
                <div>
                  <span className="font-semibold text-stone-500 block">Native Ecological Tract:</span>
                  <span className="text-stone-800">{result.homeTract} ({result.stateOfOrigin})</span>
                </div>
                <div>
                  <span className="font-semibold text-stone-500 block">Primary Agricultural Purpose:</span>
                  <span className="text-stone-800 font-bold">{result.utility}</span>
                </div>
              </div>

              <p className="text-xs text-stone-700 leading-relaxed pt-2 border-t">
                <strong>Academic Summary:</strong> {result.summary}
              </p>
            </div>
          </div>

          {/* Morphological Analysis Table */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-stone-700">
              1. Morphological & Phenotypic Trait Verification:
            </h4>
            <div className="border border-stone-200 rounded-xl overflow-hidden text-xs">
              <table className="w-full text-left">
                <thead className="bg-stone-100 text-stone-700 border-b">
                  <tr>
                    <th className="p-2.5 font-bold w-1/4">Anatomical Marker</th>
                    <th className="p-2.5 font-bold">Observed Diagnostic Profile</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-800">
                  <tr>
                    <td className="p-2.5 font-semibold text-stone-600">Horn Morphology</td>
                    <td className="p-2.5">{result.physicalTraits.horns}</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold text-stone-600">Ear Conformation</td>
                    <td className="p-2.5">{result.physicalTraits.ears}</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold text-stone-600">Forehead / Face</td>
                    <td className="p-2.5">{result.physicalTraits.faceProfile}</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold text-stone-600">Thoracic Hump & Dewlap</td>
                    <td className="p-2.5">{result.physicalTraits.humpAndDewlap}</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold text-stone-600">Coat & Pigmentation</td>
                    <td className="p-2.5">{result.physicalTraits.coatColor}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bioscience & Genomics Evaluation */}
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 space-y-3 text-xs">
            <div className="flex items-center gap-2 font-bold text-emerald-950 text-sm">
              <Dna className="w-4 h-4 text-emerald-700" />
              <span>2. Bioscience & Molecular Genetics Evaluation:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white p-3 rounded-xl border border-emerald-200">
                <span className="font-bold text-emerald-800 block mb-0.5">CSN2 Beta-Casein Genotype</span>
                <span className="text-stone-900 font-extrabold">{result.genomics.csn2Allele}</span>
                <p className="text-[11px] text-stone-500 mt-1">
                  Proline at codon 67 (Pro67). Prevents BCM-7 opioid peptide cleavage during human digestion.
                </p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-emerald-200">
                <span className="font-bold text-emerald-800 block mb-0.5">Cytogenetic Karyotype</span>
                <span className="text-stone-900 font-extrabold">{result.genomics.karyotype}</span>
                <p className="text-[11px] text-stone-500 mt-1">
                  Chromosomal standard for {result.scientificName} mapped to bovine reference genomes.
                </p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-emerald-200">
                <span className="font-bold text-emerald-800 block mb-0.5">Thermal Resilience & Fat Synthesis</span>
                <span className="text-stone-900 font-semibold">{result.genomics.thermalGene}</span>
                <p className="text-[11px] text-stone-500 mt-1">
                  Enzyme: {result.genomics.fatRegulatorGene} (Lactation fat: {result.productivity.fatPercentage})
                </p>
              </div>
            </div>
          </div>

          {/* Academic Verification Signatures */}
          <div className="pt-8 border-t-2 border-dashed border-stone-300 grid grid-cols-2 gap-8 text-xs">
            <div className="text-left space-y-8">
              <span className="font-mono text-stone-400 italic">Signature of Student Investigator</span>
              <div>
                <p className="font-bold text-stone-900">{currentUser?.displayName || 'Student Researcher'}</p>
                <p className="text-stone-500 text-[11px]">Roll No: {studentRegNo}</p>
              </div>
            </div>

            <div className="text-right space-y-8">
              <span className="font-mono text-stone-400 italic">Signature of Faculty Evaluator</span>
              <div>
                <input
                  type="text"
                  value={facultyGuide}
                  onChange={(e) => setFacultyGuide(e.target.value)}
                  className="font-bold text-stone-900 text-right bg-transparent border-b border-stone-300 w-full focus:outline-none print:border-none"
                />
                <p className="text-stone-500 text-[11px]">Project Guide & Evaluator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
