import { Box, Container, Grid2 } from "@mui/material";
import React from "react";
import bannerimage from "@/bannerImage/pattern-bg-3.jpg";
import { COLORS } from "@/utils/global";
import StatsCard from "./statsCard";
const Stats = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${bannerimage.src})`,
          height: "60vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#00000089",
            height: "100%",
            opacity: 0.4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container maxWidth="lg">
            <Grid2 container>
              <Grid2 size={3}>
                <StatsCard />
              </Grid2>
            </Grid2>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Stats;
