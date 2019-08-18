const server_name = 'https://apidev.alanajobs.com/secure-candidate/';

export const global = {

    // User login 
    API_USER_LOGIN: server_name + 'login_check',

    // Get candidate info
    API_USER_PROFILE: server_name + 'candidate/show ',

    // Get companies
    API_GET_COMPANIES: server_name + 'publication/company-index',

    // Get vancantes
    API_GET_VACANTES: server_name + 'publication/index',
    
}