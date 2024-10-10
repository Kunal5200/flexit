import { COLORS } from "@/utils/global";
import { Box, Typography } from "@mui/material";
import React from "react";
import TalentIcon from "@/icons/projects.svg";
import { inter, roboto } from "@/utils/fonts";

interface StatsProps {
  Icon: React.ElementType;
  heading: string;
  number: string;
}
const StatsCard = ({ Icon, heading, number }: StatsProps) => {
  return (
    <div>
      <Box
        sx={{
          borderBottom: COLORS.BORDER1PX,
          borderTop: COLORS.BORDER4PX,
          borderLeft: COLORS.BORDER1PX,
          borderRight: COLORS.BORDER1PX,
          textAlign: "center",
          p: 2,
          backgroundColor: "#00000039",
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6,
          height: 200,
          display: "grid",
          alignItems: "center",
          placeItems: "center",
          ":hover": {
            transform: "translateY(-10px)",
          },
          transition: "0.5s ease all",
        }}
      >
        <Box>
          <Icon style={{ width: 60, height: "auto", fill: COLORS.PRIMARY }} />
          <Typography
            sx={{
              fontSize: 50,
              fontWeight: 600,
              color: "#fff",
              fontFamily: roboto.style,
            }}
          >
            {number}
          </Typography>
          <Typography
            color={COLORS.WHITE}
            fontSize={20}
            textTransform={"capitalize"}
            sx={{ fontFamily: inter.style }}
          >
            {heading}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default StatsCard;
