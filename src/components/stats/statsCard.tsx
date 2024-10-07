import { COLORS } from "@/utils/global";
import { Box } from "@mui/material";
import React from "react";

const StatsCard = () => {
  return (
    <div>
      <Box
        sx={{
          borderBottom: COLORS.BORDER1PX,
          borderTopColor: COLORS.PRIMARY,
          borderTopWidth: "4px",
          borderLeft: COLORS.BORDER1PX,
          borderRight: COLORS.BORDER1PX,
        }}
      >
        Hello
      </Box>
    </div>
  );
};

export default StatsCard;
