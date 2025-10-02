import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Component mount olduğunda auth durumunu kontrol et
  useEffect(() => {
    checkAuthStatus();
  }, []);

  /**
   * Auth durumunu kontrol eder
   */
  const checkAuthStatus = () => {
    try {
      const token = localStorage.getItem("authToken");
      const userData = localStorage.getItem("userData");

      if (token && userData) {
        setIsAuthenticated(true);
        setUser(JSON.parse(userData));
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      console.error("Auth durumu kontrol edilirken hata:", error);
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (credentials) => {
    setIsLoading(true);

    try {
      // Auth simülasyonu - 2 saniye bekle
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Başarılı giriş simülasyonu
      const token = "simulated-token-" + Date.now();
      const userData = {
        fullName: credentials.fullName,
        email: credentials.email,
        id: Date.now(),
      };

      localStorage.setItem("authToken", token);
      localStorage.setItem("userData", JSON.stringify(userData));

      setIsAuthenticated(true);
      setUser(userData);

      return true;
    } catch (error) {
      console.error("Giriş hatası:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem("authToken");
      localStorage.removeItem("userData");

      setIsAuthenticated(false);
      setUser(null);

      // SignIn sayfasına yönlendir
      navigate("/");
    } catch (error) {
      console.error("Çıkış hatası:", error);
    }
  };

  /**
   * Kullanıcıyı Dashboard'a yönlendirir
   */
  const redirectToDashboard = () => {
    navigate("/dashboard");
  };

  /**
   * Kullanıcıyı SignIn sayfasına yönlendirir
   */
  const redirectToSignIn = () => {
    navigate("/");
  };

  /**
   * Auth durumuna göre yönlendirme yapar
   */
  const handleAuthRedirect = () => {
    if (isAuthenticated) {
      redirectToDashboard();
    } else {
      redirectToSignIn();
    }
  };

  return {
    isAuthenticated,
    user,
    isLoading,
    login,
    logout,
    redirectToDashboard,
    redirectToSignIn,
    handleAuthRedirect,
    checkAuthStatus,
  };
};
