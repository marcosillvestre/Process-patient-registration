import styled from 'styled-components'

export const Main = styled.main`
display: flex;
`

export const Container = styled.div`
background: #ffff ;
width: 75em ;
height: 55em ;
display: flex ;
flex-direction: column ;
padding: 40px ;
border-radius: 0px 20px 20px 0px ;
text-align: center ;
overflow:  scroll;
::-webkit-scrollbar { overflow:hidden; }


h1{
    margin-bottom: 40px ;
}

`
export const Header = styled.header`
display: grid ;
/* justify-content: space-between; */
grid-template-columns: repeat(4, 1fr) ;
border-bottom: 1px solid #B5B5B5 ;
gap: 50px;
padding-bottom:  15px;

p{
font-weight: 400;
font-size: 19px;
line-height: 20px;
color: #9A9A9D;
text-align: center ;
}

`

export const Pacients = styled.div`
    margin-top: 1px;
    padding: 15px 1px;


`

export const ListPacients = styled.header`
display: grid ;
grid-template-columns: repeat(4, 1fr) ;
gap: 50px;
background: #ffffff ;
z-index: 2 ;
`
export const Date = styled.div`
/* display: none ;

:hover{
    display: block ;
} */
z-index: 1 ;

`