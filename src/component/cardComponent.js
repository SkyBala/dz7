import React from "react";
import { Box, Typography } from "@mui/material";

const Card = (props) => {
    const { item } = props;
    return (
        <>
            <Box
                sx={{
                    height: "400px",
                    width: "300px",
                    display: "flex",
                    flexDirection: "column ",
                    "& img": {
                        height: "80%",
                        width: "100%",
                    },
                }}
            >
                <img src={item?.img} alt="image"></img>
                <Typography>{item?.name}</Typography>
            </Box>
        </>
    );
};

export default Card;
