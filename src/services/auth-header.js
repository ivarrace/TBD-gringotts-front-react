export default function authHeader() {
  const user = JSON.parse(sessionStorage.getItem("gringotts-user"));
  if (user && user.accessToken) {
    return { Authorization: user.accessToken };
  } else {
    return {};
  }
}
