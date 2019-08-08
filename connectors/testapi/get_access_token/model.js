/*
	Operation model config.
	Documentation: https://github.com/trayio/falafel#model
*/

module.exports = {
  method: "post",
  url: "auth",
  before: falafel.helpers.before.hashAuth,
  data: {
    Credentials: "{{auth_hash}}"
  }
};
