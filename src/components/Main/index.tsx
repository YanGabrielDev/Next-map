"use client"

import * as Styled from './styled'
export const Main = () => {
  return(
  <Styled.Wrapper>
    <Styled.Logo src="/img/logo.svg" alt='imagem de um átomo e react avançado escrito ao lado'/>
    <Styled.Title>React Avançado</Styled.Title>
    <Styled.Description>TypeScript, ReactJs, NextJS e Styled Components</Styled.Description>
    <Styled.Ilustration src='/img/hero-illustration.svg' alt='Um desenvolvedor de frente para a tela com código'/>
  </Styled.Wrapper>
  )

}
