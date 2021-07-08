const puppeteer = require("puppeteer");
async function robo() {
  console.log("1");
  const browser = await puppeteer.launch({
    headless: true,
  });
  console.log("2");
  const page = await browser.newPage();
  console.log("3");
  const moedaBase = "dolar",
    moedaFinal = "real";
  console.log("4");
  const myPage = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}`;
  await page.goto(myPage);
  const resultado = await page.evaluate(() => {
    const texto = document.querySelector(".a61j6.vk_gy.vk_sh.Hg3mWc").value;
    return texto;
  });
  console.log(`O valor de 1 ${moedaBase} para ${moedaFinal} é ${resultado}`);
  await browser.close();
  return resultado;
}

module.exports = robo;
