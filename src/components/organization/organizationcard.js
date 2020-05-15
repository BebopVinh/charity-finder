import React from "react"
import Image from "../image"

export default function OrganizationCard({ org }) {
  console.log(org)
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg py-2" id={org.id}>
      {org.logoUrl ? (
        <img class="w-full" src={org.logoUrl} alt="Logo Image" />
      ) : (
        <Image />
      )}
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{org.name}</div>
        <p class="text-gray-700 text-base">{org.mission}</p>
      </div>
    </div>
  )
}
