import React from "react"
import OrganizationCard from "./organizationcard"

export default function organizationList({ organizations }) {
  return organizations.organization.map(org => <OrganizationCard org={org} />)
}
