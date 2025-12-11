import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router'
import Store from './components/Layout/Store'
import Home from './frontend/Home/main'
import Dashboard from './frontend/Store/main'
import Help from './frontend/Help/main'
import ThemeProvider from './utils/util/ThemeProvider'
import ProductDetail from './frontend/Store/ProductDetail/main';
import NotFound from './frontend/404';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <ThemeProvider>
          <Routes>
            <Route path='/' element={<Store/>}>
              <Route path='' index element={<Home/>}/>
              <Route path='products' element={<Dashboard/>}/>
              <Route path='products/:id' element={<ProductDetail/>}/>
              <Route path='help' element={<Help/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
