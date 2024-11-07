import { inter, roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/global";
import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import Subheading from "../subHeading";
import BlogCard from "./blogCard";
import { data } from "@/assets/data";

const Blogs = () => {
  return (
    <Container maxWidth="lg">
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <Subheading title="BLOG" fontSize={14} />
          <Typography
            textTransform={"capitalize"}
            color={COLORS.WHITE}
            fontSize={40}
            letterSpacing={2}
            sx={{
              fontFamily: roboto.style,
              fontWeight: 600,
            }}
          >
            latest news
          </Typography>
        </Box>
        <Button
          sx={{
            backgroundColor: COLORS.PRIMARY,
            color: COLORS.WHITE,
            p: 1,
            border: COLORS.BORDER1PX,
            ":hover": {
              backgroundColor: "transparent",
              svg: {
                transform: "translateX(5px)",
              },
            },
            svg: {
              transition: "0.5s ease all",
            },
            width: 170,
            fontFamily: inter.style,
          }}
          endIcon={<ArrowForward />}
        >
          See All Posts
        </Button>
      </Stack>
      <Grid2 container spacing={3} mt={4}>
        {data.blogs.map((val, i) => (
          <Grid2 size={4} key={i}>
            <BlogCard
              img={val.img}
              heading={val.heading}
              description={val.description}
              date={val.date}
              category={val.category}
              name={val.name}
            />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Blogs;
