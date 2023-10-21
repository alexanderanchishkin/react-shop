import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { PageType } from "@/app/interfaces";
import { Link } from "react-router-dom";
import {
  MenuBook,
  AccountCircle,
  ShoppingCart,
  Home,
} from "@mui/icons-material";

interface INavigationPanelProps {
  onChangePage: (page: PageType) => void;
  page: PageType;
}

const pages = [
  {
    to: "/",
    label: "Home",
    icon: <Home />,
    value: "main",
  },
  {
    to: "/shop",
    label: "Shop",
    icon: <MenuBook />,
    value: "shop",
  },
  {
    to: "/cart",
    label: "Cart",
    icon: <ShoppingCart />,
    value: "cart",
  },
  {
    to: "/profile",
    label: "Profile",
    icon: <AccountCircle />,
    value: "profile",
  },
];

const NavigationPanel = (props: INavigationPanelProps) => {
  const { onChangePage, page } = props;

  function onChange(event: React.SyntheticEvent, value: PageType): void {
    onChangePage(value);
  }

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation showLabels={true} onChange={onChange} value={page}>
        {pages.map((page) => (
          <BottomNavigationAction key={page.value} component={Link} {...page} />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default NavigationPanel;
