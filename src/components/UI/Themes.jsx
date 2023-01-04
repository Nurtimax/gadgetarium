import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useToggle } from "../../hooks/useToggle";

const themesItems = [
  { id: 1, color: "#CB11AB", variant: "pink" },
  { id: 2, color: "#292929", variant: "black500" },
  { id: 3, color: "#1A1A25", variant: "darkblue800" },
  { id: 4, color: "#384255", variant: "darkblue300" },
  { id: 5, color: "#F10000", variant: "red" },
  { id: 6, color: "#2C68F5", variant: "blue" },
  { id: 7, color: "#2FC504", variant: "green600" },
  { id: 8, color: "#3CDE14", variant: "green800" },
  { id: 9, color: "#F99808", variant: "orange" },
  { id: 10, color: "#08A592", variant: "aquamarine" },
  { id: 12, color: "#909CB5", variant: "gray800" },
  { id: 13, color: "#91969E", variant: "gray600" },
  { id: 14, color: "#CDCDCD", variant: "gray400" },
  { id: 15, color: "#E8E8E8", variant: "gray300" },
  { id: 16, color: "#E0E2E7", variant: "gray200" },
  { id: 17, color: "#F4F4F4", variant: "gray100" },
];

const Themes = ({
  variant: {
    pink = "",
    black500 = "",
    darkblue300 = "",
    darkblue800 = "",
    red = "",
    blue = "",
    green600 = "",
    green800 = "",
    orange = "",
    aquamarine = "",
    gray800 = "",
    gray600 = "",
    gray400 = "",
    gray300 = "",
    gray200 = "",
    gray100 = "",
  },
}) => {
  const [value, setValue] = useToggle("#CB11AB");

  const colors = {
    pink,
    black500,
    darkblue300,
    darkblue800,
    red,
    blue,
    green600,
    green800,
    orange,
    aquamarine,
    gray800,
    gray600,
    gray400,
    gray300,
    gray200,
    gray100,
  };

  const chooseColors = () => {
    let newColors = [];
    for (const key in colors) {
      const element = colors[key];
      if (element) {
        newColors.push(element);
      }
    }
    return newColors;
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const controlProps = (item) => ({
    checked: value === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <>
      {chooseColors().map((color) => (
        <FormControl key={color}>
          {themesItems.map((theme) => (
            <RadioGroup
              row
              key={theme.id}
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              {color === theme.variant && (
                <FormControlLabel
                  control={
                    <Radio
                      key={theme.id}
                      {...controlProps(theme.color)}
                      sx={{
                        color: theme.color,
                        "&.Mui-checked": {
                          color: theme.color,
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 26,
                        },
                      }}
                    />
                  }
                />
              )}
            </RadioGroup>
          ))}
        </FormControl>
      ))}
    </>
  );
};

export default Themes;
