/* eslint-disable prettier/prettier */
import { useState } from 'react'
import styled from 'styled-components'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'

const VagasGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

interface Vaga {
  id: string
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

interface ListaVagasProps {
  vagas: Vaga[]
}

const ListaVagas: React.FC<ListaVagasProps> = ({ vagas }) => {
  const [filtro, setFiltro] = useState('')

  const vagasFiltradas = vagas.filter((x) =>
    x.titulo.toLocaleLowerCase().includes(filtro.toLowerCase())
  )

  return (
    <div>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <VagasGrid>
        {vagasFiltradas.map((vag) => (
          <Vaga
            key={vag.id}
            titulo={vag.titulo}
            localizacao={vag.localizacao}
            nivel={vag.nivel}
            modalidade={vag.modalidade}
            salarioMin={vag.salarioMin}
            salarioMax={vag.salarioMax}
            requisitos={vag.requisitos}
          />
        ))}
      </VagasGrid>
    </div>
  )
}

export default ListaVagas
