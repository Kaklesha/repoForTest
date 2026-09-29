import { FetchCustrom } from "../../api/api"



export async function SendMessage(text:string) {
    
const respons = await FetchCustrom("https://green-api.com/v3/docs/api/receiving/technology-http-api/",{body:text})

const data = (await respons) 
return  data
}