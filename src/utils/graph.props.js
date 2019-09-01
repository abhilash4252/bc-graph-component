import t from "prop-types";

export const propTypes = {
  is_date_picker_present: t.bool,
  is_radio_button_present: t.bool,
  chart_options: t.object,
  header_wrapper: t.array
};

export const defaultProps = {
  is_date_picker_present: true,
  is_radio_button_present: true,
  chart_options: {
    type: "line",
    colors: ["blue", "red"]
  },
  header_wrapper: [""]
};
