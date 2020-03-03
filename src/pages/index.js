import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { toggleDarkMode } from "../state/app"

const IndexPage = ({ isDarkMode, dispatch }) => (
  <Layout>
    <div className="my-4">
      <SEO title="Home" />
      <h1>Hi people</h1>
      <Link to="/page-2/">Go to page 2</Link>
      <br />
      <button
        style={
          isDarkMode
            ? { background: "black", color: "white" }
            : { background: "white", color: "black" }
        }
        onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
      >
        Dark mode {isDarkMode ? "on" : "off"}
      </button>
    </div>
  </Layout>
)

const mapStateToProps = state => ({ isDarkMode: state.app.isDarkMode })

export default connect(mapStateToProps, null)(IndexPage)
