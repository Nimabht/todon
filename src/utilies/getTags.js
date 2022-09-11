export function getTags(items) {
  let result = [];
  for (const item of items) {
    if (item.tags !== undefined) {
      for (const tag of item.tags) {
        if (result.indexOf(tag) === -1) result.push(tag);
      }
    }
  }
  return result;
}
