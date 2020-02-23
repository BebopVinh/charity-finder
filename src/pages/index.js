import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Splash from "../components/splash/splash"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="my-4">
      <SEO title="Home" />
      <h1>Hi people</h1>
      <Link to="/page-2/">Go to page 2</Link>
      <br />
      <Link to="/page-3/">Go to page 3</Link>
      <Splash />
      {/* <button className="btn btn-blue">Blue Button</button> */}
    </div>
  </Layout>
)

export default IndexPage
