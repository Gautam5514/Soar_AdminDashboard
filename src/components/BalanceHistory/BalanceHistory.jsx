import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
    { month: "Jul", balance: 200 },
    { month: "Aug", balance: 400 },
    { month: "Sep", balance: 300 },
    { month: "Oct", balance: 800 },
    { month: "Nov", balance: 200 },
    { month: "Dec", balance: 600 },
    { month: "Jan", balance: 650 },
];

const ZigZagChart = () => {
    return (
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-md w-full max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Monthly Balance</h3>
            <div className="w-full h-64 sm:h-72 md:h-80">
                <ResponsiveContainer>
                    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        {/* Grid */}
                        <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />

                        {/* X and Y Axis */}
                        <XAxis dataKey="month" tick={{ fill: "#8A8A8A" }} />
                        <YAxis tick={{ fill: "#8A8A8A" }} />

                        {/* Tooltip */}
                        <Tooltip cursor={{ stroke: "none" }} />

                        {/* Gradient for the background */}
                        <defs>
                            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#0000FF" stopOpacity={0.3} />
                                <stop offset="100%" stopColor="#0000FF" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        {/* Smooth Blue Line and Gradient */}
                        <Area
                            type="monotone"
                            dataKey="balance"
                            stroke="#0000FF"
                            strokeWidth={3}
                            fill="url(#colorBalance)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ZigZagChart;
