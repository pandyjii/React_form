
import Validation from './Validation';
import { useState } from 'react';
import './Form.css';

function FormExample() {
const[value,setValue]=useState({
  FirstName:'',
  LastName:'',
  email:'',
  Company:'',
  Conatct:''
})

const[error,SetError]=useState({})

function handleChange(e){
  setValue({
    ...value,
    [e.target.name]:e.target.value
  })
}



   function handleSubmit(e){
       e.preventDefault();
       console.log(value)

       SetError( Validation(value));

      
   }



  return (

    <>
      <h1 className='Form-heading'>Input Form</h1>
<div className='form-container'>
      <form  onSubmit={handleSubmit}>
        <div className='input-container'>
          <p className='lavel-value'>FirstName</p>
          <input type='text' name='FirstName' onChange={handleChange}  />
          {error.FirstName&& <p className='showalert'>{error.FirstName}</p>}
        </div>
        <div className='input-container'>
          <p className='lavel-value'>LastName</p>
          <input type='text' name='LastName'   onChange={handleChange}   />
          {error.LastName&& <p className='showalert'>{error.LastName}</p>}

        </div>
        <div className='input-container'>
          <p className='lavel-value'>Company </p>
          <input type='text' name='Company'  onChange={handleChange}    />
          {error.Company&& <p className='showalert'>{error.Company}</p>}

        </div>
        <div className='input-container'>
          <p className='lavel-value'>Email Id</p>
          <input type='text' name='email'  onChange={handleChange}     />
          {error.email&& <p className='showalert'>{error.email}</p>}

        </div>
        <div className='input-container'>
          <p className='lavel-value'>Conatct No</p>
          <input type='Number' name='Conatct'  onChange={handleChange}     />
          {error.Conatct&& <p className='showalert'>{error.Conatct}</p>}

        </div>
        
        

        <div className='input-button'>
          
          <input type='submit'  className='submit' />
        </div>

      </form>

    
</div>
    </>


  )
}

export default FormExample;