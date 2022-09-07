export function findHashtags(searchText) {
  const regexp = /\B\#\w\w+\b/g;
  const result = searchText.match(regexp);
  if (result) {
    return result;
  } else {
    return false;
  }
}
