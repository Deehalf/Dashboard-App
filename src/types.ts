/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Sale {
  orderNumber: string;
  product: string;
  price: number;
  date: string;
  paymentMethod: 'Credit Card' | 'eWallet' | 'Cash' | 'Debit Card';
}
