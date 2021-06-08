export async function addActivity(rId, activityId, count, duration) {
  try {
    const response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/routines/${rId}/activities`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          activityId,
          count,
          duration,
        }),
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (data) {
    return console.error(data);
  }
}
export async function deleteActivity(raId, token) {
  console.log(token);
  try {
    const response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/routine_activities/${raId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log("deleteResult:", result);
    return result;
  } catch (data) {
    return console.error(data);
  }
}
