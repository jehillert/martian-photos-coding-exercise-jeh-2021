// attrib:
//   "Getting a random number between two values"
//   (https://developer.mozilla.org)
// Returns a random number between the specified values.
// Returned value is no lower than (and may possibly equal)
// min, and is less than (and not equal) max.
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
