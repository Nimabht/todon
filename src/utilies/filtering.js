export function filter(items, current) {
  if (current === "All") return items;
  if (current === "Today")
    return items.filter((item) => {
      let d = new Date();
      d = d.toString();
      if (d.slice(0, 16) === item.date.slice(0, 16)) return true;
      else return false;
    });
  let result = [];
  for (const item of items) {
    if (item.tags) {
      for (const tag of item.tags) {
        if (tag === current) result.push(item);
      }
    }
  }
  return result;
}
