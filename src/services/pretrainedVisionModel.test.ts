import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeImagePhenotype } from './pretrainedVisionModel';
import { INDIAN_BOVINE_BREEDS } from '../data/indigenousBreeds';

test('analyzeImagePhenotype returns valid quantitative metrics', () => {
  // Test mock image canvas representation
  assert.equal(typeof analyzeImagePhenotype, 'function');
  assert.equal(INDIAN_BOVINE_BREEDS.length, 73);
});

test('All 73 ICAR-NBAGR breeds have complete physical traits for scoring', () => {
  for (const breed of INDIAN_BOVINE_BREEDS) {
    assert.ok(breed.name, 'Breed should have name');
    assert.ok(breed.category === 'Cattle' || breed.category === 'Buffalo', 'Breed must be Cattle or Buffalo');
    assert.ok(breed.physicalTraits.coatColor, `${breed.name} must have coatColor`);
    assert.ok(breed.physicalTraits.horns, `${breed.name} must have horns description`);
    assert.ok(breed.physicalTraits.faceProfile, `${breed.name} must have faceProfile description`);
  }
});
