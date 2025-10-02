import React from "react";
import styles from "./Dashboard.module.css";
import { useAuth } from "../../hooks";

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Çıkış Yap
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.welcomeCard}>
          <h2>Hoş Geldiniz, {user?.fullName || 'Kullanıcı'}!</h2>
          <p>Başarıyla giriş yaptınız. Dashboard sayfasına yönlendirildiniz.</p>
          <p><strong>E-posta:</strong> {user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
