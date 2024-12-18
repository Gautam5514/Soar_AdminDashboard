import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
    { name: 'Entertainment', value: 30 },
    { name: 'Bill Expense', value: 15 },
    { name: 'Investment', value: 20 },
    { name: 'Others', value: 35 },
];

const COLORS = ['#343C6A', '#FC7900', '#007BFF', '#000'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const ExpenseStatistics = () => {
    return (
        <div className="mt-4 bg-white w-full rounded-xl flex justify-center items-center p-4 shadow-lg">
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius="70%"
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend layout="horizontal" align="center" verticalAlign="bottom" />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ExpenseStatistics;