import { Badge, styled, Tooltip, tooltipClasses } from "@mui/material";
import React, { useState } from "react";
import PopUp from "../UI/PopUp";
import FunctionalIconsItemTooltipTitle from "./FunctionalIconsItemTooltipTitle";

const FunctionalIconsItem = ({
  placementTooltip,
  className,
  badgeContent,
  color,
  iconDefault,
  focused,
  iconRemoveItem,
  addedTitle,
  transitionTitle,
  ...props
}) => {
  const [state, setState] = useState(focused);
  const [anchorEl, setAnchorEl] = useState(false);

  const toggleAnchorEl = () => {
    setAnchorEl((prevState) => !prevState);
  };

  const toggleHandler = () => {
    setState((prevState) => !prevState);
    toggleAnchorEl();
  };

  return (
    <>
      <StyledTooltip
        placement={placementTooltip}
        title={<FunctionalIconsItemTooltipTitle {...props} focused={state} />}
        className={className}
        onClick={toggleHandler}
      >
        <StyledBadge badgeContent={badgeContent.length} color={color}>
          {!state ? iconDefault : iconRemoveItem}
        </StyledBadge>
      </StyledTooltip>
      {anchorEl && (
        <PopUp
          open={anchorEl}
          handleClose={toggleAnchorEl}
          durationSnackbar={2000}
          addedTitle={addedTitle}
          transitionTitle={transitionTitle}
          to={Math.random().toString()}
          icon
        />
      )}
    </>
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
}));

const StyledBadge = styled(Badge)(() => ({
  "& svg": {
    width: "30px",
    height: "30px",
  },
}));
