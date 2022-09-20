import axios, {AxiosError,AxiosResponse} from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL='https://localhost:7156/api/';
const responseBody=(response:AxiosResponse)=>response.data;

 axios.interceptors.response.use(response=>{
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error: any) {
     const {data,status}=error.response!;
      
    switch (status) {
        case 400:
            toast.error(data.title);           
            break;
     case 500:
            toast.error(data.title);           
            break;
        case 401:
            toast.error(data.title);           
            break;
            case 404:
            toast.error(data.title);           
            break;
        default:
            break;
    }
    return Promise.reject(error.response);
  });
const request={
    get:(url:string)=>axios.get(url).then(responseBody),
    post:(url:string,body:{})=>axios.post(url ,body).then(responseBody),
    put:(url:string,body:{})=>axios.put(url,body).then(responseBody),
    delete:(url:string)=>axios.delete(url).then(responseBody)
}
 const Catalog={
    list:()=>request.get('Product'),
    details:(id:number)=>request.get(`product/${id}`)
 }
 const TestError={
    get404Error:()=>request.get('Bugy/not-found'),
    get400Error:()=>request.get('Bugy/bad-request'),
    get401Error:()=>request.get('Bugy/unauthorize'),
    get500Error:()=>request.get('Bugy/server-error'),
    getValidationError:()=>request.get('Bugy/validationerror')
 }
const agent={
    Catalog,TestError
}
 
 export default agent;
