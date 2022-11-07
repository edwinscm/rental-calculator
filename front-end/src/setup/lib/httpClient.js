export async function post(url, body) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function get(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function del(url) {
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function patch(url, body) {
  try {
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
