import { useForm } from "react-hook-form";

export const Messager =()=>{

      const { register, handleSubmit } = useForm();

  const handleCreateNewReceiverSession = (data:unknown) => {
    console.log(data);
  };

  return(    <form onSubmit={handleSubmit(handleCreateNewReceiverSession)}>
        <section>
            <article><label>номер получателя</label>
     <input {...register('numberReceiver', { required: true })} /></article>
    <button type="submit">Готово</button>
        </section>
    </form>
)

}