import React from 'react';
import {
    DataGrid,
    GridToolbar
  } from '@mui/x-data-grid';
import { useState, useEffect, useRef } from "react";
import AddIcon from '@mui/icons-material/Add';
import AddEditProductModal from './AddEditProductsModal';
import columns from './Columns';

const Products = () => {

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
            category: 'Pasta paradise',
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
            category: 'Pasta paradise',
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
            category: 'Pasta paradise',
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
            category: 'Pasta paradise',
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
            category: 'Pasta paradise',
            item_type: 'veg',
            is_active: true,
            is_sold_out: false,
            is_recommended: true
        }
    ];
  
    const [rows, setRows] = useState(initalRows);

    return(
        <div className='admin_body_section' id='admin_product'>
            <AddEditProductModal ref={addEditModalRef} />
            <div className='crud_parent_section'>
                <div className='product_header'>
                    <span className='header_txt'>Products</span>
                    <button className='new_product_btn' onClick={openProductModal}>
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