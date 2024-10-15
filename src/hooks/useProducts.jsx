import axios from "axios"
import { useQuery } from "react-query"


const useProducts = (api_url) => {
   async function  getProducts(){
const response= await axios.get(api_url)
return response.data
    }
    const { isLoading, isError, data, error } = useQuery('products',getProducts);

    return { isLoading, isError, data, error };
}

export default useProducts