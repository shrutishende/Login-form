import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./Chart.scss";

const Chart = () => {
    //  const [data] = useState([200, 250, 60, 150, 100, 175]);

    const [data, setData] = useState([
        Math.random() * 300,
        Math.random() * 300,
        Math.random() * 300,
        Math.random() * 300,
        Math.random() * 300,
    ]);

    const svgRef = useRef();

    useEffect(() => {
        const w = 400;

        const h = 300;

        const svg = d3
            .select(svgRef.current)
            .attr("width", w)
            .attr("height", h)
            .style("overflow", "visible")
            .style("margin-top", "75px");

        const xScale = d3
            .scaleBand()
            .domain(data.map((val, i) => i))
            .range([0, w])
            .padding(0.4);

        const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);

        const xAxis = d3.axisBottom(xScale).ticks(data.length);

        const yAxis = d3.axisLeft(yScale).ticks(5);

        svg.append("g").call(xAxis).attr("transform", `translate(0,${h})`);

        svg.append("g").call(yAxis);

        svg.selectAll(".bar")
            .data(data)
            .join("rect")
            .attr("x", (v, i) => xScale(i))
            .attr("y", yScale)
            .attr("width", xScale.bandwidth())
            .attr("height", (val) => h - yScale(val));

        console.log(data);
    }, [data]);

    //  const updateData = () => {
    //     setData();
    // };

    return (
        <div className="container">
            <svg ref={svgRef} />
            <button
                onClick={() =>
                    setData([
                        Math.random() * 300,
                        Math.random() * 300,
                        Math.random() * 300,
                        Math.random() * 300,
                        Math.random() * 300,
                    ])
                }
            >
                update data
            </button>
        </div>
    );
};

export default Chart;
