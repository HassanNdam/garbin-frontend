// import axios from "axios";

// export const uploadToCloudinary = async (blob: any) => {
//     const instance = axios.create();

//     const formData = new FormData();
//     formData.append('file', blob);
//     formData.append('upload_preset', 'garbin');
//     formData.append('api_key', '598177126883439');
    
//     try {
//         const response = await instance.post('https://api.cloudinary.com/v1_1/dyqyliqk2/image/upload', formData, { headers: { 'Authorization': null } });
    
//         if (response) {
//         return response.data.url;
//         }
//     } catch (error) {
//         console.error(error);
//     }
    
// }