import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemText } from "@mui/material";

export default function Bounties({ bounties }) {
    // state to control the form
    // controlled form to create a new bounty

    // render all the bounties with links to /bounties/:id
    const bountyLinks = bounties.map((bounty, idx) => {
        return (
            <ListItem key={`bounty-link${idx}`}>
                {/* front end link in react */}
                <ListItemText>
                    <Link to={`/bounties/${bounty._id}`}>{bounty.name}</Link>
                </ListItemText>
            </ListItem>
        );
    });
    return (
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
            <List>{bountyLinks}</List>
        </Box>
    );
}
