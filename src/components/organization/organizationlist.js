import React from "react"
import OrganizationCard from "./organizationcard"

export default function organizationList({ organizations }) {
  return organizations.organization.map((org, index) => (
    <OrganizationCard org={org} key={index} />
  ))
}
