import Link from "next/dist/client/link";
import Head from "next/head";
import styled from "styled-components";
import { usePokemon } from "../../context/pokemonData";

const Moves = () => {
  const [poke, setMyPoke] = usePokemon();
  console.log(
    "ALOHAAAA",
    poke.map((pokemon) => pokemon.image)
  );
  // const { front_default } = pokemon;
  return (
    <>
      <Head>
        {" "}
        <title> Pokemon Moves</title>
      </Head>
      <Link href="../">
        <a> back to Homepage</a>
      </Link>
      <h1>Pokemon Moves</h1>
      <MoveCardWrapper>
        {poke.map((pokemon) => (
          <>
            <h2> {pokemon.name} </h2>
            <img src="{pokemon.image}" alt="poke front pic" />
            <ul>
              {pokemon.moves.map((move) => (
                <li>{move.move.name}</li>
              ))}
            </ul>
          </>
        ))}
      </MoveCardWrapper>
    </>
  );
};
export default Moves;

const MoveCardWrapper = styled.div`
  background-color: moccasin;
  width: 200px;
  margin: 10px;
`;
