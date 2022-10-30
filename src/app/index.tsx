import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'antd/dist/antd.min.css';
import { useThemeContext } from 'app/components/common/themeContext';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'theme/theme';
import { GlobalStyle } from '../styles/global-styles';
import Footer from './components/Footer/Footer';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import PrivateRoute from './components/common/privateRoute';
import Recommend from './pages/Recommend';
import Experience from './pages/Experience';
import Collection from './pages/Collection';
import { HomePage } from './pages/HomePage';

export function App() {
  const { theme } = useThemeContext();
  const { i18n } = useTranslation();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeMode}>
        <Helmet htmlAttributes={{ lang: i18n.language }}>
          <meta name="description" content="Synodus eKYC" />
        </Helmet>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/recommend"
            element={
              <PrivateRoute>
                <Recommend />
              </PrivateRoute>
            }
          />
          <Route
            path="/experience"
            element={
              <PrivateRoute>
                <Experience />
              </PrivateRoute>
            }
          />
          <Route
            path="/collection"
            element={
              <PrivateRoute>
                <Collection />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
