import React, { useState } from 'react';
import axios from 'axios';
import { Cabecalho } from './cabecalho';
import { Atributos } from './atributos';
import { useSelector,useDispatch } from 'react-redux';
import { fill } from '../store/Pontos/Pontos.action';

// function Pericias(_props) {

//     return (
//         <>
//             <h2>Pericias</h2>
//             <Pericia />
//         </>
//     )
// }
// function Pericia(_props) {

//     return (
//         <h3>Pericia</h3>
//     )
// }

function Ficha() {

    const dispatch= useDispatch()

    const fichaState = useSelector((state)=>{
        return state.pontos
    })

    const [ficha, setFicha] = useState();
    console.log(ficha)

    async function geraFicha() {
        try {
            const response = await axios.get("http://172.16.45.80:4000/personagens/gerapersonagemdaemon?idade=34")

            console.log(response)
            dispatch(fill(response.data))
            setFicha(fichaState)


        } catch (error) {
            alert(error)
        }
    }


    return (
        <>
            <h1>Minha ficha</h1>
            <input type="text" ></input>
            <button onClick={() => geraFicha()}>Rolar</button>
            {ficha && ficha.nome && 
                <Cabecalho nome={ficha.nome} />            
            }
             {ficha && ficha.atributos && (  
                 <>
                <Atributos atributos={ficha.atributos} />     
                <Atributos atributos={ficha.atributos} />  
                </>     
             )}
            
            

        </>
    )
}

export default Ficha;