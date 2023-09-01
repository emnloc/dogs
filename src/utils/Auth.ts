import API from '../utils/API';

const Auth = {
  isAuthenticated: false,
  async signin(name: string, email: string) {
    const res = await API('/auth/login', 'POST', {
      name,
      email,
    });
    Auth.isAuthenticated = Boolean(res);
  },

  async signout(callback: VoidFunction) {
    Auth.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export default Auth;
