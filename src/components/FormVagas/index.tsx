/* eslint-disable prettier/prettier */
import { useState, FormEvent } from 'react'
import styled from 'styled-components'

interface FormVagasProps {
  aoPesquisar: (termo: string) => void
}

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

const Button = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`

const Input = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`

const FormVagas: React.FC<FormVagasProps> = ({ aoPesquisar }) => {
  const [termo, setTermo] = useState('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Form onSubmit={aoEnviarForm}>
      <Input
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Button type="submit">Pesquisar</Button>
    </Form>
  )
}

export default FormVagas
