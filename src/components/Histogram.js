import React from "react";
import * as d3 from "d3";

class Histogram extends React.Component {
  componentDidMount() {
    this.drawChart(this.props);
  }

  drawChart({ data, h, w }) {
    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("margin-left", 100);
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green");
  }

  render() {
    return <div id={"#" + this.props.id}> </div>;
  }
}

export default Histogram;
