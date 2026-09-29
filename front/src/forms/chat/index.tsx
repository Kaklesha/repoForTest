import { useForm, type SubmitHandler } from "react-hook-form"
import { FetchCustrom } from "../../api/api";
import { useSubmit } from "react-router";
import { use, useState } from "react";
import { SendMessage } from "./api";
import { useAuth } from "../../hooks/use-auth-safe";

interface IFormValue {
message: string
}
type ChatProps={
idSession: number,

}
export const Chat = (props:ChatProps)=>{
 const { user} = useAuth()  //user?.apiTokenInstance
    const [messages, setMessages] = useState()
const { register, handleSubmit} = useForm<IFormValue>();
const onSubmit:SubmitHandler<IFormValue>=(data)=>{
    SendMessage(data.message,{...props.idSession, ...user})
}
    return ( 
        <>
<section>
    <ul>
    </ul>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("message", { required: true })} />
        <button type="submit">Отправить</button>
        </form>
        </section>
        </>
    )
}