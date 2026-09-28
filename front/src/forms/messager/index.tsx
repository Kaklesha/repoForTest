import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
interface IFormInput {
    numberReceiver:string;
}
export const Messager =()=>{

const [state, setState] = useState<IFormInput | null>(null)

const { register, handleSubmit } = useForm<IFormInput>();

  const handleCreateNewReceiverSession :SubmitHandler<IFormInput>= (data)=> {
    console.log(data);
    setState(data)
  };

  

  return(<>
  <form onSubmit={handleSubmit(handleCreateNewReceiverSession)}>
        <section>
            <article><label>номер получателя</label>
            <input {...register('numberReceiver', { required: true })} /></article>
            <button type="submit">Готово</button>
        </section>
    </form>
    {state ? (
        <h1>Сеанс - {state.numberReceiver}</h1>
      ) : (
      null
      )}
</>
)

}