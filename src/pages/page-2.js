import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import Layout from "../components/layout"
import SEO from "../components/seo"
import OrganizationList from "../components/organization/organizationlist"
import LoadingCircle from "../components/animation/loadingcircle"

const SecondPage = props => {
  const { organizations } = props
  const [results, setResults] = useState("")

  async function fetchOrganizations() {
    const response = await fetch("http://localhost:3000/organizations")
    const data = await response.json()
    await setResults(data)
    await console.log(results)
  }

  useEffect(() => {
    console.log("results: ", results)
  }, [results])

  useEffect(() => {
    if (results === "") fetchOrganizations()
  }, [])

  const renderResults = () => {
    return results !== "" ? (
      <OrganizationList {...results} />
    ) : (
      <LoadingCircle />
    )
  }

  return (
    <Layout>
      <SEO title="Page two" />
      <Link to="/">Go back to the homepage</Link>
      {renderResults()}
    </Layout>
  )
}

const mapStateToProps = state => ({
  organizations: state.app.organizations,
})

export default connect(mapStateToProps, null)(SecondPage)
