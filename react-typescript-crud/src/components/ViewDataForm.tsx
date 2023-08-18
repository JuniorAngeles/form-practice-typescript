import "../App.css"
export default function ViewDataForm() {

        const name = localStorage.getItem('name')
        const email = localStorage.getItem('email')
        const password = localStorage.getItem('password')
  
    return (
        <>
        <h1>View Data</h1>
       <div className="data-container">
              <div className="data">
              <p>{name}</p>
              <p>{email}</p>
              <p>{password}</p>
              </div>
       </div>
   

        
        </>
    )

}