import { Box, Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import TopIcon from "@/icons/top.svg";
import { COLORS } from "@/utils/global";
import { inter, roboto } from "@/utils/fonts";

interface cardProps {
  Icon: React.ElementType;
  heading: string;
  description: string;
}
const AboutCard = ({ Icon, heading, description }: cardProps) => {
  return (
    <div>
      <Stack direction={"row"} alignItems={"center"} spacing={2} mt={2}>
        <Box
          sx={{
            backgroundColor: COLORS.CARDCOLOR,
            "& svg": {
              color: COLORS.PRIMARY,
              stroke: COLORS.PRIMARY,
              fill: COLORS.PRIMARY,
            },
            ":hover": {
              svg: {
                color: COLORS.WHITE,
                stroke: COLORS.WHITE,
                fill: COLORS.WHITE,
              },
              backgroundColor: COLORS.PRIMARY,
              transform: "translateY(-8px)",
            },
            width: 150,
            height: 70,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "0.5s ease all",
          }}
        >
          <Icon style={{ width: "30px", height: "auto" }} />
        </Box>
        <Box>
          <Typography
            textTransform={"capitalize"}
            sx={{
              fontSize: 20,
              fontFamily: roboto.style,
              color: COLORS.WHITE,
              letterSpacing: 1,
            }}
          >
            {heading}
          </Typography>
          <Typography
            sx={{
              fontSize: 13,
              fontFamily: inter.style,
              color: COLORS.PARACOLOR,
            }}
          >
            {description}
          </Typography>
        </Box>
      </Stack>
    </div>
  );
};

export default AboutCard;
