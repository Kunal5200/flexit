import { inter, roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/global";
import { Instagram, X, YouTube } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import { FaFacebookF } from "react-icons/fa6";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Subheading from "./subHeading";
interface SliderItem {
  img: string;
  alt?: string;
  subHeading: string;
  heading: string;
  colorHeading: string;
  description: string;
}
const Banner = ({ sliderData }: { sliderData: SliderItem[] }) => {
  const socialArray = [
    {
      icon: <FaFacebookF fontSize={30} />,
    },
    {
      icon: <YouTube sx={{ fontSize: 30 }} />,
    },
    {
      icon: <Instagram sx={{ fontSize: 30 }} />,
    },
    {
      icon: <X sx={{ fontSize: 30 }} />,
    },
  ];

  return (
    <div>
      <Swiper
        loop
        autoplay={{
          delay: 2000,
        }}
        modules={[Autoplay, EffectFade]}
        effect="fade"
      >
        {sliderData.map((val, i) => (
          <SwiperSlide key={i}>
            <Box
              sx={{
                backgroundImage: `url(${val.img})`,
                height: "110vh",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#00000049",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <Container maxWidth="lg">
                  <Grid2 container>
                    <Grid2 size={6}>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={5}
                      >
                        {socialArray.map((icon, index) => (
                          <Box
                            sx={{
                              "& svg": {
                                color: COLORS.WHITE,
                                transition: "0.5s ease all",
                                cursor: "pointer",
                              },
                              ":hover": {
                                "& svg": {
                                  color: COLORS.PRIMARY,
                                  transform: "translateY(-5px)",
                                },
                              },
                            }}
                            key={index}
                          >
                            {icon.icon}
                          </Box>
                        ))}
                      </Stack>
                      <Box className="animate__animated animate animate__fadeInUp">
                        <Subheading title={val.subHeading} fontSize={14} />
                        <Typography
                          fontSize={55}
                          sx={{ fontFamily: roboto.style, fontWeight: 800 }}
                          color={COLORS.WHITE}
                          textTransform={"capitalize"}
                        >
                          {val.heading}
                        </Typography>
                        <Typography
                          fontSize={55}
                          sx={{ fontFamily: roboto.style, fontWeight: 800 }}
                          color={COLORS.PRIMARY}
                          textTransform={"capitalize"}
                        >
                          {val.colorHeading}
                        </Typography>
                        <Typography
                          fontSize={18}
                          sx={{ fontFamily: inter.style, fontWeight: 500 }}
                          color={COLORS.WHITE}
                          textTransform={"capitalize"}
                        >
                          {val.description}
                        </Typography>
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          spacing={3}
                          mt={2}
                        >
                          <Button
                            sx={{
                              p: 1.5,
                              color: COLORS.WHITE,
                              backgroundColor: COLORS.PRIMARY,
                              width: 150,
                              fontFamily: roboto.style,
                              textTransform: "initial",
                              ":hover": {
                                color: COLORS.PRIMARY,
                                backgroundColor: "transparent",
                              },
                              border: COLORS.BORDER1PX,
                            }}
                          >
                            Start Now
                          </Button>
                          <Button
                            sx={{
                              p: 1.5,
                              color: COLORS.PRIMARY,
                              backgroundColor: "transparent",
                              width: 150,
                              fontFamily: roboto.style,
                              textTransform: "initial",
                              border: COLORS.BORDER1PX,
                              ":hover": {
                                color: COLORS.WHITE,
                                backgroundColor: COLORS.PRIMARY,
                              },
                            }}
                          >
                            Contact Us
                          </Button>
                        </Stack>
                      </Box>
                    </Grid2>
                  </Grid2>
                </Container>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
