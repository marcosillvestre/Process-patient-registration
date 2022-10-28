import React, { useEffect, useState } from "react";
import { Container, Header, Pacients, ListPacients, Main, Date } from './styles'

import axios from 'axios'
import Sidebar from "../../components/Sidebar/sidebar";

function ListPacient() {

    const [pacientInfo, setpacientInfo] = useState([])

    useEffect(() => {


        const pacientInfos = async () => {
            const { data } = await axios.get("http://localhost:3001/pacients")
            setpacientInfo(data)
        }
        pacientInfos()
    }, [])



    // async function RemovePacient(id) {

    //     await axios.delete(`http://localhost:3001/${id}`)


    // }



    return (
        <Main>
            <Sidebar />
            <Container>

                <h1> Lista de pacientes</h1>

                <Header>

                    <p>Nome</p>
                    <p>Idade</p>
                    <p>Cidade</p>
                    <p>Estado</p>


                </Header>

                {
                    pacientInfo &&
                    pacientInfo.map(info => (
                        <Pacients >

                            <ListPacients key={info.id} >
                                <p>{info.name}</p>
                                <p>{info.age}</p>
                                <p>{info.city}</p>
                                <p>{info.state}</p>

                            </ListPacients>
                            <Date>
                                <p>Data de Cadastro:   {info.date}</p>
                            </Date>


                        </Pacients>

                    ))


                }


            </Container>
        </ Main>
    )

}

export default ListPacient;