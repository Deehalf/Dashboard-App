/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {ReactNode} from 'react';

interface ChartCardProps {
  title: string;
  children: ReactNode;
}

export default function ChartCard({title, children}: ChartCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}
