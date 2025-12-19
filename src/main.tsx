import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './index.css'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router'
import Store from './components/Layout/Store'
import Home from './frontend/Home/main'
import Dashboard from './frontend/Store/main'
import Help from './frontend/Help/main'
import ThemeProvider from './utils/util/Provider/ThemeProvider'
import ProductDetail from './frontend/Store/ProductDetail/main';
import NotFound from './frontend/404';
import HelpCenter from './frontend/Help/HelpCenter';
import About from './frontend/Help/About';
import Other from './frontend/Help/Other';
import Tutorial from './frontend/Help/Tutorial';
import Contact from './frontend/Help/Contact';
import { LoginPage } from './frontend/LoginPage';
import ProtectedRoutes from './utils/util/Helper/protectedRoutes';
import Profile from './frontend/Profile/main';
import AuthProvider from './utils/util/Provider/AuthProvider';
import { RegisterPage } from './frontend/RegisterPage';
import OrderPage from './frontend/Orders/main';
import WishlistPage from './frontend/Wishlist/main';
import HistoryPage from './frontend/History/main';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <ThemeProvider>
            <AuthProvider>
              <Routes>
                <Route path='' element={<Store/>}>
                  <Route path='/' index element={<Home/>}/>
                  <Route path='/products' element={<Dashboard/>}/>
                  <Route path='/products/:id' element={<ProductDetail/>}/>

                  <Route path='/information' element={<Help/>}>
                    <Route index element={<Navigate to={'help'} replace/>}/>
                    <Route path='help' element={<HelpCenter/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='contact' element={<Contact/>}/>
                    <Route path='tutorial' element={<Tutorial/>}/>
                    <Route path='other' element={<Other/>}/>
                  </Route>

                  <Route element={<ProtectedRoutes/>}>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/orders' element={<OrderPage/>}/>
                    <Route path='/wishlist' element={<WishlistPage/>}/>
                    <Route path='/history' element={<HistoryPage/>}/>
                  </Route>
                  
                  <Route path='/login' element={<LoginPage/>}/>
                  <Route path='/register' element={<RegisterPage/>}/>
                  <Route path='*' element={<NotFound/>}/>
                </Route>
              </Routes>
            </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
