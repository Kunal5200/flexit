import { roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/global";
import { East } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React, { ReactNode, useState } from "react";

interface cardProps {
  Icon: React.ElementType;
  heading: string;
  description: string;
}
const ServicesCard = ({ Icon, heading, description }: cardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <Box
        sx={{
          border: COLORS.BORDER1PX,
          textAlign: "center",
          p: 3,
          "& svg": {
            color: COLORS.PRIMARY,
            fill: `${COLORS.PRIMARY} !important`,
            stroke: `${COLORS.PRIMARY} !important`,
            width: "100px",
            height: "auto",
          },
          ":hover svg": {
            color: COLORS.WHITE,
            fill: `${COLORS.WHITE} !important`,
            stroke: `${COLORS.WHITE} !important`,
          },
          borderRadius: 2,
          ":hover": {
            backgroundColor: COLORS.PRIMARY,
            color: COLORS.WHITE,
          },
          transition: "0.5s ease all",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Icon
          style={{
            transition: "fill 0.3s ease",
            width: "50px",
            height: "auto",
          }}
        />
        <Typography
          sx={{
            fontSize: 25,
            color: COLORS.WHITE,
            mt: 1,
            fontFamily: roboto.style,
            fontWeight: 600,
          }}
        >
          {heading}
        </Typography>
        <Typography sx={{ color: COLORS.WHITE, mt: 2 }}>
          {description}
        </Typography>
        <Button
          sx={{
            fontSize: 14,
            color: hovered ? COLORS.WHITE : COLORS.PRIMARY,
            ":hover svg": {
              transform: "translateX(4px)",
            },
            "& svg": {
              transition: "0.5s ease all",
            },
            mt: 2,
            fontFamily: roboto.style,
          }}
          endIcon={
            <East
              sx={{ fontSize: "12px !important", width: "20px !important" }}
            />
          }
        >
          Read More{" "}
        </Button>
      </Box>
    </div>
  );
};

export default ServicesCard;
