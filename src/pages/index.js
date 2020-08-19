import React from "react"
import { graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

/** @jsx jsx */
import { jsx, Container, Styled } from 'theme-ui'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { HeroWithText } from "../components/hero-with-text"

import googleStore from '../images/google-store.png'
import appleIcon from '../images/apple-icon.png'
import bgMob from '../images/bg-mob-1.png'
import { mediaQueries } from "../gatsby-plugin-theme-ui/media-queries"


const IndexPage = ({ data }) => {

  const { allContentfulProduct, contentfulTeamSection } = data
  const products = allContentfulProduct?.edges || []
  return (
    <Layout>
      <SEO title="Home" />
      <HeroWithText />
      {products.length > 0 &&
        products.map(({ node }) => {
          return <ProductSection product={node} key={node.id} />
        })}
      <VisionSection />
      {contentfulTeamSection && (
        <TeamSection
          title={contentfulTeamSection.title}
          members={contentfulTeamSection.featuredMembers}
        />
      )}
      <ContactSection />
    </Layout>
  )
}

const ProductSection = ({ product }) => {
  return (
    <section
      sx={{
        px: 4,
        py: 5,
      }}
    >
      <Container>
        <Styled.h2
          sx={{
            mb: 3,
          }}
        >
          {product?.name}
        </Styled.h2>
        {product?.image?.fluid && (
          <GatsbyImage fluid={product.image.fluid} alt={product.image.title} />
        )}
        {product?.shortDescription?.internal?.content && (
          <Styled.p sx={{ fontSize: 1, lineHeight: 2 }}>
            {product?.shortDescription?.internal?.content}
          </Styled.p>
        )}
        {product?.url && (
          <ProductButton name={product?.name} url={product?.url} />
        )}
      </Container>
    </section>
  )
}

const buttonStyle = {
  borderRadius: `23.5px`,
  width: `200px`,
  height: `46px`,
  fontSize: 1,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  fontWeight: `bold`,
  color: `white`,
  letterSpacing: `0.42px`,
  textDecoration: `none`,
}

const ProductButton = ({ name, url }) => {
  const iconStyle = {
    height: `24px`,
    width: `24px`,
    ml: 2,
  }

  if(name === `Magma`) {
    return (
      <a
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        sx={{
          ...buttonStyle,
          bg: `#D74962`,
        }}
      >
        Get Magma
        <img sx={iconStyle} src={appleIcon} alt="apple icon" />
        <img sx={iconStyle} src={googleStore} alt="google store icon" />
      </a>
    )
  } else if (name === `Dexter`) {
    return (
      <a
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        sx={{
          ...buttonStyle,
          bg: `#0073D0`,
          width: `142px`,
        }}
      >
        Try Dexter
      </a>
    )
  } else {
    return null
  }
}

const VisionSection = () => {
  return (
    <section
      sx={{
        py: 5,
        px: 4,
        bg: `#167ba2`,
        height: `auto`,
        width: `100%`,
      }}
    >
      <Container>
        <div
          sx={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            flexDirection: `column`,
          }}
        >
          <Styled.h2 sx={{ fontSize: 5, color: `white` }}>Our vision</Styled.h2>
          <Styled.p
            sx={{
              textAlign: `center`,
              lineHeight: 2,
              color: `white`,
            }}
          >
            camlCase is building products for the Tezos blockchain that will
            help bring forth a more open and decentralized world of finance - a
            world that is more inclusive, innovative, and beneficial for people
            around the world.
          </Styled.p>
        </div>
      </Container>
    </section>
  )
}

const TeamSection = ({ title, members }) => {
  if(!members || members.length < 0) {
    return null
  }

  return (
    <section
      sx={{
        px: 4,
        py: 5,
      }}
    >
      <Container>
        <Styled.h2 sx={{ fontSize: 5, textAlign: `center`, mb: 4 }}>
          {title}
        </Styled.h2>
        <ul
          sx={{
            listStyle: `none`,
            m: 0,
            p: 0,
            display: `grid`,
            gridTemplateColumns: `1fr 1fr`,
            gridGap: 3,
          }}
        >
          {members.map(member => {
            return (
              <li
                key={member.id}
                sx={{
                  display: `flex`,
                  flexDirection: `column`,
                  justifyContent: `center`,
                  alignItems: `center`,
                }}
              >
                {member.image && (
                  <GatsbyImage
                    fluid={member.image.fluid}
                    alt={member.image.title}
                    sx={{
                      borderRadius: `100%`,
                      width: `77px`,
                      [mediaQueries.lg]: {
                        width: `124px`,
                      },
                    }}
                  />
                )}
                <h4
                  sx={{
                    fontSize: 0,
                    textAlign: `center`,
                    mb: 0,
                  }}
                >
                  {member.name}
                </h4>
                <p
                  sx={{
                    fontSize: 0,
                    textAlign: `center`,
                  }}
                >
                  {member.role}
                </p>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}

const ContactSection = () => {
  const inputGroupStyle = {
    display: `flex`,
    flexDirection: `column`,
    mb: 4,
  }

  const inputStyle = {
    height: `54px`,
    px: 3,
    fontWeight: `500`,
    borderRadius: `8px`,
    border: `1px solid #979797`,
    fontFamily: `body`,
  }

  return (
    <section
      sx={{
        px: 4,
        py: 5,
      }}
    >
      <Container>
        <Styled.h2 sx={{ fontSize: 5, textAlign: `center`, mb: 4 }}>
          Contact us
        </Styled.h2>
      </Container>
      <form>
        <div sx={inputGroupStyle}>
          <label
            sx={{
              mb: 2,
              fontWeight: `500`,
            }}
          >
            Name
          </label>
          <input sx={inputStyle} type="text" />
        </div>
        <div sx={inputGroupStyle}>
          <label
            sx={{
              mb: 2,
              fontWeight: `500`,
            }}
          >
            Email Address
          </label>
          <input sx={inputStyle} type="text" />
        </div>
        <div sx={inputGroupStyle}>
          <label
            sx={{
              mb: 2,
              fontWeight: `500`,
            }}
          >
            Message
          </label>
          <textarea sx={{ ...inputStyle, height: `160px`, p: 3 }} type="text" />
        </div>
        <input
          value="Send message"
          sx={{
            ...buttonStyle,
            bg: `#0073D0`,
            width: `142px`,
            border: `none`,
            textAlign: `center`
          }}
        />
      </form>
      <p>Or email us at <a href="mailto:support@camelcase.io" sx={{ color: `inherit`}}>support@camelcase.io</a></p>
    </section>
  )
}

export const indexQuery = graphql`
  query {
    allContentfulProduct {
      edges {
        node {
          id
          name
          image {
            title
            fluid {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          url
          shortDescription {
            internal {
              content
            }
          }
        }
      }
    }
    contentfulTeamSection {
      title
      featuredMembers {
        ... on ContentfulTeamMember {
          id
          name
          role
          image {
            title
            fluid(maxWidth: 128) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          } 
        }
      }
    }
  }
`

export default IndexPage
