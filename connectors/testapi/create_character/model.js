/*
	Operation model config.
	Documentation: https://github.com/trayio/falafel#model
*/

module.exports = {
  method: "post",
  url: "characters",
  before: falafel.helpers.before.authorization,
  options: {
    headers: {
      Authorization: `Bearer {{access_token}}`
    }
  },
  data: {
    Character: {
      Name: "{{name}}",
      Race: "{{race}}",
      Weapon: "{{weapon}}"
    }
  }
};
