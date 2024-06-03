export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const BASEURL = "http://localhost:3000";

export async function PATCH(url, payload) {
  return await fetch(url, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((r) => r.json());
}
