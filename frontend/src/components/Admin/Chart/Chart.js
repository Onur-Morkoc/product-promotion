import "./Chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "01", Total: 1200 },
  { name: "02", Total: 1200 },
  { name: "03", Total: 1300 },
  { name: "04", Total: 1400 },
  { name: "05", Total: 1400 },
  { name: "06", Total: 1300 },
  { name: "07", Total: 1600 },
  { name: "08", Total: 1700 },
  { name: "09", Total: 1800 },
  { name: "10", Total: 1900 },
  { name: "11", Total: 1700 },
  { name: "12", Total: 2000 },
  { name: "13", Total: 2300 },
  { name: "14", Total: 2200 },
  { name: "15", Total: 2100 },
  { name: "16", Total: 2000 },
  { name: "17", Total: 3200 },
  { name: "18", Total: 1200 },
  { name: "19", Total: 200 },
  { name: "20", Total: 300 },
  { name: "21", Total: 700 },
  { name: "22", Total: 1200 },
  { name: "23", Total: 1400 },
  { name: "24", Total: 1700 },
  { name: "25", Total: 1000 },
  { name: "26", Total: 900 },
  { name: "27", Total: 1500 },
  { name: "28", Total: 1200 },
  { name: "29", Total: 1100 },
  { name: "30", Total: 1500 },
  { name: "31", Total: 2000 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
