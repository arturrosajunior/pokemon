import React from 'react';
import GetPokemons from '../../components/GetPokemons';

const Page = () => {
    return(
        <>
            <div className="container">
                <h1 className="text-center d-block bg-warning p-2">Pokémon Showroom</h1>

                <GetPokemons/>
                
            </div>
        </>
    );
}

export default Page;