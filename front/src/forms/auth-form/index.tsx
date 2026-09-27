import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
export const AuthForm =()=>{
const navigate =useNavigate()
      const { register, handleSubmit } = useForm();
  const handleAuth = (data:unknown) => {
    console.log(data);
    event?.preventDefault()
    navigate('/messager');
  };

  return(    <form onSubmit={handleSubmit(handleAuth)}>
        <section>
            <article><label>idInstance</label>
     <input {...register('idInstance', { required: true })} /></article>
              <article><label >apiTokenInstance</label>
      <input {...register('apiTokenInstance', { required: true })} /></article>
      <button type="submit">Готово</button>
        </section>
    </form>
)

}