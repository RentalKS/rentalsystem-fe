import { Button, styled, Theme } from "@mui/material";
import React from "react";

interface CustomButtonProps {
  backgroundColor: string;
  color: string;
  buttonText: string;
  heroBtn?: boolean;
  guideBtn?: boolean;
  getStartedBtn?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  backgroundColor,
  color,
  buttonText,
  heroBtn,
  guideBtn,
  getStartedBtn,
}) => {
  const CustomButtonStyled = styled(Button)(({ theme }: { theme: Theme }) => ({
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "7px",
    textTransform: "none",
    display: "block",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down("md")]: {
      margin: (heroBtn || getStartedBtn) && `${theme.spacing(0)}px auto ${theme.spacing(3)}px auto`,
      width: (heroBtn || getStartedBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && "90%",
    },
  }));

  return <CustomButtonStyled>{buttonText}</CustomButtonStyled>;
};

export default CustomButton;
