import {useState, useEffect} from 'react';

interface Formdata {

    name: string
    email: string
    password: string
  }

  export default function Form() {
    const [data, setData] = useState<Formdata[]>([])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    const newData: Formdata = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }
   
    setData([...data, newData])
  }

useEffect(() => {
  data.map((item) => {
   localStorage.setItem('name', item.name)
   localStorage.setItem('email', item.email)
   localStorage.setItem('password', item.password)
  })}),[data]


  return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="">email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="">password</label>
            <input type="password" name="password" id="password" />
            <input type="submit" value="enviar" />
        </form>

     
</>
  )
}