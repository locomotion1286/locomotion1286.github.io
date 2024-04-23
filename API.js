
const apiKey = '3sPJPEm3I1ddUU4l1F8Nq69unyn6wV0IezZ1yzRC';

const apiUrl = 'https://api.nasa.gov/planetary/apod';
axios.get(apiUrl, {
    params: {
        api_key: apiKey
    }
})
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });