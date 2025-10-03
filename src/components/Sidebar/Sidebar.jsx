import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import Logo from '../../assets/Logo.png';
import DashboardIcon from '../../assets/dashboardIcon.png';
import TransactionsIcon from '../../assets/TransactionsIcon.png';
import InvoicesIcon from '../../assets/InvoicesIcon.png';
import WalletIcon from '../../assets/walletIcon.png';
import SettingsIcon from '../../assets/SettingsIcon.png';
import HelpIcon from '../../assets/helpIcon.png';
import LogoutIcon from '../../assets/Logout.png';

const Sidebar = ({ isOpen, onToggle, onLogout }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    {
      id: 'Dashboard',
      label: 'Dashboard',
      icon: DashboardIcon
    },
    {
      id: 'Transactions',
      label: 'Transactions',
      icon: TransactionsIcon
    },
    {
      id: 'Invoices',
      label: 'Invoices',
      icon: InvoicesIcon
    },
    {
      id: 'My Wallets',
      label: 'My Wallets',
      icon: WalletIcon
    },
    {
      id: 'Settings',
      label: 'Settings',
      icon: SettingsIcon
    }
  ];

  const bottomMenuItems = [
    {
      id: 'Help',
      label: 'Help',
      icon: HelpIcon
    },
    {
      id: 'Logout',
      label: 'Logout',
      icon: LogoutIcon
    }
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    // Burada routing logic'i eklenebilir
  };

  const handleBottomItemClick = (itemId) => {
    if (itemId === 'Logout' && onLogout) {
      onLogout();
    }
    // Help için gelecekte routing logic'i eklenebilir
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.logoContainer} onClick={onToggle}>
        <img src={Logo} alt="Logo" className={styles.logo} />
      </div>
      
      <nav className={styles.nav}>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`${styles.navItem} ${activeItem === item.id ? styles.active : ''}`}
            onClick={() => handleItemClick(item.id)}
          >
            <img 
              src={item.icon} 
              alt={item.label} 
              className={styles.navIcon}
            />
            <span className={styles.navLabel}>{item.label}</span>
          </div>
        ))}
      </nav>
      
      <nav className={styles.bottomNav}>
        {bottomMenuItems.map((item) => (
          <div
            key={item.id}
            className={styles.navItem}
            onClick={() => handleBottomItemClick(item.id)}
          >
            <img 
              src={item.icon} 
              alt={item.label} 
              className={styles.navIcon}
            />
            <span className={styles.navLabel}>{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
