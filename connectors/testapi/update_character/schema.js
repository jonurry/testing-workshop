/*
	Operation schema
	Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {
  title: "Update Character",
  input: {
    character_id: {
      type: "integer",
      required: true
    },
    name: {
      type: "string"
    },
    race: {
      type: "string"
    },
    weapon: {
      type: "string"
    }
  }
};
