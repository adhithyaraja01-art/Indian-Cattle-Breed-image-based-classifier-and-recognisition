import test from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizeConfidence,
  filterBreeds,
  findCatalogBreed,
  buildEnrichedClassificationResult,
  breedToClassificationResult,
  generateFallbackClassification,
  compareBreeds
} from './classifierLogic';
import {
  INDIAN_BOVINE_BREEDS,
  REGISTERED_CATTLE_BREEDS,
  REGISTERED_BUFFALO_BREEDS
} from '../data/indigenousBreeds';

test('normalizeConfidence clamps between 1 and 99', () => {
  assert.equal(normalizeConfidence(95.4), 95);
  assert.equal(normalizeConfidence(105), 99);
  assert.equal(normalizeConfidence(-10), 1);
  assert.equal(normalizeConfidence(NaN), 75);
});

test('ICAR-NBAGR catalog registers exactly 53 cattle and 20 buffalo breeds (73 total)', () => {
  assert.equal(INDIAN_BOVINE_BREEDS.length, 73);
  assert.equal(REGISTERED_CATTLE_BREEDS.length, 53);
  assert.equal(REGISTERED_BUFFALO_BREEDS.length, 20);
});

test('filterBreeds filters by Cattle vs Buffalo correctly', () => {
  const buffalos = filterBreeds(INDIAN_BOVINE_BREEDS, '', 'Buffalo', 'All');
  assert.equal(buffalos.length, 20, 'Should find all 20 registered buffalo breeds');
  assert.ok(buffalos.every((b) => b.category === 'Buffalo'));

  const cattle = filterBreeds(INDIAN_BOVINE_BREEDS, '', 'Cattle', 'All');
  assert.equal(cattle.length, 53, 'Should find all 53 registered cattle breeds');
  assert.ok(cattle.every((c) => c.category === 'Cattle'));

  // Search query 'Gir'
  const girResults = filterBreeds(INDIAN_BOVINE_BREEDS, 'Gir', 'All', 'All');
  assert.ok(girResults.some((b) => b.name === 'Gir'));

  // Search query 'Kangayam'
  const kangayamResults = filterBreeds(INDIAN_BOVINE_BREEDS, 'Kangayam', 'All', 'All');
  assert.ok(kangayamResults.some((b) => b.name === 'Kangayam'));
});

test('findCatalogBreed identifies diverse breeds by name, alias, or state', () => {
  const murrah = findCatalogBreed('Murrah');
  assert.ok(murrah);
  assert.equal(murrah.name, 'Murrah');
  assert.equal(murrah.category, 'Buffalo');

  const kangayam = findCatalogBreed('Kangayam');
  assert.ok(kangayam);
  assert.equal(kangayam.name, 'Kangayam');
  assert.equal(kangayam.category, 'Cattle');

  const bhadawari = findCatalogBreed('Bhadawari');
  assert.ok(bhadawari);
  assert.equal(bhadawari.name, 'Bhadawari');
  assert.equal(bhadawari.category, 'Buffalo');

  const vechur = findCatalogBreed('Vechur');
  assert.ok(vechur);
  assert.equal(vechur.name, 'Vechur');
  assert.equal(vechur.category, 'Cattle');
});

test('generateFallbackClassification dynamically matches specific breeds and does not just return Gir', () => {
  const kangayamResult = generateFallbackClassification('Kangayam bull spotted in Kongu region');
  assert.equal(kangayamResult.predictedBreed, 'Kangayam');
  assert.equal(kangayamResult.category, 'Cattle');

  const murrahResult = generateFallbackClassification('buffalo with tight curled horns');
  assert.equal(murrahResult.predictedBreed, 'Murrah');
  assert.equal(murrahResult.category, 'Buffalo');

  const bhadawariResult = generateFallbackClassification('copper colored buffalo from chambal');
  assert.equal(bhadawariResult.predictedBreed, 'Bhadawari');
  assert.equal(bhadawariResult.category, 'Buffalo');

  const vechurResult = generateFallbackClassification('dwarf cow in kerala');
  assert.equal(vechurResult.predictedBreed, 'Vechur');
  assert.equal(vechurResult.category, 'Cattle');
});

test('breedToClassificationResult produces full diagnostic result for any breed', () => {
  const toda = INDIAN_BOVINE_BREEDS.find((b) => b.name === 'Toda')!;
  const result = breedToClassificationResult(toda, 96);

  assert.equal(result.predictedBreed, 'Toda');
  assert.equal(result.category, 'Buffalo');
  assert.equal(result.scientificName, 'Bubalus bubalis');
  assert.equal(result.topCandidates.length, 3);
  assert.equal(result.topCandidates[0].breedName, 'Toda');
  assert.equal(result.topCandidates[0].confidence, 96);
});

test('compareBreeds extracts side-by-side differences accurately', () => {
  const gir = INDIAN_BOVINE_BREEDS.find((b) => b.name === 'Gir')!;
  const murrah = INDIAN_BOVINE_BREEDS.find((b) => b.name === 'Murrah')!;

  const comparison = compareBreeds(gir, murrah);
  assert.equal(comparison.sameSpecies, false);
  assert.equal(comparison.sameUtility, true); // Both milch
  assert.ok(comparison.hornsComparison.breedA.length > 0);
  assert.ok(comparison.hornsComparison.breedB.length > 0);
});

test('SUPPORTED_LANGUAGES defines all 13 regional languages with full metadata and translations', async () => {
  const { SUPPORTED_LANGUAGES, TRANSLATIONS } = await import('../i18n/translations.js');
  
  // Must support exactly 13 languages
  assert.equal(SUPPORTED_LANGUAGES.length, 13);
  
  const expectedCodes = ['en', 'ta', 'hi', 'te', 'mr', 'ml', 'gu', 'ur', 'kn', 'raj', 'bn', 'pa', 'ks'];
  const actualCodes = SUPPORTED_LANGUAGES.map((l) => l.code);
  assert.deepEqual(actualCodes, expectedCodes);

  // Each language must have complete metadata
  for (const lang of SUPPORTED_LANGUAGES) {
    assert.ok(lang.name && lang.name.length > 0, `Missing name for ${lang.code}`);
    assert.ok(lang.englishName && lang.englishName.length > 0, `Missing englishName for ${lang.code}`);
    assert.ok(lang.symbol && lang.symbol.length > 0, `Missing symbol for ${lang.code}`);
    assert.ok(lang.region && lang.region.length > 0, `Missing region for ${lang.code}`);
    assert.ok(lang.iconicBreeds && lang.iconicBreeds.length > 0, `Missing iconicBreeds for ${lang.code}`);
    
    // Check TRANSLATIONS dictionary
    assert.ok(TRANSLATIONS[lang.code], `Missing TRANSLATIONS dictionary for ${lang.code}`);
    assert.ok(TRANSLATIONS[lang.code]['nav.classify'], `Missing nav.classify for ${lang.code}`);
    assert.ok(TRANSLATIONS[lang.code]['lang.title'], `Missing lang.title for ${lang.code}`);
    assert.ok(TRANSLATIONS[lang.code]['settings.title'], `Missing settings.title for ${lang.code}`);
  }

  // Urdu and Kashmiri must have RTL flag
  const urdu = SUPPORTED_LANGUAGES.find((l) => l.code === 'ur')!;
  assert.equal(urdu.isRtl, true);
  const kashmiri = SUPPORTED_LANGUAGES.find((l) => l.code === 'ks')!;
  assert.equal(kashmiri.isRtl, true);
});
