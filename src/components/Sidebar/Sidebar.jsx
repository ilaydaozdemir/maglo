import React from 'react';
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
  const menuItems = [
    { id: 1, label: 'Dashboard', icon: DashboardIcon },
    { id: 2, label: 'Transactions', icon: TransactionsIcon },
    { id: 3, label: 'Invoices', icon: InvoicesIcon },
    { id: 4, label: 'My Wallets', icon: WalletIcon },
    { id: 5, label: 'Settings', icon: SettingsIcon }
  ];

  const bottomMenuItems = [
    { id: 6, label: 'Help', icon: HelpIcon },
    { id: 7, label: 'Logout', icon: LogoutIcon, onClick: onLogout }
  ];

  const handleItemClick = (item) => {
    // Handle menu item click
  };

  const handleBottomItemClick = (item) => {
    if (item.onClick) {
      item.onClick();
    }
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
            className={styles.navItem}
            onClick={() => handleItemClick(item)}
          >
            <img src={item.icon} alt={item.label} className={styles.navIcon} />
            <span className={styles.navLabel}>{item.label}</span>
          </div>
        ))}
      </nav>
      
      <nav className={styles.bottomNav}>
        {bottomMenuItems.map((item) => (
          <div
            key={item.id}
            className={styles.navItem}
            onClick={() => handleBottomItemClick(item)}
          >
            <img src={item.icon} alt={item.label} className={styles.navIcon} />
            <span className={styles.navLabel}>{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
