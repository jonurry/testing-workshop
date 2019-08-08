const crypto = require("crypto");
const authorization = params => {
  return falafel.testapi.getAccessToken(params).then(data => {
    params.access_token = data.AccessToken;
    return {
      ...params,
      access_token: data.AccessToken
    };
  });
};

const updateCharacter = params => {
  if (params.name || params.race || params.weapon) {
    return authorization(params);
  }
  return Promise.reject({
    code: "#user_input_error",
    message: "You must select atleast one field to update"
  });
};

const createCharacter = params => {
  if (params.name.length > 15) {
    return Promise.reject({
      code: "#user_input_error",
      message: "You must select atleast one field to update"
    });
  }
  params.name = params.name.split(" ").join("");
  params.race = params.race.split(" ").join("");

  return authorization(params);
};

const hashAuth = params => {
  if (params.username === undefined || params.password === undefined) {
    return Promise.reject({
      code: "#user_input_error",
      message: "Credentials are not defined"
    });
  }
  params.auth_hash = crypto
    .createHash("md5")
    .update(`${params.username}:${params.password}`)
    .digest("hex");

  delete params.username;
  delete params.password;

  return params;
};

module.exports = {
  authorization,
  updateCharacter,
  createCharacter,
  hashAuth
};
