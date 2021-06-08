export async function getMe(token) {
  return fetch("http://fitnesstrac-kr.herokuapp.com/api/users/me", {
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
