export function renderDate(date) {
  const now = new Date().toString().split(" ").slice(1, 4);
  const mydate = date.split(" ").slice(1, 4);
  if (now[0] === mydate[0] && now[1] === mydate[1] && now[2] === mydate[2])
    return "Today";
  return `${mydate[2]}/${mydate[0]}/${mydate[1]}`;
}
