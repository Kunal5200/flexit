import { Button, Container, Grid, Grid2, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Subheading from "../subHeading";
import { COLORS } from "@/utils/global";
import { inter, roboto } from "@/utils/fonts";
import AboutCard from "./aboutCard";
import { data } from "@/assets/data";
import about from "@/bannerImage/illustration-3.png";
import Image from "next/image";
import Aos from "aos";
const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Container maxWidth="lg">
        <Grid2 container alignItems={"center"} spacing={4}>
          <Grid2 size={6} data-aos="fade-right">
            <Subheading title="About Us" fontSize={12} />
            <Typography
              textTransform={"capitalize"}
              fontSize={48}
              color={COLORS.WHITE}
              sx={{ fontFamily: roboto.style, fontWeight: 600 }}
              mt={2}
            >
              trusted by worldwide clients since{" "}
              <Typography
                component={"span"}
                color={COLORS.PRIMARY}
                fontSize={48}
                sx={{ fontFamily: roboto.style, fontWeight: 600 }}
              >
                1980
              </Typography>{" "}
              .
            </Typography>
            <Typography
              fontSize={15}
              sx={{
                fontFamily: inter.style,
                color: COLORS.PARACOLOR,
                mt: 2,
                lineHeight: 2,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia
              molestiae dolorum tempora ut accusamus cupiditate! Nesciunt
              tempora reiciendis libero voluptate!
            </Typography>
            <Grid container spacing={2} mt={2}>
              {data.aboutCard.map((val, i) => (
                <Grid item lg={6}>
                  <AboutCard
                    Icon={val.Icon}
                    description={val.description}
                    heading={val.heading}
                  />
                </Grid>
              ))}
            </Grid>

            {/* <Button
              sx={{
                backgroundColor: COLORS.PRIMARY,
                color: COLORS.WHITE,
                textTransform: "inherit",
                mt: 3,
                fontFamily: roboto.style,
                width: 150,
                p: 1,
                border: COLORS.BORDER1PX,
                ":hover": {
                  backgroundColor: "transparent",
                  color: COLORS.PRIMARY,
                },
              }}
            >
              Get In Touch
            </Button> */}
          </Grid2>
          <Grid2 size={6} textAlign={"center"} data-aos="fade-left">
            <Image src={about} alt="" width={500} />
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default About;
