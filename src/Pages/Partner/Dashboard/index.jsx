import React from 'react';
import './Dashboard.css';
import { useState, useEffect } from "react";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Avatar from '@mui/material/Avatar';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import {
    DataGrid,
    GridActionsCellItem,
  } from '@mui/x-data-grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MopedIcon from '@mui/icons-material/Moped';
import { 
  IdRender, 
  StatusRender,
  AmountRender,
  CustomerRender } from '../helpers/ColumnRender';
import {AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend} from 'recharts';

const Dashboard = () => {

    useEffect(() => {
        // Removing navugation UI for smaller screens
        var backdrop = document.getElementById("modal_screen_blur");
        backdrop.style.display = "none";
        document.getElementById('admin_navigation').classList.remove('show');
    }, []);

    const data = [
        {
          "name": "Sunday",
          "amt": 2780
        },
        {
          "name": "Monday",
          "amt": 1200
        },
        {
          "name": "Tuesday",
          "amt": 2290
        },
        {
          "name": "Wednesday",
          "amt": 1272
        },
        {
          "name": "Thursday",
          "amt": 2090
        },
        {
          "name": "Friday",
          "amt": 1129
        },
        {
          "name": "Saturday",
          "amt": 2700
        }
      ]
    const data02 = [
        {
          "name": "Food",
          "value": 126
        },
        {
          "name": "Beverage",
          "value": 99
        }
      ];
    var trendingData = [
        {
            'id': '234',
            'itemName': 'Malai tikka Chicken Roll',
            'ordered': '88',
            'image': 'https://i.imgur.com/eFWRUuR.jpg',
            'price':  '130'
        },
        {
            'id': '232',
            'itemName': 'Peri Peri Pasta',
            'ordered': '42',
            'image': 'https://i.imgur.com/eFWRUuR.jpg',
            'price':  '110'
        }
        ,
        {
            'id': '132',
            'itemName': 'Pink Sauce Pasta',
            'ordered': '43',
            'image': 'https://i.imgur.com/eFWRUuR.jpg',
            'price':  '120'
        }
        ,
        {
            'id': '962',
            'itemName': 'Regular Paneer Roll',
            'ordered': '45',
            'image': 'https://i.imgur.com/eFWRUuR.jpg',
            'price':  '135'
        }
        ,
        {
            'id': '202',
            'itemName': 'Regular Chicken Roll',
            'ordered': '55',
            'image': 'https://i.imgur.com/eFWRUuR.jpg',
            'price':  '120'
        }
    ]

    trendingData = trendingData.sort((a, b) => (a.ordered < b.ordered) ? 1 : -1);

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
    
    const COLORS = ['#0088FE', '#00C49F'];

    return (
        <div className='admin_body_section' id='admin_dashboard'>
            <div className='crud_parent_section'>
                <div className='dashboard_header'>Dashboard</div>
                <div className='dashboard_overview'>
                    <div className='overview_card'>
                        <div className='card_icon'><CurrencyRupeeIcon sx={{ fontSize: 45 }} /></div>
                        <div className='data_wrapper'>
                            <div className='card_value'>2453 Rs.</div>
                            <div className='card_label'>Total Revenue</div>
                        </div>
                    </div>
                    <div className='data_divider'></div>
                    <div className='overview_card'>
                        <div className='card_icon'><PeopleAltIcon sx={{ fontSize: 45 }} /></div>
                        <div className='data_wrapper'>
                            <div className='card_value'>132</div>
                            <div className='card_label'>Total Customers</div>
                        </div>
                    </div>
                    <div className='data_divider'></div>
                    <div className='overview_card'>
                        <div className='card_icon'><TwoWheelerIcon sx={{ fontSize: 45 }} /></div>
                        <div className='data_wrapper'>
                            <div className='card_value'>323</div>
                            <div className='card_label'>Total Delivered</div>
                        </div>
                    </div>
                    <div className='data_divider'></div>
                    <div className='overview_card'>
                        <div className='card_icon'><MenuBookIcon sx={{ fontSize: 45 }} /></div>
                        <div className='data_wrapper'>
                            <div className='card_value'>52</div>
                            <div className='card_label'>Total Menu Items</div>
                        </div>
                    </div>
                </div>
                <div className='dashboard_charts'>
                    <div className='chart_wrapper revenue_wrapper'>
                        <div className='chart_header'><div className='revenue_txt'>Revenue chart</div></div>
                        <div className='chart_body'>
                          <ResponsiveContainer width="100%" height="100%">
                              <AreaChart data={data}
                                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                  <defs>
                                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                      </linearGradient>
                                  </defs>
                                  <XAxis dataKey="name" style={{ fontSize: '12px' }} />
                                  <YAxis style={{ fontSize: '12px' }} />
                                  <Tooltip />
                                  <Area type="monotone" dataKey="amt" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                              </AreaChart>
                          </ResponsiveContainer>
                        </div>                        
                    </div>
                    <div className='chart_small_wrapper auto-height-on-small'>
                        <div className='chart_header'><div className='revenue_txt'>Food Beverage Revenue chart</div></div>
                        <div className='chart_body resp-pie'>
                          <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                  <Pie 
                                      data={data02} 
                                      dataKey="value" 
                                      nameKey="name" 
                                      cx="50%" 
                                      cy="50%" 
                                      fill="#82ca9d" >
                                          {data.map((entry, index) => (
                                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                          ))}
                                  </Pie>
                                  <Tooltip />
                                  <Legend />
                              </PieChart>
                            </ResponsiveContainer>
                        </div>
                        </div>
                    <div className='chart_small_wrapper trending-height auto-height-on-small'>
                        <div className='chart_header'>
                            <div className='revenue_txt'>Trending</div>
                        </div>
                        <div className='trending_wrapper'>
                            {trendingData.map((dataObj, index) => {
                                return (
                                    <div className='trending_item' key={dataObj.id}>
                                        <div className='item_image'>
                                            <Avatar 
                                                alt="item img" 
                                                src={dataObj.image}
                                                sx={{ width: 70, height: 70 }}
                                            />
                                        </div>
                                        <div className='item_body'>
                                            <div className='item_title'>#{index+1} {dataObj.itemName}</div>
                                            <div className='item_price'>Price: {dataObj.price} Rs.</div>
                                            <div className='item_ordered'>Ordered: {dataObj.ordered} times</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='chart_wrapper orders_section'>
                        <div className='chart_header'>
                            <div className='revenue_txt'>Recent Orders</div>
                        </div>
                        <div className='recent_orders-datagrid'>
                            <DataGrid
                                columns={columns}
                                rows={rows}
                                getRowHeight={() => 'auto'}
                                initialState={{
                                    pagination: { paginationModel: { pageSize: 10 } },
                                }}
                                pageSizeOptions={[5, 10, 50]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;