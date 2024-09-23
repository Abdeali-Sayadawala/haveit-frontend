import React from 'react';
// import './Products.css';
import {
    DataGrid,
    GridActionsCellItem,
    GridToolbar
  } from '@mui/x-data-grid';
import { useState, useEffect, useRef } from "react";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { IdRender,
    CellRender,
    CheckboxRender } from '../helpers/ColumnRender';


const Categories = () => {

    useEffect(() => {
        // Removing navugation UI for smaller screens
        var backdrop = document.getElementById("modal_screen_blur");
        backdrop.style.display = "none";
        document.getElementById('admin_navigation').classList.remove('show');
    }, []);

    const addEditModalRef = useRef();

    const openProductModal = () => {
        document.getElementsByTagName('body')[0].classList.toggle('modal-open');
        document.getElementById('add_edit_product').classList.add('show');
        document.getElementById('add_edit_product_content').classList.add('show');
    }

    const openEditProductModal = (id) =>  {
        addEditModalRef.current.getModalData('isdisdi');
        document.getElementsByTagName('body')[0].classList.toggle('modal-open');
        document.getElementById('add_edit_product').classList.add('show');
        document.getElementById('add_edit_product_content').classList.add('show');
    }

    const initalRows = [
        {
            id: '1',
            name: 'Roll Ups',
            is_active: true
        },
        {
            id: '2',
            name: 'Pasta Paradise',
            is_active: true
        }
    ];
  
    const [rows, setRows] = useState(initalRows);

    const columns = [
        {
            field: "id",
            headerName: "Category Id",
            minWidth: 150,
            align: "center",
            headerAlign: "center",
            headerClassName: 'dg-class-header',
            cellClassName: 'dg-class-row',
            renderCell: (params) => {
                return <IdRender params={params} />
            }
        },
        {
            field: "name",
            headerName: "Name",
            minWidth: 550,
            align: "center",
            headerAlign: "center",
            headerClassName: 'dg-class-header',
            cellClassName: 'dg-class-row',
            renderCell: (params) => {
                return <CellRender params={params} />
            }
        },
        {
            field: "is_active",
            headerName: "Active",
            minWidth: 100,
            align: "center",
            headerAlign: "center",
            headerClassName: 'dg-class-header',
            cellClassName: 'dg-class-row',
            renderCell: (params) => {
                return <CheckboxRender params={params} id={'active'} />
            }
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            headerClassName: 'dg-class-header',
            cellClassName: 'dg-class-row',
            width: 130,
            getActions: ({ id }) => {
                return [
                    <GridActionsCellItem
                        icon={<EditIcon sx={{ fontSize:"20px" }} />}
                        label="Accept"
                        onClick={() => openEditProductModal(id)}
                        color="inherit"
                    />
                ];
            }
        }

    ];

    return (
        <div className='admin_body_section' id='admin_product'>
            <div className='crud_parent_section'>
                <div className='product_header'>
                    <span className='header_txt'>Categories</span>
                    {/* <button className='new_product_btn' onClick={openProductModal}> */}
                    <button className='new_product_btn'>
                        <span className='new_prod_icon'><AddIcon sx={{ fontSize:"20px" }} /></span>
                        <span className='new_prod_lbl'>Add new Category</span>
                    </button>
                </div>
                <div className='product_body'>
                    <div className='datagrid_parent'>
                      <DataGrid
                            columns={columns}
                            rows={rows}
                            getRowHeight={() => 'auto'}
                            initialState={{
                                pagination: { paginationModel: { pageSize: 10 } },
                            }}
                            pageSizeOptions={[5, 10, 50]}
                            disableColumnFilter
                            disableColumnSelector
                            disableDensitySelector
                            slots={{ toolbar: GridToolbar }}
                            slotProps={{
                                toolbar: {
                                    showQuickFilter: true,
                                }
                            }}
                      />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;