import { useState } from 'react'
import { Link } from 'react-router-dom'
import Form from '../Form'
import axios from 'axios'

export default function Bounties({ bounties, setBounties }) {
  // state to control the form
  const [formData, setFormData] = useState({})
  // controlled form to create a new bounty
  const handleSubmit = e => {
    e.preventDefault()
    // axios.post(url, request body, options)
    axios.post(`${process.env.REACT_APP_SERVER_URL}/bounties`, formData)
      .then(reponse => {
        setFormData({})
        // it you return a promise deom a dot then -- you can dot then again! 
        // promise chaining
       return axios.get(process.env.REACT_APP_SERVER_URL + '/bounties')
      })
      .then(response => setBounties(response.data))
      .catch(console.log)
  }
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
      <Form 
        bountyForm={formData}
        setBountyForm={setFormData}
        handleSubmit={handleSubmit}
      />
      {bountyLinks}
    </>
  )
}