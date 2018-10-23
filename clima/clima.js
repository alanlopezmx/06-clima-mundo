const axios = require('axios');



const getClima = async(lat,lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=5be96d5810de63a33a94ced791487a90`);
    let temp = resp.data.main.temp;
    return temp;
}

module.exports = {
    getClima,
}