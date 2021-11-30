import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const PokemonContext = createContext({ myPokemon: [], setMyPokemon: () => {} });

export function PokemonProvider({ children }) {
  const [myPokemon, setMyPokemon] = useState([]);

  console.log("Pokemon provider");

  useEffect(() => {
    console.log("****** USE EFFECT *******");

    const myFetch = async () => {
      const result = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await result.json();
      const allPokemonData = data.results;

      const details = await Promise.all(
        allPokemonData.map(async (pokemon) => {
          const result = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );
          const data = await result.json();
          return data;
        })
      );

      console.log("***DETAILS***", details);

      const adaptedDetails = details.map((detailSet) => {
        return {
          id: uuidv4(),
          name: detailSet.name,
          image: detailSet.sprites.front_default,
          height: detailSet.height,
          moves: detailSet.moves,
          ability: detailSet.abilities,
          experience: detailSet.base_experience,
          hasBeenCaught: false,
        };
      });

      console.log("Set my pokemon", adaptedDetails);

      setMyPokemon(adaptedDetails);
    };

    myFetch();
  }, []);

  // console.log("Pokemon data");

  return (
    <PokemonContext.Provider value={[myPokemon, setMyPokemon]}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  const context = useContext(PokemonContext);

  if (!context)
    throw new Error("usePokemon must be used inside a `PokemonProvider`");

  return context;
}
