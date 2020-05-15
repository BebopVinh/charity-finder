import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import Layout from "../components/layout"
import SEO from "../components/seo"
import OrganizationList from "../components/organization/organizationlist"

const SecondPage = props => {
  const { organizations } = props
  const [results, setResults] = useState("")

  async function fetchOrganizations() {
    const response = await fetch("http://localhost:3000/organizations")
    const data = await response.json()
    await setResults(data)
  }

  useEffect(() => {
    console.log("results: ", results)
  }, [results])

  useEffect(() => {
    if (results === "") fetchOrganizations()
  }, [])

  return (
    <Layout>
      <SEO title="Page two" />
      <Link to="/">Go back to the homepage</Link>
      {results === "" ? null : <OrganizationList {...results} />}
    </Layout>
  )
}

const mapStateToProps = state => ({
  organizations: state.app.organizations,
})

export default connect(mapStateToProps, null)(SecondPage)
