import { StyledSignEvent } from './StyledSignEvent';
import Header from '../../components/Header';
import eventImage from '../../assets/images/sign-event.png'

import { useState } from 'react';

export default function SignEvent(){
    const [ name, setName ] = useState();
    const [ adress, setAdress ] = useState();
    const [ value, setValue ] = useState();
    const [ description, setDescription ] = useState();
    const [ opening, setOpening ] = useState();
    const [ closing, setClosing ] = useState();
    const [ date, setDate ] = useState();
    const [ error, setError ] = useState();


    const handleSignEvent = e => {
        e.preventDefault();

        if(!name | !date | !adress | !value |  !description | !opening | !closing){
            setError("Preencha todos os campos");
            return;
        }

        const data = {
            nome: name,
            endereco: adress,
            valor: value,
            data: date,
            inicio: opening,
            termino: closing,
            descricao: description
        }

        console.log(data)
        //send to bd
    }

    return (
        <StyledSignEvent>
            <Header />
            <div className="sign-event-box">
                <div className="left-side">
                    <img src={eventImage} alt="event image" />
                </div>
                <div className="right-side">
                    <h1>Conte-nos mais sobre esse evento</h1>
                    <h3>É importante informar que nossa plataforma não garante a veracidade do evento, confira com o organizador</h3>
                    <form action="#" method="post">
                        <input 
                            type="text" 
                            name="owner" 
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
                            type="date" 
                            name="date" 
                            onChange={e => {
                                setDate(e.target.value)
                                setError("")
                            }}
                        />
                        <input 
                            type="text" 
                            name="description" 
                            placeholder="Descrição do lugar" 
                            onChange={e => {
                                setDescription(e.target.value)
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
                        <div className="working-time">
                            <p>Inicia às</p>
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
                        <input type="submit" value="Cadastrar" onClick={e => handleSignEvent(e)} />
                    </form>
                </div>
            </div>
        </StyledSignEvent>
    )
}