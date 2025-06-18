import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const placementData = [
    { name: "Curriculum IAS Academy", value: 20 },
    { name: "Socrate General", value: 25 },
    { name: "SMVEC MBA Students", value: 20 },
    { name: "Socrate General (Repeat)", value: 15 },
    { name: "Innate Consulting", value: 20 },
];

const COLORS = ["#6366F1", "#FACC15", "#4ADE80", "#F472B6", "#0EA5E9"];

const PlacementAchievements = () => {
    return (
        <section className="placement-section">
            <div className="placement-content">
                <h2>Placement Achievements</h2>
                <p className="intro">
                    Since its inception in 2020, SMVEC School of Arts and Science has made significant strides in student placements, becoming a preferred hub for academic and career excellence.
                </p>

                <div className="placement-stats">
                    <div className="stat-card">
                        <h3>2020–2023</h3>
                        <p className="count blue">160+</p>
                    </div>
                    <div className="stat-card">
                        <h3>2021–2024</h3>
                        <p className="count yellow">350+</p>
                    </div>
                    <div className="stat-card">
                        <h3>2022–2025</h3>
                        <p className="count green">450+</p>
                    </div>
                </div>

                <div className="chart-area">
                    <h3>Placement Sectors Overview</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={placementData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={90}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name }) => name}
                            >
                                {placementData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="bottom" height={36} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <p className="conclusion">
                    With partnerships across top firms like TCS, Wipro, and more, SMVEC continues to build strong placement pipelines that reflect the institution's focus on career success and holistic development.
                </p>
            </div>
        </section>
    );
};

export default PlacementAchievements;
