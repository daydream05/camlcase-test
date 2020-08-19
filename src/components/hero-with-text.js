import React from 'react'

/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'
import { breakpoints } from '../gatsby-plugin-theme-ui/breakpoints'

import heroBg from '../images/hero-bg.png'
import heroArray from '../images/hero-array.png'

export const HeroWithText = () => {
  return (
    <section
      sx={{
        backgroundImage: `url(${heroBg})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100% 100%`,
        py: 6,
        px: 4,
        position: `relative`,
        "::after": {
          content: "''",
          position: `absolute`,
          top: 0,
          left: 0,
          width: `100%`,
          height: `100%`,
          backgroundPosition: `right 46px top 0px`,
          backgroundSize: `852px 611px`,
          borderBottomRightRadius: `39%`,
          backgroundRepeat: `no-repeat`,
          backgroundImage: `url(${heroArray})`,
        },
      }}
    >
      <Container
        sx={{
          maxWidth: breakpoints.xs,
        }}
      >
        <h1
          sx={{
            color: `white`,
            my: 0,
            textAlign: `center`,
            [mediaQueries.lg]: {
              fontSize: 5,
            },
          }}
        >
          Makers of awesome products on Tezos.
        </h1>
      </Container>
    </section>
  )
}