// import { createContext, useContext, useState } from 'react';
// import API from '../utils/API';

/* interface AuthContextType {
  // user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}
 */
/* 
const Auth = {
  isAuthenticated: false,
  async signin(name: string, email: string) {
    const res = await API('/auth/login', 'POST', {
      name,
      email,
    });
    Auth.isAuthenticated = Boolean(res);
    //callback();
  },

  async signout(callback: VoidFunction) {
    Auth.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};
 */
/* 
const AuthContext = createContext<AuthContextType>({
  signin: () => undefined,
  signout: () => undefined,
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);

  const signin = (newUser: string, callback: VoidFunction) => {
    return Auth.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return Auth.signout(() => {
      setUser(null);
      callback();
    });
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return useContext(AuthContext);
}

export default { fakeAuthProvider, AuthProvider, useAuth };
 */

// export default Auth;
