import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import About from "../components/home/About"
import Services from "../components/home/Services"
import { graphql } from "gatsby"

export default ({data}) => (
  <Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="Crank with Hank Fitness"
        info="Bringing as many people as possible to Fitness!"
      >
        <Link to="/about" className="btn-white">
          Learn how to crank
        </Link>
      </Banner>
    </StyledHero>
    <About />
    <Services />
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
