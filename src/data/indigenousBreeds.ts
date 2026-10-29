import { BreedInfo } from '../types/breed';

export const INDIAN_BOVINE_BREEDS: BreedInfo[] = [
  // =========================================================================
  // 53 REGISTERED INDIAN INDIGENOUS CATTLE BREEDS (Bos indicus / Zebu)
  // Officially Registered by ICAR-NBAGR (National Bureau of Animal Genetic Resources)
  // =========================================================================
  {
    id: 'gir-cattle',
    name: 'Gir',
    vernacularName: 'गीर / Geer / Desan',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Gujarat',
    homeTract: 'Gir hills and forests of Junagadh, Bhavnagar, Amreli, and Rajkot districts',
    nbagrCode: 'INDIA_CATTLE_0400_GIR_03009',
    nbagrStatus: 'Registered Indigenous',
    description: 'Premier Indian dairy zebu breed renowned worldwide for high butterfat A2 milk, prominent domed convex forehead, and long pendulous drooping ears folded like a curled leaf.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60 (58 acrocentric autosomes, 2 sex chromosomes)',
      fatRegulatorGene: 'DGAT1 K232A / SCD1 polymorphism',
      thermalGene: 'HSP70 / HSF1 high constitutive expression',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Curved backwards and outwards in a half-moon crescent shape',
      ears: 'Exceptionally long, pendulous, folded like a leaf with a distinct apical notch',
      coatColor: 'Shades from dark red to speckled white with reddish-brown patches',
      humpAndDewlap: 'Prominent fleshy thoracic hump, voluminous loose dewlap aiding heat dissipation',
      sizeAndBuild: 'Medium to large, heavy boned, docile dairy temperament',
      faceProfile: 'Distinctively convex forehead acting as a protective cooling shield for the brain'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '2,100 – 3,500 kg per lactation',
      fatPercentage: '4.5% – 5.0% (Natural A2 beta-casein)',
      weightMaleKg: '540 kg',
      weightFemaleKg: '380 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Extreme tolerance to tropical heat and endemic tick-borne haemoparasites'
    },
    historicalSignificance: 'Bred by traditional Maldhari pastoralists over centuries. Exported to Brazil to establish the global "Gyr" and "Girolando" dairy herds.',
    pastoralCommunities: ['Maldharis', 'Rabaris', 'Charans'],
    careRecommendations: [
      'Thrives on open pasture grazing supplemented with mustard cake and legume silage',
      'Requires shaded loose housing with cross-ventilation during extreme summer spikes',
      'Routine vaccination for Foot & Mouth Disease (FMD) and Hemorrhagic Septicemia (HS)'
    ],
    imageUrl: '/src/assets/images/specimen_gir_cow_1792850390572.jpg',
    tags: ['A2 Milk', 'Zebu', 'Maldhari', 'Gujarat', 'Milch', 'ICAR-NBAGR 03009']
  },
  {
    id: 'sahiwal-cattle',
    name: 'Sahiwal',
    vernacularName: 'साहीवाल / Lambi Bar / Lola',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Punjab & Rajasthan',
    homeTract: 'Montgomery district (origin), border regions of Punjab (Ferozepur, Fazilka) and Rajasthan (Sri Ganganagar)',
    nbagrCode: 'INDIA_CATTLE_1700_SAHIWAL_03026',
    nbagrStatus: 'Registered Indigenous',
    description: 'Heaviest milk-producing indigenous dairy cow of the Indian subcontinent, noted for pale red/dun coat, loose voluminous skin ("Lola"), and docile nature.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'DGAT1 variant / prolactin receptor locus',
      thermalGene: 'HSP70 promoter polymorphism conferring solar radiation resistance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, stumpy, thick at the base',
      ears: 'Medium sized with black hair margins',
      coatColor: 'Reddish dun to pale red with occasional white patches on underline',
      humpAndDewlap: 'Massive thoracic hump in bulls, very voluminous loose dewlap ("Lola")',
      sizeAndBuild: 'Cylindrical symmetrical body, short legs, heavy pendulous sheath',
      faceProfile: 'Broad forehead, slightly sunken between eyes'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '2,500 – 4,000 kg per lactation',
      fatPercentage: '4.5% – 5.2%',
      weightMaleKg: '500 kg',
      weightFemaleKg: '400 kg',
      hardiness: 'High',
      heatTolerance: 'High resistance to solar radiation, tick infestation and heat stress'
    },
    historicalSignificance: 'Developed along the banks of the Ravi River. Foundation breed for heat-tolerant dairy industries across Australia, Kenya, and South America.',
    pastoralCommunities: ['Rathis', 'Jats', 'Pastoral Gujjars'],
    careRecommendations: [
      'High-energy fodder (berseem, sorghum, maize) supports peak lactation yield',
      'Provide clean drinking water ad-libitum (70-90 liters daily for milking cows)',
      'Dry shed flooring to prevent mastitis and hoof rot'
    ],
    imageUrl: '/src/assets/images/specimen_sahiwal_cow_1792850391898.jpg',
    tags: ['Dairy', 'Punjab', 'Rajasthan', 'A2 Milk', 'High Yield', 'ICAR-NBAGR 03026']
  },
  {
    id: 'red-sindhi-cattle',
    name: 'Red Sindhi',
    vernacularName: 'लाल सिंधी / Malir / Red Karachi',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Origin Sindh / Organized herds across India (Tamil Nadu, Odisha, Kerala, Assam)',
    homeTract: 'Traditional dry tracts, maintained at state organized livestock research farms across India',
    nbagrCode: 'INDIA_CATTLE_0000_REDSINDHI_03025',
    nbagrStatus: 'Registered Indigenous',
    description: 'Distinguished compact dairy breed with deep dark red coat, heavy hump and dewlap, renowned for high dairy adaptability to tropical disease and heat.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'CSN3 and DGAT1 dairy genotypes',
      thermalGene: 'High density sweat gland gene expression',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, thick at base, curving upwards and inwards',
      ears: 'Medium sized, drooping slightly',
      coatColor: 'Deep dark red or rich brownish-red, occasionally with small white forehead star',
      humpAndDewlap: 'Well-developed muscular hump and loose dewlap',
      sizeAndBuild: 'Compact, deep frame, short legs and docile disposition',
      faceProfile: 'Intelligent face with moderately protruding forehead'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '1,800 – 2,800 kg per lactation',
      fatPercentage: '4.8% – 5.2%',
      weightMaleKg: '460 kg',
      weightFemaleKg: '340 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Exceptional tropical climate tolerance and tick disease resistance'
    },
    historicalSignificance: 'One of the most famous tropical dairy breeds globally, extensively used in crossbreeding in Australia, Brazil, and Southeast Asia.',
    pastoralCommunities: ['Maldharis', 'Sindhi pastoralists'],
    careRecommendations: [
      'Legume hay and balanced mineral mixture for sustained milking',
      'Adequate shaded shelter during midday tropical sun'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Milch', 'Deep Red', 'A2 Milk', 'Tropical Dairy', 'ICAR-NBAGR 03025']
  },
  {
    id: 'tharparkar-cattle',
    name: 'Tharparkar',
    vernacularName: 'थारपारकर / White Sindhi / Thari',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Rajasthan & Gujarat',
    homeTract: 'Thar Desert border, Jodhpur, Jaisalmer, Barmer, and Kutch region',
    nbagrCode: 'INDIA_CATTLE_1700_THARPARKAR_03028',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy dual-purpose desert breed with striking white/light grey coat that reflects scorching desert radiation, renowned for producing milk on sparse desert shrubs.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'FASN & DGAT1 arid lipid adaptation',
      thermalGene: 'Reflective coat pigment and enhanced HSP70 expression',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Medium sized, curving upwards and outwards',
      ears: 'Long, broad, semi-pendulous',
      coatColor: 'Pure white to light grey, darkening over shoulders and hump in bulls during winter',
      humpAndDewlap: 'Medium to large hump, moderately developed dewlap',
      sizeAndBuild: 'Medium size, well-proportioned, robust desert bone structure',
      faceProfile: 'Flat to slightly convex forehead, alert dark eyes'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,800 – 2,600 kg per lactation',
      fatPercentage: '4.5% – 4.9%',
      weightMaleKg: '480 kg',
      weightFemaleKg: '380 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Thrives in desert ambient temperatures exceeding 48°C with minimal water'
    },
    historicalSignificance: 'Bred in the hyper-arid Thar Desert. Can subsist on desert xerophytic scrub (Khejri, Sevangrass) where other breeds perish.',
    pastoralCommunities: ['Rebaris', 'Thari Nomads', 'Charans'],
    careRecommendations: [
      'Supplement dry desert roughage with mineral licks',
      'Ensure access to clean water during scorching summer desert spells'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Desert Breed', 'Rajasthan', 'Dual Purpose', 'White Cattle', 'ICAR-NBAGR 03028']
  },
  {
    id: 'kankrej-cattle',
    name: 'Kankrej',
    vernacularName: 'कांकरेज / Wadhair / Sanchori',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Gujarat & Rajasthan',
    homeTract: 'Rann of Kutch, Banaskantha, Mehsana, Ahmedabad, and Barmer/Jalore districts',
    nbagrCode: 'INDIA_CATTLE_0417_KANKREJ_03014',
    nbagrStatus: 'Registered Indigenous',
    description: 'Majestic dual-purpose breed famous for massive lyre-shaped horns, pendulous ears, and unique high-stepping graceful gait known as "1¼ steps" (Sawai Chaal).',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'MSTN draught-power muscle marker / DGAT1',
      thermalGene: 'High-density sebaceous sweat glands',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Spectacular, massive lyre-shaped horns emerging outwards and curving upwards and inwards',
      ears: 'Very large, pendulous, open like a leaf',
      coatColor: 'Silver grey to iron grey, darker over shoulders and quarters in adult bulls',
      humpAndDewlap: 'Well-developed firm thoracic hump and thin pendulous dewlap',
      sizeAndBuild: 'Very large and powerful, heavy draft frame with proud carriage',
      faceProfile: 'Short face, slightly dished forehead with prominent crown'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,500 – 2,800 kg per lactation',
      fatPercentage: '4.6% – 5.1%',
      weightMaleKg: '580 kg',
      weightFemaleKg: '420 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme resistance to humid coastal heat and marshy salt rann climates'
    },
    historicalSignificance: 'Depicted on Mohenjo-daro Indus Valley Civilization seals dating back 4,500 years. Exported to the Americas to create the American Brahman breed ("Guzerá").',
    pastoralCommunities: ['Rabaris', 'Bharwads', 'Ahirs'],
    careRecommendations: [
      'Substantial green fodder and dry straw for maintaining large muscle mass',
      'Exercise paddocks suited for active draft animals'
    ],
    imageUrl: '/src/assets/images/specimen_kankrej_bull_1792850392117.jpg',
    tags: ['Lyre Horns', 'Sawai Chaal', 'Indus Seal', 'Guzera Ancestor', 'Gujarat', 'ICAR-NBAGR 03014']
  },
  {
    id: 'ongole-cattle',
    name: 'Ongole',
    vernacularName: 'ఒంగోలు గిత్త / Ongole Bull / Nellore',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Andhra Pradesh',
    homeTract: 'Prakasam, Guntur, and Bapatla districts along the fertile Gundlakamma and Krishna river delta',
    nbagrCode: 'INDIA_CATTLE_0100_ONGOLE_03021',
    nbagrStatus: 'Registered Indigenous',
    description: 'Renowned white zebu giant of India, recognized for great muscular strength, majestic stature, massive hump, and supreme resistance to bovine tropical diseases.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'MSTN heavy muscle hypertrophy gene',
      thermalGene: 'High solar reflectance white hair index with dark black pigmented skin',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, stumpy, growing backwards and outwards',
      ears: 'Moderately long and alert',
      coatColor: 'Glossy white in cows; majestic white-grey with dark markings on neck and hump in bulls',
      humpAndDewlap: 'Massive, erect muscular hump and voluminous folded dewlap',
      sizeAndBuild: 'Extra-large frame, deep chest, heavy bones, towering height at withers',
      faceProfile: 'Broad elliptical forehead with dark pigmented rims around the eyes'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,500 – 2,200 kg per lactation',
      fatPercentage: '4.3% – 4.8%',
      weightMaleKg: '650 kg',
      weightFemaleKg: '450 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme heat tolerance; black skin under white coat blocks UV while sweating profusely'
    },
    historicalSignificance: 'Exported to Brazil in late 19th century where it founded the multi-million head "Nelore" cattle industry, driving global tropical beef & milk genetics.',
    pastoralCommunities: ['Reddys', 'Kammas', 'Yadavas'],
    careRecommendations: [
      'Ample mineral supplementation to maintain bone density and draft strength',
      'Open paddocks with sturdy fencing for heavyweight breeding bulls'
    ],
    imageUrl: '/src/assets/images/specimen_ongole_bull_1792850392671.jpg',
    tags: ['Nelore Foundation', 'Andhra Pradesh', 'Giant Zebu', 'Heavy Draught', 'ICAR-NBAGR 03021']
  },
  {
    id: 'hariana-cattle',
    name: 'Hariana',
    vernacularName: 'हरियाणा / Hariana',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Haryana, Uttar Pradesh, Punjab & Rajasthan',
    homeTract: 'Rohtak, Hisar, Jind, Gurugram, and Indo-Gangetic plains',
    nbagrCode: 'INDIA_CATTLE_1700_HARIANA_03011',
    nbagrStatus: 'Registered Indigenous',
    description: 'Premier dual-purpose white cattle of North India, known for energetic work bulls and good dairy yield with clean, symmetrical body conformation.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'DGAT1 and SCD1',
      thermalGene: 'HSF1 thermotolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, slender, curving upwards and inwards',
      ears: 'Small, alert, horizontal',
      coatColor: 'White to light grey, darker over front quarters in bulls',
      humpAndDewlap: 'Compact upright hump, small thin dewlap',
      sizeAndBuild: 'Medium to large, proportionate, trim athletic draft frame',
      faceProfile: 'Long narrow face, flat forehead between horns'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,400 – 2,200 kg per lactation',
      fatPercentage: '4.4% – 4.8%',
      weightMaleKg: '500 kg',
      weightFemaleKg: '360 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Very high tolerance to extreme North Indian summer heatwaves'
    },
    historicalSignificance: 'Backbone of North Indian traditional agriculture and bullock cart transport prior to mechanization.',
    pastoralCommunities: ['Jats', 'Ahirs', 'Gujjars'],
    careRecommendations: [
      'Balanced green sorghum and wheat straw feeding',
      'Dry shed bedding during monsoon months'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Dual-Purpose', 'Haryana', 'North India', 'A2 Milk', 'ICAR-NBAGR 03011']
  },
  {
    id: 'deoni-cattle',
    name: 'Deoni',
    vernacularName: 'देवणी / Deoni / Dongar Patti',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Maharashtra & Karnataka',
    homeTract: 'Latur, Nanded, Osmanabad districts of Maharashtra, and Bidar district of Karnataka',
    nbagrCode: 'INDIA_CATTLE_1100_DEONI_03007',
    nbagrStatus: 'Registered Indigenous',
    description: 'Attractive dual-purpose breed of the Deccan plateau, characterized by distinctive black and white spotted coat, bulging forehead, and docile temperament.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'DGAT1 polymorphism',
      thermalGene: 'Deccan basalt heat resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving backwards and outwards',
      ears: 'Drooping, slightly folded',
      coatColor: 'Spotted black and white (Balankya, Wannera, Shevera strains)',
      humpAndDewlap: 'Massive hump in bulls, loose folded dewlap',
      sizeAndBuild: 'Medium to large, heavy muscular frame, calm demeanor',
      faceProfile: 'Moderately convex forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,200 – 1,800 kg per lactation',
      fatPercentage: '4.3% – 4.7%',
      weightMaleKg: '520 kg',
      weightFemaleKg: '380 kg',
      hardiness: 'High',
      heatTolerance: 'Well adapted to hot semi-arid Deccan plateau climate'
    },
    historicalSignificance: 'Developed through selective breeding combining Gir, Dangi, and local cattle genetics in Marathwada.',
    pastoralCommunities: ['Maratha farmers', 'Lingayats'],
    careRecommendations: [
      'High-dry fodder supplemented with oil cakes',
      'Tick dip management in semi-arid grazing tracts'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Dual-Purpose', 'Maharashtra', 'Karnataka', 'Spotted Coat', 'ICAR-NBAGR 03007']
  },
  {
    id: 'rathi-cattle',
    name: 'Rathi',
    vernacularName: 'राठी / Rathi',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Rajasthan',
    homeTract: 'Bikaner, Ganganagar, and Hanumangarh districts in North-Western Rajasthan',
    nbagrCode: 'INDIA_CATTLE_1700_RATHI_03024',
    nbagrStatus: 'Registered Indigenous',
    description: 'Famous milch breed of the arid Thar Desert, renowned for economical milk production and brown coat patched with white spots.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'DGAT1 lipid synthase',
      thermalGene: 'Arid climate thermotolerance genes',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving outwards and upwards',
      ears: 'Medium, alert',
      coatColor: 'Brown and white or black and white patched, sometimes pure brown',
      humpAndDewlap: 'Medium hump, moderately developed dewlap',
      sizeAndBuild: 'Medium size, cylindrical dairy conformation',
      faceProfile: 'Flat forehead, wide muzzle'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '1,800 – 2,800 kg per lactation',
      fatPercentage: '4.2% – 4.8%',
      weightMaleKg: '450 kg',
      weightFemaleKg: '350 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme adaptation to extreme desert summer heat and winter cold'
    },
    historicalSignificance: 'Bred by the nomadic Raths tribe in the harsh desert heartland.',
    pastoralCommunities: ['Raths', 'Rebaris'],
    careRecommendations: [
      'Feeds well on desert shrubs like Khejri leaves and Sewan grass',
      'Water provision during peak scorching afternoon hours'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Milch', 'Rajasthan', 'Thar Desert', 'A2 Milk', 'ICAR-NBAGR 03024']
  },
  {
    id: 'krishna-valley-cattle',
    name: 'Krishna Valley',
    vernacularName: 'ಕೃಷ್ಣಾ ವ್ಯಾಲಿ / Krishna Valley',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Karnataka & Maharashtra',
    homeTract: 'Belagavi, Bagalkote, Vijayapura in Karnataka, and Sangli, Kolhapur in Maharashtra',
    nbagrCode: 'INDIA_CATTLE_0800_KRISHNAVALLEY_03018',
    nbagrStatus: 'Conservation Priority',
    description: 'Heavy draft breed created along the black cotton soil of the Krishna river valley for plowing deep, waterlogged soils.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Muscle density markers',
      thermalGene: 'Humid river basin heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, thick, growing curved outwards and inwards',
      ears: 'Small, pointed',
      coatColor: 'Grey-white with darker shades over forequarters in males',
      humpAndDewlap: 'Large erect hump, voluminous dewlap extending to sheath',
      sizeAndBuild: 'Massive frame, short heavy legs, deep wide chest',
      faceProfile: 'Broad poll, slightly bulging forehead'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '900 – 1,200 kg per lactation',
      fatPercentage: '4.2% – 4.6%',
      weightMaleKg: '600 kg',
      weightFemaleKg: '420 kg',
      hardiness: 'High',
      heatTolerance: 'Resistant to damp black cotton soil foot infections'
    },
    historicalSignificance: 'Selectively bred by the rulers of Aundh and Miraj states for heavy agricultural plowing.',
    pastoralCommunities: ['Lingayat farmers', 'Maratha cultivators'],
    careRecommendations: [
      'Maintain strong hoof hygiene in black cotton mud',
      'Concentrate feed supplementation during heavy plowing seasons'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Heavy Draught', 'Karnataka', 'Maharashtra', 'Krishna River', 'ICAR-NBAGR 03018']
  },
  {
    id: 'kangayam-cattle',
    name: 'Kangayam',
    vernacularName: 'காங்கேயம் காளை / Kangeyam Bull',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Tamil Nadu',
    homeTract: 'Kangeyam, Tiruppur, Erode, Karur, and Coimbatore districts in the Kongu Nadu region',
    nbagrCode: 'INDIA_CATTLE_1800_KANGAYAM_03013',
    nbagrStatus: 'Registered Indigenous',
    description: 'World-renowned South Indian draught breed celebrated for boundless stamina, steel-hard black hooves, fiery spirit, and prized role in traditional Jallikattu and farm transport.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'ACTN3 / MSTN muscular endurance genotype',
      thermalGene: 'Semi-arid tropical heat dissipation mechanisms',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, thick at the base, curving backwards, upwards, and inwards forming a sharp crescent tip',
      ears: 'Small, erect, pointing outwards with sharp tips',
      coatColor: 'Bulls are majestic dark grey with black head, hump, and forequarters; cows are pure white to light silver grey',
      humpAndDewlap: 'Compact, firm, muscular hump; small thin dewlap that does not hinder fast trotting',
      sizeAndBuild: 'Medium, compact, barrel-shaped body with rock-hard black hooves (Kulamph)',
      faceProfile: 'Short face with broad forehead and prominent dark eye rings'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '800 – 1,200 kg per lactation',
      fatPercentage: '4.6% – 5.4%',
      weightMaleKg: '480 kg',
      weightFemaleKg: '350 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme tolerance to semi-arid tropical sun and rocky gravel ground'
    },
    historicalSignificance: 'Bred systematically by the Pattagar of Palayakottai since the 17th century. Integral to Kongu agro-pastoral economy and traditional Jallikattu heritage.',
    pastoralCommunities: ['Kongu Vellalar Gounders'],
    careRecommendations: [
      'Grazing on traditional Kolukattai grass (Cenchrus ciliaris) pasture silvopastoral tracts (Korangadu)',
      'Regular physical exercise to maintain muscular tendon tone and black hoof strength'
    ],
    imageUrl: '/src/assets/images/specimen_kangayam_bull_1792850412117.jpg',
    tags: ['Kongu Nadu', 'Jallikattu', 'Draught', 'Korangadu', 'Tamil Nadu', 'ICAR-NBAGR 03013']
  },
  {
    id: 'hallikar-cattle',
    name: 'Hallikar',
    vernacularName: 'ಹಳ್ಳಿಕಾರ್ / Hallikar Bull',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Karnataka',
    homeTract: 'Mysuru, Hassan, Mandya, Tumakuru, and Bengaluru rural districts',
    nbagrCode: 'INDIA_CATTLE_0800_HALLIKAR_03010',
    nbagrStatus: 'Registered Indigenous',
    description: 'Foremost draught breed of Southern India, the ancestral progenitor of the legendary "Amrit Mahal" Mysore cattle family, recognized for long, sweeping backward-curving horns and great trotting speed.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Aerobic muscle fiber endurance loci',
      thermalGene: 'Dry deciduous plateau thermal adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Long, slender, emerging close together, sweeping backwards and upwards in a graceful inward bend with sharp points',
      ears: 'Small, alert, pointed horizontally',
      coatColor: 'Dark grey to iron grey with white bands on face and dewlap',
      humpAndDewlap: 'Moderately developed compact muscular hump and thin dewlap',
      sizeAndBuild: 'Medium, long-legged, agile athletic build with tough black hooves',
      faceProfile: 'Long, lean face with bulging forehead between horn roots'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '600 – 1,000 kg per lactation',
      fatPercentage: '4.8% – 5.5%',
      weightMaleKg: '450 kg',
      weightFemaleKg: '330 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Exceptional endurance over long-distance road trotting in tropical heat'
    },
    historicalSignificance: 'Maintained by the rulers of the Kingdom of Mysore for artillery transport and royal cavalry. Foundational root of Mysore draught breeds.',
    pastoralCommunities: ['Hallikar Vokkaligas', 'Kurubas'],
    careRecommendations: [
      'Regular long-distance road work and ragi straw feeding',
      'Proper stall management with clean stone flooring'
    ],
    imageUrl: '/src/assets/images/specimen_hallikar_bull_1792850437021.jpg',
    tags: ['Mysore Cattle', 'Trotting Bull', 'Karnataka', 'Draught', 'ICAR-NBAGR 03010']
  },
  {
    id: 'amritmahal-cattle',
    name: 'Amritmahal',
    vernacularName: 'ಅಮೃತ ಮಹಲ್ / Amrit Mahal',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Karnataka',
    homeTract: 'Chitradurga, Chikkamagaluru, Tumakuru, and Hassan districts in Karnataka',
    nbagrCode: 'INDIA_CATTLE_0800_AMRITMAHAL_03001',
    nbagrStatus: 'Registered Indigenous',
    description: 'Legendary military draught breed of Mysore, famed for unmatched endurance, speed, and fierce fiery temperament.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High endurance muscle myosin ATPase loci',
      thermalGene: 'Semi-arid scrub heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Long, sweeping backwards, ending in sharp tapering points',
      ears: 'Small, alert, pointed',
      coatColor: 'Grey variations from almost white to dark iron grey',
      humpAndDewlap: 'Compact muscular hump, minimal thin dewlap',
      sizeAndBuild: 'Medium, active, wiry, rock-hard hooves',
      faceProfile: 'Narrow lean face, convex forehead'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '500 – 800 kg per lactation',
      fatPercentage: '4.8% – 5.4%',
      weightMaleKg: '450 kg',
      weightFemaleKg: '320 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Can travel up to 100 km a day without tiring in hot sun'
    },
    historicalSignificance: 'Maintained by Hyder Ali and Tipu Sultan for fast artillery movements, helping win campaigns through rapid battlefield transport.',
    pastoralCommunities: ['Golla community', 'Kurubas'],
    careRecommendations: [
      'Extensive rangeland grazing (Kaval lands)',
      'Requires gentle handling to manage high-spirited temperament'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Military Draught', 'Tipu Sultan', 'Karnataka', 'Mysore', 'ICAR-NBAGR 03001']
  },
  {
    id: 'khillari-cattle',
    name: 'Khillari',
    vernacularName: 'खिल्लारी / Khillari Bull',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Maharashtra & Karnataka',
    homeTract: 'Satara, Sangli, Solapur in Maharashtra, and Belagavi, Bagalkote in Karnataka',
    nbagrCode: 'INDIA_CATTLE_1100_KHILLARI_03017',
    nbagrStatus: 'Registered Indigenous',
    description: 'Renowned fast-trotting draught breed of the dry Deccan plateau, characterized by long swept-back horns with pinkish tips and grey-white coat.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'ACTN3 muscle endurance marker',
      thermalGene: 'Deccan arid drought survival genes',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Long, sweeping backwards, thick at base with pinkish hue',
      ears: 'Small, pointed, alert',
      coatColor: 'Greyish-white with mottled markings on face',
      humpAndDewlap: 'Prominent compact hump, thin dewlap',
      sizeAndBuild: 'Cylindrical muscular body, clean limbs, agile stride',
      faceProfile: 'Long lean face, convex forehead profile'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '500 – 750 kg per lactation',
      fatPercentage: '4.5% – 5.0%',
      weightMaleKg: '480 kg',
      weightFemaleKg: '340 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme stamina under scorching Deccan drought conditions'
    },
    historicalSignificance: 'Prizewinner in bullock cart trotting races across Maharashtra and Karnataka.',
    pastoralCommunities: ['Thorgat shepherds', 'Maratha farmers'],
    careRecommendations: [
      'High-protein oil cakes for working draft bullocks',
      'Routine hoof trimming for hard road trotting'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Fast Trotter', 'Draught', 'Maharashtra', 'Karnataka', 'ICAR-NBAGR 03017']
  },
  {
    id: 'bargur-cattle',
    name: 'Bargur',
    vernacularName: 'பர்கூர் மாடு / Bargur Cattle',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Tamil Nadu',
    homeTract: 'Bargur forest hills of Anthiyur taluk, Erode district',
    nbagrCode: 'INDIA_CATTLE_1800_BARGUR_03004',
    nbagrStatus: 'Registered Indigenous',
    description: 'Fiery, semi-wild hill draught cattle of the Western Ghats, distinguished by red and white patchy coat and incredible hill climbing dexterity.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High altitude muscle oxygenation genes',
      thermalGene: 'Forest canopy microclimate adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Light brown, curving backwards and inwards with pointed tips',
      ears: 'Short, alert, erect',
      coatColor: 'Brownish-red with speckled white splashes and patches',
      humpAndDewlap: 'Compact firm hump, small dewlap suited for forest foliage',
      sizeAndBuild: 'Small to medium, wiry, exceptionally nimble on steep hills',
      faceProfile: 'Lean, alert face with fiery eyes'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '350 – 550 kg per lactation',
      fatPercentage: '4.8% – 5.5%',
      weightMaleKg: '380 kg',
      weightFemaleKg: '280 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Extreme hardiness in rough mountain terrain and rocky hills'
    },
    historicalSignificance: 'Bred and reared inside forest enclosures ("Pattys") by the Lingayat community.',
    pastoralCommunities: ['Bargur Lingayats', 'Sholaga tribes'],
    careRecommendations: [
      'Maintain forest grazing access in Bargur hill ranges',
      'Protection from wild predators (leopards) via community enclosures'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Hill Draught', 'Bargur Hills', 'Tamil Nadu', 'Western Ghats', 'ICAR-NBAGR 03004']
  },
  {
    id: 'umblachery-cattle',
    name: 'Umblachery',
    vernacularName: 'உம்பளச்சேரி / Umblachery / Jathi Madu',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Tamil Nadu',
    homeTract: 'Nagapattinam, Tiruvarur, and Thanjavur districts in the Cauvery delta',
    nbagrCode: 'INDIA_CATTLE_1800_UMBLACHERY_03029',
    nbagrStatus: 'Registered Indigenous',
    description: 'Renowned wetland draught breed of the Cauvery Delta, born red and turning grey with white star on forehead and white socks on limbs, perfect for deep paddy puddling.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Paddy puddle foot rot resistance genetics',
      thermalGene: 'High-humidity coastal thermotolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, thick, curved outward and inward (dehorned traditionally)',
      ears: 'Small, alert, horizontally placed',
      coatColor: 'Grey with white socks on lower legs, white star on forehead, and white switch of tail',
      humpAndDewlap: 'Small compact hump, thin dewlap',
      sizeAndBuild: 'Short, sturdy, low-set body suited for swampy mud',
      faceProfile: 'Short face with flat forehead'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '500 – 800 kg per lactation',
      fatPercentage: '4.8% – 5.2%',
      weightMaleKg: '380 kg',
      weightFemaleKg: '280 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme resistance to humid coastal heat and muddy waterlogged paddy diseases'
    },
    historicalSignificance: 'Indispensable to Cauvery delta paddy farmers for soil puddling where tractors sink.',
    pastoralCommunities: ['Cauvery delta farming communities'],
    careRecommendations: [
      'Paddy straw feeding enriched with urea-molasses blocks',
      'Hoof care after prolonged waterlogged plowing'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Cauvery Delta', 'Paddy Puddling', 'Tamil Nadu', 'Draught', 'ICAR-NBAGR 03029']
  },
  {
    id: 'pulikulam-cattle',
    name: 'Pulikulam',
    vernacularName: 'புலிகுளம் / Palingu Madu / Jallikattu Bull',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Tamil Nadu',
    homeTract: 'Sivaganga, Madurai, Dindigul, and Virudhunagar districts',
    nbagrCode: 'INDIA_CATTLE_1800_PULIKULAM_03035',
    nbagrStatus: 'Registered Indigenous',
    description: 'Premier Jallikattu spectacle breed of southern Tamil Nadu, reared in migratory pastoral herds ("Kidaari"), famous for lightning agility and fierce defensive bravery.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Fast-twitch muscle fiber genes',
      thermalGene: 'Dry thorn scrub heat resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Curved backwards, outward, then inward with sharp points',
      ears: 'Short, alert, constantly moving',
      coatColor: 'Dark grey to black in bulls, light grey in cows',
      humpAndDewlap: 'Prominent compact hump, firm dewlap',
      sizeAndBuild: 'Medium, wiry, muscular with hard hooves',
      faceProfile: 'Lean, narrow forehead with intense watchful eyes'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '400 – 600 kg per lactation',
      fatPercentage: '4.7% – 5.3%',
      weightMaleKg: '400 kg',
      weightFemaleKg: '290 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme endurance under intense dry summer drought conditions'
    },
    historicalSignificance: 'Core breed utilized for historic Tamil Jallikattu bull-embracing sporting events.',
    pastoralCommunities: ['Konar pastoralists', 'Kallar communities'],
    careRecommendations: [
      'Migratory penning on harvested fields for organic soil manuring',
      'Daily walking exercise across arid thorn scrub'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Jallikattu', 'Tamil Nadu', 'Agile Draught', 'Migratory Herds', 'ICAR-NBAGR 03035']
  },
  {
    id: 'alambadi-cattle',
    name: 'Alambadi',
    vernacularName: 'ஆலம்பாடி / Alambadi',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Tamil Nadu',
    homeTract: 'Dharmapuri, Krishnagiri, and Cauvery river banks bordering Karnataka',
    nbagrCode: 'INDIA_CATTLE_1800_ALAMBADI_03002',
    nbagrStatus: 'Registered Indigenous',
    description: 'Active hill draught cattle resembling Hallikar, prized for fast road trotting and hauling timber through hilly forest tracks.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Endurance muscle fibers',
      thermalGene: 'Cauvery basin climate resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Sweeping backwards, then curving upwards with sharp points',
      ears: 'Small, alert',
      coatColor: 'Dark grey to black with white markings on forehead',
      humpAndDewlap: 'Compact muscular hump, thin dewlap',
      sizeAndBuild: 'Medium, active, long-legged and hardy',
      faceProfile: 'Narrow forehead, lean face'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '450 – 700 kg per lactation',
      fatPercentage: '4.6% – 5.1%',
      weightMaleKg: '420 kg',
      weightFemaleKg: '310 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Very high endurance along rocky terrain'
    },
    historicalSignificance: 'Bred along the Cauvery river forests for timber transport.',
    pastoralCommunities: ['Vokkaligas', 'Local tribal graziers'],
    careRecommendations: [
      'Forest fringe grazing with supplementary coarse grass',
      'Hoof maintenance on rocky terrain'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Hill Draught', 'Dharmapuri', 'Tamil Nadu', 'ICAR-NBAGR 03002']
  },
  {
    id: 'malvi-cattle',
    name: 'Malvi',
    vernacularName: 'मालवी / Malvi / Manthani',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Madhya Pradesh',
    homeTract: 'Malwa plateau: Ujjain, Shajapur, Mandsaur, and Rajgarh districts',
    nbagrCode: 'INDIA_CATTLE_1000_MALVI_03019',
    nbagrStatus: 'Registered Indigenous',
    description: 'Renowned massive draught breed of the Malwa plateau, noted for silver-white coat, strong muscular shoulders, and steadfast plowing capacity.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Heavy draft muscle density genes',
      thermalGene: 'Central Indian plateau heat adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Curving outwards, upwards, and slightly forwards',
      ears: 'Short, pointed, alert',
      coatColor: 'Silver-grey, turning dark iron grey on neck and quarters in bulls',
      humpAndDewlap: 'Well-developed firm hump, moderately folded dewlap',
      sizeAndBuild: 'Large, deep-chested, strong-boned draft frame',
      faceProfile: 'Broad flat forehead, dished between eyes'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '800 – 1,100 kg per lactation',
      fatPercentage: '4.3% – 4.7%',
      weightMaleKg: '520 kg',
      weightFemaleKg: '380 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme endurance under harsh Central Indian summers'
    },
    historicalSignificance: 'Backbone of agriculture across the fertile black soils of the historic Malwa kingdom.',
    pastoralCommunities: ['Malwa farmers', 'Ahirs'],
    careRecommendations: [
      'Nutritious sorghum straw and gram crop residue',
      'Provide spacious shaded stalls'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Malwa Plateau', 'Heavy Draught', 'Madhya Pradesh', 'ICAR-NBAGR 03019']
  },
  {
    id: 'nimari-cattle',
    name: 'Nimari',
    vernacularName: 'निमाड़ी / Nimari / Khargon',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Madhya Pradesh',
    homeTract: 'Nimar region along Narmada valley: East and West Nimar (Khandwa and Khargone)',
    nbagrCode: 'INDIA_CATTLE_1000_NIMARI_03020',
    nbagrStatus: 'Registered Indigenous',
    description: 'Handsome draught breed with distinctive copper-red coat splashed with white spots, blending genetics of Gir and Khillari.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Draft and dairy composite polymorphism',
      thermalGene: 'Narmada valley heat resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Curving backwards and outwards, similar to Gir',
      ears: 'Moderately long, somewhat pendulous',
      coatColor: 'Copper-red with white splashes and spots across body',
      humpAndDewlap: 'Prominent thoracic hump, loose folded dewlap',
      sizeAndBuild: 'Medium to large, muscular, active temperament',
      faceProfile: 'Moderately convex forehead'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '750 – 1,000 kg per lactation',
      fatPercentage: '4.5% – 5.0%',
      weightMaleKg: '490 kg',
      weightFemaleKg: '360 kg',
      hardiness: 'High',
      heatTolerance: 'Well adapted to Narmada river valley climate'
    },
    historicalSignificance: 'Composite blend of Gir milk qualities and Khillari draught endurance.',
    pastoralCommunities: ['Nimar Patidars', 'Bhil graziers'],
    careRecommendations: [
      'Balanced green fodder with pulse husks',
      'Regular vaccination against seasonal epidemics'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Nimar', 'Narmada Valley', 'Madhya Pradesh', 'Draught', 'ICAR-NBAGR 03020']
  },
  {
    id: 'dangi-cattle',
    name: 'Dangi',
    vernacularName: 'डांगी / Dangi',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Maharashtra & Madhya Pradesh',
    homeTract: 'Dangs district (Gujarat border), Nashik, and Ahmednagar hill tracts',
    nbagrCode: 'INDIA_CATTLE_1100_DANGI_03006',
    nbagrStatus: 'Registered Indigenous',
    description: 'Renowned for unmatched resistance to torrential monsoon rains, possessing unique oily skin secretions that repel torrential downpours on steep Western Ghats.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High cutaneous sebaceous gland secretion genes',
      thermalGene: 'Extreme wet-heat thermotolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, thick, projecting outwards and curving upwards',
      ears: 'Small, alert',
      coatColor: 'Distinctive white with red or black speckles and patches',
      humpAndDewlap: 'Firm thoracic hump, moderate dewlap with oily skin secretion',
      sizeAndBuild: 'Medium, sturdy, short legs with rock-hard black hooves that resist foot rot',
      faceProfile: 'Slightly bulging forehead'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '500 – 750 kg per lactation',
      fatPercentage: '4.5% – 5.1%',
      weightMaleKg: '450 kg',
      weightFemaleKg: '330 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Unrivaled ability to work in non-stop torrential rains and wet mud'
    },
    historicalSignificance: 'Selected by Western Ghats tribes for plowing rice paddies in high-rainfall mountain slopes.',
    pastoralCommunities: ['Konkan and Dangi tribal farmers', 'Warli tribe'],
    careRecommendations: [
      'Maintain adequate dry bedding during heavy monsoon months',
      'Provide coarse mountain grass supplemented with oilseed cakes'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Rain Resistant', 'Western Ghats', 'Maharashtra', 'Draught', 'ICAR-NBAGR 03006']
  },
  {
    id: 'gaolao-cattle',
    name: 'Gaolao',
    vernacularName: 'गवळाऊ / Gaolao / Arvi',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Maharashtra & Madhya Pradesh',
    homeTract: 'Wardha, Nagpur in Maharashtra, and Chhindwara, Seoni in Madhya Pradesh',
    nbagrCode: 'INDIA_CATTLE_1100_GAOLAO_03008',
    nbagrStatus: 'Registered Indigenous',
    description: 'Dual-purpose breed of the Vidarbha region, recognized for white coat, convex Roman nose face, and alert carriage.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'DGAT1 and muscle coordination markers',
      thermalGene: 'Central Indian dry deciduous heat resistance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, blunt, curving slightly backwards',
      ears: 'Medium, alert',
      coatColor: 'Pure white to light grey',
      humpAndDewlap: 'Moderately developed hump and voluminous dewlap',
      sizeAndBuild: 'Medium to large, long legs, athletic build',
      faceProfile: 'Elongated face, distinct convex profile (Roman nose)'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,000 – 1,500 kg per lactation',
      fatPercentage: '4.4% – 4.9%',
      weightMaleKg: '480 kg',
      weightFemaleKg: '350 kg',
      hardiness: 'High',
      heatTolerance: 'Very high tolerance to intense Vidarbha summer heat'
    },
    historicalSignificance: 'Bred by the Gaoli pastoralists for supply of bullocks to Maratha armies.',
    pastoralCommunities: ['Gaoli community'],
    careRecommendations: [
      'Balanced green fodder with cotton seed cakes',
      'Clean housing with proper airflow'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Vidarbha', 'Dual Purpose', 'Roman Nose', 'Maharashtra', 'ICAR-NBAGR 03008']
  },
  {
    id: 'nagori-cattle',
    name: 'Nagori',
    vernacularName: 'नागौरी / Nagori Trotter',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Rajasthan',
    homeTract: 'Nagaur district and surrounding parts of Jodhpur in central Rajasthan',
    nbagrCode: 'INDIA_CATTLE_1700_NAGORI_03021',
    nbagrStatus: 'Registered Indigenous',
    description: 'One of India’s most famous fast-trotting draught breeds, featuring a long cylindrical body, white coat, and incredible speed in agricultural carting.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Fast trotting locomotion muscle genes',
      thermalGene: 'Arid climate solar radiation resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Medium, curving outwards and upwards with sharp tips',
      ears: 'Small, alert, horizontal',
      coatColor: 'Bright white to light silver-grey',
      humpAndDewlap: 'Compact upright hump, thin dewlap',
      sizeAndBuild: 'Large, long-legged, clean-limbed, powerful trotter',
      faceProfile: 'Long flat forehead, alert eyes'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '700 – 1,000 kg per lactation',
      fatPercentage: '4.5% – 5.0%',
      weightMaleKg: '500 kg',
      weightFemaleKg: '360 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme desert heat endurance'
    },
    historicalSignificance: 'Prized throughout North India for swift bullock carts and agricultural endurance.',
    pastoralCommunities: ['Nagaur farmers', 'Jats'],
    careRecommendations: [
      'High-energy coarse grain supplementation for working trotters',
      'Adequate water provision in hot arid seasons'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Fast Trotter', 'Nagaur', 'Rajasthan', 'Draught', 'ICAR-NBAGR 03021']
  },
  {
    id: 'mewati-cattle',
    name: 'Mewati',
    vernacularName: 'मेवाती / Mewati / Kosi',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Haryana & Rajasthan',
    homeTract: 'Mewat region: Nuh (Haryana), Alwar and Bharatpur (Rajasthan)',
    nbagrCode: 'INDIA_CATTLE_1700_MEWATI_03020',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy dual-purpose breed of Mewat, docility combined with strong draft endurance and decent dairy yield.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'DGAT1 polymorphism',
      thermalGene: 'Semi-arid heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving backwards and outwards',
      ears: 'Medium, alert',
      coatColor: 'White with darker neck and head in bulls',
      humpAndDewlap: 'Well-developed hump and loose dewlap',
      sizeAndBuild: 'Medium, compact, deep barrel',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '950 – 1,400 kg per lactation',
      fatPercentage: '4.4% – 4.8%',
      weightMaleKg: '470 kg',
      weightFemaleKg: '340 kg',
      hardiness: 'High',
      heatTolerance: 'High resistance to dry heat and cold winter nights'
    },
    historicalSignificance: 'Developed through cross-influences of Hariana and Gir in the Mewat tract.',
    pastoralCommunities: ['Meo community'],
    careRecommendations: [
      'Legume fodder and wheat straw mix',
      'Clean dry shed conditions'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Mewat', 'Dual Purpose', 'Haryana', 'Rajasthan', 'ICAR-NBAGR 03020']
  },
  {
    id: 'kherigarh-cattle',
    name: 'Kherigarh',
    vernacularName: 'खेरीगढ़ / Kherigarh',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Uttar Pradesh',
    homeTract: 'Lakhimpur Kheri district in the Terai region of Uttar Pradesh',
    nbagrCode: 'INDIA_CATTLE_2000_KHERIGARH_03016',
    nbagrStatus: 'Registered Indigenous',
    description: 'Active draught breed of the swampy Terai, famous for thin lyre-shaped horns, active trot, and high disease resistance in marshy grasslands.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Terai marsh pathogen resistance',
      thermalGene: 'Terai humid thermotolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Thin, lyre-curved, sweeping upwards and inwards',
      ears: 'Small, alert',
      coatColor: 'Pure white or greyish-white',
      humpAndDewlap: 'Well-defined firm hump, thin dewlap',
      sizeAndBuild: 'Medium, athletic, high-strung, fast trot',
      faceProfile: 'Narrow lean face'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '400 – 650 kg per lactation',
      fatPercentage: '4.6% – 5.1%',
      weightMaleKg: '420 kg',
      weightFemaleKg: '310 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Resistant to humid Terai swamp pests and foot-rot'
    },
    historicalSignificance: 'Bred in the Kheri tract for pulling carts through swampy Terai floodplains.',
    pastoralCommunities: ['Terai farmers', 'Tharu communities'],
    careRecommendations: [
      'Pasture grazing on natural Terai grasslands',
      'Timely vaccination against seasonal vector diseases'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Terai Region', 'Uttar Pradesh', 'Draught', 'Marsh Resilient', 'ICAR-NBAGR 03016']
  },
  {
    id: 'kenkatha-cattle',
    name: 'Kenkatha',
    vernacularName: 'केंकथा / Kenwariya',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Uttar Pradesh & Madhya Pradesh',
    homeTract: 'Bundelkhand along Ken river: Banda (UP), Panna and Chhatarpur (MP)',
    nbagrCode: 'INDIA_CATTLE_2000_KENKATHA_03015',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy small draught breed of Bundelkhand, able to survive on rocky scrub and drought-prone Ken river basin with high endurance.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Famine survival lipid conservation alleles',
      thermalGene: 'Bundelkhand drought tolerance genes',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Projecting forwards and curving outwards with pointed tips',
      ears: 'Small, alert',
      coatColor: 'Grey on barrel, darkening to dark grey on neck and head',
      humpAndDewlap: 'Compact hump, thin dewlap',
      sizeAndBuild: 'Small, compact, sturdy limbs with hard hooves',
      faceProfile: 'Short face, broad forehead'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '450 – 700 kg per lactation',
      fatPercentage: '4.6% – 5.0%',
      weightMaleKg: '390 kg',
      weightFemaleKg: '280 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme drought hardiness in Bundelkhand summer heat'
    },
    historicalSignificance: 'Bred along the rocky gorges of the Ken River.',
    pastoralCommunities: ['Bundelkhand farmers'],
    careRecommendations: [
      'Mineral licks during severe summer drought',
      'Shelter from intense dry hot winds (Loo)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Bundelkhand', 'Ken River', 'Drought Resilient', 'Draught', 'ICAR-NBAGR 03015']
  },
  {
    id: 'ponwar-cattle',
    name: 'Ponwar',
    vernacularName: 'पोंवार / Ponwar',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Uttar Pradesh',
    homeTract: 'Pilibhit district in Rohilkhand region of Uttar Pradesh',
    nbagrCode: 'INDIA_CATTLE_2000_PONWAR_03023',
    nbagrStatus: 'Registered Indigenous',
    description: 'Small, active draught cattle with black and white patched coat and lyre horns, bred for work in the foothill forests of the Himalayas.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High-speed trotting locomotion markers',
      thermalGene: 'Foothill climate adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Lyre-shaped, curving outwards, upwards, and slightly inwards',
      ears: 'Small, alert',
      coatColor: 'Black and white patches with white blaze on forehead',
      humpAndDewlap: 'Well-developed compact hump, thin dewlap',
      sizeAndBuild: 'Small to medium, active, agile trotter',
      faceProfile: 'Narrow face, slightly dished forehead'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '400 – 600 kg per lactation',
      fatPercentage: '4.5% – 5.1%',
      weightMaleKg: '380 kg',
      weightFemaleKg: '290 kg',
      hardiness: 'High',
      heatTolerance: 'High resistance to humid forest conditions'
    },
    historicalSignificance: 'Developed in the Purpur tract of Pilibhit.',
    pastoralCommunities: ['Local Rohilkhand farmers'],
    careRecommendations: [
      'Maintain forest grazing access',
      'Seasonal parasite control'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Pilibhit', 'Uttar Pradesh', 'Foothills', 'Draught', 'ICAR-NBAGR 03023']
  },
  {
    id: 'siri-cattle',
    name: 'Siri',
    vernacularName: 'सिरी / Siri / Trapu',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Sikkim & West Bengal',
    homeTract: 'High altitude Himalayan slopes of Sikkim and Darjeeling hills (1200–3000m)',
    nbagrCode: 'INDIA_CATTLE_2400_SIRI_03027',
    nbagrStatus: 'Registered Indigenous',
    description: 'Unique Himalayan mountain zebu breed possessing thick coarse hair coat and deep muscular hump positioned forward on the neck, adapted to cold altitudes and steep climbing.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High altitude lipid metabolism alleles',
      thermalGene: 'Cold mountain weather insulation adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Sharp, curving forwards, upwards and inwards',
      ears: 'Medium, densely haired inside',
      coatColor: 'Black or black and white patched with thick coarse hair',
      humpAndDewlap: 'Massive muscular cervico-thoracic hump situated forward on the neck, minimal dewlap',
      sizeAndBuild: 'Medium, heavy square chest, short sturdy legs with sure-footed hooves',
      faceProfile: 'Broad square forehead with tuft of coarse hair'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '500 – 850 kg per lactation',
      fatPercentage: '5.0% – 5.8%',
      weightMaleKg: '450 kg',
      weightFemaleKg: '340 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Cold tolerant; survives sub-zero Himalayan winters'
    },
    historicalSignificance: 'Indigenous to Sikkim and Bhutan border hills, vital for terraced mountain agriculture.',
    pastoralCommunities: ['Lepchas', 'Bhutias', 'Gorkhas'],
    careRecommendations: [
      'High mountain grazing supplemented with maize flour mash',
      'Protection from severe winter snowstorms'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Himalayan Zebu', 'Sikkim', 'Darjeeling', 'Cold Adapted', 'ICAR-NBAGR 03027']
  },
  {
    id: 'vechur-cattle',
    name: 'Vechur',
    vernacularName: 'വെച്ചൂർ പശു / Vechur Cow',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Kerala',
    homeTract: 'Vechur village, Kottayam district, and Kuttanad wetland ecosystem',
    nbagrCode: 'INDIA_CATTLE_0900_VECHUR_03030',
    nbagrStatus: 'Endangered / Rare',
    description: 'Officially recognized by Guinness World Records as the smallest cattle breed in the world. Renowned for extremely high milk yield relative to body mass, easy digestibility of small fat globules, and high disease resistance.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Unique beta-lactoglobulin and small micellar beta-casein structure',
      thermalGene: 'Dwarfism-linked metabolic heat dissipation efficiency',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Very small, thin, curved forward and downward or blunt',
      ears: 'Small, alert, horizontal',
      coatColor: 'Light red, fawn, black, or white',
      humpAndDewlap: 'Distinct small hump in bulls, neat hanging dewlap',
      sizeAndBuild: 'Miniature / ultra-dwarf stature (average wither height ~80-90 cm)',
      faceProfile: 'Fine delicate head with prominent expressive eyes'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '550 – 800 kg per lactation (surpassing body weight multi-fold)',
      fatPercentage: '4.8% – 5.5% (Very small fat globule size aiding rapid digestion)',
      weightMaleKg: '170 kg',
      weightFemaleKg: '130 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Extreme tolerance to humid tropical climate and resistant to mastitis & FMD'
    },
    historicalSignificance: 'Bred in the Kuttanad delta. Rescued from the brink of extinction by Dr. Sosamma Iype and Kerala Agricultural University researchers.',
    pastoralCommunities: ['Traditional homestead farmers of Kuttanad'],
    careRecommendations: [
      'Very low maintenance; consumes just 2-3 kg dry matter/green grass daily',
      'Requires minimal stall space; ideal for sustainable family micro-dairies'
    ],
    imageUrl: '/src/assets/images/specimen_vechur_cow_1792850412091.jpg',
    tags: ['World Smallest Cattle', 'Guinness Record', 'Kerala', 'Miniature', 'ICAR-NBAGR 03030']
  },
  {
    id: 'punganur-cattle',
    name: 'Punganur',
    vernacularName: 'పుంగనూరు ఆవు / Punganur Dwarf',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Andhra Pradesh',
    homeTract: 'Punganur taluk, Chittoor district in the Rayalaseema region',
    nbagrCode: 'INDIA_CATTLE_0100_PUNGANUR_03031',
    nbagrStatus: 'Endangered / Rare',
    description: 'India’s most celebrated sacred miniature zebu cow, characterized by short legs, broad forehead, docile demeanor, and high butterfat milk.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'DGAT1 and prolactin receptor markers',
      thermalGene: 'Semi-arid scrub heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, crescent, curving backwards and inwards along the neck',
      ears: 'Small, alert',
      coatColor: 'White, light grey, or shades of light brown and red',
      humpAndDewlap: 'Small neat hump in males, minimal thin dewlap',
      sizeAndBuild: 'Miniature stature (height 70-90 cm), compact barrel, short legs',
      faceProfile: 'Broad forehead, short face, docile calm eyes'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '500 – 750 kg per lactation',
      fatPercentage: '5.0% – 8.0% (Exceptionally rich milk fat for cattle)',
      weightMaleKg: '220 kg',
      weightFemaleKg: '160 kg',
      hardiness: 'High',
      heatTolerance: 'High resistance to dry semi-arid heat and limited grazing resources'
    },
    historicalSignificance: 'Reared by the royal rulers of the Punganur estate for sacred temple offerings (Ksheerabhishekam).',
    pastoralCommunities: ['Punganur royal estates', 'Rayalaseema homesteaders'],
    careRecommendations: [
      'Economical upkeep; requires small quantities of green fodder and dry grass',
      'Conserved at dedicated state breeding farms in Andhra Pradesh'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Miniature Cow', 'Rayalaseema', 'Andhra Pradesh', 'High Butterfat', 'ICAR-NBAGR 03031']
  },
  {
    id: 'kasargod-cattle',
    name: 'Kasargod',
    vernacularName: 'കാസർഗോഡ് കുള്ളൻ / Kasargod Dwarf',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Kerala',
    homeTract: 'Kasargod district in northern Kerala along Western Ghats foothills',
    nbagrCode: 'INDIA_CATTLE_0900_KASARGOD_03032',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy dwarf cattle of northern Kerala, renowned for producing high quality organic manure and mineral-rich milk on natural forest grazing.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Natural foraging lipid efficiency',
      thermalGene: 'Humid forest microclimate resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, blunt, curved forward and outward',
      ears: 'Small, alert',
      coatColor: 'Black, brown, red, or white variations',
      humpAndDewlap: 'Small compact hump, neat dewlap',
      sizeAndBuild: 'Dwarf frame (wither height ~95-100 cm), agile climber',
      faceProfile: 'Delicate head, alert eyes'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '450 – 650 kg per lactation',
      fatPercentage: '4.8% – 5.4%',
      weightMaleKg: '190 kg',
      weightFemaleKg: '145 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Extreme tolerance to humid monsoon rainfall and heat'
    },
    historicalSignificance: 'Backbone of zero-budget natural farming in Kerala coconut and arecanut orchards.',
    pastoralCommunities: ['Kasargod homestead farmers'],
    careRecommendations: [
      'Natural orchard grazing and kitchen residue browsing',
      'Provides superior organic bio-manure (Jeevamrutha)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Dwarf Cow', 'Kerala', 'Natural Farming', 'Kasargod', 'ICAR-NBAGR 03032']
  },
  {
    id: 'malnad-gidda-cattle',
    name: 'Malnad Gidda',
    vernacularName: 'ಮಲೆನಾಡು ಗಿಡ್ಡ / Malnad Gidda / Uradana',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Karnataka',
    homeTract: 'Malnad region: Shivamogga, Chikkamagaluru, Uttara Kannada, and Udupi',
    nbagrCode: 'INDIA_CATTLE_0800_MALNADGIDDA_03037',
    nbagrStatus: 'Registered Indigenous',
    description: 'Dwarf zebu cattle of the heavy-rainfall Malnad Western Ghats, renowned for disease resistance, sure-footed grazing on steep rainforest slopes, and medicinal milk.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Rainforest phytochemical assimilation loci',
      thermalGene: 'High humidity thermotolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, blunt, curved backwards and outwards',
      ears: 'Small, alert',
      coatColor: 'Black, brown, fawn, or mixed patches',
      humpAndDewlap: 'Small compact hump, neat dewlap',
      sizeAndBuild: 'Dwarf build (height ~90-100 cm), short sturdy legs with hard black hooves',
      faceProfile: 'Small, attractive head'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '500 – 750 kg per lactation',
      fatPercentage: '4.9% – 5.5%',
      weightMaleKg: '220 kg',
      weightFemaleKg: '150 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme resistance to heavy tropical rains, leeches, and tick fever'
    },
    historicalSignificance: 'Integral to the sacred ecology and betel nut / spice plantations of the Western Ghats.',
    pastoralCommunities: ['Havyaka Brahmins', 'Malnad farmers'],
    careRecommendations: [
      'Free forest grazing on wild herbs and bamboo leaves',
      'Provides prized manure for arecanut and cardamom cultivation'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Malnad', 'Western Ghats', 'Dwarf Cow', 'Karnataka', 'ICAR-NBAGR 03037']
  },
  {
    id: 'belahi-cattle',
    name: 'Belahi',
    vernacularName: 'बेलाही / Belahi / Gujjar Cattle',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Haryana & Chandigarh',
    homeTract: 'Foothills of Shivalik hills: Panchkula, Ambala, and Yamunanagar',
    nbagrCode: 'INDIA_CATTLE_0500_BELAHI_03038',
    nbagrStatus: 'Registered Indigenous',
    description: 'Migratory dual-purpose cattle reared by pastoral Gujjars, noted for grey or reddish-dun coat, hard hooves, and high stamina in Shivalik foothills.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'DGAT1 polymorphism',
      thermalGene: 'Sub-Himalayan foothill climate adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Curving backwards and upwards',
      ears: 'Medium, alert',
      coatColor: 'Reddish-dun or greyish-white',
      humpAndDewlap: 'Prominent thoracic hump, loose dewlap',
      sizeAndBuild: 'Medium, active migratory frame',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,000 – 1,400 kg per lactation',
      fatPercentage: '4.5% – 5.0%',
      weightMaleKg: '450 kg',
      weightFemaleKg: '330 kg',
      hardiness: 'High',
      heatTolerance: 'Well adapted to seasonal pastoral transhumance'
    },
    historicalSignificance: 'Maintained for generations by migratory Gujjar pastoralists.',
    pastoralCommunities: ['Pastoral Gujjars'],
    careRecommendations: [
      'Seasonal grazing supplemented with mustard cake',
      'Regular foot health monitoring during migration'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Shivalik Hills', 'Gujjar Pastoral', 'Haryana', 'Dual-Purpose', 'ICAR-NBAGR 03038']
  },
  {
    id: 'gangatiri-cattle',
    name: 'Gangatiri',
    vernacularName: 'गंगातीरी / Eastern Hariana',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Uttar Pradesh & Bihar',
    homeTract: 'Along the banks of River Ganga in Varanasi, Ghazipur, Ballia (UP) and Bhojpur (Bihar)',
    nbagrCode: 'INDIA_CATTLE_2000_GANGATIRI_03039',
    nbagrStatus: 'Registered Indigenous',
    description: 'Dual-purpose indigenous cattle native to the fertile Ganga floodplains, noted for pure white coat, docile nature, and good milk yield on river grasses.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'DGAT1 and CSN3 alleles',
      thermalGene: 'River basin humid heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Medium, curving backwards and outwards with pointed tips',
      ears: 'Medium, alert',
      coatColor: 'Complete white or very light grey',
      humpAndDewlap: 'Well-developed thoracic hump, moderately loose dewlap',
      sizeAndBuild: 'Medium, proportionate, symmetrical frame',
      faceProfile: 'Straight forehead profile'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,200 – 1,800 kg per lactation',
      fatPercentage: '4.3% – 4.9%',
      weightMaleKg: '460 kg',
      weightFemaleKg: '340 kg',
      hardiness: 'High',
      heatTolerance: 'Exceptional adaptation to humid floodplains and waterlogged riverbanks'
    },
    historicalSignificance: 'Sacred river cow revered along the holy Ganga ghats of Varanasi and Kashi.',
    pastoralCommunities: ['Yadavs', 'Bhojpur riverine farmers'],
    careRecommendations: [
      'River bank grazing on natural Dub and Kans grasses',
      'Dry stall flooring during monsoon river flooding'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Ganga River', 'Varanasi', 'Uttar Pradesh', 'Bihar', 'Dual-Purpose', 'ICAR-NBAGR 03039']
  },
  {
    id: 'badri-cattle',
    name: 'Badri',
    vernacularName: 'बद्री गाय / Pahari Cow',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Uttarakhand',
    homeTract: 'Himalayan hills of Almora, Pauri, Chamoli, Tehri, and Pithoragarh (1000–2500m)',
    nbagrCode: 'INDIA_CATTLE_2400_BADRI_03040',
    nbagrStatus: 'Registered Indigenous',
    description: 'First registered indigenous cattle breed of Uttarakhand. Small, agile mountain cow grazing on wild Himalayan medicinal herbs and shrubs, yielding rich A2 milk.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High altitude fatty acid desaturase alleles',
      thermalGene: 'High-altitude cold and hypoxia adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving backwards and upwards',
      ears: 'Small, alert, horizontal',
      coatColor: 'Black, brown, red, or dappled with short dense hair',
      humpAndDewlap: 'Small compact hump, neat dewlap',
      sizeAndBuild: 'Small, sure-footed mountain build with rock-hard cleft hooves for steep slopes',
      faceProfile: 'Small delicate face with alert bright eyes'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '450 – 750 kg per lactation',
      fatPercentage: '4.8% – 5.6% (Rich in antioxidants from alpine herb browsing)',
      weightMaleKg: '250 kg',
      weightFemaleKg: '180 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Extreme tolerance to mountain cold, rain, and steep altitude'
    },
    historicalSignificance: 'Centuries-old dairy companion of Garhwal and Kumaon mountain folk; milk used in temple ceremonies across Char Dham.',
    pastoralCommunities: ['Garhwali & Kumaoni hill farmers'],
    careRecommendations: [
      'Open hill grazing on Oak (Banj), Rhododendron, and alpine herbal pastures',
      'Provide warm stone cowsheds (Goth) during freezing winter snows'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Uttarakhand', 'Himalayan Cow', 'Medicinal Milk', 'Badri', 'ICAR-NBAGR 03040']
  },
  {
    id: 'lakhimi-cattle',
    name: 'Lakhimi',
    vernacularName: 'লাখিমী / Lakhimi Cow',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Assam',
    homeTract: 'Brahmaputra valley: Lakhimpur, Dhemaji, Kamrup, and across Assam',
    nbagrCode: 'INDIA_CATTLE_0200_LAKHIMI_03041',
    nbagrStatus: 'Registered Indigenous',
    description: 'Indigenous cattle of Assam and the Brahmaputra valley, small in stature with remarkable ability to thrive on wetland reeds, marsh grass, and agricultural byproducts.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Wetland adaptation alleles',
      thermalGene: 'High-humidity subtropical thermotolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving upwards and outwards',
      ears: 'Small, alert',
      coatColor: 'Grey, brown, red, or black',
      humpAndDewlap: 'Small compact hump, thin dewlap',
      sizeAndBuild: 'Small, compact, sure-footed on marshy river banks',
      faceProfile: 'Short, clean-cut face'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '400 – 650 kg per lactation',
      fatPercentage: '4.6% – 5.2%',
      weightMaleKg: '280 kg',
      weightFemaleKg: '200 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme resistance to humid monsoons and annual Brahmaputra flooding'
    },
    historicalSignificance: 'Foundational domestic animal of rural Assamese homesteads for plowing paddy and family milk.',
    pastoralCommunities: ['Assamese farmers', 'Bodo communities'],
    careRecommendations: [
      'Grazing on riparian floodplains (Chaporis)',
      'Flood season elevated shelter and stored rice straw feeding'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Assam', 'Brahmaputra', 'Wetland Cattle', 'Lakhimi', 'ICAR-NBAGR 03041']
  },
  {
    id: 'ladakhi-cattle',
    name: 'Ladakhi',
    vernacularName: 'ལ་དྭགས་ཀྱི་བ་ཕྱུགས / Ladakhi Cow',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'UT of Ladakh',
    homeTract: 'High-altitude cold arid desert valleys of Leh and Kargil (3000–4500m)',
    nbagrCode: 'INDIA_CATTLE_3100_LADAKHI_03042',
    nbagrStatus: 'Registered Indigenous',
    description: 'Unique high-altitude cold-tolerant cattle breed of Ladakh, possessing thick hairy coat and biological adaptations to survive extreme hypoxia and sub-zero temperatures (-35°C).',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Cold climate lipid synthase and EPAS1 hypoxia alleles',
      thermalGene: 'Extreme cold adaptation / dense undercoat genes',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving outwards and upwards',
      ears: 'Small, densely hairy inside',
      coatColor: 'Black or dark brown with dense woolly undercoat',
      humpAndDewlap: 'Compact hump, small thick dewlap',
      sizeAndBuild: 'Small, compact, sturdy limbs with tough hooves for rocky mountain terrain',
      faceProfile: 'Short face with broad forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '450 – 700 kg per lactation',
      fatPercentage: '5.0% – 5.6%',
      weightMaleKg: '300 kg',
      weightFemaleKg: '220 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Adapted to extreme sub-zero cold (-35°C); low tolerance to plains heat'
    },
    historicalSignificance: 'Essential dairy and draft companion of Ladakhi Buddhist and Muslim high-altitude settlements.',
    pastoralCommunities: ['Ladakhi agro-pastoralists'],
    careRecommendations: [
      'Alfalfa (Ole) and barley straw winter feeding',
      'Warm traditional earth-insulated shelters during frozen Himalayan winter'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Ladakh', 'Cold Arid Desert', 'High Altitude', 'Hypoxia Adapted', 'ICAR-NBAGR 03042']
  },
  {
    id: 'konkan-kapila-cattle',
    name: 'Konkan Kapila',
    vernacularName: 'कोकण कपिला / Konkan Kapila',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Maharashtra & Goa',
    homeTract: 'Konkan coastal belt: Ratnagiri, Sindhudurg, Raigad, and North/South Goa',
    nbagrCode: 'INDIA_CATTLE_1100_KONKANKAPILA_03043',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy small cattle of the Konkan coast, thriving on laterite hills and rice terraces with supreme resistance to tropical tick parasites and torrential rains.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Tropical coastal foraging metabolism',
      thermalGene: 'Coastal monsoon and high-humidity heat adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving backwards and upwards',
      ears: 'Small, alert, horizontal',
      coatColor: 'Reddish-brown, grey, black, or white variations',
      humpAndDewlap: 'Small compact hump, neat thin dewlap',
      sizeAndBuild: 'Small to medium, compact, agile on laterite plateau slopes',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '500 – 800 kg per lactation',
      fatPercentage: '4.6% – 5.2%',
      weightMaleKg: '350 kg',
      weightFemaleKg: '250 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme resistance to humid maritime heat and wet hoof conditions'
    },
    historicalSignificance: 'Traditional draft and milch breed of Konkani and Goan agriculturalists.',
    pastoralCommunities: ['Konkan farmers', 'Goan gauncars'],
    careRecommendations: [
      'Pasture grazing on coastal plateaus and cashew/coconut orchards',
      'Dry shed flooring during heavy southwest monsoon'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Konkan', 'Goa', 'Coastal Zebu', 'Dual Purpose', 'ICAR-NBAGR 03043']
  },
  {
    id: 'shweta-kapila-cattle',
    name: 'Shweta Kapila',
    vernacularName: 'श्वेत कपिला / Shweta Kapila',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Goa',
    homeTract: 'Valpoi, Sattari, and Ponda taluks in North and South Goa',
    nbagrCode: 'INDIA_CATTLE_3000_SHWETAKAPILA_03044',
    nbagrStatus: 'Registered Indigenous',
    description: 'Completely white sacred cow of Goa, possessing immaculate white coat, white eyelashes, white muzzle, white horns, and white hooves with high spiritual significance.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Complete leucistic pigmentation alleles / DGAT1',
      thermalGene: 'High solar reflectance white pigmentation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, pure light/white or yellowish-white',
      ears: 'Small, alert, with white inner hair',
      coatColor: 'Dazzling pure white coat, white eyelashes, white muzzle, and white hooves',
      humpAndDewlap: 'Neat upright hump, moderate white dewlap',
      sizeAndBuild: 'Medium, elegant, docile disposition',
      faceProfile: 'Pleasing feminine head, calm eyes'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '600 – 900 kg per lactation',
      fatPercentage: '4.7% – 5.3%',
      weightMaleKg: '360 kg',
      weightFemaleKg: '260 kg',
      hardiness: 'High',
      heatTolerance: 'Reflects intense tropical solar radiation effectively'
    },
    historicalSignificance: 'Revered as sacred "Kamadhenu" in Goan temple rituals; mentioned in ancient Goan folklore.',
    pastoralCommunities: ['Goan traditional farmers'],
    careRecommendations: [
      'Orchard grazing in spice and coconut plantations',
      'Balanced mineral supplements'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Goa', 'Pure White', 'Sacred Cow', 'Milch', 'ICAR-NBAGR 03044']
  },
  {
    id: 'nari-cattle',
    name: 'Nari',
    vernacularName: 'नारी / Nari / Sirohi Cow',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Rajasthan & Gujarat',
    homeTract: 'Aravalli hill ranges: Sirohi, Pali, Udaipur (Rajasthan) and Sabarkantha (Gujarat)',
    nbagrCode: 'INDIA_CATTLE_1704_NARI_03045',
    nbagrStatus: 'Registered Indigenous',
    description: 'Dual-purpose breed of the Aravalli hills, bred by Rebari pastoralists for survival on steep rocky terrain and thorn scrub browsing.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Aravalli arid browsing lipid alleles',
      thermalGene: 'Arid rocky hill thermotolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Medium, curving outwards and upwards with sharp tips',
      ears: 'Medium, alert',
      coatColor: 'White, grey, or reddish-brown with white patches',
      humpAndDewlap: 'Compact firm hump, thin dewlap',
      sizeAndBuild: 'Medium, agile, sure-footed on steep rocky hills',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '900 – 1,300 kg per lactation',
      fatPercentage: '4.4% – 4.9%',
      weightMaleKg: '420 kg',
      weightFemaleKg: '310 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme hardiness in Aravalli scrubland and rocky terrain'
    },
    historicalSignificance: 'Maintained by nomadic Rebaris and Raikas in the southern Aravallis.',
    pastoralCommunities: ['Rebaris', 'Garasias', 'Raikas'],
    careRecommendations: [
      'Silvopastoral thorn scrub grazing',
      'Adequate water provision in hot arid seasons'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Aravalli Hills', 'Rajasthan', 'Gujarat', 'Rebari', 'ICAR-NBAGR 03045']
  },
  {
    id: 'dagri-cattle',
    name: 'Dagri',
    vernacularName: 'ડાગરી / Dagri / Gujarat Hill Cow',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Gujarat',
    homeTract: 'Tribal belt of Dahod, Panchmahal, Mahisagar, and Chhota Udepur',
    nbagrCode: 'INDIA_CATTLE_0400_DAGRI_03046',
    nbagrStatus: 'Registered Indigenous',
    description: 'Small, hardy draught cattle reared by tribal communities in eastern Gujarat, famed for plowing rocky undulating hill soils with minimal inputs.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Frugal nutrition metabolism markers',
      thermalGene: 'Dry deciduous forest heat resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving backwards and outwards',
      ears: 'Small, alert',
      coatColor: 'White or light grey',
      humpAndDewlap: 'Small compact hump, neat dewlap',
      sizeAndBuild: 'Small, compact, wiry limbs with tough hooves',
      faceProfile: 'Narrow, clean face'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '400 – 650 kg per lactation',
      fatPercentage: '4.5% – 5.0%',
      weightMaleKg: '340 kg',
      weightFemaleKg: '240 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'High resistance to drought and poor forage seasons'
    },
    historicalSignificance: 'Essential agricultural draft asset for Bhil and Rathwa tribal farmers.',
    pastoralCommunities: ['Bhil', 'Rathwa', 'Nayaka tribes'],
    careRecommendations: [
      'Forest fringe browsing and crop residue feeding',
      'Protection against common seasonal livestock diseases'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Gujarat Tribal', 'Dahod', 'Draught', 'Dagri', 'ICAR-NBAGR 03046']
  },
  {
    id: 'thutho-cattle',
    name: 'Thutho',
    vernacularName: 'Thutho / Nagaland Indigenous Cattle',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Nagaland',
    homeTract: 'Kohima, Phek, and Zunheboto districts in the hills of Nagaland',
    nbagrCode: 'INDIA_CATTLE_1400_THUTHO_03047',
    nbagrStatus: 'Registered Indigenous',
    description: 'Semi-feral, muscular indigenous cattle of Nagaland, prized for draft in hill jhum cultivation and cultural meat utility.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Mountain forest foraging adaptation',
      thermalGene: 'High-altitude sub-tropical forest resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, thick, sharp points projecting upwards and forwards',
      ears: 'Medium, alert',
      coatColor: 'Black, brownish-black, or pied with white patches',
      humpAndDewlap: 'Prominent muscular cervico-thoracic hump, tight dewlap',
      sizeAndBuild: 'Medium, muscular, deep chest, sure-footed',
      faceProfile: 'Broad forehead, powerful poll'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '350 – 500 kg per lactation',
      fatPercentage: '4.8% – 5.4%',
      weightMaleKg: '420 kg',
      weightFemaleKg: '300 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Well adapted to dense subtropical rainforest and hilly terrain'
    },
    historicalSignificance: 'Integral to Naga traditional agrarian ceremonies and tribal forest management.',
    pastoralCommunities: ['Angami', 'Chakhesang', 'Sumi Nagas'],
    careRecommendations: [
      'Forest grazing in designated community forest pastures',
      'Salt licks provided at community gathering enclosures'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Nagaland', 'Hill Cattle', 'Naga Heritage', 'Thutho', 'ICAR-NBAGR 03047']
  },
  {
    id: 'himachali-pahari-cattle',
    name: 'Himachali Pahari',
    vernacularName: 'हिमाचली पहाड़ी / Pahari Cow',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Himachal Pradesh',
    homeTract: 'Mandi, Kangra, Chamba, Shimla, and Kullu hill districts (1000–3000m)',
    nbagrCode: 'INDIA_CATTLE_0600_HIMACHALIPAHARI_03048',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy mountain cattle of the Western Himalayas, small in stature with dense hair coat, remarkable mountain grazing agility, and nutrient-dense A2 milk.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High altitude unsaturated fatty acid synthase',
      thermalGene: 'Cold mountain tolerance genes',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving upwards and outwards',
      ears: 'Small, alert',
      coatColor: 'Black, red, brown, or pied with thick dense coat',
      humpAndDewlap: 'Small compact hump, neat dewlap',
      sizeAndBuild: 'Small, compact, sure-footed on steep Himalayan terrace edges',
      faceProfile: 'Small delicate head'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '500 – 800 kg per lactation',
      fatPercentage: '4.8% – 5.5%',
      weightMaleKg: '280 kg',
      weightFemaleKg: '200 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Cold hardy; easily withstands snowy Himalayan winters'
    },
    historicalSignificance: 'Backbone of traditional mountain agriculture across the Himachal hills.',
    pastoralCommunities: ['Gaddi shepherds', 'Himachali mountain farmers'],
    careRecommendations: [
      'Forest browsing on oak leaves and alpine meadow grasses',
      'Warm winter shed protection during snowfall'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Himachal Pradesh', 'Western Himalayas', 'Pahari Cow', 'ICAR-NBAGR 03048']
  },
  {
    id: 'purnea-cattle',
    name: 'Purnea',
    vernacularName: 'पूर्णिया गाय / Purnea Deshi',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Bihar',
    homeTract: 'Purnea, Katihar, Kishanganj, and Araria districts in eastern Bihar',
    nbagrCode: 'INDIA_CATTLE_0300_PURNEA_03049',
    nbagrStatus: 'Registered Indigenous',
    description: 'Resilient indigenous cattle of the Kosi floodplains in eastern Bihar, adapted to waterlogged flood plains with high resistance to endemic parasites.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Floodplain nutrition assimilation',
      thermalGene: 'Humid subtropical heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving backwards and upwards',
      ears: 'Medium, alert',
      coatColor: 'Grey, red, or black',
      humpAndDewlap: 'Medium compact hump, neat dewlap',
      sizeAndBuild: 'Small to medium, compact, hardy hooves',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '450 – 700 kg per lactation',
      fatPercentage: '4.5% – 5.0%',
      weightMaleKg: '330 kg',
      weightFemaleKg: '230 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme resistance to humid heat and annual Kosi river flood conditions'
    },
    historicalSignificance: 'Preserved by eastern Bihar farmers through generations of annual flooding.',
    pastoralCommunities: ['Seemanchal rural farmers'],
    careRecommendations: [
      'Supplement coarse grasses with pulse husks',
      'Vaccination against Haemorrhagic Septicaemia (HS) during monsoons'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Bihar', 'Kosi Floodplains', 'Dual Purpose', 'Purnea', 'ICAR-NBAGR 03049']
  },
  {
    id: 'kathani-cattle',
    name: 'Kathani',
    vernacularName: 'कठानी / Kathani Bull',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Maharashtra',
    homeTract: 'Chandrapur, Gadchiroli, and Gondia forest districts in eastern Vidarbha',
    nbagrCode: 'INDIA_CATTLE_1100_KATHANI_03050',
    nbagrStatus: 'Registered Indigenous',
    description: 'Sturdy draught cattle native to the dense sal and teak forests of Gadchiroli, prized for puddling wet paddy soils and hauling forest produce.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Forest floor draft endurance alleles',
      thermalGene: 'Forest canopy microclimate resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, thick, pointing backwards and upwards',
      ears: 'Medium, alert',
      coatColor: 'Brown, reddish-brown, or greyish-white',
      humpAndDewlap: 'Compact muscular hump, thin dewlap',
      sizeAndBuild: 'Medium, muscular, strong limbs with hard black hooves',
      faceProfile: 'Flat forehead, dished muzzle'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '400 – 650 kg per lactation',
      fatPercentage: '4.6% – 5.1%',
      weightMaleKg: '380 kg',
      weightFemaleKg: '270 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme resistance to humid heat and dense forest conditions'
    },
    historicalSignificance: 'Bred by Gond and Kolam tribal cultivators for forest farming.',
    pastoralCommunities: ['Gond tribes', 'Kolams', 'Vidarbha paddy farmers'],
    careRecommendations: [
      'Forest pasture grazing supplemented with rice bran',
      'Routine vaccination against endemic hemorrhagic septicemia'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Gadchiroli', 'Vidarbha', 'Gond Heritage', 'Draught', 'ICAR-NBAGR 03050']
  },
  {
    id: 'sanchori-cattle',
    name: 'Sanchori',
    vernacularName: 'सांचोरी / Sanchori',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Rajasthan',
    homeTract: 'Sanchore and Jalore districts in south-western Rajasthan',
    nbagrCode: 'INDIA_CATTLE_1700_SANCHORI_03051',
    nbagrStatus: 'Registered Indigenous',
    description: 'Prominent dual-purpose zebu breed of south-west Rajasthan, possessing large lyre-like horns, good milk yield, and excellent draft capability in sandy soils.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'DGAT1 and desert lipid efficiency',
      thermalGene: 'Extreme desert solar radiation tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Large, lyre-shaped, curving outwards and upwards',
      ears: 'Broad, pendulous',
      coatColor: 'White or silver-grey',
      humpAndDewlap: 'Prominent thoracic hump, loose folded dewlap',
      sizeAndBuild: 'Large, strong-boned, majestic desert build',
      faceProfile: 'Short face, broad forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,400 – 2,200 kg per lactation',
      fatPercentage: '4.5% – 5.0%',
      weightMaleKg: '520 kg',
      weightFemaleKg: '380 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme adaptation to Thar desert heatwaves exceeding 47°C'
    },
    historicalSignificance: 'Developed along the Luni river basin by Sanchore cattle breeders.',
    pastoralCommunities: ['Rebaris', 'Purohits', 'Chaudharis'],
    careRecommendations: [
      'High-fibre dry fodder with pearl millet (Bajra) stover',
      'Ample water during summer heat spikes'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Sanchore', 'Rajasthan', 'Thar Border', 'Dual Purpose', 'ICAR-NBAGR 03051']
  },
  {
    id: 'masilum-cattle',
    name: 'Masilum',
    vernacularName: 'Masilum / Khasi Hill Cattle',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Meghalaya',
    homeTract: 'East Khasi Hills, West Khasi Hills, and Ri-Bhoi districts (1000–1800m)',
    nbagrCode: 'INDIA_CATTLE_1300_MASILUM_03052',
    nbagrStatus: 'Registered Indigenous',
    description: 'Indigenous small cattle breed of Meghalaya, adept at grazing steep mist-covered pine slopes and terraced fields in high rainfall zones.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High-rainfall pine forest foraging alleles',
      thermalGene: 'Cold wet climate thermoregulation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving upwards and outwards',
      ears: 'Small, alert',
      coatColor: 'Black, brownish-black, or red with white spots',
      humpAndDewlap: 'Small compact hump, neat dewlap',
      sizeAndBuild: 'Small, sure-footed on steep wet hill slopes',
      faceProfile: 'Small delicate face'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '400 – 600 kg per lactation',
      fatPercentage: '4.8% – 5.3%',
      weightMaleKg: '300 kg',
      weightFemaleKg: '210 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Exceptional tolerance to high-altitude rain and damp hill climates'
    },
    historicalSignificance: 'Reared by the Khasi and Jaintia indigenous communities for centuries.',
    pastoralCommunities: ['Khasi and Jaintia farmers'],
    careRecommendations: [
      'Hill grazing supplemented with rice beer mash residues',
      'Protection from prolonged damp monsoon bedding'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Meghalaya', 'Khasi Hills', 'Cloud Forest', 'Masilum', 'ICAR-NBAGR 03052']
  },
  {
    id: 'bachaur-cattle',
    name: 'Bachaur',
    vernacularName: 'बछौर / Bachaur',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Bihar',
    homeTract: 'Madhubani, Darbhanga, and Sitamarhi districts in Mithila region',
    nbagrCode: 'INDIA_CATTLE_0300_BACHAUR_03003',
    nbagrStatus: 'Registered Indigenous',
    description: 'Renowned draught breed of Mithila, closely resembling Hariana, famed for pulling heavy carts through wet clay and plowing sticky soils.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Heavy draft muscle alleles',
      thermalGene: 'Mithila humid subtropical heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, thick, curving outwards and upwards',
      ears: 'Medium, alert',
      coatColor: 'Greyish-white to pure white',
      humpAndDewlap: 'Compact firm hump, moderately loose dewlap',
      sizeAndBuild: 'Medium, compact, sturdy limbs with hard hooves',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '600 – 900 kg per lactation',
      fatPercentage: '4.4% – 4.9%',
      weightMaleKg: '450 kg',
      weightFemaleKg: '320 kg',
      hardiness: 'High',
      heatTolerance: 'High resistance to humid summer heat'
    },
    historicalSignificance: 'Revered in Mithila folklore; celebrated at the historic Sitamarhi cattle fair.',
    pastoralCommunities: ['Maithil farmers'],
    careRecommendations: [
      'Rice straw and mustard cake concentrate',
      'Provide clean shaded sheds'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Mithila', 'Bihar', 'Draught', 'Bachaur', 'ICAR-NBAGR 03003']
  },
  {
    id: 'binjharpuri-cattle',
    name: 'Binjharpuri',
    vernacularName: 'ବିଞ୍ଝାରପୁରୀ / Binjharpuri / Deshi',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Odisha',
    homeTract: 'Jajpur, Bhadrak, and Kendrapara districts in coastal Odisha',
    nbagrCode: 'INDIA_CATTLE_1500_BINJHARPURI_03033',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy dual-purpose breed of coastal Odisha, noted for white coat, black muzzle and hooves, and ability to plow waterlogged paddy.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Coastal delta nutrition alleles',
      thermalGene: 'High-humidity coastal heat resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving upwards and outwards',
      ears: 'Medium, alert',
      coatColor: 'White or light grey with black muzzle, hooves, and switch of tail',
      humpAndDewlap: 'Medium compact hump, neat dewlap',
      sizeAndBuild: 'Medium, proportionate, sturdy limbs',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '900 – 1,350 kg per lactation',
      fatPercentage: '4.3% – 4.8%',
      weightMaleKg: '420 kg',
      weightFemaleKg: '300 kg',
      hardiness: 'High',
      heatTolerance: 'Supreme resistance to humid maritime climate and flood conditions'
    },
    historicalSignificance: 'Backbone of agriculture along the Brahmani and Baitarani river deltas.',
    pastoralCommunities: ['Coastal Odia farmers'],
    careRecommendations: [
      'Paddy straw supplemented with green fodder',
      'Monsoon flood disease preventive vaccinations'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Odisha', 'Coastal Delta', 'Dual Purpose', 'Binjharpuri', 'ICAR-NBAGR 03033']
  },
  {
    id: 'ghumusari-cattle',
    name: 'Ghumusari',
    vernacularName: 'ଘୁମୁସରୀ / Ghumusari',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Odisha',
    homeTract: 'Ganjam and Kandhamal hill tracts in southern Odisha',
    nbagrCode: 'INDIA_CATTLE_1500_GHUMUSARI_03034',
    nbagrStatus: 'Registered Indigenous',
    description: 'Small, agile draught cattle native to the Eastern Ghats of Odisha, prized for plowing steep terrace paddies and trotting across rocky paths.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Eastern Ghats terrace plowing alleles',
      thermalGene: 'Semi-arid hill climate adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, thick, pointing outwards and upwards',
      ears: 'Small, alert',
      coatColor: 'White, light brown, or grey with black switch of tail',
      humpAndDewlap: 'Small compact hump, neat dewlap',
      sizeAndBuild: 'Small, compact, agile on rocky mountain slopes',
      faceProfile: 'Narrow lean face'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '450 – 650 kg per lactation',
      fatPercentage: '4.5% – 5.0%',
      weightMaleKg: '340 kg',
      weightFemaleKg: '240 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme resistance to rocky hill heat and scarce forage'
    },
    historicalSignificance: 'Bred in the Ghumusar estate of Ganjam district.',
    pastoralCommunities: ['Odia hill farmers', 'Kandha tribes'],
    careRecommendations: [
      'Forest fringe grazing and crop residue feeding',
      'Hoof hygiene during monsoon field work'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Ganjam', 'Eastern Ghats', 'Odisha', 'Draught', 'ICAR-NBAGR 03034']
  },
  {
    id: 'motu-cattle',
    name: 'Motu',
    vernacularName: 'ମୋଟୁ / Motu / Desi',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Odisha, Chhattisgarh & Andhra Pradesh',
    homeTract: 'Malkangiri (Odisha), Bastar (Chhattisgarh), and East Godavari (AP) tri-state forest border',
    nbagrCode: 'INDIA_CATTLE_1500_MOTU_03036',
    nbagrStatus: 'Registered Indigenous',
    description: 'Dwarf indigenous cattle of the Dandakaranya forest tract, bred by tribal communities for draft in undulating red laterite soils.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Forest scrub foraging efficiency',
      thermalGene: 'Central Indian dry forest heat resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, straight, pointing backwards and upwards',
      ears: 'Small, alert',
      coatColor: 'Brown, reddish-brown, or greyish-white',
      humpAndDewlap: 'Small compact hump, thin dewlap',
      sizeAndBuild: 'Dwarf frame (height ~100 cm), muscular, sure-footed',
      faceProfile: 'Short clean face'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '350 – 550 kg per lactation',
      fatPercentage: '4.7% – 5.3%',
      weightMaleKg: '310 kg',
      weightFemaleKg: '220 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme drought and forest disease hardiness'
    },
    historicalSignificance: 'Bred by Koya and Maria tribal communities of the historic Dandakaranya forest.',
    pastoralCommunities: ['Koya tribes', 'Bastar tribal farmers'],
    careRecommendations: [
      'Forest grazing on wild grasses and fallen forest pods',
      'Provide salt licks during dry summer months'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Dandakaranya', 'Odisha', 'Tribal Draught', 'Motu', 'ICAR-NBAGR 03036']
  },
  {
    id: 'red-kandhari-cattle',
    name: 'Red Kandhari',
    vernacularName: 'लाल कंधारी / Lakhabunda',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Maharashtra',
    homeTract: 'Nanded, Parbhani, Latur, and Hingoli in Marathwada region',
    nbagrCode: 'INDIA_CATTLE_1100_REDKANDHARI_03025',
    nbagrStatus: 'Registered Indigenous',
    description: 'Renowned uniform deep dark red draught cattle of Marathwada, famed for stamina, fast trotting, and disciplined work in heavy black cotton soils.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Myosin heavy chain endurance alleles',
      thermalGene: 'Semi-arid Deccan plateau heat resistance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving backwards and outwards with sharp tips',
      ears: 'Medium, alert, horizontal',
      coatColor: 'Uniform deep reddish-brown to dark mahogany red throughout body',
      humpAndDewlap: 'Well-developed compact hump, moderately loose dewlap',
      sizeAndBuild: 'Medium to large, deep chest, clean-limbed, powerful draft build',
      faceProfile: 'Moderately convex forehead, dished between horns'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '600 – 900 kg per lactation',
      fatPercentage: '4.5% – 5.0%',
      weightMaleKg: '480 kg',
      weightFemaleKg: '350 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme stamina under scorching Marathwada summer sun'
    },
    historicalSignificance: 'Bred in Kandhar taluk of Nanded; maintained by royal patronage of the Rashtrakuta kings.',
    pastoralCommunities: ['Marathwada farmers'],
    careRecommendations: [
      'High-protein sorghum stover and groundnut cake supplementation',
      'Clean dry flooring to protect hooves in black cotton mud'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Marathwada', 'Deep Red', 'Draught', 'Maharashtra', 'ICAR-NBAGR 03025']
  },
  {
    id: 'hissar-cattle',
    name: 'Hissar',
    vernacularName: 'हिसार / Hansi',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Haryana',
    homeTract: 'Hisar, Sirsa, and Bhiwani districts in western Haryana',
    nbagrCode: 'INDIA_CATTLE_0500_HISSAR_03012',
    nbagrStatus: 'Registered Indigenous',
    description: 'Heavy dual-purpose breed developed at the historic Government Livestock Farm, Hisar, blending Kankrej, Hariana, and Gir traits for heavy draft and milk.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Composite draft-dairy alleles',
      thermalGene: 'Arid climate thermotolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Curving outwards and upwards, lyre-like',
      ears: 'Medium, slightly drooping',
      coatColor: 'Silver-grey to iron-grey with darker quarters in bulls',
      humpAndDewlap: 'Prominent thoracic hump, loose folded dewlap',
      sizeAndBuild: 'Very large, heavy bone structure, powerful draft frame',
      faceProfile: 'Broad forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,400 – 2,000 kg per lactation',
      fatPercentage: '4.4% – 4.9%',
      weightMaleKg: '580 kg',
      weightFemaleKg: '410 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Extreme tolerance to North Indian semi-arid summer spikes'
    },
    historicalSignificance: 'One of the earliest scientifically bred livestock strains of northern India.',
    pastoralCommunities: ['Haryana farmers'],
    careRecommendations: [
      'Substantial green fodder and dry roughage feeding',
      'Spacious open paddocks for heavy working bulls'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Heavy Dual-Purpose', 'Hisar', 'Haryana', 'Draught', 'ICAR-NBAGR 03012']
  },

  // =========================================================================
  // 20 REGISTERED INDIAN BUFFALO BREEDS (Bubalus bubalis / River Buffalo)
  // Officially Registered by ICAR-NBAGR
  // =========================================================================
  {
    id: 'murrah-buffalo',
    name: 'Murrah',
    vernacularName: 'मुर्राह / Khundi / Black Gold',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Haryana & Punjab',
    homeTract: 'Rohtak, Jind, Hisar, Karnal, Fatehabad (Haryana) and Nabha, Patiala (Punjab)',
    nbagrCode: 'INDIA_BUFFALO_1700_MURRAH_04008',
    nbagrStatus: 'Common / Abundant',
    description: 'Premier dairy buffalo breed of the world, nicknamed "Black Gold" of Indian agriculture. Characterized by tightly curled spiral horns (Khundi), jet-black lustrous skin, and massive wedge-shaped milk conformation.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50 (5 pairs submetacentric, 20 pairs acrocentric)',
      fatRegulatorGene: 'DGAT1 and PPARGC1A high lipid synthase regulation',
      thermalGene: 'Melanin rich epidermis requiring water immersion for heat dissipation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, tightly coiled like a spiral ring (Khundi)',
      ears: 'Thin, alert, slightly drooping',
      coatColor: 'Deep jet black; occasional white switch on tail tip',
      humpAndDewlap: 'No dorsal hump (river buffalo); clean brisket and dewlap',
      sizeAndBuild: 'Massive, heavy-boned, deep-bodied barrel structure',
      faceProfile: 'Refined feminine head in females; masculine broad poll in males'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '2,200 – 4,500 kg per lactation',
      fatPercentage: '7.0% – 8.5%',
      weightMaleKg: '750 kg',
      weightFemaleKg: '550 kg',
      hardiness: 'High',
      heatTolerance: 'Requires wallowing pond or cold misting in hot arid dry spells'
    },
    historicalSignificance: 'Engine of India’s White Revolution (Operation Flood). Exported globally across Asia, Europe, and Latin America to boost dairy productivity.',
    pastoralCommunities: ['Jat farmers', 'Ahirs', 'Gujjars'],
    careRecommendations: [
      'Provide clean wallowing pool or daily water showers to assist thermoregulation',
      'Feed energy-dense green fodder (sorghum, berseem, maize) with mustard cake concentrate',
      'Maintain strict milking hygiene to safeguard against mastitis'
    ],
    imageUrl: '/src/assets/images/specimen_murrah_buffalo_1792850390932.jpg',
    tags: ['Black Gold', 'Spiral Horns', 'Haryana', 'Punjab', 'Highest Milk', 'ICAR-NBAGR 04008']
  },
  {
    id: 'nili-ravi-buffalo',
    name: 'Nili-Ravi',
    vernacularName: 'नीली-रावी / Panch Kalyani',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Punjab',
    homeTract: 'Sutlej and Ravi river valleys: Ferozepur, Fazilka, Amritsar, Gurdaspur districts',
    nbagrCode: 'INDIA_BUFFALO_1600_NILIRAVI_04009',
    nbagrStatus: 'Registered Indigenous',
    description: 'Renowned for "Panch Kalyani" markings—five distinctive white points: white forehead star/blaze, white muzzle, white switch of tail, and white markings on all four legs, often accompanied by wall eyes (glass eyes).',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'DGAT1 / FASN lipid pathway',
      thermalGene: 'River valley wallowing thermoregulation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, coiled tightly with irregular curves',
      ears: 'Medium, pointed',
      coatColor: 'Black with Panch Kalyani white markings (forehead, 4 legs, tail switch) and white wall eyes',
      humpAndDewlap: 'None; clean throat and chest',
      sizeAndBuild: 'Medium to heavy, deep barrel, wedge dairy conformation',
      faceProfile: 'Convex forehead with white star, dished between wall eyes'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '2,000 – 3,500 kg per lactation',
      fatPercentage: '6.8% – 7.8%',
      weightMaleKg: '700 kg',
      weightFemaleKg: '500 kg',
      hardiness: 'High',
      heatTolerance: 'Adapted to riverine floodplains; benefits from daily wallowing'
    },
    historicalSignificance: 'Composite created from the Nili (blue waters of Sutlej) and Ravi river buffaloes.',
    pastoralCommunities: ['Punjabi dairy farmers', 'River graziers'],
    careRecommendations: [
      'River or pond wallowing for optimal thermal balance',
      'High-protein green berseem and silage feeding'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80',
    tags: ['Panch Kalyani', 'Wall Eyes', 'Punjab', 'Sutlej-Ravi', 'Milch', 'ICAR-NBAGR 04009']
  },
  {
    id: 'bhadawari-buffalo',
    name: 'Bhadawari',
    vernacularName: 'भदावरी / Copper Buffalo / Janeva',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Uttar Pradesh & Madhya Pradesh',
    homeTract: 'Ravines of Yamuna and Chambal rivers in Agra, Etawah (UP), and Bhind, Morena (MP)',
    nbagrCode: 'INDIA_BUFFALO_2000_BHADAWARI_04002',
    nbagrStatus: 'Conservation Priority',
    description: 'World-famous for having the highest butterfat content of any bovine or bubaline milk in the world (reaching 12.8% - 14%), characterized by copper-colored coat and two white neck lines (Janeva).',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Exceptional DGAT1 lipid synthesis enzyme efficiency',
      thermalGene: 'Chambal ravine arid heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Curled backwards, parallel to neck, then inward at tips',
      ears: 'Medium, alert',
      coatColor: 'Distinctive copper or light brownish-red with sparse hair; legs copper fawn',
      humpAndDewlap: 'None; clean neck with two white lines (Janeva) around lower neck',
      sizeAndBuild: 'Medium, wedge-shaped, compact, sturdy hooves',
      faceProfile: 'Narrow forehead, refined face'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '1,200 – 1,600 kg per lactation',
      fatPercentage: '8.5% – 13.5% (World Record Bovine Milk Fat)',
      weightMaleKg: '480 kg',
      weightFemaleKg: '380 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Unrivalled ability to withstand hot dry summer ravines with low green fodder'
    },
    historicalSignificance: 'Cherished by traditional ghee makers because 1 liter of Bhadawari milk yields double the clarified butter (ghee) of ordinary cattle milk.',
    pastoralCommunities: ['Bhadawar Rajputs', 'Chambal farmers'],
    careRecommendations: [
      'Flourishes on coarse roughages and ravine bush browsing',
      'National conservation breeding programs in ICAR-CIRB actively preserve pure bloodlines'
    ],
    imageUrl: '/src/assets/images/specimen_bhadawari_buffalo_1792850411944.jpg',
    tags: ['World Record Fat', 'Copper Buffalo', 'Chambal', 'Ghee Breed', 'ICAR-NBAGR 04002']
  },
  {
    id: 'jaffarabadi-buffalo',
    name: 'Jaffarabadi',
    vernacularName: 'जाफराबादी / Gir Buffalo / Bhavnagri',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Gujarat',
    homeTract: 'Gir forest, Saurashtra: Junagadh, Bhavnagar, Amreli, Porbandar, and Jamnagar',
    nbagrCode: 'INDIA_BUFFALO_0400_JAFFARABADI_04004',
    nbagrStatus: 'Registered Indigenous',
    description: 'Heaviest and largest buffalo breed of India, distinguished by massive, heavy drooping horns that hang down beside the face with upward-hooked tips, and prominent forehead bulge.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'FASN high lipid yield genotype',
      thermalGene: 'Gir forest wallowing adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Heavy, broad, flat horns drooping down beside the neck with hooked upward ends',
      ears: 'Broad, long, drooping horizontally',
      coatColor: 'Deep black with occasional white star on poll',
      humpAndDewlap: 'Massive neck with heavy dewlap folds around brisket',
      sizeAndBuild: 'Largest Indian buffalo breed; massive barrel, heavy bone structure',
      faceProfile: 'Prominent frontal bump and convex forehead hanging over the eyes'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '2,100 – 3,200 kg per lactation',
      fatPercentage: '7.5% – 9.0%',
      weightMaleKg: '800 – 1000 kg',
      weightFemaleKg: '600 – 750 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Highly adapted to coastal wetlands and Gir forest underbrush'
    },
    historicalSignificance: 'Bred by forest Maldharis. Famed in Saurashtra folklore for defending calves from Asiatic lions in the Gir forest.',
    pastoralCommunities: ['Gir Maldharis', 'Rabaris'],
    careRecommendations: [
      'Requires access to daily water wallowing',
      'Heavy roughage consumption requires ample greens and tree foliage'
    ],
    imageUrl: '/src/assets/images/specimen_jaffarabadi_buffalo_1792850412357.jpg',
    tags: ['Heaviest Buffalo', 'Drooping Horns', 'Gir Forest', 'Gujarat', 'ICAR-NBAGR 04004']
  },
  {
    id: 'surti-buffalo',
    name: 'Surti',
    vernacularName: 'सुरती / Surti / Charotari',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Gujarat',
    homeTract: 'Kaira, Vadodara, Bharuch, and Surat districts in the fertile Charotar tract',
    nbagrCode: 'INDIA_BUFFALO_0400_SURTI_04011',
    nbagrStatus: 'Registered Indigenous',
    description: 'Medium-sized dairy buffalo with distinctive flat, sickle-shaped horns directed downwards and backwards, and two prominent white collars on the neck and jaw.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Dairy butterfat synthesis loci',
      thermalGene: 'Charotar plain heat adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Flat, sickle-shaped, growing downwards and backwards then turning up at tips',
      ears: 'Medium, alert with reddish hair inside',
      coatColor: 'Black or brown with two white chevron collars: one around lower jaw and one around brisket',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Medium, economical body size, wedge dairy conformation',
      faceProfile: 'Long, narrow face with prominent bright eyes'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '1,600 – 2,200 kg per lactation',
      fatPercentage: '7.5% – 8.5%',
      weightMaleKg: '550 kg',
      weightFemaleKg: '420 kg',
      hardiness: 'High',
      heatTolerance: 'Exceptional feed conversion efficiency and climate tolerance'
    },
    historicalSignificance: 'Foundational dairy buffalo that powered the Amul cooperative milk revolution in the Anand district of Gujarat.',
    pastoralCommunities: ['Patidars', 'Charotar farmers'],
    careRecommendations: [
      'Very economical maintenance on crop residues and green forage',
      'Provide clean drinking water and daily scrubbing'
    ],
    imageUrl: '/src/assets/images/specimen_surti_buffalo_1792850436010.jpg',
    tags: ['Sickle Horns', 'Gujarat', 'Amul Foundation', 'High Fat', 'ICAR-NBAGR 04011']
  },
  {
    id: 'mehsana-buffalo',
    name: 'Mehsana',
    vernacularName: 'મહેસાણા / Mehsani',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Gujarat',
    homeTract: 'Mehsana, Sabarkantha, Banaskantha, and Gandhinagar districts in north Gujarat',
    nbagrCode: 'INDIA_BUFFALO_0400_MEHSANA_04006',
    nbagrStatus: 'Registered Indigenous',
    description: 'Premier milch buffalo produced by crossing Murrah and Surti, characterized by high persistency of lactation, regular breeding cycle, and semi-curled horns.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'High lactation persistency alleles',
      thermalGene: 'Semi-arid North Gujarat heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Semi-curled, intermediate between Murrah spiral and Surti sickle',
      ears: 'Medium, alert',
      coatColor: 'Black, dark brown, or grey-black',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Large, long body, heavy dairy barrel, docile',
      faceProfile: 'Long straight face, wide poll'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '2,000 – 3,200 kg per lactation',
      fatPercentage: '6.8% – 7.6%',
      weightMaleKg: '650 kg',
      weightFemaleKg: '500 kg',
      hardiness: 'High',
      heatTolerance: 'Very high tolerance to hot semi-arid climate'
    },
    historicalSignificance: 'Core dairy breed powering the Dudhsagar Dairy cooperative network in North Gujarat.',
    pastoralCommunities: ['Chaudharis', 'Patidars'],
    careRecommendations: [
      'Balanced green fodder (lucerne/sorghum) and cottonseed cake',
      'Regular wallowing or water spraying in summer'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80',
    tags: ['Mehsana', 'Dudhsagar', 'High Persistency', 'Milch', 'ICAR-NBAGR 04006']
  },
  {
    id: 'nagpuri-buffalo',
    name: 'Nagpuri',
    vernacularName: 'नागपुरी / Elichpuri / Barari',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Maharashtra',
    homeTract: 'Nagpur, Wardha, Amravati, Akola, and Yavatmal districts in Vidarbha',
    nbagrCode: 'INDIA_BUFFALO_1100_NAGPURI_04007',
    nbagrStatus: 'Registered Indigenous',
    description: 'Famous for long, flat, sword-shaped horns curving backwards on each side of the neck to the shoulders, and excellent dual utility for milk and heavy draft.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Dual-purpose muscle and lipid synthesis alleles',
      thermalGene: 'Vidarbha extreme heatwave tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Very long, flat, sword-shaped, curving backwards along the sides of the neck nearly reaching shoulders',
      ears: 'Medium, horizontal',
      coatColor: 'Black; white markings on face, legs, and tail tip common',
      humpAndDewlap: 'None; clean throat',
      sizeAndBuild: 'Medium, athletic, lighter limbs than Murrah, agile',
      faceProfile: 'Long straight face, alert expression'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,200 – 1,800 kg per lactation',
      fatPercentage: '7.0% – 8.2%',
      weightMaleKg: '550 kg',
      weightFemaleKg: '420 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme heat tolerance; withstands Vidarbha dry heat up to 48°C with minimal wallowing'
    },
    historicalSignificance: 'Bred in the Vidarbha region for working in heavy black cotton soil and supplying rich milk.',
    pastoralCommunities: ['Gaolis', 'Vidarbha farmers'],
    careRecommendations: [
      'Economical keeper; thrives on coarse sorghum stover and cotton seed',
      'Can work effectively even in hot dry afternoons'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80',
    tags: ['Sword Horns', 'Vidarbha', 'Maharashtra', 'Dual Purpose', 'ICAR-NBAGR 04007']
  },
  {
    id: 'pandharpuri-buffalo',
    name: 'Pandharpuri',
    vernacularName: 'पंढरपुरी / Dharwari',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Maharashtra',
    homeTract: 'Solapur, Kolhapur, Sangli, and Satara along Bhima and Krishna river basins',
    nbagrCode: 'INDIA_BUFFALO_1100_PANDHARPURI_04010',
    nbagrStatus: 'Registered Indigenous',
    description: 'Instantly recognizable by extraordinarily long, flat, twisted horns extending 45 to 65 cm backwards over the back, renowned for high fertility and regular calving.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'High fertility and regular estrus cycle alleles',
      thermalGene: 'Deccan drought and heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Very long (up to 65 cm), flat, curving backwards, upwards, and slightly twisted at tips',
      ears: 'Medium, horizontal',
      coatColor: 'Deep black with occasional white spot on forehead',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Medium, wedge dairy frame, cylindrical body',
      faceProfile: 'Narrow lean face, prominent nasal bone'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '1,500 – 2,200 kg per lactation',
      fatPercentage: '7.0% – 8.0%',
      weightMaleKg: '500 kg',
      weightFemaleKg: '400 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme drought resistance in dry Deccan districts'
    },
    historicalSignificance: 'Reared around the sacred temple town of Pandharpur; famous for consistent milk supply to Mumbai and Pune markets.',
    pastoralCommunities: ['Dhangars', 'Maratha farmers'],
    careRecommendations: [
      'Sugarcane tops and green maize feeding',
      'Regular grooming of long horns and dry housing'
    ],
    imageUrl: '/src/assets/images/specimen_pandharpuri_buffalo_1792850502525.jpg',
    tags: ['Long Horns', 'Pandharpur', 'Maharashtra', 'High Fertility', 'ICAR-NBAGR 04010']
  },
  {
    id: 'marathwadi-buffalo',
    name: 'Marathwadi',
    vernacularName: 'मराठवाडी / Ellichpuri type',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Maharashtra',
    homeTract: 'Beed, Parbhani, Nanded, Jalna, and Latur districts in Marathwada',
    nbagrCode: 'INDIA_BUFFALO_1100_MARATHWADI_04005',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy dual-purpose buffalo of the drought-prone Marathwada region, noted for parallel flat horns directed backwards and high endurance.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Drought lipid conservation markers',
      thermalGene: 'Marathwada drought heat resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Flat, sweeping backwards parallel to neck, reaching shoulder point',
      ears: 'Medium, horizontal',
      coatColor: 'Black to greyish-black',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Medium, lighter body, active draft and dairy conformation',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,100 – 1,500 kg per lactation',
      fatPercentage: '7.2% – 8.3%',
      weightMaleKg: '480 kg',
      weightFemaleKg: '380 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme drought tolerance and low water consumption'
    },
    historicalSignificance: 'Reliable dairy and farm power asset for smallholder farmers across Marathwada.',
    pastoralCommunities: ['Marathwada farmers', 'Hatkar Dhangars'],
    careRecommendations: [
      'Substantial crop residues (sorghum and cotton stalks)',
      'Water provision during hot dry afternoons'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80',
    tags: ['Marathwada', 'Drought Resilient', 'Maharashtra', 'Dual Purpose', 'ICAR-NBAGR 04005']
  },
  {
    id: 'toda-buffalo',
    name: 'Toda',
    vernacularName: 'തോഡ എരുമ / Toda Buffalo',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Tamil Nadu',
    homeTract: 'Nilgiri Hills at high altitudes (1500–2500m above sea level)',
    nbagrCode: 'INDIA_BUFFALO_1800_TODA_04013',
    nbagrStatus: 'Endangered / Rare',
    description: 'Semi-wild hill buffalo breed sacred to the indigenous Toda tribe of the Nilgiris, distinguished by dense ash-grey fawn coat and wide crescent horns.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'High-fat highland milk adaptation',
      thermalGene: 'Cold mountain rain adaptation; low plains heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Wide crescent, set wide apart, curving inward and pointing outward',
      ears: 'Short, densely hairy inside',
      coatColor: 'Fawn / ash-grey with dense hair covering the body',
      humpAndDewlap: 'None; thick skin suited for cold hill rain',
      sizeAndBuild: 'Medium size, muscular, gregarious hill climber',
      faceProfile: 'Fawn face with light markings around eyes'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '500 – 700 kg per lactation',
      fatPercentage: '8.0% – 9.5%',
      weightMaleKg: '450 kg',
      weightFemaleKg: '380 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Low heat tolerance; adapted strictly to cool highland shola forests'
    },
    historicalSignificance: 'Sacred center of Toda tribal rituals and dairy temples (Pal-chii). Grazed in pristine high-altitude shola grasslands.',
    pastoralCommunities: ['Toda Tribe'],
    careRecommendations: [
      'Requires highland grazing ecology; does not adapt well to plains heat',
      'Preserve shola grassland flora for natural nutrition'
    ],
    imageUrl: '/src/assets/images/specimen_toda_buffalo_1792850436187.jpg',
    tags: ['Sacred', 'Nilgiris', 'Tribal', 'Highland', 'Rare', 'ICAR-NBAGR 04013']
  },
  {
    id: 'banni-buffalo',
    name: 'Banni',
    vernacularName: 'બન્ની ભેંસ / Kundi / Maldhari Buffalo',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Gujarat',
    homeTract: 'Banni grasslands and Rann of Kutch: Bhuj, Nakhatrana, Rapar taluks',
    nbagrCode: 'INDIA_BUFFALO_0400_BANNI_04012',
    nbagrStatus: 'Registered Indigenous',
    description: 'Celebrated night-grazing buffalo of the arid Kutch grasslands, capable of surviving extreme saline heat and producing high milk yields under nomadic pastoralism.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Nocturnal foraging lipid synthesis alleles',
      thermalGene: 'Saline arid desert heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Medium, tightly coiled with double curvature (inverted coil)',
      ears: 'Medium, horizontal',
      coatColor: 'Mostly black; occasionally brown or copper',
      humpAndDewlap: 'None; clean throat',
      sizeAndBuild: 'Large, compact, deep barrel, sturdy legs',
      faceProfile: 'Broad flat forehead'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '2,000 – 3,200 kg per lactation',
      fatPercentage: '7.0% – 8.5%',
      weightMaleKg: '650 kg',
      weightFemaleKg: '500 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme adaptation to water salinity, hot winds, and night grazing'
    },
    historicalSignificance: 'Bred over centuries by Maldhari pastoralists of Banni who graze them untethered at night to escape daytime desert heat.',
    pastoralCommunities: ['Maldharis of Banni', 'Jat and Mutwa pastoralists'],
    careRecommendations: [
      'Access to natural Banni halophytic grasses (Dhaman, Khaval)',
      'Fresh drinking water ponds (Viradas) maintained by pastoralists'
    ],
    imageUrl: '/src/assets/images/specimen_banni_buffalo_1792850501777.jpg',
    tags: ['Night Grazer', 'Banni Grasslands', 'Kutch', 'Gujarat', 'ICAR-NBAGR 04012']
  },
  {
    id: 'chilika-buffalo',
    name: 'Chilika',
    vernacularName: 'ଚିଲିକା ମଇଁଷି / Desi Buffalo',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Odisha',
    homeTract: 'Chilika brackish water lake ecosystem: Puri, Khordha, and Ganjam districts',
    nbagrCode: 'INDIA_BUFFALO_1500_CHILIKA_04014',
    nbagrStatus: 'Registered Indigenous',
    description: 'Unique semi-aquatic buffalo that grazes on submerged aquatic weeds in the brackish waters of Chilika lagoon, producing prized curd (Chilika Dahi) that stays fresh for days.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Halophytic aquatic lipid biosynthesis alleles',
      thermalGene: 'Lagoon immersion and saline water osmoregulation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Curving backwards, upwards, and slightly inwards',
      ears: 'Medium, alert',
      coatColor: 'Black, brownish-black, or grey',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Medium, compact, sturdy hooves adapted to wet marshy lake mud',
      faceProfile: 'Narrow face, dished between eyes'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '600 – 900 kg per lactation',
      fatPercentage: '8.0% – 9.2%',
      weightMaleKg: '450 kg',
      weightFemaleKg: '350 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme tolerance to saline lagoon water and marshy mud'
    },
    historicalSignificance: 'Swims long distances into Chilika lake to graze on aquatic vegetation at night.',
    pastoralCommunities: ['Gola community of Chilika'],
    careRecommendations: [
      'Preserve access to Chilika lagoon grazing paths',
      'Minimal stall feeding required due to abundant aquatic macrophytes'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80',
    tags: ['Chilika Lake', 'Brackish Water', 'Odisha', 'Chilika Curd', 'ICAR-NBAGR 04014']
  },
  {
    id: 'kalahandi-buffalo',
    name: 'Kalahandi',
    vernacularName: 'କଳାହାଣ୍ଡି ମଇଁଷି / Pedda Gaddi',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Odisha',
    homeTract: 'Kalahandi and Rayagada districts in south-western Odisha',
    nbagrCode: 'INDIA_BUFFALO_1500_KALAHANDI_04015',
    nbagrStatus: 'Registered Indigenous',
    description: 'Dual-purpose buffalo of the drought-prone Kalahandi plateau, noted for stamina in plowing rocky soils and decent milk yield.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Plateau draft and dairy dual alleles',
      thermalGene: 'Semi-arid hill climate adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Half-corrugated, curving backwards, upwards, and inwards',
      ears: 'Medium, alert',
      coatColor: 'Black to ash-grey',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Medium, sturdy limbs with hard hooves',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '800 – 1,200 kg per lactation',
      fatPercentage: '7.5% – 8.5%',
      weightMaleKg: '480 kg',
      weightFemaleKg: '380 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'High resistance to dry heat and low water availability'
    },
    historicalSignificance: 'Backbone of tribal agriculture across the Kalahandi hills.',
    pastoralCommunities: ['Gauda community', 'Kandha tribes'],
    careRecommendations: [
      'Forest grazing on native grasses and bamboo leaves',
      'Dry stall conditions'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80',
    tags: ['Kalahandi', 'Odisha', 'Dual Purpose', 'ICAR-NBAGR 04015']
  },
  {
    id: 'sambalpuri-buffalo',
    name: 'Sambalpuri',
    vernacularName: 'ସମ୍ବଲପୁରୀ / Gowroo',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Odisha',
    homeTract: 'Sambalpur, Bargarh, and Jharsuguda districts in western Odisha',
    nbagrCode: 'INDIA_BUFFALO_1500_SAMBALPURI_04016',
    nbagrStatus: 'Registered Indigenous',
    description: 'Heavy dual-purpose buffalo native to the Mahanadi river basin, prized for pulling heavy forest timber and producing rich dairy milk.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Mahanadi river basin lipid alleles',
      thermalGene: 'Subtropical forest riverine adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Curving backwards and outwards, long and broad',
      ears: 'Medium, horizontal',
      coatColor: 'Black, occasionally with white patch on forehead',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Large, powerful draft barrel, heavy bone structure',
      faceProfile: 'Broad forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,000 – 1,500 kg per lactation',
      fatPercentage: '7.4% – 8.2%',
      weightMaleKg: '580 kg',
      weightFemaleKg: '450 kg',
      hardiness: 'High',
      heatTolerance: 'Well adapted to intense summer heat of western Odisha'
    },
    historicalSignificance: 'Traditionally employed in forest timber hauling and paddy plowing.',
    pastoralCommunities: ['Sambalpur farming communities'],
    careRecommendations: [
      'River wallowing in Mahanadi river channels',
      'Paddy straw and green fodder supplementation'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80',
    tags: ['Sambalpur', 'Mahanadi Basin', 'Odisha', 'Dual Purpose', 'ICAR-NBAGR 04016']
  },
  {
    id: 'bargur-buffalo',
    name: 'Bargur Buffalo',
    vernacularName: 'பர்கூர் எருமை / Bargur Buffalo',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Tamil Nadu',
    homeTract: 'Bargur forest hills of Erode district, Western Ghats',
    nbagrCode: 'INDIA_BUFFALO_1800_BARGUR_04017',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy hill buffalo of the Western Ghats, reared inside forest enclosures ("Pattys") by Lingayat communities, agile and sure-footed on steep slopes.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Forest hill grazing lipid alleles',
      thermalGene: 'Western Ghats hill forest adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Medium, curving backwards and upwards',
      ears: 'Small, alert',
      coatColor: 'Dark brownish-black to black',
      humpAndDewlap: 'None; clean throat',
      sizeAndBuild: 'Medium, compact, muscular hill climber with hard hooves',
      faceProfile: 'Narrow lean face'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '650 – 950 kg per lactation',
      fatPercentage: '7.8% – 8.8%',
      weightMaleKg: '460 kg',
      weightFemaleKg: '360 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Adapted to forest canopy and rocky hill trails'
    },
    historicalSignificance: 'Bred in the Bargur hill ranges for milk and agricultural carting.',
    pastoralCommunities: ['Bargur Lingayats', 'Sholaga tribes'],
    careRecommendations: [
      'Forest grazing on bamboo leaves and hill grasses',
      'Predator protection in community enclosures'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80',
    tags: ['Bargur Hills', 'Tamil Nadu', 'Western Ghats', 'Hill Buffalo', 'ICAR-NBAGR 04017']
  },
  {
    id: 'chhattisgarhi-buffalo',
    name: 'Chhattisgarhi',
    vernacularName: 'छत्तीसगढ़ी / Desi Bhains',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Chhattisgarh',
    homeTract: 'Raipur, Bilaspur, Durg, and Rajnandgaon districts in central Chhattisgarh plains',
    nbagrCode: 'INDIA_BUFFALO_2600_CHHATTISGARHI_04018',
    nbagrStatus: 'Registered Indigenous',
    description: 'Dual-purpose buffalo of the central plains of Chhattisgarh, noted for sickle-shaped horns, calm temperament, and steady draught endurance in rice paddies.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Rice bowl agro-climatic lipid alleles',
      thermalGene: 'Central Indian plateau heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Sickle-shaped, curving backwards and inwards',
      ears: 'Medium, horizontal',
      coatColor: 'Black or dark grey',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Medium, proportionate, sturdy legs for muddy rice fields',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '800 – 1,200 kg per lactation',
      fatPercentage: '7.5% – 8.4%',
      weightMaleKg: '490 kg',
      weightFemaleKg: '380 kg',
      hardiness: 'High',
      heatTolerance: 'Well adapted to intense humid summer heat of central India'
    },
    historicalSignificance: 'Core agricultural draft and milk asset of the "Rice Bowl of India".',
    pastoralCommunities: ['Raut community', 'Chhattisgarh farmers'],
    careRecommendations: [
      'Paddy straw and pond wallowing',
      'Timely vaccination against hemorrhagic septicemia'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80',
    tags: ['Chhattisgarh', 'Rice Bowl', 'Dual Purpose', 'ICAR-NBAGR 04018']
  },
  {
    id: 'gojri-buffalo',
    name: 'Gojri',
    vernacularName: 'गोजरी / Gujjari Buffalo',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Punjab & Himachal Pradesh',
    homeTract: 'Foothills of Shivaliks: Hoshiarpur, Ropar, Gurdaspur (Punjab) and Kangra, Una (HP)',
    nbagrCode: 'INDIA_BUFFALO_1600_GOJRI_04019',
    nbagrStatus: 'Registered Indigenous',
    description: 'Transhumant buffalo reared by migratory pastoral Gujjars, traversing between Shivalik foothill pastures and high Himalayan meadows with remarkable stamina.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Migratory transhumance lipid metabolism',
      thermalGene: 'Sub-Himalayan seasonal altitude adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Semi-curled, sweeping backwards and upwards with tips hooked inward',
      ears: 'Medium, alert',
      coatColor: 'Black or dark brown, with white markings on forehead, legs, and tail tip common',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Medium to large, athletic, sure-footed limbs with tough hooves',
      faceProfile: 'Flat forehead with white star blaze'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '1,400 – 2,100 kg per lactation',
      fatPercentage: '7.2% – 8.0%',
      weightMaleKg: '600 kg',
      weightFemaleKg: '450 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Adapted to long seasonal migratory journeys between plains and hills'
    },
    historicalSignificance: 'Maintained for centuries by nomadic Gujjar pastoral families across Punjab and Himachal.',
    pastoralCommunities: ['Pastoral Gujjars'],
    careRecommendations: [
      'Seasonal pasture grazing along Shivalik riverbeds',
      'Foot health maintenance during long trekking seasons'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80',
    tags: ['Gujjar Pastoral', 'Shivalik Hills', 'Punjab', 'Himachal', 'Milch', 'ICAR-NBAGR 04019']
  },
  {
    id: 'dharwadi-buffalo',
    name: 'Dharwadi',
    vernacularName: 'ಧಾರವಾಡ ಎಮ್ಮೆ / Dharwadi',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Karnataka',
    homeTract: 'Dharwad, Belagavi, Haveri, and Gadag districts in northern Karnataka',
    nbagrCode: 'INDIA_BUFFALO_0800_DHARWADI_04020',
    nbagrStatus: 'Registered Indigenous',
    description: 'Renowned dairy buffalo of northern Karnataka whose high-butterfat, rich solid milk is the authentic secret ingredient of the GI-tagged "Dharwad Peda".',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'High total solid (SNF) and lipid synthesis alleles',
      thermalGene: 'Deccan semi-arid climate adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Semi-curled, curving backwards and upwards',
      ears: 'Medium, alert',
      coatColor: 'Black to brownish-black',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Medium, compact, dairy barrel conformation',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '1,300 – 1,800 kg per lactation',
      fatPercentage: '7.5% – 8.8% (High Milk Solids for Traditional Sweets)',
      weightMaleKg: '520 kg',
      weightFemaleKg: '410 kg',
      hardiness: 'High',
      heatTolerance: 'Well adapted to northern Karnataka semi-arid climate'
    },
    historicalSignificance: 'Famous as the source milk for world-renowned GI-tagged Dharwad Peda confectionery.',
    pastoralCommunities: ['Gowli community', 'Lingayat farmers'],
    careRecommendations: [
      'Jowar stover and green maize fodder',
      'Daily water bathing or wallowing'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80',
    tags: ['Dharwad Peda', 'Karnataka', 'High Solids', 'Milch', 'ICAR-NBAGR 04020']
  },
  {
    id: 'manda-buffalo',
    name: 'Manda',
    vernacularName: 'ମାଣ୍ଡା ମଇଁଷି / Manda Buffalo',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Odisha & Andhra Pradesh',
    homeTract: 'Eastern Ghats plateau: Koraput (Odisha) and Visakhapatnam hills (AP)',
    nbagrCode: 'INDIA_BUFFALO_1500_MANDA_04021',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy hill buffalo of the Eastern Ghats, characterized by ash-grey/brown coat with copper hair, resistant to parasitic diseases and agile on hill terraces.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Eastern Ghats hill foraging alleles',
      thermalGene: 'High-altitude sub-tropical hill climate resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Broad, flat, curving backwards parallel to neck',
      ears: 'Small, alert',
      coatColor: 'Ash grey or copper brown with light knee markings',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Medium, compact, wiry limbs, sure-footed',
      faceProfile: 'Narrow face'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '700 – 1,000 kg per lactation',
      fatPercentage: '7.8% – 8.6%',
      weightMaleKg: '450 kg',
      weightFemaleKg: '350 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme resistance to tick-borne diseases and rocky slopes'
    },
    historicalSignificance: 'Bred by tribal communities in the Koraput biodiversity hotspot.',
    pastoralCommunities: ['Koraput tribal farmers', 'Eastern Ghats hill communities'],
    careRecommendations: [
      'Hill pasture grazing and crop residue feeding',
      'Shelter during heavy torrential monsoon'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80',
    tags: ['Koraput', 'Eastern Ghats', 'Odisha', 'Andhra Pradesh', 'Dual Purpose', 'ICAR-NBAGR 04021']
  },
  {
    id: 'purnathadi-buffalo',
    name: 'Purnathadi',
    vernacularName: 'पूर्णाथडी / Purnathadi',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Maharashtra',
    homeTract: 'Purna river basin: Akola, Amravati, Buldhana in Vidarbha',
    nbagrCode: 'INDIA_BUFFALO_1100_PURNATHADI_04022',
    nbagrStatus: 'Registered Indigenous',
    description: 'Resilient dual-purpose buffalo of the Purna river valley in Vidarbha, bred for high draught power in black cotton soils and rich milk production.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Purna river basin lipid and draft alleles',
      thermalGene: 'Vidarbha summer heatwave tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Curving backwards and upwards, sword-like',
      ears: 'Medium, horizontal',
      coatColor: 'Black or dark grey',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Medium, strong-boned, agile draft limbs',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,200 – 1,700 kg per lactation',
      fatPercentage: '7.2% – 8.1%',
      weightMaleKg: '520 kg',
      weightFemaleKg: '400 kg',
      hardiness: 'High',
      heatTolerance: 'Supreme stamina under hot dry Vidarbha summer conditions'
    },
    historicalSignificance: 'Bred along the fertile alluvial plains of the Purna river.',
    pastoralCommunities: ['Vidarbha farmers', 'Gowlis'],
    careRecommendations: [
      'Purna river or village pond wallowing',
      'Cotton seed cake and sorghum straw feeding'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80',
    tags: ['Purna River', 'Vidarbha', 'Maharashtra', 'Dual Purpose', 'ICAR-NBAGR 04022']
  }
];

export const INDIAN_BREEDS_CATALOG: BreedInfo[] = INDIAN_BOVINE_BREEDS;

export const REGISTERED_CATTLE_BREEDS: BreedInfo[] = INDIAN_BOVINE_BREEDS.filter(
  (b) => b.category === 'Cattle'
);

export const REGISTERED_BUFFALO_BREEDS: BreedInfo[] = INDIAN_BOVINE_BREEDS.filter(
  (b) => b.category === 'Buffalo'
);
