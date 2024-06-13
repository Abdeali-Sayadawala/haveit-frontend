import React from 'react';
import './Orders.css';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';
import {
    DataGrid,
    GridActionsCellItem,
  } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import MopedIcon from '@mui/icons-material/Moped';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { 
  ProductsRender, 
  IdRender, 
  StatusRender,
  AmountRender,
  CustomerRender,
  CreatedRender } from '../helpers/ColumnRender';


const Orders = () => {

  useEffect(() => {
      // Removing navugation UI for smaller screens
      var backdrop = document.getElementById("modal_screen_blur");
      backdrop.style.display = "none";
      document.getElementById('admin_navigation').classList.remove('show');
  }, []);

  const initalRows = [
      {
        id: '#23421',
        status: 'Pending',
        products:[
          {
            prod_id: '126',
            prod_qty: '2',
            prod_name: 'Paneer roll'
          },
          {
            prod_id: '123',
            prod_qty: '1',
            prod_name: 'Chicken roll'
          },
          {
            prod_id: '125',
            prod_qty: '2',
            prod_name: 'MalaiChicken roll'
          }
        ],
        amount: 155,
        customer: 'Abdeali',
        createdat: '12/05/2024'
      },
      {
        id: '#23422',
        status: 'Accepted',
        products:[
          {
            prod_id: '126',
            prod_qty: '1',
            prod_name: 'Paneer roll'
          }
        ],
        amount: 155,
        customer: 'Abdeali',
        createdat: '12/05/2024'
      },
      {
        id: '#23423',
        status: 'Rejected',
        products:[
          {
            prod_id: '126',
            prod_qty: '1',
            prod_name: 'Paneer roll'
          }
        ],
        amount: 155,
        customer: 'Abdeali',
        createdat: '12/05/2024'
      },
      {
        id: '#23424',
        status: 'On the Way',
        products:[
          {
            prod_id: '126',
            prod_qty: '1',
            prod_name: 'Paneer roll'
          }
        ],
        amount: 155,
        customer: 'Abdeali',
        createdat: '12/05/2024'
      },
      {
        id: '#23425',
        status: 'Completed',
        products:[
          {
            prod_id: '126',
            prod_qty: '1',
            prod_name: 'Paneer roll'
          }
        ],
        amount: 155,
        customer: 'Abdeali',
        createdat: '12/05/2024'
      },
      {
        id: '#23426',
        status: 'Completed',
        products:[
          {
            prod_id: '126',
            prod_qty: '1',
            prod_name: 'Paneer roll'
          }
        ],
        amount: 155,
        customer: 'Abdeali',
        createdat: '12/05/2024'
      },
      {
        id: '#23427',
        status: 'On the Way',
        products:[
          {
            prod_id: '126',
            prod_qty: '1',
            prod_name: 'Paneer roll'
          }
        ],
        amount: 155,
        customer: 'Abdeali',
        createdat: '12/05/2024'
      },
      {
        id: '#23428',
        status: 'On the Way',
        products:[
          {
            prod_id: '126',
            prod_qty: '1',
            prod_name: 'Paneer roll'
          }
        ],
        amount: 155,
        customer: 'Abdeali',
        createdat: '12/05/2024'
      },
      {
        id: '#23429',
        status: 'Completed',
        products:[
          {
            prod_id: '126',
            prod_qty: '1',
            prod_name: 'Paneer roll'
          }
        ],
        amount: 155,
        customer: 'Abdeali',
        createdat: '12/05/2024'
      },

      {
        id: '#23430',
        status: 'Accepted',
        products:[
          {
            prod_id: '126',
            prod_qty: '1',
            prod_name: 'Paneer roll'
          }
        ],
        amount: 155,
        customer: 'Abdeali',
        createdat: '12/05/2024'
      }
    ];

    const [rows, setRows] = useState(initalRows);
    const navigate = useNavigate();

    const accept_order = (id) => {
        setRows((prevRows) => {
          return prevRows.map((row) =>
            row.id === id ? { ...row, status: 'Accepted' } : row,
          );
        });
    }

    const reject_order = (id) => {
      setRows((prevRows) => {
        return prevRows.map((row) =>
          row.id === id ? { ...row, status: 'Rejected' } : row,
        );
      });
    }

    const odw_order = (id) => {
      setRows((prevRows) => {
        return prevRows.map((row) =>
          row.id === id ? { ...row, status: 'On the Way' } : row,
        );
      });
    }

    const completed_order = (id) => {
      setRows((prevRows) => {
        return prevRows.map((row) =>
          row.id === id ? { ...row, status: 'Completed' } : row,
        );
      });
    }

    const handleRowClick = (params) => {
      navigate('/admin/orders/'+params.row.id.split("#")[1], { replace: true })
    }

    const columns = [
        { field: 'id',
          headerName: 'Order',
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
          field: 'status',
          headerName: 'Status',
          type: 'singleSelect',
          valueOptions: ['Pending', 'Accepted', 'Rejected', 'On the Way', 'Completed'],
          minWidth: 200,
          align: "center",
          headerAlign: "center",
          headerClassName: 'dg-class-header',
          cellClassName: 'dg-class-row',
          renderCell: (params) => {
            return <StatusRender params={params} />;
          }
        },
        {
          field: 'products',
          headerName: 'Products',
          width: 230,
          headerClassName: 'dg-class-header',
          cellClassName: 'dg-class-row',
          renderCell: (params) => {
            return <ProductsRender params={params} />;
          }
        },
        {
          field: 'amount',
          headerName: 'Amount',
          type: 'number',
          minWidth: 100,
          align: "center",
          headerAlign: "center",
          headerClassName: 'dg-class-header',
          cellClassName: 'dg-class-row',
          renderCell: (params) => {
            return <AmountRender params={params} />;
          }
        },
        {
          field: 'customer',
          headerName: 'Customer',
          type: 'string',
          minWidth: 140,
          headerClassName: 'dg-class-header',
          cellClassName: 'dg-class-row',
          renderCell: (params) => {
            return <CustomerRender params={params} />;
          }
        },
        {
          field: 'createdat',
          headerName: 'Created At',
          type: 'string',
          minWidth: 160,
          headerClassName: 'dg-class-header',
          cellClassName: 'dg-class-row',
          renderCell: (params) => {
            return <CreatedRender params={params} />;
          }
        },
        {
          field: 'actions',
          type: 'actions',
          headerName: 'Actions',
          width: 130,
          headerClassName: 'dg-class-header',
          cellClassName: 'dg-class-row',
          getActions: ({ id }) => {
    
            return [
              <GridActionsCellItem
                sx={{ fontSize:"14px" }}
                icon={<DoneIcon sx={{ fontSize:"17px" }} />}
                label="Accept"
                className="textPrimary"
                onClick={() => accept_order(id)}
                color="inherit"
                showInMenu
              />,
              <GridActionsCellItem
                sx={{ fontSize:"14px" }} 
                icon={<ClearIcon sx={{ fontSize:"17px" }} />}
                label="Reject"
                onClick={() => reject_order(id)}
                color="inherit"
                showInMenu
              />,
              <GridActionsCellItem
                sx={{ fontSize:"14px" }} 
                icon={<MopedIcon sx={{ fontSize:"17px" }} />}
                label="On the Way"
                onClick={() => odw_order(id)}
                color="inherit"
                showInMenu
              />,
              <GridActionsCellItem
                sx={{ fontSize:"14px" }} 
                icon={<CheckCircleIcon sx={{ fontSize:"17px" }} />}
                label="Completed"
                onClick={() => completed_order(id)}
                color="inherit"
                showInMenu
              />
            ];
          },
        },
      ];


    return (
        <div className='admin_body_section' id='admin_orders'>
            <div className='crud_parent_section'>
                <div className='orders_header'>
                    Orders
                </div>
                <div className='orders_body'>
                    <div className='datagrid_parent'>
                      <DataGrid
                          columns={columns}
                          rows={rows}
                          getRowHeight={() => 'auto'}
                          onRowClick={handleRowClick}
                          initialState={{
                            pagination: { paginationModel: { pageSize: 10 } },
                          }}
                          pageSizeOptions={[5, 10, 50]}
                      />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;