import './ColumnRender.css';
import Chip from '@mui/material/Chip';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MopedIcon from '@mui/icons-material/Moped';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LensIcon from '@mui/icons-material/Lens';
import { orange, red, teal, blue, green, deepOrange } from '@mui/material/colors';
import { useState } from 'react';

// Orders Column Render function 

function getChipProps(params) {
  if (params.value === "Pending") {
    return {
      icon: <WatchLaterIcon style={{ fill: orange[500] }} />,
      label: params.value,
      style: {
        borderColor: orange[500],
        color: orange[500],
      }
    };
  } else if (params.value === "Rejected") {
    return {
      icon: <CancelIcon style={{ fill: red[500] }} />,
      label: params.value,
      style: {
        borderColor: red[500],
        color: red[500]
      }
    };
  }
  else if (params.value === "On the Way") {
    return {
      icon: <MopedIcon style={{ fill: teal[500] }} />,
      label: params.value,
      style: {
        borderColor: teal[500],
        color: teal[500]
      }
    };
  }
  else if (params.value === "Accepted") {
    return {
      icon: <NotificationsIcon style={{ fill: blue[500] }} />,
      label: params.value,
      style: {
        borderColor: blue[500],
        color: blue[500]
      }
    };
  }
  else if (params.value === "Completed") {
    return {
      icon: <CheckCircleIcon style={{ fill: green[500] }} />,
      label: params.value,
      style: {
        borderColor: green[500],
        color: green[500]
      }
    };
  }
  else if (params.value === "veg") {
    return {
      icon: <LensIcon style={{ fill: green[800] }} />,
      label: params.value,
      style: {
        borderColor: green[800],
        color: green[800]
      }
    };
  }
  else if (params.value === "non-veg") {
    return {
      icon: <LensIcon style={{ fill: deepOrange['A700'] }} />,
      label: params.value,
      style: {
        borderColor: deepOrange['A700'],
        color: deepOrange['A700']
      }
    };
  }
}

function IdRender({params}) {
  return (
    <div className='column_render_class center'>
      <span className='column_text'>
        #{params.value}
      </span>
    </div>
  )
}

function StatusRender({params}) {
  return (
    <div className='column_render_class center'>
      <Chip sx={{ fontSize:"14px" }} size='small' variant="outlined" {...getChipProps(params)} />
    </div>
  )
}

function ProductsRender({params}){
    return(
      <div className='column_render_class vertical-center'>
        {params.value.map((itemObj) => {
          return (
            <div key={itemObj.prod_id} className='prod_item'>
              {itemObj.prod_qty} x {itemObj.prod_name}
            </div>
          )
        })}
      </div>
    )
}

function AmountRender({params}){
  return(
    <div className='column_render_class center'>
      <span className="column_text">₹{params.value}</span>
    </div>    
  )
}

function CustomerRender({params}){
  return(
    <div className='column_render_class vertical-center margin-left'>
      <span className="column_text">{params.value}</span>
    </div>    
  )
}

function CreatedRender({params}){
  return(
    <div className='column_render_class vertical-center'>
      <span className="column_text">{params.value}</span>
    </div>    
  )
}

// Products Column Render function 

const CellRender = ({params}) => {
  return (
    <div className='column_render_class center'>
      <span className='column_text'>
        {params.value}
      </span>
    </div>
  )
}

const CurrencyRender = ({params}) => {
  return (
    <div className='column_render_class center'>
      <span className='column_text'>
        ₹{params.value}
      </span>
    </div>
  )
}

const CheckboxRender = ({params, id}) => {
  const [isChecked, setIsChecked] = useState(params.value);

  const checkHandler = () => {
    setIsChecked(!isChecked);
    console.log("checked ", isChecked);
  }

  return (
    <div className='column_render_class center'>
      <span className='column_text'>
      <div class="toggle-switch">
        <input 
          className="toggle-input" 
          id={"toggle_"+id+"_"+params.id}
          type="checkbox" 
          checked={ isChecked } 
          onChange={ checkHandler } />
        <label class="toggle-label" for={"toggle_"+id+"_"+params.id}></label>
      </div>
      </span>
    </div>
  )
}

export { 
  ProductsRender,
  IdRender, 
  StatusRender, 
  AmountRender, 
  CustomerRender, 
  CreatedRender,
  CellRender,
  CurrencyRender,
  CheckboxRender };