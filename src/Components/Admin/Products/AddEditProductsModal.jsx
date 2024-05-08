import React from 'react';
import './Products.css';
import { ColorButton, textFieldTheme } from '../helpers/CommonVars';
import { ThemeProvider } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState, forwardRef, useImperativeHandle  } from "react";
import foodIcon from '../../Assets/prod_img_back.png';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';

const AddEditProductModal = forwardRef((props, ref) => {

    const initialErrorState = {
        'name': {
            'error': false,
            'message': ''
        },
        'description': {
            'error': false,
            'message': ''
        },
        'price': {
            'error': false,
            'message': ''
        },
        'category': {
            'error': false,
            'message': ''
        },
        'item_type': {
            'error': false,
            'message': ''
        }
    };

    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [imageUrl, setImageUrl] = useState(foodIcon);
    const [category, setCategory] = useState('');
    const [itemType, setItemType] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [errorState, setErrorState] = useState(initialErrorState);

    useImperativeHandle(ref, () => ({
        getModalData(id) {
            setItemName('Regular Paneer Roll');
            setItemDescription('Popular Indian street food, filled with spices.');
            setItemPrice(150);
            setCategory(50);
            setItemType('veg');
            isActiveHandler(false);
        }
    }));

    const categroriesChangeHandler = (event) => {
        setCategory(event.target.value);
    };

    const itemTypeChangeHandler = (event) => {
        setItemType(event.target.value);
    };

    const isActiveHandler = (event) => {
        setIsActive(!isActive);
    };

    const closeProductModal = () => {
        setItemName('');
        setItemDescription('');
        setItemPrice('');
        setCategory('');
        setItemType('');
        isActiveHandler(true);

        document.getElementsByTagName('body')[0].classList.toggle('modal-open');
        document.getElementById('add_edit_product').classList.remove('show');
        document.getElementById('add_edit_product_content').classList.remove('show');
    };

    const validateForm = () => {
        var validation = true;
        if (itemName.trim()  === ''){
            validation = false;
            setErrorState(prevErrorState => {
                return { ...prevErrorState, name: { 'error': true, 'message': 'Please enter Product name.'} }
            });
        }
        if (itemDescription.trim()  === ''){
            validation = false;
            setErrorState(prevErrorState => {
                return { ...prevErrorState, description: { 'error': true, 'message': 'Please enter Product description.'} }
            });
        }
        if (itemPrice.trim()  === ''){
            validation = false;
            setErrorState(prevErrorState => {
                return { ...prevErrorState, price: { 'error': true, 'message': 'Please enter Product price.'} }
            });
        }
        if (category.trim()  === ''){
            validation = false;
            setErrorState(prevErrorState => {
                return { ...prevErrorState, category: { 'error': true, 'message': 'Please select a category.'} }
            });
        }
        if (itemType.trim()  === ''){
            validation = false;
            setErrorState(prevErrorState => {
                return { ...prevErrorState, item_type: { 'error': true, 'message': 'Please choose item type.'} }
            });
        }
        return validation;
    };

    const submitItem = () => {
        if (validateForm()){
            console.log("pass: ", errorState);
        }
    };

    return (
        <div id='add_edit_product' className='modal'>
            <div id='add_edit_product_content' className='modal_content add_edit_prod_modal'>
                <div className='modal_header'>
                    <span className='header_text'>Add new Product</span>
                    <button onClick={closeProductModal}>
                        <CloseIcon sx={{ color : "#39B5FF", fontSize: "30px" }} />
                    </button>
                </div>
                <div className='modal_body'>
                    <div className='upload_section'>
                        <div className='input_label'>Upload Image for product: </div>
                        <div className='upload_preview'>
                            <img src={imageUrl} alt="" />
                            <ColorButton
                                className='upload_btn'
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                                >
                                Upload file
                            </ColorButton>
                        </div>
                    </div>
                    <div className='input_sections'>
                        <div className='main_input'>
                            <ThemeProvider theme={textFieldTheme}>
                                <TextField 
                                    color='blue' 
                                    id="prod_name" 
                                    className='full_text_input' 
                                    label="Name" 
                                    variant="outlined" 
                                    placeholder='Name' 
                                    helperText={errorState.name.message} 
                                    error={errorState.name.error} 
                                    value={itemName}
                                    onChange={(event) => {
                                        setItemName(event.target.value);
                                      }}
                                />
                            </ThemeProvider>
                        </div>
                        <div className='main_input'>
                            <ThemeProvider theme={textFieldTheme}>
                                <TextField 
                                    color='blue' 
                                    id="prod_description" 
                                    className='full_text_input' 
                                    label="Description" 
                                    variant="outlined" 
                                    placeholder='Description' 
                                    helperText={errorState.description.message} 
                                    error={errorState.description.error}
                                    value={itemDescription}
                                    onChange={(event) => {
                                        setItemDescription(event.target.value);
                                      }} 
                                />
                            </ThemeProvider>
                        </div>
                        <div className='half_input'>
                            <ThemeProvider theme={textFieldTheme}>
                                <TextField 
                                    color='blue' 
                                    id="prod_price" 
                                    className='full_text_input' 
                                    label="Price"  
                                    placeholder='Price' 
                                    helperText={errorState.price.message} 
                                    error={errorState.price.error}
                                    value={itemPrice}
                                    onChange={(event) => {
                                        setItemPrice(event.target.value);
                                      }} 
                                />
                            </ThemeProvider>
                        </div>
                        <div className='half_input'>
                            <FormControl fullWidth error={errorState.category.error}>
                                <InputLabel id="category_label">Category</InputLabel>
                                <Select
                                labelId="category_label"
                                id="prod_category"
                                value={category}
                                label="Category"
                                onChange={categroriesChangeHandler}
                                MenuProps={{
                                    style: {zIndex: 10001}
                                }}
                                >
                                    <MenuItem value={10}>Roll Ups</MenuItem>
                                    <MenuItem value={20}>Pizza</MenuItem>
                                    <MenuItem value={30}>Sandwich</MenuItem>
                                    <MenuItem value={40}>Burger</MenuItem>
                                    <MenuItem value={50}>Nikhila</MenuItem>
                                </Select>
                                <FormHelperText>{errorState.category.message}</FormHelperText>
                            </FormControl>
                        </div>
                        <div className='half_input'>
                            <FormControl error={errorState.item_type.error}>
                                <FormLabel id="item_type_radio_button">Item Type</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="item_type_radio_button"
                                    name="item_type_input"
                                    id="prod_item_type"
                                    value={itemType}
                                    onChange={itemTypeChangeHandler} >
                                    <FormControlLabel value="veg" control={<Radio />} label="Veg" selected />
                                    <FormControlLabel value="non-veg" control={<Radio />} label="Non Veg" />
                                </RadioGroup>
                                <FormHelperText>{errorState.item_type.message}</FormHelperText>
                            </FormControl>
                        </div>
                        <div className='half_input'>
                            <div className='active_label'>Active</div>
                            <div class="toggle-switch">
                                <input 
                                    className="toggle-input" 
                                    id="prod_is_active"
                                    type="checkbox" 
                                    checked={ isActive } 
                                    onChange={ isActiveHandler } />
                                <label class="toggle-label" for="prod_is_active"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='modal_footer'>
                    <ColorButton onClick={submitItem} className='accept_button' sx={{ borderRadius: "20px", fontSize: "17px" }} variant="contained">Save</ColorButton>
                </div>
            </div>
            <div className='bottom_space_modal'></div>
        </div>
    )
});

export default AddEditProductModal;