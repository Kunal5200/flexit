import React, { useEffect } from "react";
import Subheading from "../subHeading";
import { Box, Container, Grid2, Typography } from "@mui/material";
import Aos from "aos";
import { COLORS } from "@/utils/global";
import { roboto } from "@/utils/fonts";
import ServicesCard from "./servicesCard";
import { data } from "@/assets/data";
const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Container maxWidth="lg">
        <Box data-aos="fade-up">
          <Subheading title="Services" fontSize={14} />
          <Typography
            sx={{
              color: COLORS.WHITE,
              mt: 2,
              fontSize: 48,
              textTransform: "capitalize",
              fontFamily: roboto.style,
              fontWeight: 600,
            }}
          >
            services we offer
          </Typography>
          <Typography
            sx={{
              fontSize: 18,
              width: "50%",
              color: COLORS.PARACOLOR,
              lineHeight: 2,
              mt: 2,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit Omnis id
            atque dignissimos repellat quae ullam
          </Typography>
        </Box>
        <Grid2 container mt={4} spacing={4}>
          {data.servicesCard.map((val, i) => (
            <Grid2 size={4} key={i} data-aos="fade-up">
              <ServicesCard
                Icon={val.Icon}
                heading={val.heading}
                description={val.description}
              />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </div>
  );
};

export default Services;
