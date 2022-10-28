import React, { useRef } from 'react';
import { Container, Main } from './styles'
import Axios from 'axios'
import Sidebar from '../../components/Sidebar/sidebar';




function Home() {


  const inputName = useRef()
  const inputAge = useRef()
  const inputCity = useRef()
  const inputState = useRef()

  async function registrateInfo() {

    const { data } = await
      Axios.post("http://localhost:3001/pacients",
        {
          name: inputName.current.value,
          age: inputAge.current.value,
          city: inputCity.current.value,
          state: inputState.current.value,
        })


    console.log(data)
  }

  return (
    <Main>
      <Sidebar />
      <Container>
        <h1>Cadastro de pacientes</h1>
        <div>
          <label> Nome <input type="text" ref={inputName} /> </label>
          <label> Idade <input type="number" ref={inputAge} /></label>
          <label> Cidade <input type="text" ref={inputCity} /></label>
          <label> Estado <input type="" ref={inputState} /></label>



          <button onClick={registrateInfo} >Registrar</button>
        </div>



      </Container>


    </Main>

  )

}



export default Home;
