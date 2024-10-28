import { roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/global";
import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

interface portfolioProps {
  img: String;
  heading: String;
}
const PortfolioCard = ({ img, heading }: portfolioProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: "70vh",
      }}
      className="animate__animated animate__fadeInUp"
    >
      <Box
        sx={{
          backgroundImage: `url(${img})`,
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.5s ease-in-out",
          "&:hover": {
            transform: "scale(1.08)",
          },
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Box
          sx={{
            backgroundColor: COLORS.BLACKOPACITY,
            width: "100%",
            height: 80,
            position: "relative",
            bottom: hovered ? 2 : 0,
            transition: "0.5s ease all",
            scale: hovered ? 1 : 0,
          }}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={3} position={"relative"}>
            <Button
              sx={{
                backgroundColor: COLORS.PRIMARY,
                borderRadius: 0,
                height: 80,
                // p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // width: 80,
                position:"relative",
                left:10
              }}
            >
              <ArrowForward htmlColor="#fff" sx={{ fontSize: 30 }} />
            </Button>
            <Typography
              fontSize={18}
              color="#fff"
              sx={{ fontFamily: roboto.style }}
            >
              {heading}
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioCard;
