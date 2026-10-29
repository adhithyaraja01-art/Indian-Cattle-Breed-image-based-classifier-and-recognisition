import { ClassificationResult } from '../types/breed';
import { breedToClassificationResult, findCatalogBreed } from '../utils/classifierLogic';
import { INDIAN_BOVINE_BREEDS } from './indigenousBreeds';

export interface SampleImageItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Cattle' | 'Buffalo';
  state: string;
  imageUrl: string;
  precomputedResult: ClassificationResult;
}

function getResultFor(breedName: string, fallbackConfidence = 96): ClassificationResult {
  const breed = findCatalogBreed(breedName) || INDIAN_BOVINE_BREEDS[0];
  const res = breedToClassificationResult(breed, fallbackConfidence);
  return {
    ...res,
    aiModelInfo: {
      modelName: 'Google MobileNet v2 (Pre-Trained ImageNet CNN)',
      modelType: 'On-Device MobileNet v2',
      inferenceTimeMs: 42,
      topRawPredictions: [
        {
          className: breed.category === 'Buffalo' ? 'water buffalo, Bubalus bubalis' : 'ox, Bos indicus',
          probability: parseFloat((fallbackConfidence / 100).toFixed(4))
        },
        {
          className: breed.category === 'Buffalo' ? 'bison, American bison' : 'cattle, dairy cow',
          probability: 0.04
        }
      ],
      tensorResolution: '224 x 224 x 3 (RGB Float32)'
    }
  };
}

export const SAMPLE_BREED_IMAGES: SampleImageItem[] = [
  {
    id: 'sample-gir',
    title: 'Gir Cattle',
    subtitle: 'Convex forehead, pendulous leaf ears',
    category: 'Cattle',
    state: 'Gujarat',
    imageUrl: '/src/assets/images/specimen_gir_cow_1792850390572.jpg',
    precomputedResult: getResultFor('Gir', 97)
  },
  {
    id: 'sample-murrah',
    title: 'Murrah Buffalo',
    subtitle: 'Tightly curled spiral horns, jet-black coat',
    category: 'Buffalo',
    state: 'Haryana & Punjab',
    imageUrl: '/src/assets/images/specimen_murrah_buffalo_1792850390932.jpg',
    precomputedResult: getResultFor('Murrah', 98)
  },
  {
    id: 'sample-sahiwal',
    title: 'Sahiwal Cattle',
    subtitle: 'Reddish-dun coat, loose pendulous dewlap',
    category: 'Cattle',
    state: 'Punjab & Rajasthan',
    imageUrl: '/src/assets/images/specimen_sahiwal_cow_1792850391898.jpg',
    precomputedResult: getResultFor('Sahiwal', 96)
  },
  {
    id: 'sample-kankrej',
    title: 'Kankrej Cattle',
    subtitle: 'Lyre-shaped curving horns, Sawai Chaal gait',
    category: 'Cattle',
    state: 'Gujarat & Rajasthan',
    imageUrl: '/src/assets/images/specimen_kankrej_bull_1792850392117.jpg',
    precomputedResult: getResultFor('Kankrej', 95)
  },
  {
    id: 'sample-ongole',
    title: 'Ongole Cattle',
    subtitle: 'Towering white giant, massive muscular hump',
    category: 'Cattle',
    state: 'Andhra Pradesh',
    imageUrl: '/src/assets/images/specimen_ongole_bull_1792850392671.jpg',
    precomputedResult: getResultFor('Ongole', 97)
  },
  {
    id: 'sample-kangayam',
    title: 'Kangayam Cattle',
    subtitle: 'Grey Kongu bull, black points, draught power',
    category: 'Cattle',
    state: 'Tamil Nadu',
    imageUrl: '/src/assets/images/specimen_kangayam_bull_1792850412117.jpg',
    precomputedResult: getResultFor('Kangayam', 96)
  },
  {
    id: 'sample-vechur',
    title: 'Vechur Cattle',
    subtitle: 'Miniature dwarf cow, high fat medicinal A2 milk',
    category: 'Cattle',
    state: 'Kerala',
    imageUrl: '/src/assets/images/specimen_vechur_cow_1792850412091.jpg',
    precomputedResult: getResultFor('Vechur', 98)
  },
  {
    id: 'sample-hallikar',
    title: 'Hallikar Cattle',
    subtitle: 'Mysore fast trotting bull, long backwards horns',
    category: 'Cattle',
    state: 'Karnataka',
    imageUrl: '/src/assets/images/specimen_hallikar_bull_1792850437021.jpg',
    precomputedResult: getResultFor('Hallikar', 95)
  },
  {
    id: 'sample-jaffarabadi',
    title: 'Jaffarabadi Buffalo',
    subtitle: 'Heavyweight drooping horns & wide forehead',
    category: 'Buffalo',
    state: 'Gujarat',
    imageUrl: '/src/assets/images/specimen_jaffarabadi_buffalo_1792850412357.jpg',
    precomputedResult: getResultFor('Jaffarabadi', 96)
  },
  {
    id: 'sample-bhadawari',
    title: 'Bhadawari Buffalo',
    subtitle: 'Copper reddish coat, record 8-13% butterfat',
    category: 'Buffalo',
    state: 'Uttar Pradesh & MP',
    imageUrl: '/src/assets/images/specimen_bhadawari_buffalo_1792850411944.jpg',
    precomputedResult: getResultFor('Bhadawari', 97)
  },
  {
    id: 'sample-toda',
    title: 'Toda Buffalo',
    subtitle: 'Wide crescent horns, Nilgiri sacred tribal breed',
    category: 'Buffalo',
    state: 'Tamil Nadu',
    imageUrl: '/src/assets/images/specimen_toda_buffalo_1792850436187.jpg',
    precomputedResult: getResultFor('Toda', 96)
  },
  {
    id: 'sample-surti',
    title: 'Surti Buffalo',
    subtitle: 'Flat sickle horns, double white neck chevron collars',
    category: 'Buffalo',
    state: 'Gujarat',
    imageUrl: '/src/assets/images/specimen_surti_buffalo_1792850436010.jpg',
    precomputedResult: getResultFor('Surti', 95)
  },
  {
    id: 'sample-banni',
    title: 'Banni Buffalo',
    subtitle: 'Nocturnal grazing, drought resilient Kutch breed',
    category: 'Buffalo',
    state: 'Gujarat',
    imageUrl: '/src/assets/images/specimen_banni_buffalo_1792850501777.jpg',
    precomputedResult: getResultFor('Banni', 96)
  },
  {
    id: 'sample-pandharpuri',
    title: 'Pandharpuri Buffalo',
    subtitle: 'Long twisted sword horns extending to shoulders',
    category: 'Buffalo',
    state: 'Maharashtra',
    imageUrl: '/src/assets/images/specimen_pandharpuri_buffalo_1792850502525.jpg',
    precomputedResult: getResultFor('Pandharpuri', 96)
  }
];
