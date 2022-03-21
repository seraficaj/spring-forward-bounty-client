import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import { Button } from '@mui/material'

import BountyDetails from '../BountyDetails'
import BountyEditForm from '../BountyEditForm'


export default function Bounty({ bounties }) {
  // boolean to show form or details
  const [showForm, setShowForm] = useState(false)
  const [bounty, setBounty] = useState({})
  const { id } = useParams()
  // ask the backend what the details about this id are
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/bounties/${id}`)
      .then(response => {
        setBounty(response.data)
      })
      .catch(console.log)
  }, [showForm])

  // // match state to the bounty from the url
  // const matchedBounty = bounties.find(bounty => bounty._id === id)
  // // acocunt for errors
  // if (!matchedBounty) return <NotFound />

  // console.log(matchedBounty)
  return (
    <>
     {/* ternary for conditional rednering */}
      {
        showForm ? 
          <BountyEditForm 
            bounty={bounty}
            setShowForm={setShowForm} 
            showForm={showForm}
          /> : 
          <BountyDetails bounty={bounty}/>
      }

      <Button variant="primary"
      onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'exit' : 'edit'}
      </Button>
      
      <Button variant="primary">
        <Link to="/bounties">Back to Bounties</Link>
      </Button>
    </>
  )
}