import { formatCurrency } from '../utils/currency';

export const walletCards = [
  {
    id: 1,
    title: "Total Balance",
    value: formatCurrency(12345.67, 'USD', 'en-US'),
    icon: "walletCard",
    color: "primary"
  },
  {
    id: 2,
    title: "Total Spending",
    value: formatCurrency(8234.56, 'USD', 'en-US'),
    icon: "walletCard",
    color: "secondary"
  },
  {
    id: 3,
    title: "Total Saved",
    value: formatCurrency(4111.11, 'USD', 'en-US'),
    icon: "walletCard",
    color: "success"
  }
];

export const recentTransactions = [
  {
    id: 1,
    description: "Grocery Shopping",
    amount: formatCurrency(45.67, 'USD', 'en-US'),
    date: "2024-01-15",
    type: "expense"
  },
  {
    id: 2,
    description: "Salary Payment",
    amount: formatCurrency(3500.00, 'USD', 'en-US'),
    date: "2024-01-14",
    type: "income"
  },
  {
    id: 3,
    description: "Coffee Shop",
    amount: formatCurrency(12.50, 'USD', 'en-US'),
    date: "2024-01-13",
    type: "expense"
  }
];

export const quickActions = [
  {
    id: 1,
    title: "Add Money",
    description: "Add funds to your wallet",
    icon: "add"
  },
  {
    id: 2,
    title: "Send Money",
    description: "Transfer to another account",
    icon: "send"
  },
  {
    id: 3,
    title: "Pay Bills",
    description: "Pay your monthly bills",
    icon: "bills"
  }
];

export const scheduledTransfers = [
  {
    id: 1,
    name: "iSaleh Ahmed",
    date: "April 28, 2022 at 11:00",
    amount: formatCurrency(435.00, 'USD', 'en-US'),
    avatar: "Avater.png"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    date: "April 29, 2022 at 14:30",
    amount: formatCurrency(250.50, 'USD', 'en-US'),
    avatar: "Avater.png"
  },
  {
    id: 3,
    name: "Mike Wilson",
    date: "April 30, 2022 at 09:15",
    amount: formatCurrency(180.75, 'USD', 'en-US'),
    avatar: "Avater.png"
  },
  {
    id: 4,
    name: "Emma Davis",
    date: "May 1, 2022 at 16:45",
    amount: formatCurrency(320.25, 'USD', 'en-US'),
    avatar: "Avater.png"
  },
  {
    id: 5,
    name: "John Smith",
    date: "May 2, 2022 at 12:00",
    amount: formatCurrency(150.00, 'USD', 'en-US'),
    avatar: "Avater.png"
  }
];
