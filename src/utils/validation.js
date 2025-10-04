export const validateEmail = (email) => {
  if (!email || typeof email !== "string") {
    return false;
  }

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  return emailRegex.test(email.trim());
};

export const validatePassword = (password, minLength = 6) => {
  if (!password || typeof password !== "string") {
    return { isValid: false, message: "Şifre gereklidir" };
  }

  if (password.length < minLength) {
    return {
      isValid: false,
      message: `Şifre en az ${minLength} karakter olmalıdır`,
    };
  }

  return { isValid: true, message: "" };
};

export const validateFullName = (fullName) => {
  if (!fullName || typeof fullName !== "string") {
    return { isValid: false, message: "Ad soyad gereklidir" };
  }

  const trimmedName = fullName.trim();

  if (trimmedName.length < 2) {
    return { isValid: false, message: "Ad soyad en az 2 karakter olmalıdır" };
  }

  // Sadece harf ve boşluk karakterlerine izin ver
  const nameRegex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/;

  if (!nameRegex.test(trimmedName)) {
    return { isValid: false, message: "Ad soyad sadece harf içerebilir" };
  }

  return { isValid: true, message: "" };
};

export const validateForm = (formData, rules = {}) => {
  const errors = {};
  let isValid = true;

  // Email doğrulama
  if (rules.email !== false && formData.email) {
    if (!validateEmail(formData.email)) {
      errors.email = "Geçerli bir e-posta adresi giriniz";
      isValid = false;
    }
  }

  // Şifre doğrulama
  if (rules.password !== false && formData.password) {
    const passwordValidation = validatePassword(
      formData.password,
      rules.minPasswordLength
    );
    if (!passwordValidation.isValid) {
      errors.password = passwordValidation.message;
      isValid = false;
    }
  }

  // Ad soyad doğrulama
  if (rules.fullName !== false && formData.fullName) {
    const nameValidation = validateFullName(formData.fullName);
    if (!nameValidation.isValid) {
      errors.fullName = nameValidation.message;
      isValid = false;
    }
  }

  return { isValid, errors };
};
