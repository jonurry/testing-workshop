require("dotenv").config();
describe("End to end connector test", () => {
  let baseParams = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  };
  let character;
  describe("Should perform full crud successfully", () => {
    it("Should get a list of characters", () => {
      return falafel.testapi.listCharacters(baseParams).then(output => {
        expect(output.Data.Characters.length > 0).toEqual(true);
        character = output.Data.Characters[0];
      });
    });
    it("Should get a single characters", () => {
      return falafel.testapi
        .getCharacter({
          ...baseParams,
          character_id: character.Id
        })
        .then(output => {
          expect(output.Data.Character).toEqual(character);
        });
    });
    // it("Should delete a character", () => {
    //   return falafel.testapi
    //     .deleteCharacter({
    //       ...baseParams,
    //       character_id: character.Id
    //     })
    //     .then(() => {
    //       return falafel.testapi
    //         .getCharacter({
    //           ...baseParams,
    //           character_id: character.Id
    //         })
    //         .catch(err => {
    //           return expect(err.response.statusCode).toEqual(404);
    //         });
    //     });
    // });
  });
});
