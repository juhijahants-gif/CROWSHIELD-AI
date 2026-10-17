import {createContext,useContext,useEffect,useState} from 'react';import {authService} from '../services/authService';
const Ctx=createContext(null);
export function AuthProvider({children}){const [user,setUser]=useState(null),[loading,setLoading]=useState(true);
 useEffect(()=>{authService.validateSession().then(setUser).finally(()=>setLoading(false));},[]);
 const login=async(email,password)=>{const u=await authService.login(email,password);setUser(u);return u;};
 const logout=async()=>{await authService.logout();setUser(null);};
 return <Ctx.Provider value={{user,loading,login,logout,setUser}}>{children}</Ctx.Provider>}
export const useAuth=()=>useContext(Ctx);