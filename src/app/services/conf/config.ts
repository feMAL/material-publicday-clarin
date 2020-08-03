export const API_CONFIG = {
    _api : 'http://localhost:5000/api',
    uri : {
        publicday: '/feriado',
        publicdays: '/feriados'
    }
}

export const API_PROD_CONFIG = {
    _api : 'http://localhost:5000', // process.env.URL
    uriBase : '/api',
    uri : {
        publicday: '/feriado',
        publicdays: '/feriados'
    }
}