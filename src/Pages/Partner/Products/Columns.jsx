import { IdRender,
    CellRender,
    CurrencyRender,
    CheckboxRender,
    StatusRender } from '../helpers/ColumnRender';
import React from 'react';
import { GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';

const openEditProductModal = (id) =>  {
    addEditModalRef.current.getModalData(id);
    document.getElementsByTagName('body')[0].classList.toggle('modal-open');
    document.getElementById('add_edit_product').classList.add('show');
    document.getElementById('add_edit_product_content').classList.add('show');
}

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
                    onClick={() => openEditProductModal(id)}
                    color="inherit"
                />
            ]
        }
    }
];

export default columns;