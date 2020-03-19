import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"

import { getOrganizations } from "../state/app"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props, { dispatch }) => {
  const { organizations } = props
  const [results, setResults] = useState("")
  const apiKey = `?api_key=${process.env.GATSBY_API_KEY}`
  const url = "/public/orgservice/all/organizations.json"

  async function fetchOrganizations() {
    const response = await fetch("http://localhost:3000/organizations")
    const data = await response.json()
    await setResults(data)
    await console.log(results)
  }

  useEffect(() => {
    // if (organizations.length === 0) {
    // return fetch("/api" + url + apiKey, {
    //   method: "GET",
    //   mode: "cors",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // })
    //   .then(response => console.log(response))
    //   .then(data => (results = data))
    // }
    debugger
    fetchOrganizations()
  })

  return (
    <Layout>
      <SEO title="Page two" />
      <Link to="/">Go back to the homepage</Link>

      <div></div>
    </Layout>
  )
}

const mapStateToProps = state => ({
  organizations: state.app.organizations,
})

export default connect(mapStateToProps, null)(SecondPage)
