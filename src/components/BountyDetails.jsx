export default function BountyDetails({ bounty }) {
  return (
    <>
      <h1>Bounty Detials</h1>

      <h2>{bounty.name}</h2>

      <h3>Wanted for: {bounty.wantedFor}</h3>

      <p>credits: {bounty.reward}</p>

      <h6>Client: {bounty.client}</h6>

      <p>{bounty.ship ? `known to be traveling in the ship ${bounty.ship}` : 'ship: unkown'}</p>

      {bounty.captured ? <h6>captured</h6> : <h4>still wanted</h4>}
    </>
  )
}