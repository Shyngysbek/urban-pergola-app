import './App.css'
import Footer from './components/Footer';
import Header from './components/Header'
import Home from './components/Home';
import { styled } from "styled-components"

function App() {
  return (
    <div>
      <Header />
      <ResponsiveContainer>
          <Home />
      </ResponsiveContainer>
      <Footer />
    </div>
  )
}

export default App

const ResponsiveContainer = styled.div`
  width: 100%;
  padding-top: 70px;
`;