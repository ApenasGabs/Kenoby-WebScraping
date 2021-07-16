const axios = require("axios");
const cheerio = require("cheerio");
async function app(){
  for await (symbol of symbols){
    const vaga = await fetchData(symbol);
    console.log({symbol,vaga});
  }

}
const fetchData = async (url) => {
  const result = await axios.get(url);
  return result.data;
};

const robo =() => {
  
  const content = fetchData(
    `https://jobs.kenoby.com/${moedaFinal}`
  );
  const $ = cheerio.load(content);
  const texto = $(".a61j6.vk_gy.vk_sh.Hg3mWc").text();
  console.log(texto);
  console.log("to aqui ");
};

try {
  robo();
} catch (error) {}
