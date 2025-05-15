import API from '@/lib/api';

export const loginUser = async (credentials: { email: string; password: string }) => {
  const { data } = await API.post('/auth/login', credentials);
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', data.token);
  }
  return data.user;
};

export const registerUser = async (userData: any) => {
  const { data } = await API.post('/users/register', userData);
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', data.token);
  }
  return data.user;
};

export const logoutUser = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
  }
};