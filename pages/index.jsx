import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import styled from "styled-components";
import { useContext, useState } from "react";
import { Card } from "../components/Card";
import { usePokemon } from "../context/pokemonData";

export default function Home({ details }) {
  const [pokedex, setPokedex] = useState(details);

  const [poke, setMyPoke] = usePokemon();

  console.log("pokemon", poke);

  const handleCatchPoke = (pokeId) => {
    /**
     * TODO:
     * 1. Get catched pokemon index
     * 2. Get catched pokemon from poke array through index
     * 3. Change boolean value of the catched pokemon
     * 4. Set new array with catched pokemon
     */

    console.log(pokeId);
    const isCatched = (element) => element.id === pokeId;
    const clickedPokeIndex = poke.findIndex(isCatched);
    const catchedPokemon = poke[clickedPokeIndex];
    catchedPokemon.hasBeenCaught = true;
    const myPokeArray = [...poke];
    myPokeArray[clickedPokeIndex] = catchedPokemon;
    setMyPoke(myPokeArray);

    console.log(myPokeArray);
  };
  return (
    <>
      <Head>
        {" "}
        <title>Catch Pokemon</title>
      </Head>
      <main>
        <div>
          <FirstHeading> Welcome to Catch Pokemon Game!</FirstHeading>
          <OpeningTextStyle>
            {" "}
            Hi! I'm Catemon and I'm da best Pokemon Catcher
          </OpeningTextStyle>
          <ProfileWrapper>
            <ImageStyle
              src="/images/catemon.jpg"
              alt="catemon"
              width={300}
              height={298}
            />
          </ProfileWrapper>
          <CaughtPage>
            Go to the{" "}
            <Link href="/pokemon/caught">
              <a> Caught page </a>
            </Link>
          </CaughtPage>
          <PokeCardWrapper>
            {poke.map((pokemon) => (
              <Card
                // pokemon={pokemon}
                pokeId={pokemon.id}
                pokeName={pokemon.name}
                pokePic={pokemon.image}
                pokeHeight={pokemon.height}
                pokeMoves={pokemon.moves}
                handleCatchPoke={handleCatchPoke}
                pokeAbility={pokemon.abilities}
                pokeExp={pokemon.experience}
              />
            ))}
          </PokeCardWrapper>
        </div>
      </main>
    </>
  );
}

const ImageStyle = styled(Image)`
  border-radius: 50%;
`;

const FirstHeading = styled.h1`
  font-family: Caveat;
  font-size: 60px;
  text-align: center;
`;

const OpeningTextStyle = styled.p`
  font-size: 20px;
  text-align: center;
`;
const CaughtPage = styled.p`
  background-color: lightyellow;
  padding: 20px;
  text-align: center;
  margin: 30px;
  border-radius: 10px;
`;

const PokeCardWrapper = styled.section`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ProfileWrapper = styled.div`
  display: flex;
`;
