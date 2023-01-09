import React, {useReducer, useEffect} from 'react';
import "./style.css"

const UserForm = (props) => {
    const inicialState = {
        firstName:'',
        lastName:'',
        email:''
    }
const reducer = (state, action) => {
        switch(action.type){
            case 'update-input':
                return {
                    ...state,
                    [action.key]: action.value 
                }
            default:
                return state;
        }
    }
    const [state, dispatch]= useReducer(reducer, inicialState)

const createUser= (e) => {
        e.preventDefault();
};

function validateEmail(m) 
    {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(m))
    {
        return (true)
    } else if(m === ""){
        return (true)
    } else 
        return (false)
    };
let valorFunction = validateEmail(state.email);

useEffect(() => {
    console.log(state);
    console.log (valorFunction);
})
    return (
        <div>
            <form className="formulario" onSubmit={createUser} id="formulario">
                <div className="nombre">
                    <label htmlFor="firstName">First Name: </label>
                    <input 
                        name="firstName" 
                        value={state.firstName} 
                        onChange={(e) => dispatch({
                        type: "update-input",
                        value: e.target.value,
                        key: "firstName",
                    })}>
                    </input>
                    <p className="msgNombre">{state.firstName.length > 0 && state.firstName.length < 2
                    ? "Este campo debe tener al menos 2 caracteres." : ""}</p>
                </div>
                <div className="apellido">
                    <label htmlFor="lastName">Last Name: </label>
                    <input 
                        name="lastName" 
                        value={state.lastName} 
                        onChange={(e) => dispatch({
                        type: "update-input",
                        value: e.target.value,
                        key: "lastName",
                    })}>
                    </input>
                    <p className="msgApellido">{state.lastName.length > 0 && state.lastName.length < 2
                    ? "Este campo debe tener al menos 2 caracteres." : ""}</p>
                </div>
                <div className="correo">
                    <label htmlFor="email">Email: </label>
                    <input 
                        id="email-input"
                        name="email" 
                        value={state.email} 
                        onChange={(e) => dispatch({
                        type: "update-input",
                        value: e.target.value,
                        key: "email",
                    })}>
                    </input>
                    <p className="msgEmail">{valorFunction === false
                    ? "este campo debe incluir [personal_info]@[domain]" : ""}</p>
                </div>
                <button className="enviar" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UserForm;
