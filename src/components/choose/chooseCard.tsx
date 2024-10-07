import { inter, roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/global";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

interface chooseProps {
  index: number | string;
  heading: string;
  description: string;
}

const Choosecard = ({ index, heading, description }: chooseProps) => {
  return (
    <div>
      <Stack direction={"row"} alignItems={"center"} spacing={4} mt={5}>
        <Typography
          sx={{
            fontFamily: roboto.style,
            fontSize: 45,
            color: COLORS.PRIMARY,
            fontWeight: 600,
          }}
        >
          {index}.
        </Typography>
        <Box>
          <Typography
            textTransform={"capitalize"}
            sx={{ fontSize: 25, fontFamily: roboto.style, color: COLORS.WHITE }}
          >
            {heading}
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              color: COLORS.PARACOLOR,
              lineHeight: 2,
              fontFamily: inter.style,
            }}
          >
            {description}
          </Typography>
        </Box>
      </Stack>
    </div>
  );
};

export default Choosecard;
