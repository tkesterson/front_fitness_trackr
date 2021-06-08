export function register(username, password) {
  return fetch("https://fitnesstrac-kr.herokuapp.com/api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error.response.data);
    });
}
export function signIn(username, password) {
  return fetch("https://fitnesstrac-kr.herokuapp.com/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error.response.data);
    });
}

export function clearCurrentUser() {
  localStorage.removeItem("token");
}
