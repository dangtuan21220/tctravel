export const distance = (
  startLat: any,
  startLng: any,
  endLat: any,
  endLng: any,
) => {
  // Converting to radians
  let startLatRad = startLat * 0.01746031;
  let startLngRad = startLng * 0.01746031;
  let endLatRad = endLat * 0.01746031;
  let endLngRad = endLng * 0.01746031;
  let diffLat = endLatRad - startLatRad;
  let diffLng = endLngRad - startLngRad;
  let val =
    Math.pow(Math.sin(diffLat / 2), 2) +
    Math.cos(startLatRad) *
      Math.cos(endLatRad) *
      Math.pow(Math.sin(diffLng / 2), 2);
  let results = 6378.8 * (2 * Math.asin(Math.sqrt(val))); // km
  return results;
};
