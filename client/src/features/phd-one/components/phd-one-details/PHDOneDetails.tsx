import * as React from "react";
import { IPHDOneDetailsProps } from "./types/IPHDOneDetailsProps";
import "./phd-one-details.css";
import "semantic-ui-css/semantic.min.css";
import { Dropdown, Form } from "semantic-ui-react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";

export class PHDOneDetails extends React.PureComponent<
  IPHDOneDetailsProps,
  {}
> {
  public render() {
    const countryOptions = [
      { key: "af", value: "af", flag: "af", text: "Afghanistan" },
      { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
      { key: "al", value: "al", flag: "al", text: "Albania" },
      { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
      { key: "as", value: "as", flag: "as", text: "American Samoa" },
      { key: "ad", value: "ad", flag: "ad", text: "Andorra" },
      { key: "ao", value: "ao", flag: "ao", text: "Angola" },
      { key: "ai", value: "ai", flag: "ai", text: "Anguilla" },
      { key: "ag", value: "ag", flag: "ag", text: "Antigua" },
      { key: "ar", value: "ar", flag: "ar", text: "Argentina" },
      { key: "am", value: "am", flag: "am", text: "Armenia" },
      { key: "aw", value: "aw", flag: "aw", text: "Aruba" },
      { key: "au", value: "au", flag: "au", text: "Australia" },
      { key: "at", value: "at", flag: "at", text: "Austria" },
      { key: "az", value: "az", flag: "az", text: "Azerbaijan" },
      { key: "bs", value: "bs", flag: "bs", text: "Bahamas" },
      { key: "bh", value: "bh", flag: "bh", text: "Bahrain" },
      { key: "bd", value: "bd", flag: "bd", text: "Bangladesh" },
      { key: "bb", value: "bb", flag: "bb", text: "Barbados" },
      { key: "by", value: "by", flag: "by", text: "Belarus" },
      { key: "be", value: "be", flag: "be", text: "Belgium" },
      { key: "bz", value: "bz", flag: "bz", text: "Belize" },
      { key: "bj", value: "bj", flag: "bj", text: "Benin" },
    ];
    return (
      <div className="phd-one-details">
        <Form className="user-page__form">
          <p className="user-page__text"> <b>Smart Solution For Work Space Management</b></p>
          <Form.Group >
            <Form.Dropdown
              className={"location-dropdown"}
              placeholder="Search for location"
              fluid
              multiple
              search
              selection
              options={countryOptions}
              clearable
              defaultValue={false}
            />
            <Form.Dropdown
              className={"location-dropdown"}
              placeholder="Select Building"
              fluid
              search
              selection
              multiple
              options={countryOptions}
              clearable
              defaultValue={false}
            />
            <Form.Dropdown
              className={"location-dropdown"}
              placeholder="Select Floor"
              fluid
              search
              selection
              multiple
              options={countryOptions}
              clearable
              defaultValue={false}
            />
              <DateRangePicker
                initialSettings={{
                  startDate: "01/01/2020",
                  endDate: "01/15/2020",
                }}
              >
                <input type="text" className="form-control col-4 user-page__date-picker" />
              </DateRangePicker>
            <Form.Button className="find-button">Find</Form.Button>
          </Form.Group>
        </Form>
        <div className="container ">
        </div>
      </div>
    );
  }

  //   /**
  //    * Function to fetch the event Data
  //    */
  //   private checkEventDataIfEmpty = () => {
  //     if (isEmpty(this.props.eventData)) {
  //       this.props.fetchPHDOneDetails();
  //     }
  //   };
}
