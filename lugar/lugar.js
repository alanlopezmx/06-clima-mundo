const axios = require('axios');


getLugarLatLng =  async( direccion ) =>{
    let encodedURL = encodeURI (direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
    
    if(resp.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    
        let address = resp.data.results[0].formatted_address;
        let latitud = resp.data.results[0].geometry.location.lat;
        let longitud = resp.data.results[0].geometry.location.lng;
        // console.log(address);
        // console.log(latitud);
        // console.log(longitud);
        // console.log(JSON.stringify(resp.data,undefined,2));
        // console.log(resp.status);

    return {
        direccion: address,
        lat: latitud,
        lng: longitud,
    }
}

module.exports = {
    getLugarLatLng,
}

