export function search(items, value) {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    if (
      items[i].title.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
      items[i].description.toLowerCase().indexOf(value.toLowerCase()) !== -1
    )
      result.push(items[i]);
  }
  return result;
}
