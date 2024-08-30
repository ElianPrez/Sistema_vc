import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SideBar from './Sidebar';
import NavbarComponent from './Navbar';
import ClienteListar from './Componentes/Cliente/Listar'
import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/Cliente",
    element: <ClienteListar />,
    errorElement: <h1>Error</h1>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <SideBar className="w-64 bg-gray-800 text-white" />

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar */}
        <NavbarComponent className="bg-gray-800 text-white" />
        {/* Main content */}
        <main className="flex-1 bg-gray-100 overflow-auto">
          <RouterProvider router={router} />
        </main>
      </div>
    </div>
  </React.StrictMode>
);





reportWebVitals();
