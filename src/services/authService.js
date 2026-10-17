import {apiConfigured,apiRequest} from './api';
import {DEMO_PASSWORD,demoUsers} from '../data/demoUsers';
const KEY='crowdshield_demo_user';
export const authService={
 async login(email,password){if(apiConfigured){const d=await apiRequest('/auth/login',{method:'POST',body:JSON.stringify({email,password})});return d.user||d;}
 await new Promise(r=>setTimeout(r,500));
 const user=demoUsers.find(u=>u.email.toLowerCase()===email.trim().toLowerCase());
 if(!user||password!==DEMO_PASSWORD) throw new Error('Incorrect email or password.');
 if(user.status!=='Active') throw new Error('This account is disabled. Contact an administrator.');
 const safe={id:user.id,name:user.name,email:user.email,role:user.role}; sessionStorage.setItem(KEY,JSON.stringify(safe)); return safe;},
 async logout(){if(apiConfigured){await apiRequest('/auth/logout',{method:'POST'}).catch(()=>{});}sessionStorage.removeItem(KEY);},
 async currentUser(){if(apiConfigured){try{const d=await apiRequest('/auth/me');return d.user||d;}catch{return null;}}
 try{return JSON.parse(sessionStorage.getItem(KEY)||'null')}catch{return null}},
 async register(payload){if(apiConfigured)return apiRequest('/auth/register',{method:'POST',body:JSON.stringify(payload)});await new Promise(r=>setTimeout(r,400));return {demo:true,message:'Demo registration received. No account was created on a server; use one of the documented demo accounts.'};},
 async forgotPassword(email){if(apiConfigured)return apiRequest('/auth/forgot-password',{method:'POST',body:JSON.stringify({email})});await new Promise(r=>setTimeout(r,400));return {demo:true,message:'Demo mode: no email was sent because no backend or email service is connected.'};},
 async resetPassword(payload){if(apiConfigured)return apiRequest('/auth/reset-password',{method:'POST',body:JSON.stringify(payload)});return {demo:true,message:'Demo mode: password reset is not connected to a server.'};},
 async validateSession(){return this.currentUser();}
};