import { useState } from "react";
import { validateEmail, validatePassword, validateFullName } from "../utils";

export const useForm = (initialValues = {}, validationRules = {}) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Hata mesajını temizle
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Ad soyad doğrulama
    if (validationRules.fullName !== false && formData.fullName) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Ad soyad gereklidir";
      } else {
        const nameValidation = validateFullName(formData.fullName);
        if (!nameValidation.isValid) {
          newErrors.fullName = nameValidation.message;
        }
      }
    }

    // E-posta doğrulama
    if (validationRules.email !== false && formData.email) {
      if (!formData.email.trim()) {
        newErrors.email = "E-posta gereklidir";
      } else if (!validateEmail(formData.email)) {
        newErrors.email = "Geçerli bir e-posta adresi giriniz";
      }
    }

    // Şifre doğrulama
    if (validationRules.password !== false && formData.password) {
      if (!formData.password.trim()) {
        newErrors.password = "Şifre gereklidir";
      } else {
        const passwordValidation = validatePassword(formData.password);
        if (!passwordValidation.isValid) {
          newErrors.password = passwordValidation.message;
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Form'u sıfırlar
   */
  const resetForm = () => {
    setFormData(initialValues);
    setErrors({});
    setIsLoading(false);
  };

  const setFieldValue = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const setFieldError = (field, error) => {
    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
  };

  const setGeneralError = (message) => {
    setErrors((prev) => ({
      ...prev,
      general: message,
    }));
  };

  return {
    formData,
    errors,
    isLoading,
    setIsLoading,
    handleInputChange,
    validateForm,
    resetForm,
    setFieldValue,
    setFieldError,
    setGeneralError,
  };
};
