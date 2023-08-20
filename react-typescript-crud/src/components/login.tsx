import { useState } from "react"

interface user {
    email: string,
    password: string,
}

export default function Login (){
const [data, setData] = useState<user[]>([])

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    const newData: user = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }

    alert('usuario logado')
   localStorage.setItem('email', newData.email)
   localStorage.setItem('password', newData.password)
    setData([...data, newData])
}
 const handlerButtonDelete = () => {
        localStorage.clear()
        alert('dados deletados')
 }

    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')
    return(
     <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="">password</label>
            <input type="password" name="password"/>
            <input type="submit" value="enviar para registrar" />
        </form>
        <div>
            <input type="submit" value="eliminar datos" onClick={handlerButtonDelete}/>
        </div>
        {
           email && password  && (
        <div>
            <h1>Estos son tus datos</h1>
            <p> {localStorage.getItem('email')}</p>
            <p> {localStorage.getItem('password')}</p>
        </div>)
         
        }
     </>
    )

}