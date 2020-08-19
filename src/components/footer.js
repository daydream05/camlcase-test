import React from 'react'

/** @jsx jsx */
import { jsx, Container, Styled } from 'theme-ui'

import logo from '../images/logo.png'
import twitterLogo from "../images/twitter-icon.png"

export const Footer = () => {
  return (
    <footer
      sx={{
        bg: `#1C222D`,
        px: 4,
        py: 5,
      }}
    >
      <Container>
        <div
          sx={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <img
            src={logo}
            alt="camlCase logo"
            sx={{
              maxWidth: `92px`,
              mb: `55px`,
            }}
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/camlcasetech"
            sx={{
              textDecoration: `none`,
              color: `white`,
              fontSize: 1,
              mb: `85px`,
            }}
          >
            <img src={twitterLogo} alt="twitter" sx={{
              width: `16px`,
              height: `16px`,
            }} /> camlCaseTech
          </a>
          <div>
            <p
              sx={{
                color: `white`,
                fontSize: `10px`,
              }}
            >
              ©2020 camlCase
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
