import { inter, roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/global";
import {
    ArrowForward,
    BookmarkBorder,
    PersonOutline,
} from "@mui/icons-material";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { StaticImageData } from "next/image";
import { MouseEventHandler } from "react";

interface BLOGPROPS {
  img: StaticImageData | string;
  date: string;
  category: string;
  name: string;
  heading: string;
  description: string;
  onClick?: MouseEventHandler;
}

const BlogCard = ({
  img,
  date,
  category,
  name,
  heading,
  description,
  onClick,
}: BLOGPROPS) => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: COLORS.BLOGCARD,
          borderRadius: "8px",
          ":hover": {
            ".background_image": {
              transform: "scale(1.2)",
            },
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            height: 250,
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${img})`,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transition: "transform 0.5s ease",
              transform: "scale(1)",
              ":hover": {
                transform: "scale(1.2)",
              },
            }}
            className="background_image"
          />

          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              p: 2,
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                backgroundColor: "#27162580",
                p: 1,
                color: COLORS.WHITE,
                width: "fit-content",
                borderRadius: 5,
              }}
            >
              <Typography sx={{ fontFamily: inter.style }}>{date}</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ p: 2 }}>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <Stack direction={"row"} alignItems={"center"} spacing={0.5}>
              <BookmarkBorder htmlColor={COLORS.PRIMARY} fontSize="small" />
              <Typography
                color={COLORS.BLOGTEXT}
                sx={{
                  ":hover": {
                    color: COLORS.PRIMARY,
                  },
                  fontSize: 12,
                  cursor: "pointer",
                  fontFamily: inter.style,
                }}
              >
                {category}
              </Typography>
            </Stack>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: COLORS.BLOGTEXT, borderWidth: 1 }}
            />
            <Stack direction={"row"} alignItems={"center"} spacing={0.5}>
              <PersonOutline htmlColor={COLORS.PRIMARY} fontSize="small" />
              <Typography
                color={COLORS.BLOGTEXT}
                sx={{
                  ":hover": {
                    color: COLORS.PRIMARY,
                  },
                  fontSize: 12,
                  cursor: "pointer",
                  fontFamily: inter.style,
                }}
              >
                {name}
              </Typography>
            </Stack>
          </Stack>
          <Typography
            sx={{
              mt: 2,
              fontFamily: roboto.style,
              color: COLORS.WHITE,
              fontSize: 20,
              textTransform: "capitalize",
              ":hover": {
                color: COLORS.PRIMARY,
              },
              cursor: "pointer",
              fontWeight: 600,
              lineHeight: 2,
              letterSpacing: 1.3,
            }}
          >
            {heading}
          </Typography>
          <Typography
            sx={{ mt: 1, fontFamily: inter.style, color: COLORS.BLOGTEXT }}
          >
            {description}
          </Typography>
          <Button
            sx={{ color: COLORS.PRIMARY, mt: 1 }}
            endIcon={<ArrowForward />}
            onClick={onClick}
          >
            Read More
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default BlogCard;
