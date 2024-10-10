import { TabStatus } from "@/utils/defaultArray";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/global";
import { Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

const Portfolio = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <Tabs sx={{}}>
        {TabStatus.map((val, i) => (
          <Tab
            label={
              <Typography
                fontSize={14}
                sx={{ fontFamily: inter.style, color: COLORS.WHITE }}
              >
                {val.label}
              </Typography>
            }
            key={i}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default Portfolio;
