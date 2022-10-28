import React, { useEffect, useState } from "react";
import { Container, Header, Pacients, ListPacients, Main } from './styles'

import axios from 'axios'
import Sidebar from "../../components/Sidebar/sidebar";

function DeletePacient() {

    const [pacientInfo, setpacientInfo] = useState([])

    useEffect(() => {


        const pacientInfos = async () => {
            const { data } = await axios.get("http://localhost:3001/pacients")
            setpacientInfo(data)
        }
        pacientInfos()
    }, [])


    async function RemovePacient(id) {
        const filtered = pacientInfo.filter((item) => item.id !== id)
        setpacientInfo(filtered)
        await axios.delete(`http://localhost:3001/pacients/${id}`)


    }



    return (
        <Main>
            <Sidebar />
            <Container>

                <h1> Deletar registros</h1>

                <Header>

                    <p>Nome</p>
                    <p>Idade</p>



                </Header>

                {
                    pacientInfo &&
                    pacientInfo.map(info => (
                        <Pacients >

                            <ListPacients key={info.id} >
                                <p>{info.name}</p>
                                <p>{info.age}</p>

                                <button onClick={() => RemovePacient(info.id)}> Remover </button>

                            </ListPacients>
                        </Pacients>

                    ))


                }


            </Container>
        </ Main>
    )

}

export default DeletePacient;