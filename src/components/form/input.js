
function Input({type, placeholder, handleOnchange}){
    return (
        <input 
            type={type} 
            placeholder={placeholder}
            onChange={handleOnchange}  
        /> 
    );
}

export default Input;