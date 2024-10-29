import { API_URL } from "../main";
import { UserProfileToken } from "@/models/User";
import { handleError } from "../utils/ErrorHandler";
import axios, { AxiosError } from "axios";
import { EditedGarment, Garnment, OutfitPlanType } from "@/types";

export const registerAPI = async (username: string, email: string, password: string) => {
    try {
        const response = await axios.post<UserProfileToken>(API_URL + "/auth/register", {
            username,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        handleError(error as AxiosError);
    }
}

export const loginAPI = async (email: string, password: string) => {
    try {
        const response = await axios.post<UserProfileToken>(API_URL + "/auth/login", {
            email,
            password,
        });

        return response.data;
    } catch (error) {
        handleError(error as AxiosError);
    }
}

//////////////////////////////////////// WARDROBE ////////////////////////////////////////

export const getGarmentsAPI = async () => {
    try {
        const response = await axios.get(API_URL + "/garments");
        return response.data.garments;
    } catch (error) {
        handleError(error as AxiosError);
        return []; // In case of error, return an empty array
    }
}

export const postGarmentAPI = async (garment: Garnment) => {
    const formData = new FormData();

    formData.append('name', garment.name);
    formData.append('brand', garment.brand);
    formData.append('size', garment.size);
    formData.append('categoryLabel', garment.categoryLabel);
    formData.append('subCategoryLabel', garment.subCategoryLabel);
    formData.append('colors', JSON.stringify(garment.colors));
    formData.append('image', garment.image);

    try {
        const response = await axios.post(API_URL + "/garments", formData);
        console.log('response', response);
    } catch (error) {
        handleError(error as AxiosError);
    }
}

export const putGarmentAPI = async (garment: EditedGarment, uuid: string) => {

    const newGarment = {
        name: garment.name,
        colors: garment.colors,
        brand: garment.brand,
        size: garment.size,
    }

    try {
        const response = await axios.put(API_URL + "/garments/" + uuid, newGarment);
        console.log('response', response);
    } catch (error) {
        handleError(error as AxiosError);
    }
}

export  const getALLGraments = async ()=>{
    try {
        const response = await axios.get(`${API_URL}/garments?page=1&limit=100`)
        return response
    } catch (error) {
        handleError(error as AxiosError);
    }
 }

/**********************************************************OUTFIT**************************************************************************************** */

export const GetMyOutfits = async(page: number,temsPerPage:number)=>{
    try {
        const response = await axios.get(`${API_URL}/outfits?page=${page}&limit=${temsPerPage}`)
        const {data} = response
        return data
        
    } catch (error) {
        handleError(error as AxiosError)
    }
}

export const getUserOutfitByUuid = async (uuid: string) => {
    try {
        const response = await axios.get(`${API_URL}/outfits/${uuid}`);
        const {data} = response
        return data 
    } catch (error) {
        handleError(error as AxiosError)
    }
  
}

export const saveMyOutFit=async(myOutfit:{
    name: string |undefined;
    mainTopUuid:string |undefined;
    subTopUuid:string |undefined;
    bottomUuid:string |undefined;
    shoesUuid:string |undefined;
})=>{

    try {
        const response = await axios.post(`${API_URL}/outfits`,myOutfit)
        return response
    } catch (error) {
        console.log(error)
        handleError(error as AxiosError)

    }
}
export const userOutfitShared = async(uuid:string)=>{
    try {
        const response = await axios.get(`${API_URL}/outfits/${uuid}/view`)
        console.log({response})
        return response
    } catch (error) {
        handleError(error as AxiosError)

    }
}

/*******END OUTFIT******** */



/*************OUTFIT PLAN************** */

export const getUserOutFitPlansByUuid = async (uuid:string)=>{

    try {
        const response = await axios.get(`${API_URL}/outfit-plans/${uuid}/incoming`)
        const {data} = response;
        console.log('ici',data)
        return data

    } catch (error) {
        handleError(error as AxiosError)
    }
}

export const putUserOutFitPlanByUuid = async (uuid:string,outfitEvent:OutfitPlanType)=>{
    try {
        const response = await axios.put(`${API_URL}/outfit-plans/${uuid}`,outfitEvent)
        return response
    } catch (error) {
        handleError(error as AxiosError)
    }
}

export const createUserOutFitPlan = async(outfitUuid:string , outfitEvent:OutfitPlanType)=>{
    try {
        const response = await axios.post(`${API_URL}/outfit-plans/${outfitUuid}`,outfitEvent)

        return response
    } catch (error) {
        handleError(error as AxiosError)
    }
}

/************FIN OUTFIT PLAN************ */

