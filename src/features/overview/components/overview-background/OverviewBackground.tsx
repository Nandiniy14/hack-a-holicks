import * as React from "react";
import SelectSearch from "react-select-search";
import { NavButton } from "../../../../shared/components/nav-button/NavButton";
import { PHDOneLogo } from "../../../../shared/components/phd-one-logo/PHDOneLogo";
import { PHDTwoLogo } from "../../../../shared/components/phd-two-logo/PHDTwoLogo";
import reactlogo from "../../../../static/images/react.png";
import "./overview-background.css";
import { IOverviewBackgroundProps } from "./types/IOverviewBackgroundProps";

export const OverviewBackGround: React.FunctionComponent<IOverviewBackgroundProps> = (
  props: IOverviewBackgroundProps
) => {
  const getButtonText = (text: string): React.ReactElement => {
    switch (text) {
      case "1":
        return <PHDOneLogo size="medium" />;
      case "2":
        return <PHDTwoLogo size="medium" />;
      default:
        return <></>;
    }
  };

  const phdOneClick = (): void => {
    props.fetchPHDOneDetails();
    props.onNavigate("/phd/v1");
  };

  const phdTwoClick = (): void => {
    props.onNavigate("/phd/v2");
  };

  

  return (
    <div className="overview-background">
      <div className="main-head">
        <img className="react-image" src={reactlogo} />
        Welcome to React Starter Kit
      </div>
      <div className="sub-head">
      </div>
      <div className="container">
        <div className="container__right">
          <h2>
            Also, helps you to focus on what you are building for PPM Hack Day
          </h2>
          <h3>Know more about PPM Hack Day</h3>
          <NavButton
            buttonText={getButtonText("1")}
            onClick={phdOneClick}
            className={"phd-button phd-one"}
          />
          <NavButton
            buttonText={getButtonText("2")}
            onClick={phdTwoClick}
            className={"phd-button phd-two"}
          />
        </div>
      </div>
    </div>
  );
};
