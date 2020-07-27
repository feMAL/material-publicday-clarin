export const API_CONFIG = {
    _api : 'http://localhost:5000/api',
    uri : {
        publicday: '/feriado',
        publicdays: '/feriados'
    }
}

export const API_PROD_CONFIG = {
    _api : process.env.BACK_URL,
    uriBase : '/api',
    uri : {
        publicday: '/feriado',
        publicdays: '/feriados'
    }
}