import React from 'react'

/** @jsx jsx */
import { jsx, Container, Styled } from 'theme-ui'

import logo from '../images/logo.png'
import twitterLogo from "../images/twitter-icon.png"
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'

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
          <div
            sx={{
              display: `flex`,
              flexDirection: `column`,
              justifyContent: `center`,
              alignItems: `center`,
              width: `100%`,
              [mediaQueries.lg]: {
                flexDirection: `row`,
                justifyContent: `space-between`,
              },
            }}
          >
            <div>
              <img
                src={logo}
                alt="camlCase logo"
                sx={{
                  maxWidth: `92px`,
                  mb: `55px`,
                }}
              />
            </div>
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
              <img
                src={twitterLogo}
                alt="twitter"
                sx={{
                  width: `16px`,
                  height: `16px`,
                }}
              />{" "}
              camlCaseTech
            </a>
          </div>
          <div
            sx={{
              [mediaQueries.lg]: {
                alignSelf: `flex-end`,
              },
            }}
          >
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
