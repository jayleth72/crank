import React from "react"
import ClientList from "./ClientList"
import { useStaticQuery, graphql } from "gatsby"

const getClients = graphql`
  query {
    clientList: allContentfulFeaturedClient {
      edges {
        node {
          contentful_id
          name
          shortBio
          workoutPersona
          favouriteExercise
          starSign
          afterImage {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Clients = () => {
  const { clientList } = useStaticQuery(getClients)

  return <ClientList clients={clientList} />
}

export default Clients
