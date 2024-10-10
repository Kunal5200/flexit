import { Box, Container, Grid2 } from "@mui/material";
import React from "react";
import bannerimage from "@/bannerImage/pattern-bg-3.jpg";
import { COLORS } from "@/utils/global";
import StatsCard from "./statsCard";
import { data } from "@/assets/data";
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container maxWidth="lg">
            <Grid2 container spacing={3}>
              {data.statsData.map((val, i) => (
                <Grid2 size={3} key={i}>
                  <StatsCard
                    Icon={val.Icon}
                    heading={val.heading}
                    number={val.number}
                  />
                </Grid2>
              ))}
            </Grid2>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Stats;
