

export default  function Validation(value){
    const error={};
   
    const Email_validation=/^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    if(value.FirstName===""){
        error.FirstName="FirstName is required field";

    }
    if(value.LastName===""){
        error.LastName="Lastname is required field";
    }
    if(value.email===""){
        error.email="please Enter Email"
    }
    else if(!Email_validation.test(value.email)){
     error.email="Email Did not match "
    }

    if(value.Company===""){
        error.Company="Company  is required field"
    }

    if(value.Conatct===""){
        error.Conatct="Contact No is required "
    }


    return error;

}
