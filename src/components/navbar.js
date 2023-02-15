import React from "react";
import { Box, Button, Typography } from "@mui/material";
// import { shadows } from "@mui/system";
import Logo from "../assets/logo2.PNG";
import classes from "./cstyles.module.css";
// import phone icon
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
const Navbar = () => {
    // const classes = useStyles();
    return (
        <Box
            sx={{
                height: "68px",
                width: "100%",
                m: 0,
                p: 0,
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    display: "flex",

                    jusifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: "30%",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            width: "30%",
                            justifyContent: "center",
                        }}
                    >
                        <div className={classes.logo}>
                            <img src={Logo} alt="i" />
                        </div>
                    </Box>
                    <Box
                        sx={{
                            width: "70%",
                            display: "flex",
                            justifyContent: "space-evenly",
                        }}
                    >
                        <Typography fontWeight={200}>Home</Typography>
                        <Typography fontWeight={200}>Courses</Typography>
                        <Typography fontWeight={200}>Sessions</Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: "70%",
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <Box
                        sx={{
                            width: "46%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <PhoneEnabledIcon />
                            <Typography fontWeight={400}>
                                +91-7083-34388
                            </Typography>
                        </Box>

                        <Typography fontWeight={400} marginLeft="5%">
                            Join Community
                        </Typography>
                        <Button variant="contained">Register</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;
