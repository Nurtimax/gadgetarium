import {
  Avatar,
  Box,
  Divider,
  IconButton,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "../UI/button/Button";
import DropDown from "../UI/DropDown";
import useDropDown from "../../hooks/useDropDown";

const AdminProfile = () => {
  const [anchorEl, toggleAnchorElHandler, open] = useDropDown();

  return (
    <Box className="flex gap2 between">
      <ButtonStyled>Создать рассылку</ButtonStyled>
      <Divider flexItem orientation="vertical" variant="middle" color="white" />
      <AvatarStyled>G</AvatarStyled>
      <Box className="flex color-white pointer" onClick={toggleAnchorElHandler}>
        <Typography component="div" variant="body2">
          Администратор
        </Typography>
        <IconButton color="inherit">
          <KeyboardArrowDownIcon />
        </IconButton>
        <DropDown
          open={open}
          anchorEl={anchorEl}
          handleClose={toggleAnchorElHandler}
          vertical="bottom"
          horizontal="left"
        >
          <MenuItem>Выйти</MenuItem>
        </DropDown>
      </Box>
    </Box>
  );
};

export default AdminProfile;

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  background: theme.palette.background.default,
  color: theme.palette.secondary.main,
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "26px",
  lineHeight: "31px",
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: "white !important",
  borderRadius: "46px",
  fontWeight: 700,
  fontSize: 16,
  padding: "10px 15px",
  width: "190px",
}));
