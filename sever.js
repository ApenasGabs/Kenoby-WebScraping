const express = require("express");
const app = express();
const port = 3000;
const robo = require("./robo.js");

var emj = `😍`;
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Ta rodando ainda ${emj}`));

app.get("/dolar", async (req, res) => {
  try {
    console.log("aaaaaaaaaa");
    const texto = await robo();
    return res.send(texto);
  } catch (error) {}
});
