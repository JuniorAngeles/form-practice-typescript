import { useState, useEffect} from 'react'
import './App.css'


interface Formdata {

  name: string
  email: string
  password: string
}

function App() {

  const [data, setData] = useState<Formdata[]>([])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    const newData: Formdata = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }
    console.log(newData)
    setData([...data, newData])
  }

useEffect(() => {
  data.map((item) => {
    return item
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
       
<div className="div-data-container">
  {data.map((item) => {
    return(
      <div className="div-data">
        <p className="nameclass">{item.name}</p>
        <p className='emailclass'>{item.email}</p>
        <p className='passwordclass'>{item.password}</p>
      </div>
    )
  })}
  
    </div>
     
    </>
  )
}

export default App
