import React from "react";
import { Box } from "@mui/material";
// import { shadows } from "@mui/system";
import Logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <Box
            sx={{
                height: "58px",
                width: "100%",
                m: 0,
                p: 0,
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
        >
            <Box sx={{ width: "50%", height: "100%" }}>
                <img src={Logo} />
            </Box>
        </Box>
    );
};

export default Navbar;
