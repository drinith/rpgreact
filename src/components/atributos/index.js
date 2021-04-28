import React, { useState } from 'react';
import { Atributo } from '../atributo';


export const Atributos = ({ atributos }) => {
    const [pontos,setPontos] = useState(101);

    const soma = () => {
        setPontos(pontos+1)
    }
    
    const menos = () => {
        setPontos(pontos-1)
    }

    return (
        <>
            <h2>Atributos</h2>
            <h3>{pontos}</h3>
            { atributos.map(valor => (
                <div key={valor.nome}>
                    <Atributo valor={valor} pontos={pontos} soma={soma} menos={menos} />
                </div>
            ))}
        </>
    )
}