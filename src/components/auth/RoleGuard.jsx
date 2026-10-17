import {Navigate} from 'react-router-dom';import {useAuth} from '../../context/AuthContext';
const ranks={Viewer:1,Operator:2,Administrator:3};
export default function RoleGuard({minRole='Viewer',children}){const {user}=useAuth();return ranks[user?.role]>=ranks[minRole]?children:<Navigate to="/dashboard" replace/>;}
export function canAct(role,minRole='Operator'){return (ranks[role]||0)>=(ranks[minRole]||0)}