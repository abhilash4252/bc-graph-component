import React, { Component } from "react";

import { DateRangePicker } from "react-date-range";

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    };
  }
  handleSelect = ranges => {
    let { selection } = ranges;
    this.setState({ ...selection });
  };

  // this.setState
  render() {
    const selectionRange = this.state;
    return (
      <DateRangePicker
        showSelectionPreview={true}
        moveRangeOnFirstSelection={true}
        ranges={[selectionRange]}
        onChange={this.handleSelect}
      />
    );
  }
}

export default DatePicker;
