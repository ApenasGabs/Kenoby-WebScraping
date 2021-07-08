const express = require("express");
const app = express();
const port = 3000;
// const axios = require("axios");
const robo = require("./robo");
// app.use(express.json());

// const teste = axios.create({
//   baseURL: "https://pokeapi.co/api/v2/pokemon",
// });
var emg = `c:`;
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Ta rodando ainda ${emg}`));

app.get("/test", async (req, res) => {
  try {
    console.log("aaaaaaaaaa");
    const texto = await robo();
    return res.send(texto);
  } catch (error) {}
});
