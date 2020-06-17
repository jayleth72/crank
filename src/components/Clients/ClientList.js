import React, { Component } from "react"
import styles from "../../css/items.module.css"
import Client from "./Client"
import Title from "../Title"

export default class ClientList extends Component {
  state = {
    clients: [],
    sortedClients: [],
  }

  componentDidMount() {
    this.setState({
      clients: this.props.clients.edges,
      sortedClients: this.props.clients.edges,
    })
  }

  render() {
    return (
      <section className={styles.clients}>
        <Title black title="Crank's" subtitle="clients" />
        <div className={styles.center}>
          {
            this.state.sortedClients.map(({node})=>{
              return <Client key={node.contentful_id} client={node} />
            })
          }
        </div>
      </section>
    )
  }
}
