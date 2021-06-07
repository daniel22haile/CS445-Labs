async function fetchLocation(URL) {
    return fetch(URL)
        .then(response => response.json());
}