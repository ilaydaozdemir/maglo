// Para formatı yardımcı fonksiyonları

/**
 * Para değerini formatlar
 * @param {number} amount - Para miktarı
 * @param {string} currency - Para birimi (USD, EUR, TRY, vb.)
 * @param {string} locale - Yerel ayar (tr-TR, en-US, vb.)
 * @returns {string} Formatlanmış para değeri
 */
export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  } catch (error) {
    console.error('Currency formatting error:', error);
    return `${currency} ${amount.toFixed(2)}`;
  }
};

/**
 * Para değerini sayısal formata çevirir
 * @param {string} currencyString - Formatlanmış para değeri
 * @returns {number} Sayısal değer
 */
export const parseCurrency = (currencyString) => {
  try {
    // Para işaretlerini ve virgülleri kaldır
    const cleanString = currencyString.replace(/[^\d.-]/g, '');
    return parseFloat(cleanString) || 0;
  } catch (error) {
    console.error('Currency parsing error:', error);
    return 0;
  }
};

/**
 * Para birimini değiştirir
 * @param {number} amount - Para miktarı
 * @param {string} fromCurrency - Kaynak para birimi
 * @param {string} toCurrency - Hedef para birimi
 * @param {number} exchangeRate - Döviz kuru
 * @returns {number} Dönüştürülmüş miktar
 */
export const convertCurrency = (amount, fromCurrency, toCurrency, exchangeRate = 1) => {
  try {
    if (fromCurrency === toCurrency) return amount;
    return amount * exchangeRate;
  } catch (error) {
    console.error('Currency conversion error:', error);
    return amount;
  }
};

/**
 * Para değerini kısaltır (1K, 1M, 1B)
 * @param {number} amount - Para miktarı
 * @param {string} currency - Para birimi
 * @param {string} locale - Yerel ayar
 * @returns {string} Kısaltılmış para değeri
 */
export const formatCurrencyCompact = (amount, currency = 'USD', locale = 'en-US') => {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(amount);
  } catch (error) {
    console.error('Compact currency formatting error:', error);
    return `${currency} ${amount.toFixed(1)}`;
  }
};

/**
 * Para değerini yüzde olarak formatlar
 * @param {number} amount - Para miktarı
 * @param {string} currency - Para birimi
 * @param {string} locale - Yerel ayar
 * @returns {string} Yüzde formatında para değeri
 */
export const formatCurrencyPercentage = (amount, currency = 'USD', locale = 'en-US') => {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  } catch (error) {
    console.error('Percentage currency formatting error:', error);
    return `${currency} ${Math.round(amount)}`;
  }
};

/**
 * Para değerini farklı yerel ayarlarla formatlar
 * @param {number} amount - Para miktarı
 * @param {string} currency - Para birimi
 * @param {string} locale - Yerel ayar
 * @returns {object} Farklı formatlarda para değerleri
 */
export const formatCurrencyMultiple = (amount, currency = 'USD', locale = 'en-US') => {
  try {
    return {
      standard: formatCurrency(amount, currency, locale),
      compact: formatCurrencyCompact(amount, currency, locale),
      percentage: formatCurrencyPercentage(amount, currency, locale),
      raw: amount
    };
  } catch (error) {
    console.error('Multiple currency formatting error:', error);
    return {
      standard: `${currency} ${amount.toFixed(2)}`,
      compact: `${currency} ${amount.toFixed(1)}`,
      percentage: `${currency} ${Math.round(amount)}`,
      raw: amount
    };
  }
};

/**
 * Desteklenen para birimlerini döndürür
 * @returns {array} Desteklenen para birimleri listesi
 */
export const getSupportedCurrencies = () => {
  return [
    'USD', 'EUR', 'GBP', 'JPY', 'CHF', 'CAD', 'AUD', 'NZD',
    'TRY', 'RUB', 'CNY', 'INR', 'BRL', 'MXN', 'KRW', 'SGD'
  ];
};

/**
 * Desteklenen yerel ayarları döndürür
 * @returns {array} Desteklenen yerel ayarlar listesi
 */
export const getSupportedLocales = () => {
  return [
    'en-US', 'en-GB', 'en-CA', 'en-AU', 'en-NZ',
    'tr-TR', 'de-DE', 'fr-FR', 'es-ES', 'it-IT',
    'pt-BR', 'pt-PT', 'nl-NL', 'sv-SE', 'no-NO',
    'da-DK', 'fi-FI', 'pl-PL', 'cs-CZ', 'hu-HU',
    'ru-RU', 'zh-CN', 'ja-JP', 'ko-KR', 'ar-SA'
  ];
};
