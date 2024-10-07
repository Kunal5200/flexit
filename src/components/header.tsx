import { data } from "@/assets/data";
import logo from "@/logo/logo-light.png";
import { roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/global";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  const [fixed, setFixed] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setFixed(window.pageYOffset > 0));
    }
  }, []);
  return (
    <div>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: fixed ? "fixed" : "absolute",
            zIndex: 999,
            width: "100%",
            backgroundColor: fixed ? COLORS.PRIMARYWITHOPACITY : "transparent",
            height: 70,
            backdropFilter: fixed ? "blur(5px)" : "",
            transition: "0.5s ease all",
          }}
        >
          <Container maxWidth="lg" sx={{ p: 1 }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Image src={logo} alt="" />
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                {data.routes.map((val, i) => (
                  <Typography
                    fontSize={15}
                    color={COLORS.WHITE}
                    className={roboto.className}
                    key={i}
                  >
                    {val.label}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
