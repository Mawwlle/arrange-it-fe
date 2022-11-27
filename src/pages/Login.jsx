import "../index.css"
import {useState} from "react";
import FormInput from "../components/FormInput";

export const LoginPage = () => {
    const [values, setVal] = useState({
        username: "",
        email: "",
        birthday: "",
        fullName: "",
        password: "",
        confirmPassword: ""
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username should be 3-16 chars and shouldn't include any special character!",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "Email should look like youremail@domain.com",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday"
        },
        {
            id: 4,
            name: "fullName",
            type: "text",
            placeholder: "Full Name",
            errorMessage: "",
            label: "Full Name",
        },
        {
            id: 5,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 characters and it should include at least one letter, one number and one special char",
            label: "Password",
            pattern: "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+])[A-Za-z\\d][A-Za-z\\d!@#$%^&*()_+]{7,19}$",
            required: true,
        },
        {
            id: 6,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setVal({...values, [e.target.name]: e.target.value});
    }

    return <div className="app">
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            {inputs.map((input) => (
                <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
            ))}
            <button>Submit</button>
        </form>
    </div>;
}