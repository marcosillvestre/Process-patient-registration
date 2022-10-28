import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    box-sizing: border-box;
    padding: 0 ;
    font-family: 'Roboto', sans-serif; 
    outline: none ;
}
body{
  height: 100vh ;
  display: flex ;
  align-items: center ;
  justify-content: center ;
    background-image: linear-gradient(
  45deg,
  hsl(287deg 100% 20%) 0%,
  hsl(279deg 71% 27%) 11%,
  hsl(271deg 59% 33%) 22%,
  hsl(262deg 51% 39%) 33%,
  hsl(253deg 46% 45%) 44%,
  hsl(244deg 45% 51%) 56%,
  hsl(235deg 55% 55%) 67%,
  hsl(227deg 70% 56%) 78%,
  hsl(219deg 85% 56%) 89%,
  hsl(210deg 100% 50%) 100%
  
);
li{
  list-style: none ;
}
}
`