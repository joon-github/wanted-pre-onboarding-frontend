export const fetchJsonData = async (url, method, headers, data) => {
  const body = JSON.stringify(data);
  const HOST = "http://localhost:8000";
  const res = await fetch(HOST + url, {
    method: method,
    headers: headers,
    body: body,
  });
  return method.toUpperCase() === "DELETE"
    ? { status: res.status }
    : await res.json();
};
