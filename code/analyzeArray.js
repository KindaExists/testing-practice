export default function analyzeArray(arr) {
  return {
    average: arr.reduce((sum, value) => {
      return sum + value;
    }, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  };
};