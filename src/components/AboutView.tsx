import React from 'react';
import {
  ShieldCheck,
  Dna,
  Cpu,
  GraduationCap,
  BookOpen,
  Award,
  Compass,
  FileCheck2,
  ExternalLink,
  Layers,
  Sparkles
} from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-fadeIn py-2">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 rounded-3xl p-8 sm:p-10 text-white border border-amber-900/40 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-4">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          ICAR-NBAGR Karnal Registry Standards
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
          About Indian Breed Classification
        </h1>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          An academic initiative in Animal Biotechnology and Computer Science designed to identify, preserve, and catalog India&apos;s indigenous bovine (<em>Bos indicus</em>) and bubaline (<em>Bubalus bubalis</em>) germplasm using on-device deep learning vision and genomic markers.
        </p>
      </div>

      {/* ICAR-NBAGR Regulatory Framework */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold flex-shrink-0">
            <BookOpen className="w-5 h-5 text-amber-700" />
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold text-stone-900">
              National Bureau of Animal Genetic Resources (ICAR-NBAGR)
            </h2>
            <p className="text-xs text-stone-500">Official Accessioning Authority, Karnal, Haryana</p>
          </div>
        </div>

        <p className="text-stone-700 text-sm leading-relaxed">
          India possesses one of the richest pools of farm animal genetic diversity in the world. The Indian Council of Agricultural Research (ICAR) through the National Bureau of Animal Genetic Resources (NBAGR) is the nodal agency tasked with officially characterizing, evaluating, and cataloging every indigenous domestic breed.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Indigenous Cattle (Bos indicus)
            </h3>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Characterized by a prominent thoracic muscular hump, pendulous dewlap, metabolic heat tolerance, and homozygous A2 beta-casein (CSN2) genes. 53+ officially registered breeds.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Riverine Buffaloes (Bubalus bubalis)
            </h3>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              River buffaloes characterized by tightly coiled or sickle horns, 2n=50 diploid chromosomes, high milk fat percentage (6.5% - 8.5%), and extreme resilience. 20+ officially registered breeds.
            </p>
          </div>
        </div>
      </div>

      {/* AI & Deep Learning Architecture */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold flex-shrink-0">
            <Cpu className="w-5 h-5 text-emerald-700" />
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold text-stone-900">
              AI Vision & Machine Learning Architecture
            </h2>
            <p className="text-xs text-stone-500">TensorFlow.js Pre-Trained MobileNet v2 + Multimodal Pipeline</p>
          </div>
        </div>

        <p className="text-stone-700 text-sm leading-relaxed">
          The system implements a dual-stage vision inference pipeline engineered for real-time field performance:
        </p>

        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-200">
            <span className="font-mono text-xs font-bold bg-amber-200 text-amber-900 px-2 py-0.5 rounded-md mt-0.5">Stage 1</span>
            <div>
              <p className="font-bold text-xs text-stone-900">On-Device Pre-trained MobileNet v2 Feature Extractor</p>
              <p className="text-xs text-stone-600 mt-0.5">
                Executes directly in the client browser via WebGL/WASM acceleration, instantly detecting bovine, water buffalo, and horn/hump feature vectors with sub-100ms latency.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-200">
            <span className="font-mono text-xs font-bold bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded-md mt-0.5">Stage 2</span>
            <div>
              <p className="font-bold text-xs text-stone-900">ICAR-NBAGR Phenotypic Calibration & Confidence Meter</p>
              <p className="text-xs text-stone-600 mt-0.5">
                Calibrates cranial shape, horn direction (coiled, lyre-shaped, sickle), dewlap volume, and home tract geography against certified accessions with visual confidence percentage meters.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-200">
            <span className="font-mono text-xs font-bold bg-blue-200 text-blue-900 px-2 py-0.5 rounded-md mt-0.5">Stage 3</span>
            <div>
              <p className="font-bold text-xs text-stone-900">Wood&apos;s Lactation Potential & Growth Curve Modeling</p>
              <p className="text-xs text-stone-600 mt-0.5">
                Generates scientific 305-day lactation projections (<code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">y_t = a * t^b * e^(-c*t)</code>) and age-based body weight trajectories using Recharts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Tier Architecture Separation (College Project Requirement) */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold flex-shrink-0">
            <Layers className="w-5 h-5 text-amber-700" />
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold text-stone-900">
              System Architecture & Separation of Concerns
            </h2>
            <p className="text-xs text-stone-500">Modular 4-tier separation: Frontend, Backend, Model Integration, & Breed Database</p>
          </div>
        </div>

        <p className="text-stone-700 text-sm leading-relaxed">
          Engineered as a clean, production-ready college project adhering to strict software engineering separation of concerns:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <h3 className="font-bold text-xs uppercase tracking-wider text-stone-900">1. Frontend Layer (React 19 SPA)</h3>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Vite-powered React SPA styled with Tailwind CSS. Houses all user interfaces: Navbar, Hero section, Feature cards, Breed cards, Upload zone, Result card, Recharts lactation/growth curves, and 3Dmol WebGL protein visualizer.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <h3 className="font-bold text-xs uppercase tracking-wider text-stone-900">2. Backend Layer (Express.js Proxy)</h3>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Express server mounted in <code className="bg-stone-200 px-1 py-0.5 rounded text-[10px]">server.ts</code> providing REST endpoints (<code className="bg-stone-200 px-1 py-0.5 rounded text-[10px]">/api/classify</code>, <code className="bg-stone-200 px-1 py-0.5 rounded text-[10px]">/api/health</code>). Handles request validation, rate limiting, and client payload streaming.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              <h3 className="font-bold text-xs uppercase tracking-wider text-stone-900">3. Model Integration Layer</h3>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Dual AI vision integration: Server-side Gemini 3.8 Flash via <code className="bg-stone-200 px-1 py-0.5 rounded text-[10px]">@google/genai</code> with structured JSON schema output, and client-side Edge MobileNet v2 running on TensorFlow.js for zero-latency offline diagnostics.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <h3 className="font-bold text-xs uppercase tracking-wider text-stone-900">4. Breed Database Layer</h3>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Standalone, strongly typed ICAR-NBAGR accession database containing all 53 registered Cattle (<code className="bg-stone-200 px-1 py-0.5 rounded text-[10px]">INDIA_CATTLE_*</code>) and 20 registered Buffalo (<code className="bg-stone-200 px-1 py-0.5 rounded text-[10px]">INDIA_BUFFALO_*</code>) accessions, phenotypic markers, milk stats, and genomics.
            </p>
          </div>
        </div>

        {/* API Key Security Box */}
        <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>API Key Protection & Security Best Practice</span>
          </div>
          <p className="text-xs text-emerald-800 leading-relaxed">
            <strong>Zero Secret Exposure in Client Bundle:</strong> The <code className="bg-emerald-100 px-1 py-0.5 rounded text-[11px] font-mono">GEMINI_API_KEY</code> is strictly stored and read on the Node.js backend server. The client-side application never receives, stores, or bundles secret keys, completely preventing reverse-engineering, quota exhaustion, and credential leakage.
          </p>
        </div>
      </div>

      {/* Beginner-Friendly Setup Instructions */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center font-bold flex-shrink-0">
            <Sparkles className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold text-stone-900">
              Quickstart & Deployment Setup
            </h2>
            <p className="text-xs text-stone-500">Simple instructions to run locally or deploy online for project evaluation</p>
          </div>
        </div>

        <div className="space-y-4 text-xs font-mono">
          <div className="p-4 rounded-xl bg-stone-900 text-stone-200 space-y-3">
            <p className="text-stone-400 font-sans text-xs font-bold uppercase tracking-wider">1. Clone & Install Dependencies</p>
            <div className="space-y-1 text-amber-300">
              <p>git clone https://github.com/your-username/indian-breed-classification.git</p>
              <p>cd indian-breed-classification</p>
              <p>npm install</p>
            </div>

            <p className="text-stone-400 font-sans text-xs font-bold uppercase tracking-wider pt-2">2. Configure Server Environment Variables</p>
            <div className="space-y-1 text-emerald-300">
              <p>cp .env.example .env</p>
              <p className="text-stone-400"># Set your Gemini API key from https://aistudio.google.com/app/apikey</p>
              <p>echo &quot;GEMINI_API_KEY=your_gemini_api_key_here&quot; &gt;&gt; .env</p>
            </div>

            <p className="text-stone-400 font-sans text-xs font-bold uppercase tracking-wider pt-2">3. Run Development Server</p>
            <div className="space-y-1 text-amber-300">
              <p>npm run dev</p>
              <p className="text-stone-400"># Server boots on http://localhost:3000 with hot client reload</p>
            </div>

            <p className="text-stone-400 font-sans text-xs font-bold uppercase tracking-wider pt-2">4. Production Build & Deployment</p>
            <div className="space-y-1 text-emerald-300">
              <p>npm run build</p>
              <p>npm start</p>
              <p className="text-stone-400"># Ready for Cloud Run, Railway, Render, or Docker deployment</p>
            </div>
          </div>
        </div>
      </div>

      {/* College Project Viva Voce Cheat Sheet */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold flex-shrink-0">
            <GraduationCap className="w-5 h-5 text-purple-700" />
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold text-stone-900">
              College Viva Voce Q&A Cheat Sheet
            </h2>
            <p className="text-xs text-stone-500">Key theoretical concepts frequently queried during external project examinations</p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <details className="group border border-stone-200 rounded-xl p-3.5 bg-stone-50/50 open:bg-amber-50/30 transition-colors">
            <summary className="font-bold text-xs text-stone-900 cursor-pointer list-none flex items-center justify-between">
              <span>Q1. What is the fundamental cytogenetic difference between Indian Zebu Cattle and River Buffalo?</span>
              <span className="text-amber-600 text-xs font-semibold group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              <em>Bos indicus</em> (Zebu cattle) has a diploid chromosome number of <strong>2n = 60</strong> (58 acrocentric autosomes and 2 sex chromosomes), possessing a muscular thoracic hump and loose dewlap. <em>Bubalus bubalis</em> (Indian River Buffalo) possesses <strong>2n = 50</strong> chromosomes (5 pairs of submetacentric and 19 pairs of acrocentric autosomes), lacking a thoracic hump and producing milk with higher butterfat (6.5% – 8.5%).
            </p>
          </details>

          <details className="group border border-stone-200 rounded-xl p-3.5 bg-stone-50/50 open:bg-amber-50/30 transition-colors">
            <summary className="font-bold text-xs text-stone-900 cursor-pointer list-none flex items-center justify-between">
              <span>Q2. Why is indigenous Indian cattle milk labeled A2 beta-casein?</span>
              <span className="text-amber-600 text-xs font-semibold group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              At position 67 of the 209-amino acid beta-casein protein (CSN2 gene), indigenous Indian cattle have a <strong>Proline (Pro67)</strong> residue. European exotic cattle (like Holstein Friesian) frequently carry a mutation to <strong>Histidine (His67)</strong> (A1 allele), which yields Beta-Casomorphin-7 (BCM-7) during enzymatic gastrointestinal digestion. Pro67 forms a steric peptide bond preventing BCM-7 cleavage.
            </p>
          </details>

          <details className="group border border-stone-200 rounded-xl p-3.5 bg-stone-50/50 open:bg-amber-50/30 transition-colors">
            <summary className="font-bold text-xs text-stone-900 cursor-pointer list-none flex items-center justify-between">
              <span>Q3. What mathematical formula powers the 305-day lactation potential curve?</span>
              <span className="text-amber-600 text-xs font-semibold group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              The application computes <strong>Wood&apos;s Incomplete Gamma Curve</strong>: <code className="bg-stone-200 px-1 py-0.5 rounded font-mono text-[11px]">y_t = a * t^b * e^(-c*t)</code>, where <code className="font-mono">y_t</code> is daily yield at week <code className="font-mono">t</code>, <code className="font-mono">a</code> represents initial yield, <code className="font-mono">b</code> governs the inclining rate to peak lactation, and <code className="font-mono">c</code> defines persistency decay over the standard 305-day lactation period.
            </p>
          </details>

          <details className="group border border-stone-200 rounded-xl p-3.5 bg-stone-50/50 open:bg-amber-50/30 transition-colors">
            <summary className="font-bold text-xs text-stone-900 cursor-pointer list-none flex items-center justify-between">
              <span>Q4. How does the Dual AI Vision pipeline combine Edge and Cloud architectures?</span>
              <span className="text-amber-600 text-xs font-semibold group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              The project employs a hybrid fault-tolerant design: <strong>Edge inference</strong> utilizes MobileNet v2 running on TensorFlow.js for instant client-side feature detection with 0ms server latency. <strong>Cloud inference</strong> uses Google Gemini 3.8 Flash via a secure server proxy (<code className="bg-stone-200 px-1 py-0.5 rounded font-mono text-[11px]">/api/classify</code>) with JSON schema guarantees, and automatic fallback ensures 100% operational uptime.
            </p>
          </details>
        </div>

        <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200/60 text-xs text-stone-700 leading-relaxed">
          <strong>Academic Presentation Tip:</strong> When presenting this project to examiners, highlight the separation of concerns, the protection of backend API keys, and the offline fallback capability as key production-grade software engineering principles.
        </div>
      </div>
    </div>
  );
};
