import { roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/global";
import { Avatar, Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface TestimonialProps {
  img: string | StaticImageData;
  description: string;
  name: string;
}

const TestimonialCard = ({ img, description, name }: TestimonialProps) => {
  return (
    <Box sx={{ width: 700, margin: "auto" }}>
      <Avatar
        sx={{
          width: 50,
          height: 50,
          border: `4px solid ${COLORS.PRIMARY}`,
          margin: "auto",
        }}
      >
        <Image src={img} alt="" width={50} />
      </Avatar>
      <Typography
        textAlign="center"
        mt={4}
        color={COLORS.WHITE}
        fontSize={18}
        lineHeight={2}
        fontWeight={700}
        sx={{ fontFamily: roboto.style }}
        letterSpacing={1}
      >
        {description}
      </Typography>
      <Typography
        textAlign="center"
        fontSize={15}
        sx={{ fontFamily: roboto.style }}
        color={COLORS.WHITE}
        fontWeight={550}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default TestimonialCard;
