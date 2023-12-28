export const request = async (url, options) => {
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  options = Object.assign({}, { headers: headers }, options);

  return fetch(url, options).then((response) =>
    response
      .json()
      .then((json) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
      .catch((err) => {
        Promise.reject(err);
      })
  );
};

export const getDishes = () => {
  return request(
    `https://run.mocky.io/v3/f47694b8-4d45-4c30-aed0-dd82bb4025fb`,
    {
      method: "GET",
    }
  );
};
