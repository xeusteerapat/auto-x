import fs from 'node:fs';

const main = async () => {
  const res = await fetch(
    'https://ramen-api.dev/shops?pretty&page=1&perPage=40'
  );
  const data = await res.json();

  const randomNum = Math.floor(Math.random() * 34);

  const ramenShop = data.shops[randomNum];

  console.log(ramenShop);

  const content = `
  <h1>Hi 👋 Wanna try some ramen?</h1>

  ## 🍜 ${ramenShop.id}

  <img src=${ramenShop.photos[0].url} alt="${ramenShop.id}" width="500" height="auto"/>

  credit: [Ramen API](https://github.com/yusukebe/ramen-api)
  `;

  fs.writeFileSync('README.md', content);
};

main().catch(err => console.log(err));
