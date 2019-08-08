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

module.exports = {
  authorization,
  updateCharacter
};
