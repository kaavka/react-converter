import {
  HashRouter as Router, Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import App from './App';
import { ConverterPage } from './Pages/ConverterPage.tsx';
import { HistoryPage } from './Pages/HistoryPage.tsx';
import { AboutPage } from "./Pages/AboutPage.tsx";
import { UnknownPage } from './Pages/UnknownPage';

export const Root: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ConverterPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<UnknownPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
