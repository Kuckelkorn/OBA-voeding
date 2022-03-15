export const render = async (data , id) => {
  const main = document.querySelector(`#${id}`);
  const results = await data.results;
  console.dir(await results);
  await results.forEach((item) => {
    const html = `
            <article>
              <h2>${item.titles[0]}</h2>
              <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
              <img src="${
                item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
              }">
            </article>
          `;
    main.insertAdjacentHTML('beforeend', html);
  });
}
