import React from 'react';
import {Link} from 'react-router-dom';

const Page = () => {
    return(
        <>
            <div className="container">
                <h1>Olá Mestre Pokémon</h1>
                
                <p>Pokémon é uma série de jogos eletrônicos desenvolvidos pela Game Freak e publicados pela Nintendo como parte da franquia de mídia Pokémon. Lançado pela primeira vez em 1996 no Japão para o console Game Boy, a principal série de jogos de RPGs, que continuou em cada geração em portáteis da Nintendo.
                <br />
                <br />
                Os jogos são geralmente lançados em pares, sendo que cada um contém pequenas variações em relação ao outro. Enquanto a série principal consiste em RPGs, os spin-off abrangem outros gêneros, como RPG de ação, quebra-cabeça e jogos virtuais para animais de estimação.</p>

                <img alt="Pokemon" src="https://img.ibxk.com.br/2019/09/30/30091641838086.jpg" className="img-fluid" />
                <button className="btn btn-block btn-dark p-3 mb-5"><Link to="/lista-pokemon" className="text-white">Lista de Pokémon</Link></button>
            </div>
        </>
    );
}

export default Page;