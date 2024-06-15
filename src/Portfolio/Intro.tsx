import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { Typer } from "../components"
import { Animation } from "./Animation"

const TyperContainer = styled.div`
  width: 500px;
  font-size: ${({ theme }) => theme.space.xl};
  ${({ theme }) => theme.breakpoints.small} {
    width: auto;
    font-size: 2.5rem;
    margin: 0 auto;
  }
  margin: 0 auto;
`
const Text = styled.div`
  width: 500px;
  font-size: ${({ theme }) => theme.space.xl};
  ${({ theme }) => theme.breakpoints.small} {
    width: auto;
    font-size: 2.5rem;
    margin: 0 auto;
  }
  margin: 0 auto;
`
const K = styled.span`
  ${({ theme: { color } }) =>
    css`
      color: ${color.red !== color.dark ? color.red : color.light};
    `};
`

export const Intro = () => (
  <>
    <Text>
      I am <K>Sangeeth Sujith</K>,
    </Text>
    <Animation />
    <TyperContainer>
      {/* I am Sangeeth Sujith, */}
      <Typer
        text={`Welcome to my \n`}
        textCarousel={[
          "portfolio",
          "passion",
          // "hobby",
          "project",
          // "playground",
        ]}
        timing={{ typeStrokes: 100, deleteStrokes: 50, waiting: 2000 }}
      />
    </TyperContainer>
  </>
)
