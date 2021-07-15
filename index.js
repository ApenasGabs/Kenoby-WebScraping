const axios = require("axios");
const cheerio = require("cheerio");

const fetchData = async (url) => {
  const result = await axios.get(url);
  return result.data;
};

const robo =() => {
  const moedaBase = "dolar",
    moedaFinal = "real";
  const content = fetchData(
    `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}`
  );
  const $ = cheerio.load(content);
  const texto = $(".a61j6.vk_gy.vk_sh.Hg3mWc").text();
  console.log(texto);
  console.log("to aqui ");
};

try {
  robo();
} catch (error) {}
