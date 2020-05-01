export function PostData(userData) {
  let JsonApiURL = "http://localhost:3200/signup_users";
  return new Promise((resolve, reject) => {
    fetch(JsonApiURL, {
      method: "POST",
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}
