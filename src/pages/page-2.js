import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"

import { getOrganizations } from "../state/app"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ dispatch }) => {
  const [results, setResults] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  async function fetchOrganizations() {
    console.log("Hitting the server!")
    const response = await fetch("http://localhost:3000/organizations")
    const data = await response.json()
    await setResults(data)
    await setIsLoading(false)
  }

  const renderOrganizations = () => {
    console.log(`pings: `, results)
    const {
      organizations: { organization },
    } = results
    return organization.map(org => (
      <div key={org.id}>
        <p>Name: {org.name}</p>
        <p>Mission: {org.mission}</p>
        <p>
          Themes:
          <ul>
            {org.themes.theme.map(theme => (
              <li>{theme.name}</li>
            ))}
          </ul>
        </p>
        <a href={org.url}>{org.url}</a>
        <br />
      </div>
    ))
  }

  useEffect(() => {
    isLoading ? fetchOrganizations() : setIsLoading(false)
  })

  return (
    <Layout>
      <SEO title="Page two" />
      <Link to="/">Go back to the homepage</Link>
      <br />
      <div className="organizations-list">
        {console.log(isLoading)}
        {isLoading ? "Nothing to see here..." : renderOrganizations()}
      </div>
    </Layout>
  )
}

const mapStateToProps = state => ({
  organizations: state.app.organizations,
})

export default connect(mapStateToProps, null)(SecondPage)
