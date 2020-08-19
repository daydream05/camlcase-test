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

  return (
    <header
      sx={{
        background: `none`,
        position: `fixed`,
        px: 4,
        py: 4,
        width: `100%`,
        [mediaQueries.xl]: {
          px: 5,
        }
      }}
    >
      <Container>
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
