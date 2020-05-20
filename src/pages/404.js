import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import { Link } from "gatsby"
import Banner from "../components/Banner"

export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Dead End Man">
          <Link to="/" className="btn-white">
            Go back home
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}
