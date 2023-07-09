import fetch from "node-fetch";

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw Error("Terjadi kesalahan ketika fetching data");
    }
  })
  .then((data) => {
    const x = [
      {
        name: data.name,
        height: data.height,
        weight: data.weight,
        ability: data.abilities.map((x) => x.ability.name).join(", "),
      },
    ];

    const y = JSON.stringify(x);

    console.info(y);
  })
  .catch((err) => {
    console.error("Terjadi kesalahan:", err);
  });
