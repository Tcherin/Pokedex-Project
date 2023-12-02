import React from "react";
import "./PokemonCard.css";

const Pokemon = ({ pokemon }) => {
  return (
    <div className="card-container">
      <div className="card">
        <section className="top-section">
          <div>
            <div className="pokemon-image">
              <img
                src={pokemon.sprites.front_shiny}
                alt="pokemon"
                height="100"
                width="100"
              ></img>
            </div>
            <li>No. {pokemon.id}</li>
          </div>
          <div className="profile">
            <li>{pokemon.name}</li>
            <li>
              HP: {pokemon["stats"][0]["base_stat"]}/
              {pokemon["stats"][0]["base_stat"]}
            </li>
            <li>STATUS/OK</li>
          </div>
        </section>
        <section className="bottom-section">
          <div className="stats">
            <li className="stat-title">ATTACK</li>
            <li className="stat-content">{pokemon["stats"][1]["base_stat"]}</li>
            <li className="stat-title">DEFENSE</li>
            <li className="stat-content">{pokemon["stats"][2]["base_stat"]}</li>
            <li className="stat-title">SPEED</li>
            <li className="stat-content">{pokemon["stats"][5]["base_stat"]}</li>
            <li className="stat-title">SPECIAL</li>
            <li className="stat-content">{pokemon["stats"][3]["base_stat"]}</li>
          </div>
          <div className="types">
            <div>
              <li>TYPE1/</li>
              <li>{pokemon["types"][0]["type"]["name"]}</li>
            </div>
            {pokemon["types"][1] ? (
              <li>
                TYPE2/
                <br /> {pokemon["types"][1]["type"]["name"]}
              </li>
            ) : null}
            <div>OT/MET</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pokemon;

/* <div>
          Top Moves:
          <li>{pokemon["moves"][0]["move"]["name"]}</li>
          <li>{pokemon["moves"][1]["move"]["name"]}</li>
          <li>{pokemon["moves"][3]["move"]["name"]}</li>
          <li>{pokemon["moves"][4]["move"]["name"]}</li>
        </div> */
