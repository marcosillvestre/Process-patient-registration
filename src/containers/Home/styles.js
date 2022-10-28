import styled from 'styled-components'


export const Container = styled.div`
background: #ffff ;
width: 75em ;
height: 55em ;
padding: 40px ;
border-radius: 0 20px 20px 0 ;
gap: 10px;
display: flex ;
align-items: center ;
justify-content: center ;
flex-direction: column ;


button{
    background: #9758a6;
    border-radius: 20px;
    width: 182px;
    height: 36px;
    border: none ;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;


    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
    }

    div{
            display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
label{
        display: flex;
    flex-direction: column;
    width: 100%;

    input{
    width: 50em;
    border-radius: 6px ;
    height: 36px ;
    margin: 5px 0 15px 0  ;
    padding-left: 15px ;

        }
}

`
export const Main = styled.main`

display: flex;
`
