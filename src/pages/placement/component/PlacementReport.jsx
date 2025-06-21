import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const data2020 = [
    { name: "Wipro", value: 1 },
    { name: "Fast Track", value: 13 },
    { name: "Jusdial", value: 15 },
    { name: "Integra", value: 10 },
    { name: "TCS-SMART", value: 2 },
    { name: "TCS - BPS", value: 98 },
    { name: "CUB", value: 14 },
];

const data2021 = [
    { name: "TCS - BPS", value: 143 },
    { name: "Whirlpool", value: 85 },
    { name: "Integrated", value: 49 },
    { name: "SBI Insurance", value: 39 },
    { name: "CUB", value: 14 },
    { name: "TCS - SMART", value: 5 },
];

const PlacementReport = () => {
    return (
        <section className="placement-report-section">
            <div className="container">
                <h2>Placement Report</h2>
                <p className="description">
                    SMVEC School of Arts and Science continues to demonstrate excellence in student placements,
                    collaborating with top recruiters across industries. The academic years 2020–2023 and 2021–2024
                    witnessed remarkable growth in placement numbers.
                </p>

                <div className="charts-wrapper">
                    <div className="chart-block">
                        <h3>2020–2023 Placements</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={data2020}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis allowDecimals={false} />
                                <Tooltip />
                                <Bar dataKey="value" fill="#6366F1" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="chart-block">
                        <h3>2021–2024 Placements</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={data2021}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis allowDecimals={false} />
                                <Tooltip />
                                <Bar dataKey="value" fill="#06B6D4" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="placement-summary">
                    <div>
                        <h4>2020–2023 Highlights:</h4>
                        <ul>
                            <li>TCS – BPS: 98 placements</li>
                            <li>Jusdial: 15 placements</li>
                            <li>Fast Track HR Services: 13 placements</li>
                            <li>CUB (City Union Bank): 14 placements</li>
                            <li>Integra: 10 placements</li>
                            <li>TCS – SMART: 2 placements</li>
                            <li>Wipro: 1 placement</li>
                        </ul>
                    </div>
                    <div>
                        <h4>2021–2024 Highlights:</h4>
                        <ul>
                            <li>TCS – BPS: 143 placements</li>
                            <li>Whirlpool: 85 placements</li>
                            <li>Integrated Services: 49 placements</li>
                            <li>Suraj Insurance: 39 placements</li>
                            <li>TCS – SMART: 5 placements</li>
                        </ul>
                    </div>
                </div>

                <div className="progress-indicators">
                    <div className="progress-card">
                        <CircularProgressbar
                            value={75}
                            text={`75%`}
                            styles={buildStyles({
                                textColor: "#1f2937",
                                pathColor: "#6366F1",
                                trailColor: "#E5E7EB",
                            })}
                        />
                        <p>2020–2023</p>
                        <p>Students Placed: 160+ / 216</p>
                    </div>
                    <div className="progress-card">
                        <CircularProgressbar
                            value={76}
                            text={`76%`}
                            styles={buildStyles({
                                textColor: "#1f2937",
                                pathColor: "#06B6D4",
                                trailColor: "#E5E7EB",
                            })}
                        />
                        <p>2021–2024</p>
                        <p>Students Placed: 350+ / 433</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlacementReport;
