import Link from "next/dist/client/link";
import Head from "next/head";
import { Card } from "../../components/Card";
import { usePokemon } from "../../context/pokemonData";

const Caught = () => {
  const [poke, setMyPoke] = usePokemon();

  console.log(poke);

  return (
    <>
      <Head>
        {" "}
        <title> Catch Catemon</title>
      </Head>
      <h1>Caught</h1>
      <div>
        <section>
          {poke
            .filter((pokemon) => pokemon.hasBeenCaught)
            .map((pokemon) => (
              <Card
                // pokemon={pokemon}
                pokeId={pokemon.id}
                pokeName={pokemon.name}
                pokePic={pokemon.image}
                pokeHeight={pokemon.height}
                pokeMoves={pokemon.moves}
                handleCatchPoke={() => null}
                pokeAbility={pokemon.ability}
                // pokeExp={pokemon.base_experience}
              />
            ))}
        </section>{" "}
        <Link href="../">
          <a> back to Homepage</a>
        </Link>
      </div>
    </>
  );
};
export default Caught;
