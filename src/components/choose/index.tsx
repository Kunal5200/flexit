import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import robot from "@/bannerImage/choose.png";
import Image from "next/image";
import Subheading from "../subHeading";
import { inter, roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/global";
import Choosecard from "./chooseCard";
import { data } from "@/assets/data";
import Aos from "aos";
const Choose = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Container maxWidth="lg">
        <Grid2 container alignItems={"center"} spacing={4}>
          <Grid2 size={6} data-aos="fade-right">
            <Image src={robot} alt="" width={500} />
          </Grid2>
          <Grid2 size={6} data-aos="fade-left">
            <Subheading title="Choose us" fontSize={12} />
            <Typography
              textTransform={"capitalize"}
              fontSize={48}
              sx={{ fontFamily: roboto.style, color: COLORS.WHITE }}
              mt={2}
            >
              Why our customers choose{" "}
              <Typography
                component={"span"}
                sx={{
                  fontFamily: roboto.style,
                  color: COLORS.PRIMARY,
                  fontSize: 48,
                }}
              >
                working
              </Typography>{" "}
              with us
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                fontFamily: inter.style,
                color: COLORS.PARACOLOR,
                lineHeight: 2,
                mt: 2,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia
              molestiae dolorum tempora ut accusamus cupiditate! Nesciunt
              tempora reiciendis libero voluptate!
            </Typography>
            {data.chooseList.map((val, i) => (
              <Stack>
                <Choosecard
                  heading={val.heading}
                  description={val.description}
                  index={`0${i + 1}`}
                />
              </Stack>
            ))}
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default Choose;
