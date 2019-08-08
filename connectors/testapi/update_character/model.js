/*
	Operation model config.
	Documentation: https://github.com/trayio/falafel#model
*/

module.exports = {
  method: "put",
  url: "characters/{{character_id}}",
  before: falafel.helpers.before.updateCharacter,
  options: {
    headers: {
      Authorization: `Bearer {{access_token}}`
    }
  },
  // beforeRequest: params => console.log(params),
  data: {
    Character: {
      Name: "{{name}}",
      Race: "{{race}}",
      Weapon: "{{weapon}}"
    }
  }
};
