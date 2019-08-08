/*
	Operation model config.
	Documentation: https://github.com/trayio/falafel#model
*/

module.exports = {
  method: "delete",
  url: "characters/{{character_id}}",
  before: falafel.helpers.before.authorization,
  options: {
    headers: {
      Authorization: `Bearer {{access_token}}`
    }
  }
};
