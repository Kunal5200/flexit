import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import bannerImage from "@/bannerImage/footer_bg.jpg";
import { COLORS } from "@/utils/global";
import logo from "@/logo/logo-colored.png";
import Image from "next/image";
import { inter } from "@/utils/fonts";
const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${bannerImage.src})`,
          height: "80vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#06092299",
            height: "100%",
            // opacity: 0.7,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container maxWidth="lg">
            <Grid2 container>
              <Grid2 size={3}>
                <Image src={logo} alt="" />
                <Typography
                  color={COLORS.WHITE}
                  fontSize={14}
                  lineHeight={1.7}
                  mt={2}
                  sx={{ fontFamily: inter.style }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatibus facere modi possimus dignissimos, aliquam nobis
                  eaque? Voluptatem magnam quisquam rem.
                </Typography>
                <Typography
                  textTransform={"capitalize"}
                  color={COLORS.WHITE}
                  fontSize={14}
                  lineHeight={1.7}
                  mt={2}
                  sx={{ fontFamily: inter.style }}
                >
                  Subscribe to our news letter
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{
                    backgroundColor: "#726782",
                    borderRadius: 1,
                  }}
                >
                  <TextField
                    placeholder="Email Address"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          padding: "10px !important",
                        },
                        "&:hover fieldset": {
                          borderColor: "transparent",
                        },
                        "&.Mui-focused fieldset": {
                          border: "none",
                        },
                      },
                      "& .MuiOutlinedInput-input": {
                        "::placeholder": {
                          color: COLORS.WHITE,
                        },
                        color: COLORS.WHITE,
                      },
                    }}
                    fullWidth
                  />
                  <Button
                    sx={{
                      backgroundColor: COLORS.PRIMARY,
                      color: COLORS.WHITE,
                      p: 2,
                      width: 150,
                    }}
                  >
                    Subscribe
                  </Button>
                </Stack>
                <Typography
                  color={COLORS.BLOGTEXT}
                  sx={{
                    fontFamily: inter.style,
                    fontSize: 14,
                    textTransform: "capitalize",
                  }}
                >
                  *we will not share your personal info
                </Typography>
              </Grid2>
            </Grid2>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
