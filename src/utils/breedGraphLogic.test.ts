import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseYieldKg,
  parseFatPercent,
  parseWeightKg,
  generateLactationCurve,
  generateGrowthCurve,
  generateParityPerformance
} from './breedGraphLogic';

test('parseYieldKg parses varied yield strings correctly', () => {
  const girYield = parseYieldKg('2,100 – 3,500 kg per lactation');
  assert.equal(girYield.min, 2100);
  assert.equal(girYield.max, 3500);
  assert.equal(girYield.avg, 2800);

  const vechurYield = parseYieldKg('550 – 800 kg');
  assert.equal(vechurYield.min, 550);
  assert.equal(vechurYield.max, 800);
  assert.equal(vechurYield.avg, 675);

  const murrahYield = parseYieldKg('2,200 – 4,500 kg');
  assert.equal(murrahYield.avg, 3350);
});

test('parseFatPercent parses butterfat percentages correctly', () => {
  const bhadawariFat = parseFatPercent('8.5% – 13.5% (World Record Bovine Milk Fat)');
  assert.equal(bhadawariFat.min, 8.5);
  assert.equal(bhadawariFat.max, 13.5);
  assert.equal(bhadawariFat.avg, 11);

  const girFat = parseFatPercent('4.5% – 5.0%');
  assert.equal(girFat.min, 4.5);
  assert.equal(girFat.max, 5.0);
  assert.equal(girFat.avg, 4.75);
});

test('parseWeightKg parses weight strings correctly', () => {
  assert.equal(parseWeightKg('540 kg'), 540);
  assert.equal(parseWeightKg('800 – 1000 kg'), 900);
  assert.equal(parseWeightKg(380), 380);
});

test('generateLactationCurve produces expected 11 timepoints with realistic biology', () => {
  const points = generateLactationCurve(3000, 4.8, 'Cattle');
  assert.equal(points.length, 11);

  // Peak should occur around week 8
  const week1 = points[0];
  const week8 = points[2];
  const week40 = points[10];

  assert.ok(week8.dailyYieldLiters > week1.dailyYieldLiters, 'Peak yield should exceed week 1');
  assert.ok(week8.dailyYieldLiters > week40.dailyYieldLiters, 'Peak yield should exceed late lactation');
  assert.ok(week40.fatPercent >= week8.fatPercent, 'Late lactation milk should be concentrated in fat');
});

test('generateGrowthCurve models progressive growth from birth to maturity', () => {
  const growth = generateGrowthCurve(540, 380, 'Cattle');
  assert.equal(growth.length, 8);

  const birth = growth[0];
  const mature = growth[7];

  assert.ok(birth.femaleWeightKg < 40, 'Birth weight should be proportional');
  assert.equal(mature.femaleWeightKg, 380);
  assert.equal(mature.maleWeightKg, 540);
  assert.ok(growth[4].maleWeightKg > growth[2].maleWeightKg, 'Weight increases with age');
});

test('generateParityPerformance models 6 lactations with peak at lactation 3', () => {
  const parities = generateParityPerformance(3000, 'Cattle');
  assert.equal(parities.length, 6);

  const lac1 = parities[0];
  const lac3 = parities[2];
  const lac6 = parities[5];

  assert.ok(lac3.standardYieldKg > lac1.standardYieldKg, 'Peak mature yield at lac 3');
  assert.ok(lac3.standardYieldKg > lac6.standardYieldKg, 'Gradual decline in geriatric parity');
  assert.ok(lac3.optimizedFeedingYieldKg > lac3.standardYieldKg, 'Balanced ration boosts yield');
});
