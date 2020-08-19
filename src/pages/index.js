import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { HeroWithText } from "../components/hero-with-text"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroWithText />
  </Layout>
)

export default IndexPage
