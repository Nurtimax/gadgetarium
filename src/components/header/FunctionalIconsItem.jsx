import { Badge, styled, Tooltip, tooltipClasses } from "@mui/material";
import React, { useState } from "react";
import FunctionalIconsItemTooltipTitle from "./FunctionalIconsItemTooltipTitle";

const FunctionalIconsItem = ({
  placementTooltip,
  className,
  badgeContent,
  color,
  iconDefault,
  focused,
  iconRemoveItem,
  toggleAnchorEl,
  ...props
}) => {
  const [state, setState] = useState(focused);

  const toggleHandler = () => {
    setState((prevState) => !prevState);
    toggleAnchorEl();
  };

  return (
    <StyledTooltip
      placement={placementTooltip}
      title={<FunctionalIconsItemTooltipTitle {...props} focused={state} />}
      className={className}
      onClick={toggleHandler}
    >
      <Badge badgeContent={badgeContent.length} color={color} className="icon">
        {!state ? iconDefault : iconRemoveItem}
      </Badge>
    </StyledTooltip>
  );
};

export default FunctionalIconsItem;

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`&.show_cart_items .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
  [`&.show_cart_items .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(1),
    color: theme.palette.common.black,
    width: "500px",
    boxShadow: "rgba(0,0,0,0.5) 0 1px 2px",
  },
  [`& .icon svg`]: {
    width: "32px",
    height: "31px",
  },
}));
