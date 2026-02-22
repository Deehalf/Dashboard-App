/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {Sale} from '../types';

interface TableProps {
  data: Sale[];
}

export default function Table({data}: TableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200/80 bg-white shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-xs font-medium uppercase text-slate-500">
          <tr>
            <th className="px-6 py-3">Order Number</th>
            <th className="px-6 py-3">Product</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {data.map((sale, index) => (
            <tr
              key={`${sale.orderNumber}-${index}`}
              className="border-b border-slate-200/80"
            >
              <td className="px-6 py-4 font-medium text-slate-900">
                {sale.orderNumber}
              </td>
              <td className="px-6 py-4">{sale.product}</td>
              <td className="px-6 py-4">{sale.price}</td>
              <td className="px-6 py-4">{sale.date}</td>
              <td className="px-6 py-4">{sale.paymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
