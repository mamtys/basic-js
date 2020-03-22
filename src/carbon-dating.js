const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const sampleActivityFloat = parseFloat(sampleActivity, 10);

  if (isNaN(sampleActivityFloat)) {
    return false;
  }
  if (sampleActivityFloat <= 0) {
    return false;
  }
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  if (sampleActivityFloat >= MODERN_ACTIVITY) {
    return false;
  }

  const k = 0.693 / HALF_LIFE_PERIOD;
  
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityFloat) / k);
};