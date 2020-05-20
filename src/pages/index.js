import React from "react"
import Layout from "../components/Layout"
import Simplehero from "../components/SimpleHero"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import About from "../components/home/About"
import Services from "../components/home/Services"

export default () => (
  <Layout>
    <Simplehero>
      <Banner
        title="Crank with Hank Fitness"
        info="Bringing as many people as possible to Fitness!"
      >
        <Link to="/about" className="btn-white">
          Learn how to crank
        </Link>
      </Banner>
    </Simplehero>
    <About />
    <Services />
  </Layout>
)
