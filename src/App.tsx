import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Sidebar from './components/Sidebar';
import './App.css';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="*" element={<HomePage />}>
        <Route path="character/:id" element={<Sidebar />} />
      </Route>
    </Routes>
  );
}
