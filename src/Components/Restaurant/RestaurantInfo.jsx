import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { usePlacesWidget } from "react-google-autocomplete";
import {APIProvider, ControlPosition, MapControl, Map} from '@vis.gl/react-google-maps';

import { ColorButton, textFieldTheme } from '../Admin/helpers/CommonVars';

const RestaurantInfo = () => {

    var initialErrorState = {
        res_name: {
            error: false,
            message: '',
        },
        res_address: {
            error: false,
            message: '',
        },
        res_phone: {
            error: false,
            message: '',
        }
    };
    const [errorState, setErrorState] = React.useState(initialErrorState);

    // input data variables
    const [resName, setResName] = React.useState('');
    const [resAddress, setResAddress] = React.useState('');
    const [resPhone, setResPhone] = React.useState('');
    const country = 'in';

    const { ref: addRef, autocompleteRef } = usePlacesWidget({
        apiKey:"AIzaSyDBZ5McJg3zy4wBdN8aMaJjTmamX10XviM",
        options: {
            types: ["geocode", "establishment"],
            componentRestrictions: { country }
          },
        onPlaceSelected: (place) => {
          console.log(place);
        }
    });

    return (
        <div className="regres-data-wrapper">
            <div className="section_header">
                Restaurant Information
            </div>
            <div className="section_body">
                <div className="section_title">
                    Restaurant details
                </div>
                <div className='full_section'>
                    <ThemeProvider theme={textFieldTheme}>
                        <FormControl className='txt_input' variant="outlined" >
                            <TextField 
                                id="res_name" 
                                label="Restaurant Name"  
                                placeholder='Restaurant Name' 
                                color='blue'
                                helperText={errorState.res_name.message} 
                                error={errorState.res_name.error}
                                value={resName}
                                onChange={(event) => {
                                    setResName(event.target.value);
                                    }} 
                            />
                        </FormControl>
                    </ThemeProvider>
                </div>
                <div className='full_section'>
                    <ThemeProvider theme={textFieldTheme}>
                        <FormControl className='txt_input' variant="outlined" >
                            <TextField 
                                id="res_address" 
                                inputRef={addRef}
                                label="Complete Restaurant Address"  
                                placeholder='Complete Restaurant Address' 
                                color='blue'
                                helperText={errorState.res_address.message} 
                                error={errorState.res_address.error}
                                value={resAddress}
                                onChange={(event) => {
                                    setResAddress(event.target.value);
                                    }} 
                            />
                        </FormControl>
                    </ThemeProvider>
                </div>
                <div className='full_section'>
                    <ThemeProvider theme={textFieldTheme}>
                        <FormControl className='txt_input' variant="outlined" >
                            <TextField 
                                id="res_phone" 
                                label="Restaurant Contact Number"  
                                placeholder='Restaurant Contact Number' 
                                color='blue'
                                helperText={errorState.res_phone.message} 
                                error={errorState.res_phone.error}
                                value={resPhone}
                                onChange={(event) => {
                                    setResPhone(event.target.value);
                                    }} 
                            />
                        </FormControl>
                    </ThemeProvider>
                </div>
            </div>
            <div className="section_body">
                <div className="section_title">
                    Restaurant location
                </div>
                <div className='full_section'>
                    <APIProvider apiKey='AIzaSyDBZ5McJg3zy4wBdN8aMaJjTmamX10XviM'>
                        <Map
                        style={{width: '100%', height: '300px'}}
                        defaultCenter={{lat: 22.323554, lng: 73.190627}}
                        defaultZoom={15}
                        gestureHandling={'greedy'}
                        disableDefaultUI={true}
                        onDragend={(e) => {console.log("change", e);}}
                        >
                            <MapControl position={ControlPosition.TOP_LEFT}></MapControl>
                            </Map>
                    </APIProvider>
                </div>
            </div>
        </div>
    )
}

export default RestaurantInfo;