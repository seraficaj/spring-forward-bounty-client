import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h1>Welcome to the Bounties Client!</h1>

      <Link to="/bounties">See All Bounties</Link>
    </>
  )
}