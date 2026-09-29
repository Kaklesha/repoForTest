
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HttpMethondsExist = {
GET:"GET",
POST:"POST",
PUT:"PUT",
} as  const

type ExtractKeyofType<T> = T[keyof T];
type HttpMethonsTyped = ExtractKeyofType<typeof HttpMethondsExist>

interface ApiResponse<T>  {
data?: T,
error?:  string,

}
interface ConfigProps<U> {
    method?: HttpMethonsTyped,
    body?: U,
    headers?: Record<string,string>,
}
export async function FetchCustrom<T,U>(url:string, config:ConfigProps<U>):Promise<ApiResponse<T>> {
try {
const response = await fetch(url,{
    method: config.method??"GET",
    headers: config.headers,
    body:  JSON.stringify(config.body)
});
if (!response.ok) {
    return {
        error: `Error fetching: ${response}`
    }
}
const data:T = await response.json()
return {
    data
}

} catch (error) {
     return {
        error: `Error catched in proccess fetching: ${error}`
    }
}
}