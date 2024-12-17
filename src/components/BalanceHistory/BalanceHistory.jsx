
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { month: 'Jul', balance: 100 },
    { month: 'Aug', balance: 300 },
    { month: 'Sep', balance: 500 },
    { month: 'Oct', balance: 800 },
    { month: 'Nov', balance: 200 },
    { month: 'Dec', balance: 600 },
    { month: 'Jan', balance: 650 },
];

const BalanceHistoryChart = () => {
    return (
        <div className="mt-4">
            <h2 className="text-xl font-semibold mb-4">Balance History</h2>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="balance" stroke="#333333" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BalanceHistoryChart;