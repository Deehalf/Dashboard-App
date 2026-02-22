/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {motion} from 'motion/react';
import {ReactNode} from 'react';

interface CardProps {
  title: string;
  value: ReactNode;
  icon: ReactNode;
}

export default function Card({title, value, icon}: CardProps) {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-slate-500">{title}</h3>
        <div className="text-slate-400">{icon}</div>
      </div>
      <div className="mt-4 text-3xl font-bold text-slate-900">{value}</div>
    </motion.div>
  );
}
