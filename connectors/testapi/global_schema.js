/*
	Global connector schema config.
	Documentation: https://github.com/trayio/falafel#global-message-schemas
*/

module.exports = {
  input: {
    username: {
      type: "string",
      required: true,
      advanced: true,
      defaultJsonPath: "$.auth.username"
    },
    password: {
      type: "string",
      required: true,
      advanced: true,
      defaultJsonPath: "$.auth.password"
    }
  }
};
