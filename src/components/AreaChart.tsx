/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Area,
  AreaChart as RechartsAreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {formatCurrency} from '../lib/utils';

interface AreaChartProps {
  data: {date: string; total: number}[];
}

export default function AreaChart({data}: AreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsAreaChart data={data}>
        <defs>
          <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" stroke="#888888" fontSize={12} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => formatCurrency(value as number)}
        />
        <Tooltip formatter={(value) => formatCurrency(value as number)} />
        <Area
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorTotal)"
        />
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
}
