import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import { useAuth } from "../../hooks";
import Sidebar from "../../components/Sidebar/Sidebar";
import Card from "../../components/Card/Card";
import Chart from "../../components/Chart/Chart";
import TransactionList from "../../components/TransactionList/TransactionList";
import SearchIcon from "../../assets/search.png";
import NotificationIcon from "../../assets/notification.png";
import ArrowIcon from "../../assets/arrow.png";
import WalletCardIcon from "../../assets/walletCard.png";
import ActiveWalletIcon from "../../assets/activewallet.png";
import { walletCards } from "../../data/dashboardData";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(1);

  const handleLogout = () => {
    logout();
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  const handleCardClick = (cardId) => {
    setActiveCard(cardId);
  };

  // Chart data with two series - larger values
  const chartData = [
    { name: "Apr 17", income: 12000, expense: 8000 },
    { name: "Apr 18", income: 15000, expense: 9000 },
    { name: "Apr 19", income: 18000, expense: 12000 },
    { name: "Apr 20", income: 16000, expense: 11000 },
    { name: "Apr 21", income: 20000, expense: 14000 },
    { name: "Apr 22", income: 22000, expense: 16000 },
    { name: "Apr 23", income: 19000, expense: 13000 },
  ];

  return (
    <div className={styles.container}>
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
        onLogout={handleLogout}
      />
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.title}>Dashboard</h1>
          </div>

          <div className={styles.headerRight}>
            <div className={styles.iconButton}>
              <img
                src={SearchIcon}
                alt="Search"
                className={styles.headerIcon}
              />
            </div>

            <div className={styles.iconButton}>
              <img
                src={NotificationIcon}
                alt="Notification"
                className={styles.headerIcon}
              />
            </div>

            <div className={styles.userSection} onClick={toggleUserDropdown}>
              <div className={styles.userAvatar}>
                <span>{user?.fullName?.charAt(0) || "U"}</span>
              </div>
              <div className={styles.userInfo}>
                <span className={styles.userName}>
                  {user?.fullName || "Kullanıcı"}
                </span>
                <img
                  src={ArrowIcon}
                  alt="Arrow"
                  className={`${styles.dropdownArrow} ${
                    userDropdownOpen ? styles.open : ""
                  }`}
                />
              </div>

              {userDropdownOpen && (
                <div className={styles.userDropdown}>
                  <div className={styles.dropdownItem} onClick={handleLogout}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 17L21 12L16 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 12H9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Logout</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.dashboardLayout}>
            <div className={styles.leftSection}>
              <div className={styles.cardsGrid}>
                {walletCards.map((card) => (
                  <Card
                    key={card.id}
                    title={card.title}
                    value={card.value}
                    icon={
                      activeCard === card.id ? ActiveWalletIcon : WalletCardIcon
                    }
                    isActive={activeCard === card.id}
                    onClick={() => handleCardClick(card.id)}
                  />
                ))}
              </div>

              <div className={styles.chartSection}>
                <div className={styles.chartHeader}>
                  <h3 className={styles.chartTitle}>Working Capital</h3>
                  <div className={styles.chartHeaderRight}>
                    <div className={styles.chartLegend}>
                      <div className={styles.legendItem}>
                        <div
                          className={styles.legendBullet}
                          style={{
                            backgroundColor: "var(--color-chart-income)",
                          }}
                        ></div>
                        <span className={styles.legendLabel}>Income</span>
                      </div>
                      <div className={styles.legendItem}>
                        <div
                          className={styles.legendBullet}
                          style={{
                            backgroundColor: "var(--color-chart-expenses)",
                          }}
                        ></div>
                        <span className={styles.legendLabel}>Expenses</span>
                      </div>
                    </div>
                    <div className={styles.chartDropdown}>
                      <select
                        className={styles.chartSelect}
                        defaultValue="week"
                      >
                        <option value="week">Last 7 days</option>
                        <option value="month">This Month</option>
                        <option value="year">This Year</option>
                      </select>
                    </div>
                  </div>
                </div>
                <Chart
                  type="line"
                  data={chartData}
                  title=""
                  height={300}
                  colors={[
                    "var(--color-chart-income)",
                    "var(--color-chart-expenses)",
                  ]}
                  dataKeys={["income", "expense"]}
                  dataLabels={["Income", "Expense"]}
                  showLegend={false}
                />
              </div>

              <div className={styles.transactionSection}>
                <TransactionList />
              </div>
            </div>

            <div className={styles.rightSection}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
