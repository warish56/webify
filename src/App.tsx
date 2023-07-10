import { ThemeProvider, styled } from 'styled-components'
import { theme } from './theme'
import './App.css'
import { Navbar } from '@components/Navbar'
import { HomePage } from './Pages/Home'


const MainContainer = styled.main`
 display: flex;
 flex-flow: column nowrap;
 padding: 20px;
 align-items: center;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
          <Navbar />
          <HomePage />
      </MainContainer>
    </ThemeProvider>
  )
}

export default App
