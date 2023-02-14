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
import { ActionauthenticationSlice } from "../../redux/slices/authentication";
import { useDispatch } from "react-redux";
import Modal from "../UI/Modal";
import useVisibility from "../../hooks/useVisibility";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

const AdminProfile = () => {
  const [anchorEl, toggleAnchorElHandler, open] = useDropDown();
  const [openModal, setOpenModal] = useVisibility();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(ActionauthenticationSlice.authLogOut());
    setOpenModal();
    navigate(ROUTES.MAIN, { replace: true });
  };

  return (
    <>
      <StyledModal open={openModal} handleClose={setOpenModal}>
        <Typography component="span" variant="body1" className="flex center">
          Вы уверены, что хотите выйти?
        </Typography>
        <Box className="flex center gap2">
          <ButtonStyled
            variant="outlined"
            className="cancel_button"
            onClick={setOpenModal}
          >
            Отменить
          </ButtonStyled>
          <ButtonStyled
            variant="contained"
            className="logout_button"
            onClick={logOutHandler}
          >
            Выйти
          </ButtonStyled>
        </Box>
      </StyledModal>
      <Box className="flex gap2 between">
        <ButtonStyled>Создать рассылку</ButtonStyled>
        <Divider
          flexItem
          orientation="vertical"
          variant="middle"
          color="white"
        />
        <AvatarStyled>G</AvatarStyled>
        <Box
          className="flex color-white pointer"
          onClick={toggleAnchorElHandler}
        >
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
            <MenuItem onClick={setOpenModal}>Выйти</MenuItem>
          </DropDown>
        </Box>
      </Box>
    </>
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
  "&.logout_button": {
    background: theme.palette.secondary.main,
    borderRadius: 4,
    width: "100px",
    height: "39px",
  },
  "&.cancel_button": {
    background: "inherit",
    borderRadius: 4,
    width: "130px",
    height: "39px",
    color: `${theme.palette.secondary.main} !important`,
  },
}));

const StyledModal = styled(Modal)(() => ({
  "& .MuiDialogContent-root": {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    width: "458px",
  },
}));
