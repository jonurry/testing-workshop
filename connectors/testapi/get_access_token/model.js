/*
	Operation model config.
	Documentation: https://github.com/trayio/falafel#model
*/

module.exports = {
  method: "post",
  url: "auth",
  data: {
    Username: "{{username}}",
    Password: "{{password}}"
  }
};
