/*
	Global connector model config.
	Documentation: https://github.com/trayio/falafel#global-models
*/

module.exports = {
  baseUrl: "http://localhost:3000/",
  expects: 200,
  options: {
    headers: {
      "Content-Type": "application/json"
    }
  }
};
