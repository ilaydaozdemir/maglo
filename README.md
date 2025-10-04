# 💳 Maglo - Modern Finansal Dashboard

React ile geliştirilmiş, modern ve responsive finansal dashboard.

## 🚀 Özellikler

### 🔐 Kimlik Doğrulama

- **Güvenli Giriş**: Email ve şifre ile doğrulama
- **Form Doğrulama**: Gerçek zamanlı form doğrulama ve hata mesajları
- **Yükleme Durumları**: Kimlik doğrulama sırasında yumuşak yükleme animasyonları
- **Token Yönetimi**: Güvenli token depolama ve yönetimi

### 📊 Dashboard

- **Responsive Tasarım**: Tüm ekran boyutları için tam responsive düzen

### 💰 Cüzdan Yönetimi

- **Para Birimi Desteği**: Uygun formatlama ile çoklu para birimi desteği

## 🛠️ Teknoloji Stack

- **Frontend**: React 19.2.0
- **Routing**: React Router DOM 6.30.1
- **Grafikler**: Recharts 3.2.1
- **Stil**: CSS Modules
- **İkonlar**: Özel PNG varlıkları
- **Build Aracı**: Create React App

## 📁 Proje Yapısı

```
src/
├── components/           # Yeniden kullanılabilir UI bileşenleri
│   ├── Button/          # Özel buton bileşeni
│   ├── Card/            # Cüzdan kartı bileşeni
│   ├── Chart/           # Grafik görselleştirme bileşeni
│   ├── Input/           # Form input bileşeni
│   ├── Sidebar/         # Navigasyon sidebar'ı
│   ├── Spinner/         # Yükleme spinner'ı
│   ├── TransactionList/ # İşlem tablosu
│   └── Wallet/          # Cüzdan yönetimi
├── data/                # Statik veri ve mock API'ler
│   └── dashboardData.js # Dashboard verisi
├── hooks/               # Özel React hook'ları
│   ├── useAuth.js       # Kimlik doğrulama hook'u
│   └── useForm.js       # Form yönetimi hook'u
├── pages/               # Sayfa bileşenleri
│   ├── Dashboard/       # Ana dashboard sayfası
│   └── SignIn/          # Giriş sayfası
├── routes/              # Routing yapılandırması
│   └── AppRouter.jsx    # Ana router
├── styles/              # Global stiller
│   └── colors.css       # Renk değişkenleri
├── utils/               # Yardımcı fonksiyonlar
│   ├── currency.js      # Para birimi formatlama
│   ├── validation.js    # Form doğrulama
│   └── index.js         # Yardımcı fonksiyon export'ları
└── assets/              # Statik varlıklar
    ├── Logo.png         # Uygulama logosu
    ├── walletCard.png   # Cüzdan ikonları
    └── ...              # Diğer varlıklar
```

## 🚀 Başlangıç

### Gereksinimler

- Node.js (v14 veya üzeri)
- npm veya yarn

### Kurulum

1. **Repository'yi klonlayın**

   ```bash
   git clone <repository-url>
   cd maglo
   ```

2. **Bağımlılıkları yükleyin**

   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın**

   ```bash
   npm start
   ```

4. **Tarayıcınızı açın**
   `http://localhost:3000` adresine gidin

### Mevcut Script'ler

- `npm start` - Uygulamayı geliştirme modunda çalıştırır
- `npm run build` - Uygulamayı production için derler

## 🔧 Özel Hook'lar

### useAuth

Kimlik doğrulama durumu ve kullanıcı verilerini yönetir:

```javascript
const { isAuthenticated, user, login, logout } = useAuth();
```

### useForm

Form durumu ve doğrulamayı yönetir:

```javascript
const { formData, errors, handleChange, validateForm } = useForm();
```

## 📊 Veri Yönetimi

### Para Birimi Formatlama

Uygulama kapsamlı para birimi formatlama yardımcıları içerir:

```javascript
import { formatCurrency } from "./utils/currency";

// Para birimini locale ile formatla
const formatted = formatCurrency(1234.56, "USD", "en-US");
// Sonuç: "$1,234.56"
```

### Doğrulama

Regex desenleri ve özel kurallarla form doğrulama:

```javascript
import { validateEmail, validatePassword } from "./utils/validation";

// Email doğrulama
const isValidEmail = validateEmail("user@example.com");

// Şifre doğrulama
const isValidPassword = validatePassword("password123");
```
