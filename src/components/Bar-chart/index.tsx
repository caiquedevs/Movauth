import {
  BarChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from 'recharts';

import { useSelector } from 'react-redux';

import { Container } from './styled';

const data = [
  {
    name: '01h00',
    saidas: 4000,
    entradas: 2400,
    total: 300,
  },
  {
    name: '02h00',
    saidas: 3000,
    entradas: 1398,
    total: 4300,
  },
  {
    name: '03h00',
    saidas: 2000,
    entradas: 9800,
    total: 600,
  },
  {
    name: '04h00',
    saidas: 2780,
    entradas: 3908,
    total: 2300,
  },
  {
    name: '05h00',
    saidas: 1890,
    entradas: 4800,
    total: 1300,
  },
  {
    name: '06h00',
    saidas: 2390,
    entradas: 3800,
    total: 4300,
  },
  {
    name: '07h00',
    saidas: 3490,
    entradas: 4300,
    total: 2300,
  },
  {
    name: '08h00',
    saidas: 3490,
    entradas: 4300,
    total: 200,
  },
  {
    name: '09h00',
    saidas: 3490,
    entradas: 4300,
    total: 200,
  },
  {
    name: '10h00',
    saidas: 3490,
    entradas: 4300,
    total: 200,
  },
  {
    name: '11h00',
    saidas: 3490,
    entradas: 4300,
    total: 200,
  },
  {
    name: '12h00',
    saidas: 3490,
    entradas: 4300,
    total: 200,
  },
];

function CustomTooltip({ payload, label, active }: any) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : R$${payload[0].value},00`}</p>
      </div>
    );
  }

  return null;
}

export default function SimpleLineChart() {
  const theme = useSelector((state: any) => state.themeReducer.theme);

  return (
    <Container className="card-chart shadow">
      <ResponsiveContainer>
        <BarChart
          width={750}
          height={450}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 30,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#fff" />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            width={100}
            wrapperStyle={{
              top: 30,
              right: 30,
              backgroundColor: theme.cardActive,
              borderRadius: 3,
              display: 'flex',
              padding: 15,
            }}
          />
          <Bar dataKey="total" fill="#FFB200" />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
}
