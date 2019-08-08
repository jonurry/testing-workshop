describe("Before", () => {
  describe("hashAuth", () => {
    it("Should hash params", () => {
      let params = {
        username: "username",
        password: "password"
      };
      let output = falafel.helpers.before.hashAuth(params);
      expect(output).toEqual({
        auth_hash: "133e1b8eda335c4c7f7a508620ca7f10"
      });
    });
  });
});
