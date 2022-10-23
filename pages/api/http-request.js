import axios from 'axios';

import getConfig from 'next/config';
const publicRuntimeConfig = getConfig();
const axiosCilentRequest = axios.create({
    baseURL:publicRuntimeConfig.requestUrl,
    headers:{'content-type':'application/json'}
})

export default axiosCilentRequest;