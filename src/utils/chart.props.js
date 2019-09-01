import t from "prop-types";
import moment from "moment";

export const propTypes = {
  id: t.string,
  type: t.string,
  colors: t.array,
  title: t.string,
  seriesData: t.array,
  xAxisOptions: t.object,
  yAxisOptions: t.object
};

export const defaultProps = {
  type: "",
  colors: ["blue", "red"],
  title: "Default Bar chart...change options to customize the chart",
  xAxisOptions: {
    type: "datetime",
    gridLineWidth: 0,
    tickLength: 0,
    labels: {
      enabled: true,
      formatter: function() {
        return moment(this.value).format("DD MMM");
      }
    }
  },
  yAxisOptions: {}
};
