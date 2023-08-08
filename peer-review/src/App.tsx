import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login'
import Register from './pages/auth/Register';
import Header from './components/nav/Header';
import PrivateRoute from './components/private-route';
import MyReviews from './pages/MyReviews';
import Layout from './components/layout';
import GivenReviews from './pages/GivenReviews';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/company">
//       <Route path=":id">
//         <Route path="login" element={<Login />} />
//         <Route path="register" element={<Register />} />
//         <Route element={<Header />}>
//           <Route index element={
//             <PrivateRoute>
//               <Home />
//             </PrivateRoute>} />
//           <Route path="my-reviews" element={
//             <PrivateRoute>
//               <MyReviews />
//             </PrivateRoute>} />
//           <Route path="given-reviews" element={
//             <PrivateRoute>
//               <GivenReviews />
//             </PrivateRoute>} />
//         </Route>
//       </Route>
//     </Route >
//   )
// )

const App = () => {

  return (
    // <Layout>
    //   <RouterProvider router={router} />
    // </Layout>
    <BrowserRouter>
      <Routes>
        <Route path="/company">
          <Route path=":id">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route element={<Header />}>
              <Route path="home" element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>} />
              <Route path="my-reviews" element={
                <PrivateRoute>
                  <MyReviews />
                </PrivateRoute>} />
              <Route path="given-reviews" element={
                <PrivateRoute>
                  <GivenReviews />
                </PrivateRoute>} />
            </Route>
          </Route>
        </Route >
        <Route path="*" element={<h2>The page you are looking for is not here!</h2>} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
