import Layout from '../../components/PokedexLayout';
import CardLayout from '../../components/PokemonCardLayout';
import Card from '../../components/PokemonCard';
import fetch from 'isomorphic-unfetch';


const PokemonDetails = props => (
  <Layout>
    <CardLayout>
      <Card>
        <h1>{props.pokemon.name}</h1>
        <div>
          <img src={props.pokemon.sprites.front_default} />
          <img src={props.pokemon.sprites.back_default} />
        </div>
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
          h1,
          a,
          p {
            font-family: 'Press Start 2P', 'Arial';
            font-size: 14px;
            color: #000000;
            text-transform: capitalize;
          }
          img {
              filter: grayscale(1);
          }
        `}</style>
      </Card>
    </CardLayout>
  </Layout>
);

PokemonDetails.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();

  console.log(`Fetched Pokemon: ${pokemon.name}`);

  return { pokemon };
};

export default PokemonDetails;
