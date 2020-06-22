import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"

const testimonials = () => {
  return <Layout>testimonials page</Layout>
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "hank1.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default testimonials
