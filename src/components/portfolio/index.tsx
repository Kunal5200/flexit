import { TabStatus } from "@/utils/defaultArray";
import { inter } from "@/utils/fonts";
import { COLORS, PORTFOLIO } from "@/utils/global";
import { Grid2, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import TabPanel from "../tabpanel";
import PortfolioCard from "./portfolioCard";
import { data } from "@/assets/data";

const Portfolio = () => {
  const [value, setValue] = useState(0);

  const tabChangeHandler = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const target = e.target as HTMLElement;
    const text = target.textContent;
    if (text === PORTFOLIO.MOBILEAPPS) {
      setNewData(data.mobileApps);
    }
    if (text === PORTFOLIO.ALL) {
      setNewData(data.portfolioData);
    }
    if (text === PORTFOLIO.CLOUD) {
      setNewData(data.cloud);
    }
    if (text === PORTFOLIO.DATAANALYSIS) {
      setNewData(data.portfolioData);
    }
    if (text === PORTFOLIO.HOSTING) {
      setNewData(data.portfolioData);
    }
  };

  const [newData, setNewData] = useState(data.portfolioData);
  return (
    <div>
      <Tabs
        sx={{
          "& .Mui-selected": {
            color: `${COLORS.PRIMARY} !important`,
          },
          "& .MuiTabs-indicator": {
            backgroundColor: COLORS.PRIMARY,
          },
        }}
        onChange={tabChangeHandler}
        value={value}
      >
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

      {TabStatus.map((item, index) => (
        <TabPanel value={value} index={index}>
          <Grid2 container mt={4} spacing={4}>
            {newData.map((val, i) => (
              <Grid2 size={4} key={i}>
                <PortfolioCard img={val.img} heading={val.heading} />
              </Grid2>
            ))}
          </Grid2>
        </TabPanel>
      ))}
    </div>
  );
};

export default Portfolio;
