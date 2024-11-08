import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { Container, Box, Stack, Typography, Button } from "@mui/material";
import Banner from "@/components/banner";
import { data } from "@/assets/data";
import { COLORS } from "@/utils/global";
import Services from "@/components/services";
import { roboto } from "@/utils/fonts";
import About from "@/components/aboutus";
import Choose from "@/components/choose";
import Stats from "@/components/stats";
import Subheading from "@/components/subHeading";
import { ArrowForward } from "@mui/icons-material";
import Portfolio from "@/components/portfolio";
import Clients from "@/components/clients";
import Testimonials from "@/components/testimonials";
import Blogs from "@/components/blogs";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Flex it</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Banner sliderData={data.sliderImage} />
      </Box>
      <Box
        sx={{
          p: 5,
          backgroundColor: COLORS.DARKBLUE,
        }}
      >
        <Services />
        <Box sx={{ mt: 20 }}>
          <About />
        </Box>
        <Box sx={{ mt: 20 }}>
          <Choose />
        </Box>
      </Box>
      <Box>
        <Stats />
      </Box>
      <Box sx={{ backgroundColor: COLORS.DARKBLUE, p: 2 }}>
        <Container maxWidth="lg">
          <Subheading title="Portfolio" fontSize={12} />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography
              fontSize={40}
              color="#fff"
              textTransform={"capitalize"}
              sx={{ fontFamily: roboto.style, mt: 1 }}
            >
              Awesome portfolio
            </Typography>
            <Button
              sx={{
                backgroundColor: COLORS.PRIMARY,
                color: COLORS.WHITE,
                ":hover": {
                  color: COLORS.PRIMARY,
                  backgroundColor: "transparent",
                  "& svg": {
                    transform: "translateX(8px)",
                  },
                },
                "& svg": {
                  transition: "0.5s ease all",
                },
                border: COLORS.BORDER1PX,
                width: 150,
                p: 1,
              }}
            >
              See More <ArrowForward sx={{ fontSize: 25 }} />
            </Button>
          </Stack>
          <Box mt={2} sx={{ py: 5 }}>
            <Portfolio />
          </Box>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: COLORS.PRIMARY, p: 5 }}>
        <Container maxWidth="lg">
          <Clients data={data.clientsSlider} />
        </Container>
      </Box>
      <Box>
        <Testimonials />
      </Box>
      <Box sx={{ backgroundColor: COLORS.DARKBLUE, pt: 5, pb: 10 }}>
        <Blogs />
      </Box>
    </>
  );
}
