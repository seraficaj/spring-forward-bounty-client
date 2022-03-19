import { useState  } from 'react'
import axios from 'axios'
import Form from './Form'

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
      <Form
        bountyForm={bountyForm}
        handleSubmit={handleSubmit}
        setBountyForm={setBountyForm} 
      />
    </>
  )
}