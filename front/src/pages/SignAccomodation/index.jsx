import { StyledSignAccomodation } from './StyledSignAccomodation'
import Header from '../../components/Header'
import accomodationImage from '../../assets/images/sign-accomodation.png'

import { useState } from 'react'

export default function SignAccomodation(){
    const [ value, setValue ] = useState();
    const [ adress, setAdress ] = useState();
    const [ spot, setSpots ] = useState();
    const [ phone, setPhone ] = useState();
    const [ description, setDescription ] = useState();
    const [ error, setError ] = useState();


    const handleSignAccomodation = e => {
        e.preventDefault();

        if(!value | !adress | !spot | !phone | !description){
            setError("Preencha todos os campos");
            return;
        }

        const data = {
            endereco: adress,
            valor: value,
            vagas: spot,
            telefones: phone,
            descricao: description
        }

        console.log(data)
        //send to bd
    }

    return(
        <StyledSignAccomodation>
            <Header />
            <div className="sign-accomodation-box">
                <div className="left-side">
                    <img src={accomodationImage} alt="house image" />
                </div>
                <div className="right-side">
                    <h1>Conte-nos mais sobre sua hospedagem</h1>
                    <h3>É importante informar que nossa plataforma não participará da negociação, apenas da divulgação</h3>
                    <form action="#" method="post">
                        <input 
                            type="text" 
                            name="adress" 
                            placeholder="Endereço" 
                            onChange={e => {
                                setAdress(e.target.value)
                                setError("")
                                }
                            }
                        />
                        <input 
                            type="number" 
                            name="owner" 
                            placeholder="Valor" 
                            min="0"
                            onChange={e => {
                                setValue(e.target.value)
                                setError("")
                                }
                            }
                        />
                        <input 
                            type="number" 
                            name="spaces" 
                            placeholder="Quantidade de vagas" 
                            min="1" 
                            onChange={e => {
                                setSpots(e.target.value)
                                setError("")
                                }
                            }
                        />
                        <input 
                            type="text" 
                            name="phone" 
                            placeholder="Telefone" 
                            onChange={e => {
                                setPhone(e.target.value)
                                setError("")
                                }
                            }
                        />
                        <input 
                            type="text" 
                            name="description" 
                            placeholder="Descrição do lugar" 
                            onChange={e => {
                                setDescription(e.target.value)
                                setError("")
                                }
                            }
                        />
                        <label>{error}</label>
                        <input type="submit" value="Cadastrar" onClick={e => handleSignAccomodation(e)} />
                    </form>
                </div>
            </div>
        </StyledSignAccomodation>
    )
}