const nock = require("nock");
describe("Create Character", () => {
  let getAccessTokenStub;
  beforeEach(() => {
    getAccessTokenStub = jest
      .spyOn(falafel.testapi, "getAccessToken")
      .mockImplementation(() => {
        return Promise.resolve({ AccessToken: "someAccessToken" });
      });
  });

  afterEach(() => {
    getAccessTokenStub.mockRestore();
  });

  it("Should hash params", () => {
    let params = {
      username: "username",
      password: "password",
      name: "Bilbo Baggins",
      race: "Hobbit",
      weapon: "Sting"
    };
    let reqBody;
    nock("http://localhost:3000/characters")
      .post("")
      .reply(function(uri, requestBody) {
        reqBody = requestBody;
        return {
          status: 200
        };
      });
    return falafel.testapi.createCharacter(params).then(() => {
      expect(reqBody).toEqual({
        Character: { Name: "BilboBaggins", Race: "Hobbit", Weapon: "Sting" }
      });
    });
  });
});
