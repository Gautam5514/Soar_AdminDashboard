import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { day: 'Sat', deposit: 250, withdraw: 500 },
    { day: 'Sun', deposit: 100, withdraw: 400 },
    { day: 'Mon', deposit: 250, withdraw: 300 },
    { day: 'Tue', deposit: 400, withdraw: 500 },
    { day: 'Wed', deposit: 200, withdraw: 100 },
    { day: 'Thu', deposit: 250, withdraw: 400 },
    { day: 'Fri', deposit: 350, withdraw: 400 },
];

const WeeklyActivityChart = () => {
    return (
        <div className="mt-4">
            <h2 className="text-xl font-semibold mb-4">Weekly Activity</h2>
            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="deposit" fill="#4299E0" />
                <Bar dataKey="withdraw" fill="#000000" />
            </BarChart>
        </div>
    );
};

export default WeeklyActivityChart;