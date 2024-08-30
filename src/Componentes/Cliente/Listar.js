import React, { useState } from 'react';
import axios from 'axios';
import { useTable, useSortBy, usePagination } from 'react-table';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import Api from '../../../servicios/api';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt,faEdit } from '@fortawesome/free-solid-svg-icons';
import Crear from './Crear';
import Editar from './Editar';




const Listar = () => {
    const [datosCargados, setDatosCargados] = React.useState(false);
    const [clientes, setClientes] = React.useState([]);

    const cargarDatos = () => {
        axios.get("http://localhost:5037/api/Clientes")
            .then((respuesta) => {
                setClientes(respuesta.data);
                setDatosCargados(true);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const borrarRegistros = (clieN_ID) => {
        console.log(clieN_ID);
        fetch(`https://localhost:44359/Oracle/${clieN_ID}`, {
            method: 'DELETE'
        })
            .then(respuesta => respuesta.json())
            .then(() => cargarDatos())
            .catch(console.log);
    };
    const EditarRegistros = (clieN_ID) => {
        console.log(clieN_ID);
        fetch(`https://localhost:44359/Oracle/${clieN_ID}`, {
            method: 'DELETE'
        })
            .then(respuesta => respuesta.json())
            .then(() => cargarDatos())
            .catch(console.log);
    };

    React.useEffect(() => {
        cargarDatos();
    }, []);

    
    const data = React.useMemo(() => clientes, [clientes]);

    const columns = React.useMemo(() => [
        { Header: 'NIT', accessor: 'nit' },
        { Header: 'CÓDIGO', accessor: 'codigo_cte' },
        { Header: 'NOMBRE', accessor: 'razon_social' },
        { Header: 'DIRECCIÓN', accessor: 'direccion' },
        { Header: 'TELÉFONO', accessor: 'telefono' },
        { Header: 'EMAIL', accessor: 'email' },
        { Header: 'DEPARTAMENTO', accessor: 'departamento' },
        { Header: 'PAÍS', accessor: 'pais' },
        { Header: 'TIPO CONTRIBUYENTE', accessor: 'tipo_contribuyente' },
        { Header: 'CATEGORÍA', accessor: 'categoria' },
        { Header: 'FECHA CREACIÓN', accessor: 'fecha_creacion' },
        { Header: 'ESTADO CUENTA', accessor: 'estado_cuenta' },
        { Header: 'ID EMPRESA', accessor: 'id_empresa' },
        {
            Header: 'ACCIONES',
            accessor: 'acciones',
            Cell: ({ row }) => (
                <div>
                     <button className="bg-blue-500 text-white rounded px-2 py-1" onClick={() => EditarRegistros(row.original.clieN_ID)}>
                     <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                        </button>
                    
                    <button className="bg-red-500 text-white rounded px-2 py-1" onClick={() => borrarRegistros(row.original.clieN_ID)}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
            ),
        },
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 },
        },
        useSortBy,
        usePagination
    );

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };


    const filteredData = page.filter(row => {
        return row.cells.some(cell => {
            // Verifica si el valor de la celda es nulo o indefinido antes de llamar a toLowerCase()
            const cellValue = cell.value ? String(cell.value).toLowerCase() : '';
            return cellValue.includes(searchTerm.toLowerCase());
        });
    });

    if (!datosCargados) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className='text-2xl text-gray-800'>Cargando...</span>
                <div className="animate-spin h-5 w-5 border-4 border-blue-500 border-t-transparent rounded-full ml-2" role="status"></div>
            </div>
        );
    } else {
        return (
            <div className="bg-white shadow-md rounded-lg w-full overflow-hidden">
            <div className="p-4">
                <h4 className="text-xl font-semibold mb-4">LISTA DE CLIENTES</h4>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Buscar..."
                    className="mb-4 p-2 border rounded w-full"
                />
                <div className="overflow-x-auto">
                    <table {...getTableProps()} className="min-w-full w-full table-fixed bg-white border border-gray-200">
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-100">
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())} className="py-2 px-4 border-b text-left max-w-full truncate">
                                            {column.render('Header')}
                                            <span>
                                                {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                            </span>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {filteredData.map(row => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()} className="hover:bg-gray-50">
                                        {row.cells.map(cell => (
                                            <td {...cell.getCellProps()} className="py-2 px-4 border-b max-w-full truncate">
                                                {cell.render('Cell')}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <div>
                        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="px-2 py-1 bg-gray-300 rounded">
                            {'<<'}
                        </button>{' '}
                        <button onClick={() => previousPage()} disabled={!canPreviousPage} className="px-2 py-1 bg-gray-300 rounded">
                            {'<'}
                        </button>{' '}
                        <button onClick={() => nextPage()} disabled={!canNextPage} className="px-2 py-1 bg-gray-300 rounded">
                            {'>'}
                        </button>{' '}
                        <button onClick={() => gotoPage(pageOptions.length - 1)} disabled={!canNextPage} className="px-2 py-1 bg-gray-300 rounded">
                            {'>>'}
                        </button>{' '}
                    </div>
                    <span>
                        Página{' '}
                        <strong>
                            {pageIndex + 1} de {pageOptions.length}
                        </strong>{' '}
                    </span>
                    <select
                        value={pageSize}
                        onChange={e => setPageSize(Number(e.target.value))}
                        className="ml-2 border-gray-300 rounded"
                    >
                        {[10, 20, 30, 40, 50].map(size => (
                            <option key={size} value={size}>
                                Mostrar {size}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
        );
        
    }
};

export default Listar;