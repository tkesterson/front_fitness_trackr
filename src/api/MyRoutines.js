export async function addRoutine(name, goal, isPublic, token) {
  try {
    const response = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/routines",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          goal,
          isPublic,
        }),
      }
    );
    const result = await response.json();

    return result;
  } catch (data) {
    return console.error(data);
  }
}

export async function deleteRoutine(rId, token) {
  try {
    const response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/routines/${rId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();

    return result;
  } catch (data) {
    return console.error(data);
  }
}
export async function updateRoutine(rId, name, goal, isPublic, token) {
  try {
    debugger;
    console.log(rId, name, goal, isPublic, token);
    const response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/routines/${rId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          goal,
          isPublic,
        }),
      }
    );
    const result = await response.json();

    return result;
  } catch (data) {
    return console.error(data);
  }
}
