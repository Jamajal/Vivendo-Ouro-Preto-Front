import { StyledSignAttraction } from './StyledSignAttraction'
import Header from '../../components/Header';

import attractionImage from '../../assets/images/sign-attraction.png'

import { useState } from 'react'

export default function SignAttraction(){
    const [ name, setName ] = useState();
    const [ adress, setAdress ] = useState();
    const [ value, setValue ] = useState();
    const [ description, setDescription ] = useState();
    const [ opening, setOpening ] = useState()
    const [ closing, setClosing ] = useState()
    const [ error, setError ] = useState();


    const handleSignAttraction = e => {
        e.preventDefault();

        if(!name | !adress | !value |  !description | !opening | !closing){
            setError("Preencha todos os campos");
            return;
        }

        const workingTime = opening + "-" + closing
        const data = {
            nome: name,
            endereco: adress,
            horario_de_funcionamento: workingTime,
            valor: value,
            descricao: description
        }

        console.log(data)
        //send to bd
    }

    return(
        <StyledSignAttraction>
            <Header />
            <div className="sign-attraction-box">
                <div className="left-side">
                    <img src={attractionImage} alt="attraction image" />
                </div>
                <div className="right-side">
                    <h1>Conte-nos mais sobre esse ponto turístico</h1>
                    <h3>É importante informar que nossa plataforma não garante que o ponto turístico ainda está ativo</h3>
                    <form action="#" method="post">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Nome" 
                            onChange={e => {
                                setName(e.target.value)
                                setError("")
                            }}
                        />
                        <input 
                            type="text" 
                            name="adress" 
                            placeholder="Endereço" 
                            onChange={e => {
                                setAdress(e.target.value)
                                setError("")
                            }}
                        />
                        <input 
                            type="number" 
                            name="cost" 
                            placeholder="Valor R$" 
                            onChange={e => {
                                setValue(e.target.value)
                                setError("")
                            }}
                        />
                        <input 
                            type="text" 
                            name="description" 
                            placeholder="Descrição" 
                            onChange={e => {
                                setDescription(e.target.value)
                                setError("")
                            }}
                        />
                        <div className="working-time">
                            <p>Abre</p>
                            <input 
                                type="time" 
                                name="opening" 
                                id="opening" 
                                onChange={e => {
                                    setOpening(e.target.value)
                                    setError("")
                                }}
                            />
                            <p> até </p>
                            <input 
                                type="time" 
                                name="closing" 
                                id="closing" 
                                onChange={e => {
                                    setClosing(e.target.value)
                                    setError("")
                                }}
                            />
                        </div>
                        <label>{error}</label>
                        <input type="submit" value="Cadastrar" onClick={e => handleSignAttraction(e)}/>
                    </form>
                </div>
            </div>
        </StyledSignAttraction>
    )
}