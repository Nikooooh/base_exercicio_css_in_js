/* eslint-disable prettier/prettier */
import styled from 'styled-components'

interface VagaProps {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const VagaItem = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
  }
`

const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

const VagaLink = styled.a`
  border-color: var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    border-color: var(--cor-principal);
    background-color: var(--cor-secundaria);
    color: var(--cor-principal);
  }
`

const Vaga: React.FC<VagaProps> = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}) => (
  <VagaItem>
    <VagaTitulo>{titulo}</VagaTitulo>
    <ul>
      <li>Localizacao: {localizacao}</li>
      <li>Senioridade: {nivel}</li>
      <li>Tipo de contratacao: {modalidade}</li>
      <li>
        Salário: {salarioMin} - {salarioMax}
      </li>
      <li>Requisitos: {requisitos.join(', ')}</li>
    </ul>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaItem>
)

export default Vaga
