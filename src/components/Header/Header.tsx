import "@material/top-app-bar/dist/mdc.top-app-bar.css";
import {
  TopAppBar,
  TopAppBarFixedAdjust,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from "@rmwc/top-app-bar";
import React, { useContext } from "react";
import { ApiContext } from "../../contexts/ApiContext";

export default () => {
  const { title } = useContext(ApiContext);
  return (
    <>
      <TopAppBar fixed>
        <TopAppBarRow>
          <TopAppBarSection>
            <TopAppBarTitle>{title}</TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
    </>
  );
};
