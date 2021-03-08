import React, {useState} from 'react';
import axios from 'axios';
import './GetPokemons.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function GetPokemons(props){
  const urlBase = 'https://pokeapi.co/api/v2/pokemon/';


  const filter = (listPokemons, query) => {
    console.log("--filter--")
    return listPokemons.filter(pokemon => pokemon.name.toLowerCase().includes(query))
  }

  const PokemonList = ({listPokemons, query}) =>{
      const filtered = React.useMemo(() => filter(listPokemons, query), [listPokemons, query]);
      return filtered.map(
        (pokemon, i) => 
          <li key={i.toString()}>
            <small onClick={() => getPokemonByName(pokemon.name)}>{capitalizeFirstLetter(pokemon.name)}</small>
          </li>
      )
  }



  const [listPokemons, setListPokemons] = useState([]);
  const [query, setQuery] = useState('');


  const [namePokemon, setNamePokemon] = useState();
  const [figurePokemon, setFigurePokemon] = useState('https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pokebola-Pok%C3%A9mon-PNG.png');


  React.useMemo( async () => {
    const {data} = await axios.get(urlBase+'?limit=1118');
    console.log(data.results[1]);
    setListPokemons(data.results);
  }, [])

  async function getPokemonByName(name){
    const {data} = await axios.get(urlBase+name);
    document.getElementById("listAbilitiesPokemon").innerHTML = '';
    document.getElementById("listTypesPokemon").innerHTML = '';
   
    setNamePokemon(capitalizeFirstLetter(name));
    setFigurePokemon(data.sprites.front_default);

    // abilities
    data.abilities.map((habilidade) => {
      let LI = document.createElement("LI");
      let TextHablidade = document.createTextNode(capitalizeFirstLetter(habilidade.ability.name));
      LI.appendChild(TextHablidade);
      return document.getElementById("listAbilitiesPokemon").appendChild(LI);
    })

   
    // types
    data.types.map((type) => {
      let LI = document.createElement("LI");
      let TextHablidade = document.createTextNode(capitalizeFirstLetter(type.type.name));
      LI.appendChild(TextHablidade);
      return document.getElementById("listTypesPokemon").appendChild(LI);
    })
      
  }

  return (
   <>
   <div className="row">
      <div className="col-md-4">
          <input className="form-control mb-3" type="text" onChange={ e => setQuery(e.target.value.toLowerCase())} placeholder="Busque pelo nome do veiculo"/>

          <div className="lista-de-pokemon">
            <ul><PokemonList listPokemons={listPokemons} query={query} /></ul>
          </div>

      </div>
      <div className="col-md-8">
        <div className="row">
          <div className="col-3">
            <figure>
              <img id="figurePokemon" alt="Pokemon" src={figurePokemon} className="img-fluid"/>
            </figure>
          </div>
          <div className="col-9">
            <h2 id="namePokemon" className="title mt-4">{namePokemon}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Habilidades:</h3>
            <ul id="listAbilitiesPokemon"> 
            </ul>

            <h3>Tipos:</h3>
            <ul id="listTypesPokemon">
            </ul>

          </div>
        </div>
      </div>
   </div>
    
   </>
  )
}

export default GetPokemons;