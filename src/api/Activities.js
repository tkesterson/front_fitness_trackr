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

    return result;
  } catch (data) {
    return console.error(data);
  }
}
export async function deleteActivityFromRoutine(raId, token) {
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

    return result;
  } catch (data) {
    return console.error(data);
  }
}
export async function createActivity(name, description, token) {
  try {
    const response = await fetch(
      "https://fitnesstrac-kr.herokuapp.com/api/activities",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          description,
        }),
      }
    );
    const result = await response.json();

    return result;
  } catch (data) {
    return console.error(data);
  }
}
export async function UpdateActivityCountDuration(
  raId,
  count,
  duration,
  token
) {
  console.log(count, duration);
  try {
    const response = await fetch(
      `https://fitnesstrac-kr.herokuapp.com/api/routine_activities/${raId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          count,
          duration,
        }),
      }
    );
    const result = await response.json();

    return result;
  } catch (data) {
    return console.error(data);
  }
}
