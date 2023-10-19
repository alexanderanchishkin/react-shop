import React from "react";
import {BottomNavigation, BottomNavigationAction, Box, Paper} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface IPageProps {
  children: React.JSX.Element;
}

const Page = (props: IPageProps) => {
  const { children } = props;
  return (
    <Box>
      {children}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <BottomNavigation showLabels={true}>
          <BottomNavigationAction label={"Recents"} icon={<RestoreIcon />} />
          <BottomNavigationAction label={"Shop"} icon={<ShoppingCartIcon />} />
          <BottomNavigationAction label={"Profile"} icon={<AccountCircleIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default Page;
