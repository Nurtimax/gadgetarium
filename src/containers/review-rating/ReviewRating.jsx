import React, { useEffect, useState } from "react";
import { Box, Container, Rating, styled } from "@mui/material";
import { tabsReview } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { getRevewRating } from "../../redux/slices/review-rating-slice";
import { ArrowOrderIcon } from "../../assets";
import DropDown from "../../components/UI/DropDown";
import ReviewItem from "./ReviewItem";

const ReviewRating = () => {
  const { data } = useSelector((state) => state.reviewRating);

  const [currentTab, setCurrentTab] = useState("1");

  const [anchorEl, setAnchorEl] = useState(null);

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRevewRating("Все отзывы"));
  }, []);

  const countGradeKey = [];
  const countGrade = [];

  for (const key in data.countGrade) {
    countGradeKey.push({ key: +key, value: data.countGrade[key] });
    countGrade.push(data.countGrade[key]);
  }

  const count = countGrade.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  const handleTab = (e) => {
    setCurrentTab(e.target.id);

    dispatch(
      getRevewRating(
        e.target.id == 1
          ? "Все отзывы"
          : e.target.id == 2
          ? "Неотвеченные"
          : "Отвеченные"
      )
    );
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const allGradeHandler = (e) => {
    setOpen(true);
    setAnchorEl(e.currentTarget);
  };

  return (
    <>
      <MainContainer>
        <Tabs>
          {tabsReview.map((tab, i) => (
            <button
              key={i}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClick={handleTab}
            >
              {tab.label}
            </button>
          ))}
        </Tabs>

        <Box className="tableHead">
          <Box className="head">
            <p>ID</p>
            <p>Фото</p>
            <p>Название товара</p>
            <p>Комментарий</p>
          </Box>
          <Box>
            <p className="all-grade" onClick={allGradeHandler}>
              Все оценки ({count}) <ArrowOrderIcon />
            </p>
            <p>Пользователь</p>
          </Box>
        </Box>

        <Box className="box-product">
          {tabsReview.map((tab, i) => (
            <Box key={i}>
              {currentTab === `${tab.id}` &&
                data.reviewResponses?.map((review, i) => (
                  <ReviewItem key={i} review={review} />
                ))}
            </Box>
          ))}
        </Box>
      </MainContainer>

      <StyledDropDown
        vertical="top"
        horizontal="left"
        open={open}
        handleClose={handleClose}
        anchorEl={anchorEl}
      >
        {countGradeKey.map((grade, i) => (
          <div key={i} className="rating">
            <Rating readOnly value={grade.key} /> ({grade.value})
          </div>
        ))}
      </StyledDropDown>
    </>
  );
};

export default ReviewRating;

const MainContainer = styled(Container)(() => ({
  "& .tableHead": {
    paddingTop: "40px",
    display: "flex",
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "14px",
    color: "#384255",

    "& .head": {
      "& p:nth-of-type(2)": {
        paddingLeft: "40px",
      },
      "& p:nth-of-type(3)": {
        paddingLeft: "40px",
      },
      "& p:nth-of-type(4)": {
        paddingLeft: "60px",
      },
    },

    "& div:first-of-type": {
      display: "flex",
    },

    "& div:last-of-type": {
      display: "flex",
      paddingLeft: "250px",
      gap: "40px",

      "& .all-grade": {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",

        "& path": {
          fill: "black",
        },
      },
    },
  },

  "& .box-product": {
    "& .product": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "20px",
      paddingTop: "20px",
      borderTop: "1px solid #CDCDCD",
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "16px",

      "& img": {
        width: "56px",
        height: "62px",
        mixBlendMode: "darken",
      },

      "& .name-product": {
        fontWeight: "500",
        fontSize: "14px",
        color: "#909CB5",

        "& p:first-of-type": {
          fontWeight: "600",
          color: "black",
        },
      },

      "& .review": {
        fontSize: "14px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",

        "& .images": {
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        },
      },

      "& .rating": {
        "& path": {
          fill: "#F99808",
        },
      },

      "& .user": {
        display: "flex",
        gap: "16px",
        fontWeight: "600",
        fontSize: "14px",

        "& img": {
          borderRadius: "50%",
          width: "42px",
          height: "42px",
        },

        "& .email": { color: "#91969E" },
      },

      "& .icons": {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
      },
    },
  },
}));

const Tabs = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "12px",

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
    display: "flex",
    gap: "5px",

    "& div": {
      color: "#2FC509",
    },
  },

  "& button:disabled": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const StyledDropDown = styled(DropDown)(() => ({
  "& .MuiPaper-root": {
    borderRadius: "4px",
    padding: "16px",

    "& ul": {
      display: "flex",
      flexDirection: "column",
      gap: "21px",
    },
  },

  "& .rating": {
    display: "flex",
    alignItems: "center",
    color: "black",

    "& path": {
      fill: "#F99808",
    },
  },
}));
