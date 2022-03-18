import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Bounties() {
  // state to hold the bounties
  const [bounties, setBounties] = useState([])
  // state to control the form

  // use effect to get all the bounties 
  useEffect(() => {
    // console.log(process.env.REACT_APP_SERVER_URL + '/bounties')
    axios.get(process.env.REACT_APP_SERVER_URL + '/bounties')
      .then(response => {
       setBounties(response.data)
      })
  }, []) // empty dep array so it only runs once

  // controlled form to create a new bounty

  // render all the bounties with links to /bounties/:id
  const bountyLinks = bounties.map((bounty, idx) => {
    return (
      <div key={`bounty-link${idx}`}>
        {/* front end link in react */}
        <Link to={`/bounties/${bounty._id}`}>{bounty.name}</Link>
      </div>
    )
  })
  return (
    <>
      this will be a form
      {bountyLinks}
    </>
  )
}