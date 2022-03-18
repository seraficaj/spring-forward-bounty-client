import { useState } from 'react'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound'
import BountyDetails from '../BountyDetails'
import BountyEditForm from '../BountyEditForm'

export default function Bounty({ bounties }) {
  // boolean to show form or details
  const [showForm, setShowForm] = useState(false)
  const { id } = useParams()
  // match state to the bounty from the url
  const matchedBounty = bounties.find(bounty => bounty._id === id)
  // acocunt for errors
  if (!matchedBounty) return <NotFound />

  console.log(matchedBounty)
  return (
    <>
     {/* ternary for conditional rednering */}
      {
        showForm ? 
          <BountyEditForm bounty={matchedBounty} /> : 
          <BountyDetails bounty={matchedBounty}/>
      }

      <button
      onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'exit' : 'edit'}
      </button>
    </>
  )
}