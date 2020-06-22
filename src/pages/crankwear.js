import React from 'react'
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"

const crankwear = ({data}) => {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
    </Layout>
  )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "crankwear.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default crankwear
