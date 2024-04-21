import './ColumnRender.css';
import Chip from '@mui/material/Chip';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MopedIcon from '@mui/icons-material/Moped';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { orange, red, teal, blue, green } from '@mui/material/colors';

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
}

function OrderIdRender({params}) {
  return (
    <div className='column_render_class center'>
      <span className='column_text'>
        {params.value}
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

export { ProductsRender, OrderIdRender, StatusRender, AmountRender, CustomerRender, CreatedRender };