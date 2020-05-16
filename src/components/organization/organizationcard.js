import React from "react"
import Image from "../image"

export default function OrganizationCard({ org }) {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg py-2"
      id={org.id}
    >
      {org.logoUrl ? (
        <img className="w-full" src={org.logoUrl} alt="Logo Image" />
      ) : (
        <Image />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{org.name}</div>
        <p className="text-gray-700 text-base">{org.mission}</p>
      </div>
    </div>
  )
}
