import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Bounties({ bounties }) {
    // state to control the form
    // controlled form to create a new bounty

    // render all the bounties with links to /bounties/:id
    const bountyLinks = bounties.map((bounty, idx) => {
        return (
            <div key={`bounty-link${idx}`}>
                {/* front end link in react */}
                <Link to={`/bounties/${bounty._id}`}>{bounty.name}</Link>
            </div>
        );
    });
    return (
        <>
            this will be a form
            {bountyLinks}
        </>
    );
}
