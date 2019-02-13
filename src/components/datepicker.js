import React, { Component } from "react";

import { DateRangePicker } from "react-date-range";

class DatePicker extends Component {
  handleSelect = ranges => {
    console.log(ranges);
    // {
    // 	selection: {
    // 		startDate: [native Date Object],
    // 		endDate: [native Date Object],
    // 	}
    // }
  };
  render() {
    const selectionRange = {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    };
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
