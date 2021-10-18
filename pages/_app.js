import { PokemonProvider } from "../context/pokemonData";
import GlobalStyles from "../styles/globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <PokemonProvider>
        <Component {...pageProps} />
      </PokemonProvider>
    </>
  );
}

export default MyApp;
