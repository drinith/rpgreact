import React,{ useState } from 'react';


export const Atributo = ({ pontos, soma, menos, valor: { nome, valorOriginal: _valorOriginal } }) => {
    
    const [valorOriginal, setValorOriginal] = useState(_valorOriginal)

  

    const inc = () => {
        setValorOriginal(valorOriginal+1)
        menos()
    }

    const dec = () => {
        setValorOriginal(valorOriginal-1)
        soma()
    }
    //console.log(valor)

    return (
        <>
            <div>{nome} {valorOriginal}
                <button onClick={ inc } disabled={  pontos <= 0 }>+</button>
                <button onClick={ dec } disabled={ pontos >= 101 }>-</button>
            </div>
        </>
    )
}
