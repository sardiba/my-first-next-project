import styled from "styled-components";

export const Card = ({
  pokeId,
  pokeName,
  pokePic,
  pokeHeight,
  pokeMoves,
  handleCatchPoke,
  pokeAbility,
  pokeExp,
  // pokemon,
}) => {
  // const {
  //   name: pokeName,
  //   height: pokeHeight,
  //   abilities: pokeAbility,
  //   base_experience: pokeExp,
  // } = pokemon;
  // const { front_default: pokePic } = pokemon.sprites;
  return (
    <>
      <PokeCardStyle>
        <PokeNameStyle>{pokeName}</PokeNameStyle>
        <PokePicStyle src={pokePic} alt="poke front pic" />
        <PokeDetailsStyle>
          <ListStyle>Height : {pokeHeight} m</ListStyle>
          {/* <ListStyle>
            Abilities :
            <ul>
              {pokeAbility.map((ability) => (
                <li>{ability.ability.name}</li>
              ))}
            </ul>
          </ListStyle> */}
          <ListStyle>Experience : {pokeExp}</ListStyle>
          {/* <ListStyle>Moves: {pokeMoves}</ListStyle> */}
        </PokeDetailsStyle>
        <CatchButton onClick={(event) => handleCatchPoke(pokeId)}>
          Catch!
        </CatchButton>
      </PokeCardStyle>
    </>
  );
};

const PokeCardStyle = styled.div`
  display: inline-block;
  background-color: #a8cfcf;
  width: 270px;
  height: 65vh;
  border: #7a567a solid 5px;
  border-radius: 10px;
  margin: 15px;
  text-transform: capitalize;
`;

const PokePicStyle = styled.img`
  width: 260px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-top: #7a567a solid 3px;
  border-bottom: #7a567a solid 3px;
`;

const PokeNameStyle = styled.h2`
  font-family: Caveat;
  font-size: 35px;
  text-align: center;
  color: white;
`;

const PokeDetailsStyle = styled.ul`
  padding-left: 0;
  color: white;
`;
const ListStyle = styled.li`
  font-size: 15px;
  list-style-type: none;
  text-align: center;
`;
const CatchButton = styled.button`
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: yellow;
  border: #7a567a 2px dotted;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
`;
