import React from "react";
import styles from "./SignIn.module.css";
import Logo from "../../assets/Logo.png";
import SignInImage from "../../assets/SignIn.png";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";
import { useForm, useAuth } from "../../hooks";

const SignIn = () => {
  // Custom hook'ları kullan
  const { login, redirectToDashboard } = useAuth();
  const {
    formData,
    errors,
    isLoading,
    setIsLoading,
    handleInputChange,
    validateForm,
    setGeneralError,
  } = useForm(
    {
      fullName: "",
      email: "",
      password: "",
    },
    {
      fullName: true,
      email: true,
      password: true,
    }
  );

  const handleCreateAccount = async () => {
    const isValid = validateForm();
    
    if (!isValid) {
      return;
    }

    setIsLoading(true);

    try {
      const success = await login(formData);

      if (success) {
        redirectToDashboard();
      } else {
        setGeneralError("Giriş başarısız. Lütfen tekrar deneyin.");
      }
    } catch (error) {
      console.error("Giriş hatası:", error);
      setGeneralError("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = () => {
    console.log("Google Sign Up clicked");
    // Burada Google OAuth işlemi yapılacak
  };

  const GoogleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.logoContainer}>
          <img src={Logo} alt="Logo" className={styles.logo} />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>Create new account</h1>
          <p className={styles.subtitle}>
            Welcome back! Please enter your details
          </p>

          <div className={styles.formContainer}>
            <Input
              type="text"
              placeholder="Enter your full name"
              name="fullName"
              label="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              error={errors.fullName}
            />
            <Input
              type="email"
              placeholder="Enter your email"
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
            />
            <Input
              type="password"
              placeholder="Enter your password"
              name="password"
              label="Password"
              value={formData.password}
              onChange={handleInputChange}
              error={errors.password}
            />
            {errors.general && (
              <div className={styles.errorMessage}>{errors.general}</div>
            )}
          </div>

          <div className={styles.buttonContainer}>
            <Button
              variant="primary"
              onClick={handleCreateAccount}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Spinner size="small" color="secondary" />
                  <span style={{ marginLeft: "8px" }}>
                    Hesap Oluşturuluyor...
                  </span>
                </>
              ) : (
                "Create Account"
              )}
            </Button>

            <Button
              variant="secondary"
              onClick={handleGoogleSignUp}
              icon={<GoogleIcon />}
            >
              Sign up with Google
            </Button>
          </div>

          <div className={styles.signInLink}>
            <div className={styles.signInText}>
              <span className={styles.signInQuestion}>
                Already have an account?
              </span>{" "}
              <span className={styles.signInSpan}>Sign in</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <img src={SignInImage} alt="Sign In" className={styles.signInImage} />
      </div>
    </div>
  );
};

export default SignIn;
