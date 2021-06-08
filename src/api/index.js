const URL = "http://fitnesstrac-kr.herokuapp.com/api/";
export async function fetchData(route) {
  // console.log("route:", route);
  try {
    const response = await fetch(`${URL}${route}`);

    const data = await response.json();
    // console.log("fetchData:", data);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function fetchDataToken(route, token) {
  try {
    const response = await fetch(`${URL}${route}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log("idxResponse:", response);

    const result = await response.json();
    console.log(result);
    return result;
  } catch (data) {
    return console.error("console.error:", data);
  }
}
