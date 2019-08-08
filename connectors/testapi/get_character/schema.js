/*
	Operation schema
	Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {
  title: "Get Character",
  input: {
    character_id: {
      type: "integer",
      required: true
    }
  }
};
