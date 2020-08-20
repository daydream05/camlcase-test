import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, Link } from "gatsby"
import Img from 'gatsby-image'

/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { mediaQueries } from "../gatsby-plugin-theme-ui/media-queries"

const Header = ({ siteTitle }) => {
   const data = useStaticQuery(graphql`
     query {
       logo: file(relativePath: { eq: "logo.png" }) {
         childImageSharp {
           fluid(maxWidth: 186) {
             ...GatsbyImageSharpFluid
           }
         }
       }
     }
   `)

  const linkStyle = {
    color: `white`,
    textDecoration: `none`,
    fontSize: 1,
    position: `relative`,
    "&:hover": {
      "::after": {
        width: `100%`,
      },
    },
    "::after": {
      content: '""',
      position: `absolute`,
      height: `1px`,
      bg: `white`,
      bottom: `-1px`,
      left: 0,
      transition: `0.2s`,
      width: `0%`,
    },
  }

  return (
    <header
      sx={{
        background: `none`,
        position: `absolute`,
        px: 4,
        py: 4,
        width: `100%`,
        zIndex: 2,
        [mediaQueries.xl]: {
          px: 5,
        },
      }}
    >
      <Container>
        <nav
          sx={{
            display: `flex`,
            justifyContent: `space-between`,
            width: `100%`,
          }}
        >
          <Link
            to="/"
            sx={{
              width: `93px`,
              display: `block`,
              [mediaQueries.xl]: {
                width: `183px`,
              },
            }}
          >
            <Img fluid={data.logo.childImageSharp.fluid} alt="camlcase logo" />
          </Link>
          <ul
            sx={{
              listStyle: `none`,
              display: `none`,
              p: 0,
              m: 0,
              [mediaQueries.lg]: {
                display: `flex`,
                alignItems: `center`,
              },
            }}
          >
            <li
              sx={{
                ml: 3,
              }}
            >
              <a href="#vision" sx={linkStyle}>
                Vision
              </a>
            </li>
            <li
              sx={{
                ml: 3,
              }}
            >
              <a href="#team" sx={linkStyle}>
                Team
              </a>
            </li>
            <li
              sx={{
                ml: 3,
              }}
            >
              <a href="#contact" sx={linkStyle}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
