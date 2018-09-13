const axios = require('axios');


const getClima = async (lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=051740e1b077297fef44bd4af2984272`)

        if ( resp.data.status === 'ZERO_RESULTS') {
            throw new Error(`No hay resultado para la ciudad en las coordenadas ${ lat } y ${ lng }`);
        }
        return resp.data.main.temp;

}


module.exports = {
    getClima
}