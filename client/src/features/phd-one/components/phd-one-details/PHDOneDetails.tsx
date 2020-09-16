import * as React from "react";
import { IPHDOneDetailsProps } from "./types/IPHDOneDetailsProps";
import "./phd-one-details.css";
import "semantic-ui-css/semantic.min.css";
import { Dropdown, Form } from "semantic-ui-react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { get, isEmpty } from "lodash";
import { string } from "prop-types";
import { SeatLayout } from "../../../seat-layout/components/SeatLayout";
import hexdesklogo from '../../../../static/images/hexdesk.png';
import { Button } from "react-bootstrap";
import moment from "moment";

export class userMainPage extends React.PureComponent<
  IPHDOneDetailsProps,
  {}
  > {
  public state = {
    buildingsList: [],
    floorsList: [],
    location: "",
    selectedBuilding: '',
    selectedFloor: '',
    startDate: moment(),
    endDate: moment(),
    selectedSeatID: ''
  };

  public componentDidMount() {
    this.props.fetchLocationDetails();
  }

  public render() {
    return (
      <div className="phd-one-details">
         <span  className="main-head1">
                <img className="react-image" src={hexdesklogo} style={{float:"left",paddingLeft:"2%"}} />
                <p className="para_text">Support About Us</p>
          </span>
        <Form className="user-page__form">
          <p className="user-page__text">
            {" "}
            <b>Smart Solution For Work Space Management</b>
          </p>
          <Form.Group>
            <Form.Dropdown
              className={"location-dropdown"}
              placeholder="Search for location"
              fluid
              multiple={false}
              search
              selection
              options={this.props.locationsData}
              defaultValue={false}
              noResultsMessage={null}
              onChange={this.handleChange}
            />
            <Form.Dropdown
              className={"location-dropdown"}
              placeholder="Select Building"
              fluid
              search
              selection
              multiple={false}
              options={this.state.buildingsList}
              defaultValue={false}
              noResultsMessage={null}
              onChange={this.handleBuildingsListChange}
            />
            <Form.Dropdown
              className={"location-dropdown"}
              placeholder="Select Floor"
              fluid
              search
              selection
              multiple={false}
              options={this.state.floorsList}
              defaultValue={false}
              noResultsMessage={null}
              onChange={this.handleFloorChange}
            />
            <DateRangePicker
              initialSettings={{
                startDate: "01/01/2020",
                endDate: "01/15/2020",
              }}
              onApply={this.onDateSelection}
            >
              <input type="text" className="form-control col-4 user-page__date-picker" />
            </DateRangePicker>
            <Form.Button className="find-button" onClick={this.getTheLayoutdata}>Find</Form.Button>
          </Form.Group>
        </Form>
        <div className='layout'>
          <SeatLayout deskGroups={[[]]} onSeatSelection={this.onSeatSelection} selectedSeatID={this.state.selectedSeatID} />
        </div>
        <Form.Button className="submit-button" type='submit' style={{float:"right",backgroundColor:"#3c8195"}} onClick={this.onBookingClick} disabled={isEmpty(this.state.selectedSeatID)}>Book</Form.Button>
      </div>
    );
  }

  private onSeatSelection = (selectedSeatID: string) => {
    this.setState(() => { return { selectedSeatID } });
  }

  private handleChange = (e: any, { value }: any) => {
    this.setState({ location: value });
    const locationData = this.props.locationsData.find(
      (data: any) => data.name === value
    );
    if (locationData) {
      locationData.buildings.forEach((item: any) => {
        item.text = item.name;
        item.value = item.name;
      });
      this.setState({
        buildingsList: locationData.buildings,
      });
    }
  };

  private handleBuildingsListChange = (e: any, { value }: any) => {
    this.setState({
      selectedBuilding: value
    })
    const buildingsList = this.state.buildingsList.find(
      (data: any) => data.name === value
    );
    get(buildingsList, 'floors', []).forEach((item: any) => {
      item.text = item.name;
      item.value = item.name;
    });
    this.setState({
      floorsList: get(buildingsList, 'floors', []),
    });
  };

  private handleFloorChange = (e: any, { value }: any) => {
    this.setState({
      selectedFloor: value
    })
  }

  /**
   * Function to fetch the layout Data
   */
  private getTheLayoutdata = () => {
    this.props.fetchLayoutData({
      location: this.state.location,
      building: this.state.selectedBuilding,
      floor: this.state.selectedFloor,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    });
  };

  private onDateSelection = (event: any, picker: any) => {
    this.setState({
      startDate: picker.startDate,
      endDate: picker.endDate
    })
  }

  private onBookingClick = () => {
    if (this.state.selectedSeatID) {
      this.props.bookTheSeat(this.state.selectedSeatID, this.state.startDate.toString(), this.state.endDate.toString());
    } else {
      alert('Please select a seat');
    }
  }
}
