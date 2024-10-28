import { roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/global";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface clientProps {
  img: string;
}
const Clients = ({ data }: { data: clientProps[] }) => {
  console.log("data", data);
  return (
    <div>
      <Typography
        textTransform={"capitalize"}
        textAlign={"center"}
        color={COLORS.BLUETEXT}
        fontSize={30}
        fontWeight={550}
        sx={{ fontFamily: roboto.style }}
      >
        Trusted By over 500 clients around the world
      </Typography>
      <Box sx={{ mt: 5 }}>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          loop
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
          }}
          grabCursor
        >
          {data.map((val, i) => (
            <SwiperSlide key={i}>
              <Box
                sx={{
                  "& img": {
                    filter: "grayscale(100%)",
                    ":hover": {
                      filter: "grayscale(0)",
                    },
                    objectFit: "cover",
                    transition: "0.5s ease all",
                  },
                  textAlign: "center",
                }}
              >
                <Image src={val.img} alt="" width={150} height={120} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </div>
  );
};

export default Clients;
