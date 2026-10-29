import React from 'react';
import { BookOpen, Check, X, ShieldAlert, Sparkles, Layers, Eye, Dna, Info, ExternalLink } from 'lucide-react';

export const AnatomyGuide: React.FC = () => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
          <BookOpen className="w-3.5 h-3.5 text-amber-600" />
          Academic Zoological & Biotechnology Key
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
          Indian Bovine & Bubaline Morphological Key
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
          Diagnostic anatomical criteria, horn morphometry, and genomic differentiation for registered Indian Zebu Cattle (<em>Bos indicus</em>) and Indian River Buffalo (<em>Bubalus bubalis</em>) for college laboratory and field evaluation.
        </p>
      </div>

      {/* SECTION 1: Bos indicus (Desi Zebu) vs Bos taurus (Exotic European Cattle) */}
      <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
        <div className="p-6 bg-gradient-to-r from-amber-800 to-stone-900 text-white">
          <h3 className="font-serif font-bold text-xl text-amber-100">
            1. Desi Zebu Cattle (<em>Bos indicus</em>) vs Exotic European Cattle (<em>Bos taurus</em>)
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 mt-1">
            Phenotypic and physiological adaptations conferring tropical climate and tick resistance
          </p>
        </div>

        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Zebu Traits */}
            <div className="bg-emerald-50/70 border border-emerald-300 rounded-2xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
                <Check className="w-5 h-5 text-emerald-600" />
                <span>Indigenous Indian Zebu (<em>Bos indicus</em>)</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-950">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                  <span><strong>Thoracic Dorsal Hump:</strong> Prominent muscular-fatty hump placed forward over the withers/thoracic vertebrae for energy storage and thermoregulation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                  <span><strong>Voluminous Dewlap & Navel Flap:</strong> Thin, pendulous folded cervical skin acting as a large vascular cooling radiator to disperse body heat.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                  <span><strong>Protective Cranial Conformation:</strong> Prominently convex forehead shield (Gir) or flat/crested skull plates protecting the optic orbits from tropical insolation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                  <span><strong>Sweat Gland Density & Structure:</strong> Bag-shaped sweat glands with 5-6x higher capillary surface density per cm² than temperate breeds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                  <span><strong>Natural A2 Beta-Casein:</strong> Homozygous Proline-67 at the <em>CSN2</em> locus, producing hypoallergenic milk without inflammatory beta-casomorphin-7 (BCM-7).</span>
                </li>
              </ul>
            </div>

            {/* Exotic European Traits */}
            <div className="bg-red-50/70 border border-red-300 rounded-2xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-red-900 font-bold text-base">
                <X className="w-5 h-5 text-red-600" />
                <span>Exotic European Breeds (<em>Bos taurus</em> - HF / Jersey)</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-red-950">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                  <span><strong>Zero Dorsal Hump:</strong> Flat, straight horizontal topline from shoulder to pin bones without muscular thoracic crest.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                  <span><strong>Tight Cervical Dewlap:</strong> Compact neck skin with minimal surface area, predisposing them to extreme summer heat stress and thermal collapse in India.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                  <span><strong>Flat or Concave Cranium:</strong> Straight facial profile, small horizontal ears without curl, absence of pendulous ear fold.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                  <span><strong>High Vector Vulnerability:</strong> Prone to tropical haemoparasitic infections (Theileriosis, Babesiosis, Anaplasmosis) due to lack of tick resistance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                  <span><strong>A1 Allele Predominance:</strong> Histidine-67 substitution releasing BCM-7 opioid peptide during human gastrointestinal digestion.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Cytogenetics & Karyotype Comparison */}
      <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
        <div className="p-6 bg-emerald-900 text-white flex items-center justify-between">
          <div>
            <h3 className="font-serif font-bold text-xl text-emerald-100 flex items-center gap-2">
              <Dna className="w-5 h-5 text-emerald-400" />
              2. Cytogenetic & Karyotypic Classification
            </h3>
            <p className="text-xs text-emerald-200 mt-0.5">
              Chromosomal architecture distinguishing Cattle (<em>Bos indicus</em>) from River Buffalo (<em>Bubalus bubalis</em>)
            </p>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-mono font-bold">
            Cytology Benchmark
          </span>
        </div>

        <div className="p-6 sm:p-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-stone-100 text-stone-800">
                  <th className="p-3.5 font-bold uppercase tracking-wider text-[11px] w-1/3">Cytogenetic Feature</th>
                  <th className="p-3.5 font-bold text-amber-900 border-l border-stone-200 bg-amber-50/40">
                    Indian Zebu Cattle (<em>Bos indicus</em>)
                  </th>
                  <th className="p-3.5 font-bold text-emerald-900 border-l border-stone-200 bg-emerald-50/40">
                    Indian River Buffalo (<em>Bubalus bubalis</em>)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-800">
                <tr>
                  <td className="p-3.5 font-semibold text-stone-600">Diploid Chromosome Number (2n)</td>
                  <td className="p-3.5 border-l border-stone-200 font-mono font-bold text-amber-900">2n = 60</td>
                  <td className="p-3.5 border-l border-stone-200 font-mono font-bold text-emerald-900">2n = 50 (Riverine type)</td>
                </tr>
                <tr className="bg-stone-50/50">
                  <td className="p-3.5 font-semibold text-stone-600">Autosomal Morphology</td>
                  <td className="p-3.5 border-l border-stone-200">58 Acrocentric autosomes</td>
                  <td className="p-3.5 border-l border-stone-200">5 pairs Submetacentric (1-5) + 19 pairs Acrocentric (6-24)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-stone-600">Sex Chromosomes (X / Y)</td>
                  <td className="p-3.5 border-l border-stone-200">X: Large submetacentric; Y: Small acrocentric (diagnostic for Zebu vs metacentric in Taurine)</td>
                  <td className="p-3.5 border-l border-stone-200">X: Largest acrocentric; Y: Small acrocentric</td>
                </tr>
                <tr className="bg-stone-50/50">
                  <td className="p-3.5 font-semibold text-stone-600">Fundamental Number (NF)</td>
                  <td className="p-3.5 border-l border-stone-200 font-mono">NF = 60 (excluding sex chromosomes)</td>
                  <td className="p-3.5 border-l border-stone-200 font-mono">NF = 60 (Robertsonian centric fusion of 5 ancestral pairs)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-stone-600">Wallowing vs Sweating Physiology</td>
                  <td className="p-3.5 border-l border-stone-200">Abundant cutaneous sweat glands; does not wallow</td>
                  <td className="p-3.5 border-l border-stone-200">Sparse sweat glands; mandatory water or mud wallowing for heat dissipation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SECTION 3: Indian Buffalo Horn Typology */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="border-b pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold uppercase tracking-wider mb-2">
            🐃 Bubaline Morphometrics
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
            3. Indian River Buffalo Horn Typology
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            Horn curvature is the primary visual taxonomic key for identifying Indian buffalo breeds in field inspections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900 text-base">Murrah (Khundi)</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-amber-100 text-amber-900 font-bold">Haryana</span>
            </div>
            <p className="text-stone-600 leading-relaxed text-xs">
              <strong>Tightly Coiled Spiral:</strong> Short, black horns turning backwards, upwards and curling tightly inwards in a tight ring (giving the name <em>Khundi</em>).
            </p>
          </div>

          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900 text-base">Jaffarabadi</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-amber-100 text-amber-900 font-bold">Gujarat</span>
            </div>
            <p className="text-stone-600 leading-relaxed text-xs">
              <strong>Drooping Curtain:</strong> Enormously heavy, broad and flat horns drooping down vertically on each side of the cheeks like drapery with curled upward tips.
            </p>
          </div>

          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900 text-base">Surti</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-amber-100 text-amber-900 font-bold">Gujarat</span>
            </div>
            <p className="text-stone-600 leading-relaxed text-xs">
              <strong>Sickle Shaped:</strong> Medium-length, flat horns curving downward and backward, then turning upward into a graceful agricultural sickle arc.
            </p>
          </div>

          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900 text-base">Nili-Ravi</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-amber-100 text-amber-900 font-bold">Punjab</span>
            </div>
            <p className="text-stone-600 leading-relaxed text-xs">
              <strong>Panjkalyan White Markings:</strong> Tightly curled horns paired with five pristine white patches (forehead blaze, 4 muzzle/fetlock points, switch of tail).
            </p>
          </div>

          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900 text-base">Bhadawari</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-amber-100 text-amber-900 font-bold">Uttar Pradesh</span>
            </div>
            <p className="text-stone-600 leading-relaxed text-xs">
              <strong>Copper Coat & Chevron:</strong> Distinctive copper/light brown hair coat, flat backward-directed horns, and two white chevron bands under the neck.
            </p>
          </div>

          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900 text-base">Toda</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-amber-100 text-amber-900 font-bold">Nilgiris (TN)</span>
            </div>
            <p className="text-stone-600 leading-relaxed text-xs">
              <strong>Wide Highland Crescent:</strong> Horns set wide apart curving outward, slightly downward and forward, ending in an inward hook suited for hill foliage.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 4: Indian Zebu Horn & Ear Typology */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="border-b pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2">
            🐂 Zebu Cranial Morphology
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
            4. Indian Cattle Cranial & Horn Morphometry
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            Distinctive forehead convexity, pendulous ear foldings, and horn orientations in Indian indigenous cattle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-200 space-y-2">
            <h4 className="font-bold text-amber-950 text-base">Gir Cattle: Domed Convex Shield & Leaf Ears</h4>
            <p className="text-stone-700 leading-relaxed text-xs">
              Gir cattle possess an extraordinarily prominent domed forehead (convex bony shield) that acts as an optical shade in high solar environments. Their ears are pendulous, elongated (25–30 cm), folded lengthwise like a curled banyan leaf with a characteristic notch near the tip. Horns sweep backward, downward, and then curve gently upward in a half-moon crescent.
            </p>
          </div>

          <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-200 space-y-2">
            <h4 className="font-bold text-amber-950 text-base">Kankrej Cattle: Lyre Horns & Sawai Gait</h4>
            <p className="text-stone-700 leading-relaxed text-xs">
              Possesses the heaviest and most magnificent horns of any Indian breed: thick, strong, curving outwards, upwards, and then slightly inward at the tips forming a lyrical lyre shape. Renowned for their majestic 1¼ cadence ("Sawai Chal" rhythm), pendulous ears, and charcoal shading on shoulders in mature bulls.
            </p>
          </div>

          <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-200 space-y-2">
            <h4 className="font-bold text-amber-950 text-base">Kangayam & Mysore Group: Upward Daggers</h4>
            <p className="text-stone-700 leading-relaxed text-xs">
              Representatives of the South Indian draught type (Kangayam, Hallikar, Amrit Mahal) feature long, pointed horns curving outwards and sharply backwards in a dagger orientation. They possess compact muscular forequarters, tight skin, and exceptional endurance for agricultural traction and bullock carts.
            </p>
          </div>

          <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-200 space-y-2">
            <h4 className="font-bold text-amber-950 text-base">Vechur: Dwarf Extreme & Small Slender Horns</h4>
            <p className="text-stone-700 leading-relaxed text-xs">
              Guinness World Record smallest cattle breed (withers height ~80–90 cm). Tiny body weight (130–150 kg), small thin horns curving outward and forward, and low metabolic maintenance requirements, producing milk with ultra-small fat globules (easily digestible).
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 5: CSN2 Beta-Casein Molecular Polymorphism */}
      <div className="bg-emerald-950 text-emerald-100 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm border border-emerald-800">
        <div className="flex items-center gap-2">
          <Dna className="w-6 h-6 text-emerald-400" />
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-emerald-200">
            5. The CSN2 Beta-Casein A2 vs A1 Molecular Basis
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
          The beta-casein gene (<em>CSN2</em>) on bovine chromosome 6 consists of 209 amino acids. In wild bovines and indigenous Indian cattle (<em>Bos indicus</em>) as well as River Buffalo (<em>Bubalus bubalis</em>), the ancestral allele is <strong>A2 (CCT codon encoding Proline at position 67)</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="bg-emerald-900/80 p-4 rounded-2xl border border-emerald-600/40 space-y-2">
            <span className="font-bold text-emerald-300 block text-sm">Ancestral A2 Allele (Indian Breeds)</span>
            <p className="text-xs font-mono text-emerald-150">Codon 67: CCT &rarr; Proline</p>
            <p className="text-xs text-stone-300">
              Proline forms a rigid cyclic peptide bond that prevents cleavage of the preceding 7 amino acids by digestive elastase enzymes in the small intestine. Beta-casomorphin-7 (BCM-7) is NOT released.
            </p>
          </div>

          <div className="bg-stone-900/80 p-4 rounded-2xl border border-red-500/40 space-y-2">
            <span className="font-bold text-red-300 block text-sm">Mutant A1 Allele (European Breeds)</span>
            <p className="text-xs font-mono text-red-200">Codon 67: CAT &rarr; Histidine</p>
            <p className="text-xs text-stone-300">
              Point mutation substitute allows human gastrointestinal proteases to enzymatically cleave the 59-66 chain, releasing the opioid heptapeptide BCM-7 associated with digestive distress and inflammation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
