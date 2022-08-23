export function userValid(data, users) {
  for (const user of users) {
    if (
      user.username.toLowerCase() === data.username.toLowerCase() &&
      user.password.toLowerCase() === data.password.toLowerCase()
    )
      return true;
  }
  return false;
}
