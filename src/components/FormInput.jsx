import "./formInput.css"
import {useState} from "react";

const FormInput = (props) => {
    const [focused, setFocus] = useState(false);
    const {label, onChange, errorMessage, id, ...other} = props;

    const handleFocus = (e) => {
      setFocus(true);
    }

    return (
      <div className="formInput">
          <label>{label}</label>
        <input {...other}
               onChange={onChange}
               onBlur={handleFocus}
               onFocus={() =>
                   other.name==="confirmPassword" && setFocus(true)
        }
               focused={focused.toString()}/>
          <span>{errorMessage}</span>
      </div>
  )
}

export default FormInput;