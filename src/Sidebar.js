import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import ClienteListar from './Componentes/Cliente/Listar';

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sidebar
            collapsed={collapsed}
            className={`bg-gray-800 text-white ${collapsed ? 'w-20' : 'w-64'} transition-all duration-300 h-screen`}>
            <div className="flex items-center justify-between bg-custom-gray p-4">
                <h2 className={`text-xl ${collapsed ? 'hidden' : 'block'}`}>SISTEMA VC</h2>
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="text-white bg-gray-600 p-2 rounded hover:bg-gray-800 focus:outline-none"
                >
                    {collapsed ? '>' : '<'}
                </button>
            </div>
            <Menu iconShape="square" className="mt-4">
            <MenuItem className="hover:bg-blue-600 text-black">Inicio</MenuItem>
                <SubMenu className="hover:bg-blue-200 text-black" label="Operaciones">
                    <MenuItem> Empresa </MenuItem>
                    <MenuItem> Empleados </MenuItem>
                    <MenuItem> Usuarios </MenuItem>
                    <MenuItem > Clientes </MenuItem>
                </SubMenu>
                <SubMenu className="hover:bg-blue-200 text-black" label="Consultas Cobros">
                    <MenuItem> Cobro </MenuItem>
                    <MenuItem> Pago </MenuItem>
                    <MenuItem> Estado Servicio </MenuItem>
                    <MenuItem> Descuento </MenuItem>
                    <MenuItem> Historial </MenuItem>
                </SubMenu>
                <SubMenu className="hover:bg-blue-200 text-black" label="Consultas Ventas">
                    <MenuItem> Oportunidades Ventas </MenuItem>
                    <MenuItem> Propuestas </MenuItem>
                    <MenuItem> Ventas </MenuItem>
                    <MenuItem> Propuestas Canceladas </MenuItem>
                    <MenuItem> Servicios </MenuItem>
                </SubMenu>
                <SubMenu className="hover:bg-blue-200 text-black" label="Reportes">
                    <MenuItem> Reporte de Ventas </MenuItem>
                    <MenuItem> Reporte de Cobros </MenuItem>
                </SubMenu>
                
            </Menu>
            <div className="absolute bottom-0 w-full p-4 bg-custom-gray text-center">
                <p className="text-sm">© 2024 Derechos reservados</p>
            </div>
        </Sidebar>

    );
};

export default SideBar;