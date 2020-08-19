import React from 'react'

/** @jsx jsx */
import { jsx, Container } from "theme-ui"

export const HeroWithText = () => {
  return (
    <section
      sx={{
        bg: `black`,
        py: 6,
        px: 4,
      }}
    >
      <Container>
        <h1
          sx={{
            color: `white`,
            my: 0,
            textAlign: `center`,
          }}
        >
          Makers of awesome products on Tezos.
        </h1>
      </Container>
    </section>
  )
}