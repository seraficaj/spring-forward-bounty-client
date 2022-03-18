import { useState  } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

export default function BountyEditForm({ bounty, setShowForm, showForm }) {
  const [bountyForm, setBountyForm] = useState(bounty)

  const handleSubmit = e => {
    e.preventDefault()
    // do some axios
    // axios.method(url, request body, options)
    axios.put(`${process.env.REACT_APP_SERVER_URL}/bounties/${bounty._id}`, bountyForm)
      .then(response => {
        // console.log('🌈🌈🌈🌈🌈🌈🌈🌈🌈', response.data)
        // here is where we know the the backend was successful in updating the data
        setShowForm(!showForm)
      })
      .catch(console.log)
  }

  return (
    <>
      <h1>Edit the bounty</h1>
      <form onSubmit={handleSubmit}>  
        <label htmlFor="name">Name:</label>
        <input type="text" 
          value={bountyForm.name}
          onChange={e => setBountyForm({ ...bountyForm, name: e.target.value })}
          id="name"
        />

        <label htmlFor="watedFor">wanted for:</label>
        <input type="text" 
          value={bountyForm.wantedFor}
          onChange={e => setBountyForm({ ...bountyForm, wantedFor: e.target.value })}
          id="wantedfor"
        />

        <label htmlFor="reward">Reward:</label>
        <input type="text" 
          value={bountyForm.reward}
          onChange={e => setBountyForm({ ...bountyForm, reward: e.target.value })}
          id="reward"
        />

        <label htmlFor="client">Client:</label>
        <input type="text" 
          value={bountyForm.client}
          onChange={e => setBountyForm({ ...bountyForm, client: e.target.value })}
          id="client"
        />

        <label htmlFor="ship">Ship:</label>
        <input type="text" 
          value={bountyForm.ship}
          onChange={e => setBountyForm({ ...bountyForm, ship: e.target.value })}
          id="ship"
        />

        <label htmlFor="captured">Captured:</label>
        <input type="text" 
          value={bountyForm.captured}
          onChange={e => setBountyForm({ ...bountyForm, captured: e.target.value })}
          id="captured"
        />

        <input type="submit" />
      </form>
    </>
  )
}