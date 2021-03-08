import React from 'react';
import {Link} from 'react-router-dom';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return(
        <>
        <header className="mb-5">
            <div className="bg-dark collapse" id="navbarHeader" >
                <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-7 py-4">
                     <h4 className="text-white">Sobre</h4>
                     <p className="text-muted">Pokémon é uma série de jogos eletrônicos desenvolvidos pela Game Freak e publicados pela Nintendo como parte da franquia de mídia Pokémon. Lançado pela primeira vez em 1996 no Japão para o console Game Boy, a principal série de jogos de RPGs, que continuou em cada geração em portáteis da Nintendo.</p>
                    </div>
                    <div className="col-sm-4 offset-md-1 py-4">
                    <h4 className="text-white">MENU</h4>
                    <ul className="list-unstyled">
                        <li><Link to="/" className="text-white">Voltar para Home</Link></li>
                        <li><Link to="/lista-pokemon" className="text-white">Lista de Pokémon</Link></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className="navbar navbar-dark bg-dark box-shadow">
                <div className="container d-flex justify-content-between">
                <p className="navbar-brand d-flex align-items-center">
                    <img alt="Logo" src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pokebola-Pok%C3%A9mon-PNG.png" width="20" height="20" /> 
                    <strong> Pokémon</strong>
                </p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
            </div>
        </header>
        </>
    );
}