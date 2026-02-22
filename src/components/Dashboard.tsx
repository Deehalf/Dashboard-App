/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useState} from 'react';
import {DollarSign, ShoppingCart, TrendingUp} from 'lucide-react';
import {salesData} from '../data';
import {formatCurrency} from '../lib/utils';
import {Sale} from '../types';
import AreaChart from './AreaChart';
import BarChart from './BarChart';
import Card from './Card';
import ChartCard from './ChartCard';
import Filters from './Filters';
import Header from './Header';
import Table from './Table';

export default function Dashboard() {
  const [productFilter, setProductFilter] = useState('');
  const [paymentMethodFilter, setPaymentMethodFilter] = useState<
    Sale['paymentMethod'] | 'all'
  >('all');

  const filteredSales = salesData.filter((sale) => {
    const productMatch = sale.product
      .toLowerCase()
      .includes(productFilter.toLowerCase());
    const paymentMethodMatch =
      paymentMethodFilter === 'all' || sale.paymentMethod === paymentMethodFilter;
    return productMatch && paymentMethodMatch;
  });

  const totalRevenue = salesData.reduce((acc, sale) => acc + sale.price, 0);
  const totalSales = salesData.length;
  const averageSale = totalRevenue / totalSales;

  const dailySales = salesData.reduce(
    (acc, sale) => {
      const date = sale.date;
      const existing = acc.find((item) => item.date === date);
      if (existing) {
        existing.total += sale.price;
      } else {
        acc.push({date, total: sale.price});
      }
      return acc;
    },
    [] as {date: string; total: number}[],
  );

  const topProducts = salesData
    .reduce(
      (acc, sale) => {
        const existing = acc.find((item) => item.name === sale.product);
        if (existing) {
          existing.total += sale.price;
        } else {
          acc.push({name: sale.product, total: sale.price});
        }
        return acc;
      },
      [] as {name: string; total: number}[],
    )
    .sort((a, b) => b.total - a.total)
    .slice(0, 5);

  return (
    <div className="flex flex-col gap-8">
      <Header />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Total Revenue"
          value={formatCurrency(totalRevenue)}
          icon={<DollarSign size={24} />}
        />
        <Card
          title="Total Sales"
          value={totalSales.toLocaleString()}
          icon={<ShoppingCart size={24} />}
        />
        <Card
          title="Average Sale"
          value={formatCurrency(averageSale)}
          icon={<TrendingUp size={24} />}
        />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ChartCard title="Sales Over Time">
          <AreaChart data={dailySales} />
        </ChartCard>
        <ChartCard title="Top Products">
          <BarChart data={topProducts} />
        </ChartCard>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-slate-900">Recent Sales</h2>
        <Filters
          onProductFilterChange={setProductFilter}
          onPaymentMethodFilterChange={setPaymentMethodFilter}
        />
        <Table data={filteredSales} />
      </div>
    </div>
  );
}
