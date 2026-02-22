/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Bar,
  BarChart as RechartsBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {formatCurrency} from '../lib/utils';

interface BarChartProps {
  data: {name: string; total: number}[];
}

export default function BarChart({data}: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => formatCurrency(value as number)}
        />
        <Tooltip formatter={(value) => formatCurrency(value as number)} />
        <Bar dataKey="total" fill="#3b82f6" radius={[4, 4, 0, 0]} />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}
