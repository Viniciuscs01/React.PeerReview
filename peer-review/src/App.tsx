import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login'
import Register from './pages/auth/Register';
import Header from './components/nav/Header';
import PrivateRoute from './components/private-route';
import MyReviews from './pages/MyReviews';
import Layout from './components/layout';
import GivenReviews from './pages/GivenReviews';
import { AuthContextProvider } from './context/AuthContext';

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/company/:id">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/company/:id" element={<PrivateRoute><Header /></PrivateRoute>}>
              <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="my-reviews" element={<MyReviews />} />
                <Route path="given-reviews" element={<GivenReviews />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<h2>The page you are looking for is not here!</h2>} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter >
  );
}

export default App;
