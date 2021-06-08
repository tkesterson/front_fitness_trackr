export async function getMe(token) {
  return fetch("https://fitnesstrac-kr.herokuapp.com/api/users/me", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch(console.error);
}
