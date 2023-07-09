/**
 * ! Make HTTP Request
 */

import fetch from "node-fetch";

const getPokemonData = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

    if (!res.ok) {
      throw Error("Terjadi kesalahan ketika fetching data");
    }

    const data = await res.json();

    const pokemon = {
      name: data.name,
      height: data.height,
      weight: data.weight,
      abilities: data.abilities.map((ability) => ability.ability.name),
    };

    console.info(JSON.stringify(pokemon));
  } catch (err) {
    console.error("Terjadi kesalahan:", err);
  }
};

getPokemonData();
