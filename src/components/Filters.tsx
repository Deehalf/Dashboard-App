/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {Sale} from '../types';

interface FiltersProps {
  onProductFilterChange: (value: string) => void;
  onPaymentMethodFilterChange: (value: Sale['paymentMethod'] | 'all') => void;
}

const paymentMethods: (Sale['paymentMethod'] | 'all')[] = [
  'all',
  'Credit Card',
  'eWallet',
  'Cash',
  'Debit Card',
];

export default function Filters({
  onProductFilterChange,
  onPaymentMethodFilterChange,
}: FiltersProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 sm:flex-row">
      <input
        type="text"
        placeholder="Filter by product..."
        onChange={(e) => onProductFilterChange(e.target.value)}
        className="rounded-md border border-slate-300 px-4 py-2"
      />
      <select
        onChange={(e) =>
          onPaymentMethodFilterChange(e.target.value as Sale['paymentMethod'] | 'all')
        }
        className="rounded-md border border-slate-300 px-4 py-2"
      >
        {paymentMethods.map((method) => (
          <option key={method} value={method}>
            {method === 'all' ? 'All Payment Methods' : method}
          </option>
        ))}
      </select>
    </div>
  );
}
