import { roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/global";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

interface headingProps {
  title: string;
  fontSize?: number;
}
const Subheading = ({ title, fontSize }: headingProps) => {
  return (
    <div>
      <Stack direction={"row"} alignItems={"center"} spacing={1} mt={2}>
        <Box
          sx={{
            width: 5,
            height: 5,
            backgroundColor: COLORS.PRIMARY,
            borderRadius: "50%",
          }}
        ></Box>
        <Typography
          sx={{
            color: COLORS.PRIMARY,
            fontFamily: roboto.style,
            fontSize: fontSize ? fontSize : 20,
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            width: 5,
            height: 5,
            backgroundColor: COLORS.PRIMARY,
            borderRadius: "50%",
          }}
        ></Box>
      </Stack>
    </div>
  );
};

export default Subheading;
