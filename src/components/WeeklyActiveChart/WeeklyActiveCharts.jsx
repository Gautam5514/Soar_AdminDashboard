import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { day: 'Sat', deposit: 250, withdraw: 480 },
    { day: 'Sun', deposit: 120, withdraw: 350 },
    { day: 'Mon', deposit: 260, withdraw: 320 },
    { day: 'Tue', deposit: 370, withdraw: 470 },
    { day: 'Wed', deposit: 150, withdraw: 140 },
    { day: 'Thu', deposit: 240, withdraw: 390 },
    { day: 'Fri', deposit: 330, withdraw: 390 },
];

const WeeklyActivityChart = () => {
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-2 rounded shadow-md text-sm"> {/* Added text-sm */}
                    <p className="font-medium">{`Day: ${label}`}</p>
                    <p className="text-blue-500 ">{`Deposit: $${payload[0].value}`}</p> {/* Colored deposit */}
                    <p className="text-black">{`Withdraw: $${payload[1].value}`}</p> {/* Colored withdraw */}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="mt-4 bg-white rounded-lg pt-5 ml-1  shadow-md   h-[330px] max-w-[780px] mx-auto"> {/* Width and responsiveness */}

            <div style={{ height: 330, width: 750 }}> {/* Fixed height */}
                <ResponsiveContainer width="100%" height="100%"> {/* Important for height to work */}
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}> {/* Adjusted bottom margin */}
                        <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} /> {/* Removed vertical grid lines */}
                        <XAxis dataKey="day" tick={{ fill: '#666', fontSize: 12}} /> {/* Font size for x-axis */}
                        <YAxis tick={{ fill: '#666', fontSize: 12 }} /> {/* Font size for y-axis */}
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#eee' }} /> {/* Cursor on hover, adjusted tooltip styles */}
                        <Legend wrapperStyle={{ top: 0, right: -250, fontSize: 16 }} iconSize={15} radius={[20, 20, 20, 20]} /> {/* Legend font size and icon size */}
                        <Bar dataKey="deposit" fill="#4299E0" barSize={12} radius={[75, 75, 75, 75]} /> {/* Increased bar size and radius */}
                        <Bar dataKey="withdraw" fill="#000000" barSize={12} radius={[75, 75, 75, 75]} /> {/* Increased bar size and radius */}
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default WeeklyActivityChart;