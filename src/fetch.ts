import axios, { AxiosResponse } from "axios"
import { Response,Transaction } from "./type";

//const address = '0xf146C95510b79BA992cF231F28e6fE1d24fa6093';
const address = '0x6ae7dfc73e0dde2aa99ac063dcf7e8a63265108c';
const startblock = '0';
const endblock = '99999999';
const page = '1';
const offset = '1';
const sort = 'desc'
const api_key = 'B94N5UY2EW4BZ3HW7BZ824WY8PACHAE975';

const url = `https://api.polygonscan.com/api?module=account&action=txlist&address=${address}&startblock=${startblock}&endblock=${endblock}&page=${page}&offset=${offset}&sort=${sort}&apikey=${api_key}`;


//外部APIにリクエストする関数
const fetchRequest = () => {
    axios.get(url)
    .then((response: AxiosResponse<Response>) => {
        const  response_data  = response.data;
        const status:string = response_data.status;
        const message: string = response_data.message;
        const results: Transaction[] = response_data.result;

        console.log("status:"+status);
        console.log("message:"+message);

        console.log(results[0]);

       /* for(var i =0;i<results.length;i++){
            console.log(results[0]);
        }*/

    }).catch( error => {
        console.log(error);
    })
}
fetchRequest();
