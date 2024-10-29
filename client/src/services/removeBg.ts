// import axios from "axios";

// export const removeBg = async (blob: Blob) => {
//     const formData = new FormData();
//     formData.append('image_file', blob);
//     formData.append('size', 'auto');

//     const requestOptions = {
//         headers: { 
//             'X-Api-Key': 'j1qjcejywxfNZRMt5v4MuR7p',
//             'Authorization': null
//         },
//     };

//     try {
//         const response = await axios.post('https://api.remove.bg/v1.0/removebg', formData, {...requestOptions, responseType: 'blob'});

//         if (response) {
//             return response.data; // As Blob
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }
