import Layout from '../components/PokedexLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout>
    <h1>National Pokédex Kanto</h1>
    <ul>
      {props.pokemons.map(pokemon => (
        <li key={pokemon.entry_number}>
          <Link href="/p/[pokemon.pokemon_species.name]" as={`/p/${pokemon.pokemon_species.name}`}>
            <a>{pokemon.entry_number} {pokemon.pokemon_species.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');

      h1 {
        font-family: 'Press Start 2P', 'Arial';
        font-size: 20px;
        text-align: center;
      }

      a,
      p {
        font-family: 'Press Start 2P', 'Arial';
        font-size: 14px;
        color: #000000;
      }

      ul {
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      li {
        list-style: none;
        margin: 5px 15px;
        width: 25%;
        flex-basis: 25%;
        min-width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 25px;
      }

      a {
        text-decoration: none;
        text-transform: capitalize;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://pokeapi.co/api/v2/pokedex/2');
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.pokemon_entries.length}`);
  return {
    pokemons: data.pokemon_entries.map(entry => entry)
  };
};

export default Index;
