const express = require("express");
const app = express();
const port = 3000;

app.use(require("body-parser").json());
let charDB = [
  { Id: 123, Name: "Gandalf", Race: "Maia", Weapon: "Glamdring" },
  { Id: 124, Name: "Aragorn", Race: "Man", Weapon: "Anduril" },
  { Id: 125, Name: "Legolas", Race: "Elf", Weapon: "Bow" },
  { Id: 126, Name: "Gimli", Race: "Dwarf", Weapon: "Axe" },
  { Id: 127, Name: "Boromir", Race: "Man", Weapon: "Sword" },
  { Id: 128, Name: "Frodo", Race: "Hobbit", Weapon: "Sting" },
  { Id: 129, Name: "Sam", Race: "Hobbit", Weapon: "Dagger" },
  { Id: 130, Name: "Pippin", Race: "Hobbit", Weapon: "Dagger" },
  { Id: 131, Name: "Merry", Race: "Hobbit", Weapon: "Dagger" }
];
let idCounter = 131;
let username = "Tolkien";
let password = "Sauronsucks123";
let accessToken = "1234-5678-abcde-fghij-lmnog";

app.post("/auth", (req, res) => {
  if (req.body.Username === username && req.body.Password === password) {
    return res.status(200).send({
      AccessToken: accessToken
    });
  } else {
    return res.status(401).send();
  }
});

//LIST
app.get("/characters", (req, res) =>
  res.send({
    Data: {
      Characters: charDB
    }
  })
);

//GET
app.get("/characters/:id", (req, res) => {
  res.send({
    Data: {
      Character: charDB.find(char => {
        return char.Id == req.params.id;
      })
    }
  });
});

//CREATE
app.post("/characters", (req, res) => {
  if (req.headers.authorization === `Bearer ${accessToken}`) {
    if (
      req.body.Character &&
      (req.body.Character.Name &&
        req.body.Character.Race &&
        req.body.Character.Weapon)
    ) {
      idCounter++;
      charDB.push({
        Id: idCounter,
        Name: req.body.Character.Name,
        Race: req.body.Character.Race,
        Weapon: req.body.Character.Weapon
      });
      res.status(200).send({
        Data: {
          Character: charDB[charDB.length - 1]
        }
      });
    } else {
      return res.status(400).send();
    }
  } else {
    return res.status(403).send();
  }
});

//UPDATE
app.put("/characters/:id", (req, res) => {
  if (req.headers.authorization === `Bearer ${accessToken}`) {
    let char = charDB.find(char => {
      return char.Id == req.params.id;
    });
    if (!char) {
      return res.status(404).send();
    }
    let updated = false;
    if (req.body.Character) {
      if (req.body.Character.Name) {
        char.Name = req.body.Character.Name;
        updated = true;
      }
      if (req.body.Character.Race) {
        char.Race = req.body.Character.Race;
        updated = true;
      }
      if (req.body.Character.Weapon) {
        char.Weapon = req.body.Character.Weapon;
        updated = true;
      }
    }
    if (updated) {
      return res.status(200).send({
        Data: {
          Character: char
        }
      });
    }
    return res.status(400).send();
  } else {
    return res.status(403).send();
  }
});

//DELETE
app.delete("/characters/:id", (req, res) => {
  if (req.headers.authorization === `Bearer ${accessToken}`) {
    for (let i = 0; i < charDB.length; i++) {
      if (charDB[i].Id == req.params.id) {
        charDB.splice(i, 1);
        return res.status(200).send();
      }
    }
    return res.status(404).send();
  } else {
    return res.status(403).send();
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
