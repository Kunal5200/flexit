import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";
import backgroundImage from "@/testimonials/1.jpg";
import Subheading from "../subHeading";
import { roboto } from "@/utils/fonts";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { COLORS } from "@/utils/global";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import TestimonialCard from "@/components/testimonials/testimonialCard";
import { data } from "@/assets/data";
import { Autoplay } from "swiper/modules";

interface swiperRef {
  swiper: SwiperClass | undefined;
}
const Testimonials = () => {
  const sliderRef = useRef<SwiperClass | null>(null);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slideNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slidePrev();
    }
  };

  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage.src})`,
          height: "80vh",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#00000070",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box>
            <Subheading
              title="testimonials"
              fontSize={12}
              justifyContent="center"
            />
            <Typography
              sx={{
                textTransform: "capitalize",
                color: "#fff",
                fontSize: 50,
                textAlign: "center",
                fontFamily: roboto.style,
              }}
            >
              customers testmonials
            </Typography>
            <Container maxWidth="lg" sx={{ mt: 3 }}>
              <Stack direction="row" alignItems={"center"} spacing={10}>
                <IconButton
                  sx={{
                    backgroundColor: COLORS.GREY,
                    color: COLORS.WHITE,
                    width: 50,
                    height: 50,
                    borderRadius: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ":hover": {
                      borderRadius: 0,
                      backgroundColor: COLORS.PRIMARY,
                    },
                    transition: "0.5s ease all",
                  }}
                  onClick={prevSlide}
                >
                  <ArrowBackIos sx={{ ml: 1 }} />
                </IconButton>
                <Swiper
                  autoplay
                  modules={[Autoplay]}
                  onSwiper={(swiper) => {
                    sliderRef.current = swiper;
                  }}
                  loop
                >
                  {data.testimonials.map((val, i) => (
                    <SwiperSlide
                      key={i}
                      className="animate__animated animate__bounceInRight "
                    >
                      <TestimonialCard
                        img={val.img}
                        description={val.description}
                        name={val.name}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <IconButton
                  sx={{
                    backgroundColor: COLORS.GREY,
                    color: COLORS.WHITE,
                    width: 50,
                    height: 50,
                    borderRadius: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ":hover": {
                      borderRadius: 0,
                      backgroundColor: COLORS.PRIMARY,
                    },
                    transition: "0.5s ease all",
                  }}
                  onClick={nextSlide}
                >
                  <ArrowForwardIos />
                </IconButton>
              </Stack>
            </Container>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Testimonials;
