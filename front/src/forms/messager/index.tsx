import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useAuth } from "../../hooks/use-auth-safe";
import { Chat } from "../chat";
interface IFormInput {
    numberReceiver:string;
}
export const Messager =()=>{

const [state, setState] = useState<IFormInput | null>(null)
const { user} = useAuth()
const { register, handleSubmit } = useForm<IFormInput>();

  const handleCreateNewReceiverSession :SubmitHandler<IFormInput>= (data)=> {
    console.log(data);
    setState(data)
  };

  

  return(<> {state && (<>
    <h1>Сеанс - {state.numberReceiver} - {user?.apiTokenInstance}</h1>
<Chat props={state.numberReceiver} /></>
    )}
  <form onSubmit={handleSubmit(handleCreateNewReceiverSession)}>
        <section>
            <article><label>номер получателя</label>
            <input {...register('numberReceiver', { required: true })} /></article>
            <button type="submit">Отправить</button>
        </section>
    </form>
   
</>
)

}