const base=(import.meta.env.VITE_API_BASE_URL||'').replace(/\/$/,'');
export const apiConfigured=Boolean(base);
export async function apiRequest(path, options={}) {
 if(!base) throw new Error('Backend is not configured.');
 const response=await fetch(`${base}${path}`,{...options,credentials:'include',headers:{'Content-Type':'application/json',...(options.headers||{})}});
 const body=await response.json().catch(()=>({}));
 if(!response.ok) throw new Error(body.message||`Request failed (${response.status})`);
 return body;
}