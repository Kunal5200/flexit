import React from "react";

interface tabProps {
  children: React.ReactNode;
  value: number;
  index: number;
  className?: string;
}

const TabPanel = ({
  children,
  value,
  index,
  className,
  ...other
}: tabProps) => {
  return (
    <div>
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        className={className}
      >
        {value === index && <div>{children}</div>}
      </div>
    </div>
  );
};

export default TabPanel;
