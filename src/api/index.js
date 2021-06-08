const URL = "http://fitnesstrac-kr.herokuapp.com/api/";
export async function fetchData(route) {
  try {
    const response = await fetch(`${URL}${route}`);

    const data = await response.json();

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

    let result;
    try {
      result = await response.json();
    } catch (data2) {
      return [];
    }

    return result;
  } catch (data) {
    console.error(data);
    return [];
  }
}
