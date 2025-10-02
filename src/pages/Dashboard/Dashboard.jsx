import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const handleLogout = () => {
    // Auth token'ı temizle ve SignIn sayfasına yönlendir
    localStorage.removeItem("authToken");
    window.location.href = "/";
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
          <h2>Hoş Geldiniz!</h2>
          <p>Başarıyla giriş yaptınız. Dashboard sayfasına yönlendirildiniz.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
