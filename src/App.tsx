/* eslint-disable prettier/prettier */
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global.css'

const vagas = [
  {
    id: '1',
    titulo: 'Desenvolvedor front-end',
    localizacao: 'Remoto',
    nivel: 'Júnior',
    modalidade: 'CLT',
    salarioMin: 3000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript']
  },

];

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas vagas={vagas} />
      </div>
    </>
  )
}

export default App
