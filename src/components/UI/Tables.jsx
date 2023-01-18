// import { styled } from "@mui/material";
import React from "react";
import { titlesTables } from "../../utils/constants";

const Tables = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {titlesTables.map((title) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Tables;

// const BoxHeaderTitles = styled
