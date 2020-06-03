import React from "react"
import Client from "../Clients/Client"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getClients = graphql`
  query {
    featuredClients: allContentfulFeaturedClient(
      filter: { featuredClient: { eq: true } }
    ) {
      edges {
        node {
          contentful_id
          name
          shortBio
          afterImage {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
const FeaturedClients = () => {
  const response = useStaticQuery(getClients)
  const clients = response.featuredClients.edges

  return (
    <section className={styles.clients}>
      <Title black title="featured" subtitle="clients" />
      hello from featured tours
      {clients.map(({ node }) => {
        return <Client key={node.contentful_id} client={node} />
      })}
      <AniLink fade to="/clients" className="btn-primary">
        All Clients
      </AniLink>
    </section>
  )
}

export default FeaturedClients
