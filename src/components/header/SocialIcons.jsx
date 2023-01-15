import { Badge, Box, styled } from "@mui/material";
import React from "react";
import { socialIconsData } from "../../utils/constants";

const SocialIcons = () => {
  return (
    <StyledSocialIcons className="flex gap2 height pointer flex-end">
      {socialIconsData.map(({ id, icon }) => (
        <Badge
          badgeContent={4}
          color="info"
          key={id}
          classes={{ colorInfo: "badgeColor" }}
        >
          {icon}
        </Badge>
      ))}
    </StyledSocialIcons>
  );
};

export default SocialIcons;

const StyledSocialIcons = styled(Box)(({ theme }) => ({
  "& .badgeColor": {
    background: theme.palette.grey[600],
    color: theme.palette.text.primary,
  },
}));
