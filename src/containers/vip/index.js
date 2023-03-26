import { Container, styled, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import { clearHistory } from "../../redux/slices/private-slice";
import { head } from "../../utils/constants";
import { ROUTES } from "../../utils/constants/routes";

const PersonalArea = () => {
  const { data } = useSelector((state) => state.private.history);

  const [title, setTitle] = useState(head[0].label);

  const location = useLocation();

  const dispatch = useDispatch();

  const onClickButton = (id) => {
    setTitle(head[id].label);
  };

  const active = useMemo(() => {
    return location.pathname.split("/vip/").join("");
  }, [location]);

  const clearHandler = () => {
    dispatch(clearHistory());
  };
  return (
    <StyledContainer>
      <Typography className="header" component="div">
        <Typography variant="h4">{title}</Typography>
      </Typography>
      <div className="tabs">
        <Tabs>
          {head.map((tab, i) => (
            <Link to={tab.link} key={tab.id}>
              <button
                name={tab.id}
                className={tab.link === active ? "active" : ""}
                onClick={() => onClickButton(i)}
              >
                {tab.label}
              </button>
            </Link>
          ))}
        </Tabs>
        {data.length > 0
          ? active === ROUTES.HISTORY && (
              <p className="pointer flex center" onClick={clearHandler}>
                <span>&times; </span> Очистить список заказов
              </p>
            )
          : null}
      </div>

      <Outlet />
    </StyledContainer>
  );
};

export default PersonalArea;
const StyledContainer = styled(Container)(() => ({
  padding: "10px 0",
  position: "relative",
  // background: "#E8E8E8",
  "& .header": {
    borderBottom: "1px solid grey",
    height: "70px",
    display: "flex",
    alignItems: "center",
  },
  "& h4": {
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "30px",
  },
  "& .tabs": {
    padding: "40px 0",
    width: "70%",
    display: "flex",
    justifyContent: "space-between",
  },
  "& span": {
    fontSize: "25px",
    paddingRight: "5px",
  },
  // "& p:hover": {
  //   color: "green",
  // },
}));
const Tabs = styled("div")(({ theme }) => ({
  gap: "12px",
  display: "flex",
  alignItems: "center",

  "& button": {
    cursor: "pointer",
    backgroundColor: theme.palette.grey[200],
    borderRadius: "4px",
    border: `1px solid ${theme.palette.grey[200]}`,
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "16px",
    color: theme.palette.primary.light,
    padding: "8px 20px",
  },
  "& button.active": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
}));
