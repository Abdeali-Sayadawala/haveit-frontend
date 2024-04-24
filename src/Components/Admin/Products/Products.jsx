import React from 'react';
import './Products.css';
import {
    DataGrid,
    GridActionsCellItem,
    GridToolbar
  } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { IdRender,
    CellRender,
    CurrencyRender,
    CheckboxRender,
    StatusRender } from '../helpers/ColumnRender';

const Products = () => {

    useEffect(() => {
        // Removing navugation UI for smaller screens
        var backdrop = document.getElementById("modal_screen_blur");
        backdrop.style.display = "none";
        document.getElementById('admin_navigation').classList.remove('show');
    }, []);

    const initalRows = [
        {
            id: '1',
            name: 'Regular Paneer Roll',
            description: 'Popular Indian street food, filled with spices.',
            price: '135',
            category: 'Roll Ups',
            item_type: 'veg',
            is_active: true,
            is_sold_out: false,
            is_recommended: true
        },
        {
            id: '2',
            name: 'Regular Chicken Roll',
            description: 'Popular Indian street food, filled with spices.',
            price: '120',
            category: 'Roll Ups',
            item_type: 'non-veg',
            is_active: true,
            is_sold_out: false,
            is_recommended: true
        },
        {
            id: '3',
            name: 'Malai tikka Paneer Roll',
            description: 'Typically made with cream/malai, serves a mouth melting delicacy',
            price: '140',
            category: 'Roll Ups',
            item_type: 'veg',
            is_active: true,
            is_sold_out: false,
            is_recommended: true
        },
        {
            id: '4',
            name: 'Malai tikka Chicken Roll',
            description: 'Typically made with cream/malai, serves a mouth melting delicacy',
            price: '130',
            category: 'Roll Ups',
            item_type: 'non-veg',
            is_active: true,
            is_sold_out: false,
            is_recommended: true
        },
        {
            id: '5',
            name: 'Creamy Pasta',
            description: 'Rich and creamy texture, roasted veggies, buttery, loaded with cheese.',
            price: '120',
            category: 'Roll Ups',
            item_type: 'veg',
            is_active: true,
            is_sold_out: false,
            is_recommended: true
        },
        {
            id: '6',
            name: 'Peri Peri Pasta',
            description: 'Tossed in Peri Peri chilli sauce, Zesty and spicy, taste you will remember.',
            price: '110',
            category: 'Roll Ups',
            item_type: 'veg',
            is_active: true,
            is_sold_out: false,
            is_recommended: true
        },
        {
            id: '7',
            name: 'Pink Sauce Pasta',
            description: "Pink Pasta also known as 'ROSA sauce', creamy tomato based pasta.",
            price: '120',
            category: 'Roll Ups',
            item_type: 'veg',
            is_active: true,
            is_sold_out: false,
            is_recommended: true
        },
        {
            id: '8',
            name: 'Italian Pasta',
            description: 'Mix of tomato, alfredo, resto and italiano, flavour enhancer.',
            price: '130',
            category: 'Roll Ups',
            item_type: 'veg',
            is_active: true,
            is_sold_out: false,
            is_recommended: true
        },
        {
            id: '9',
            name: 'Hot and Spicy Pasta',
            description: 'Fiery and spicy, chilli peppers, hot sauces, BOLD and FLAMING',
            price: '110',
            category: 'Roll Ups',
            item_type: 'veg',
            is_active: true,
            is_sold_out: false,
            is_recommended: true
        }
    ];
  
    const [rows, setRows] = useState(initalRows);

    const columns = [
        {
            field: "id",
            headerName: "Product Id",
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
            minWidth: 150,
            align: "center",
            headerAlign: "center",
            headerClassName: 'dg-class-header',
            cellClassName: 'dg-class-row',
            renderCell: (params) => {
                return <CellRender params={params} />
            }
        },
        {
            field: "description",
            headerName: "Description",
            minWidth: 500,
            align: "left",
            headerAlign: "center",
            headerClassName: 'dg-class-header',
            cellClassName: 'dg-class-row',
            renderCell: (params) => {
                return <CellRender params={params} />
            }
        },
        {
            field: "price",
            headerName: "Price",
            minWidth: 100,
            align: "center",
            headerAlign: "center",
            headerClassName: 'dg-class-header',
            cellClassName: 'dg-class-row',
            renderCell: (params) => {
                return <CurrencyRender params={params} />
            }
        },
        {
            field: "category",
            headerName: "Category",
            minWidth: 150,
            align: "center",
            headerAlign: "center",
            headerClassName: 'dg-class-header',
            cellClassName: 'dg-class-row',
            renderCell: (params) => {
                return <CellRender params={params} />
            }
        },
        {
            field: "item_type",
            headerName: "Type",
            minWidth: 130,
            align: "center",
            headerAlign: "center",
            headerClassName: 'dg-class-header',
            cellClassName: 'dg-class-row',
            renderCell: (params) => {
                return <StatusRender params={params} />;
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
            field: "is_sold_out",
            headerName: "Sold Out",
            minWidth: 100,
            align: "center",
            headerAlign: "center",
            headerClassName: 'dg-class-header',
            cellClassName: 'dg-class-row',
            renderCell: (params) => {
                return <CheckboxRender params={params} id={'sold_out'} />
            }
        },
        {
            field: "is_recommended",
            headerName: "Recommended",
            minWidth: 100,
            align: "center",
            headerAlign: "center",
            headerClassName: 'dg-class-header',
            cellClassName: 'dg-class-row',
            renderCell: (params) => {
                return <CheckboxRender params={params} id={'recommended'} />
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
                        // onClick={() => accept_order(id)}
                        color="inherit"
                    />
                ];
            }
        }

    ];

    return(
        <div className='admin_body_section' id='admin_product'>
            <div className='crud_parent_section'>
                <div className='product_header'>
                    <span className='header_txt'>Products</span>
                    <button className='new_product_btn'>
                        <span className='new_prod_icon'><AddIcon sx={{ fontSize:"20px" }} /></span>
                        <span className='new_prod_lbl'>Add new Product</span>
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
};

export default Products;