import { Routes, Route, Navigate } from 'react-router-dom'; // Ampio Navigate
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Etudiants from './pages/Etudiants';
import Formateurs from './pages/Formateurs';
import Formations from './pages/Formations';
import Sessions from './pages/Sessions';
import Inscriptions from './pages/Inscriptions';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Ovay ho redirection mankany amin'ny etudiants ny Dashboard raha tianao */}
        <Route index element={<Navigate to="/etudiants" replace />} />
        
        <Route path="etudiants" element={<Etudiants />} />
        
        {/* Raha mbola fotsy ny pejy Formateurs/Formations, azonao atao redirection vonjimaika koa: */}
        <Route path="formateurs" element={<Formateurs />} /> 
        <Route path="formations" element={<Formations />} />
        
        <Route path="sessions" element={<Sessions />} />
        <Route path="inscriptions" element={<Inscriptions />} />
      </Route>
      
      {/* Raha diso ny URL rehetra, miverina any amin'ny etudiants */}
      <Route path="*" element={<Navigate to="/etudiants" replace />} />
    </Routes>
  );
}