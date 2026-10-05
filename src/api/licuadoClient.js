import axios from 'axios';

const storage = typeof window !== 'undefined' ? window.localStorage : null;

const getToken = () => {
  if (storage) {
    return storage.getItem('licuado_access_token') || storage.getItem('token');
  }
  return null;
};

const appId = import.meta.env.VITE_LICUADO_APP_ID || 'licuado';
const appBaseUrl = import.meta.env.VITE_LICUADO_APP_BASE_URL || '';

export const licuadoClient = axios.create({
  baseURL: appBaseUrl,
  headers: {
    'X-App-Id': appId,
    ...(getToken() ? { Authorization: `Bearer ${getToken()}` } : {})
  }
});

licuadoClient.interceptors.response.use(
  (response) => response.data ?? response,
  (error) => {
    const status = error.response?.status;
    const data = error.response?.data;
    const message = data?.message || error.message;

    return Promise.reject({
      status,
      data,
      message,
      originalError: error
    });
  }
);

licuadoClient.auth = {
  async me() {
    return licuadoClient.get('/api/auth/me');
  },

  logout(redirectUrl = null) {
    if (storage) {
      storage.removeItem('licuado_access_token');
      storage.removeItem('token');
    }

    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  },

  redirectToLogin(returnUrl = null) {
    const loginUrl = new URL('/login', appBaseUrl || window.location.origin);
    if (returnUrl) {
      loginUrl.searchParams.set('return_to', returnUrl);
    }
    window.location.href = loginUrl.toString();
  }
};
