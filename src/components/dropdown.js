import React, { Component } from "react";
import DatePicker from "./datepicker";
class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false
    };
  }
  toggleDropdown = () => {
    console.log("Inside toggle dropdown", this.setState({}));
    return this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
  };
  render() {
    const dropDownMenuClass = `dropdown-menu dropdown-menu-right${
      this.state.isDropdownOpen ? " show" : ""
    }`;
    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-default dropdown-toggle dropdown-toggle-split"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={this.toggleDropdown}
        >
          {new Date().toDateString()}
        </button>
        <div className={dropDownMenuClass}>
          <li className="dropdown-item" href="#">
            <DatePicker />
          </li>
        </div>
      </div>
    );
  }
}
export default Dropdown;
