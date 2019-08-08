/*
	Operation schema
	Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {
  title: "Create Character",
  input: {
    name: {
      type: "string",
      required: true
    },
    race: {
      type: "string",
      required: true
    },
    weapon: {
      type: "string",
      required: true
    }
  }
};
