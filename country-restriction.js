/* ------------------------------ */
/* FREE IP INFO API THIRD PARTIES */
/* ------------------------------ */
// -> https://ipapi.co/json
// -> https://ipinfo.io/json
// -> https://get.geojs.io/v1/ip/country.json

/* ------------------- */
/* ACCESS DENIED ERROR */
/* ------------------- */
function display_access_denied_error() {
    document.body.innerHTML
        = '<div id="access-denied-error">'
        + '<div class="middle-center">'
        + '<span class="pulsate-bck">'
        + '<i class="bi bi-exclamation-diamond-fill"></i>'
        + 'Access Denied'
        + '</span>'
        + '</div>'
        + '</div>'
}

/* ------------------------- */
/* BLOCK BLACKLIST COUNTRIES */
/* ------------------------- */
function block_blacklist_countries() {
    // Blacklist countries
    const blacklist_countries = [
        "DE", // Germany
        "US", // United States
        "GB", // United Kingdom
        "UA", // Ukraine
        "AR", // Argentina
        "FI", // Finland
        "CA", // Canada
        "JP", // Japan
        "NO", // Norway
        "RU" // Russia
    ]

    // Detecting the users country
    function get_country_code(api_url) {
        fetch(api_url, { method: 'GET' })
            .then(response => response.json()) // Getting ip info as json
            .then(result => {
                if (blacklist_countries.includes(result.country)) { // If my ip country code is in blacklist
                    display_access_denied_error() // Access denied error
                }
            })
            .catch(error => console.log('error', error))
    }

    // Getting country code from third party api
    get_country_code("https://get.geojs.io/v1/ip/country.json")
}

/* ------------------------- */
/* ALLOW WHITELIST COUNTRIES */
/* ------------------------- */
function allow_whitelist_countries() {
    // Whitelist countries
    const whitelist_countries = [
        "DE", // Germany
        "US", // United States
        "GB", // United Kingdom
        "UA", // Ukraine
        "AR", // Argentina
        "FI", // Finland
        "CA", // Canada
        "JP", // Japan
        "NO", // Norway
        "RU" // Russia
    ]

    // Detecting the users country
    function get_country_code(api_url) {
        fetch(api_url, { method: 'GET' })
            .then(response => response.json()) // Getting ip info as json
            .then(result => {
                if (!whitelist_countries.includes(result.country)) { // If my ip country code is not in whitelist
                    display_access_denied_error() // Access denied error
                }
            })
            .catch(error => console.log('error', error))
    }

    // Getting country code from third party api
    get_country_code("https://get.geojs.io/v1/ip/country.json")
}

/* -------------- */
/* CALL FUNCTIONS */
/* -------------- */
block_blacklist_countries() // Block blacklist countries

// allow_whitelist_countries() // Allow whitelist countries