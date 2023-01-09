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
        console.log("hola")
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
                    ? "Este campo debe tener al menos 5 caracteres." : ""}</p>
                </div>
                <button className="enviar" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UserForm;
//onClick={validateEmail(mail)}
/*<div>
            <form className="formulario" onSubmit={createUser} id="formulario">
                <div className="nombre">
                    <label className="nomLabel" htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" value={state.firstName} onChange={(e) => changeUser(e.target)}/>
                    <p className="msgNombre">{hasBeenSubmitted === true && state.firstName.length > 0 && state.firstName.length < 2
                        ? "Este campo debe tener al menos 2 caracteres." : ""}</p>
                </div>
                
                <div className="apellido">
                    <label className="apeLabel" htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" value={state.lastName} onChange={(e) => changeUser(e.target)}/>
                    <p className="msgApellido">{hasBeenSubmitted === true && state.lastName.length > 0 && state.lastName.length < 2
                        ? "Este campo debe tener al menos 2 caracteres." : ""}</p>
                </div>

                <div className="correo">
                    <label className="corrLabel" htmlFor="email">Email: </label>
                    <input type="email" name="email" value={state.email} onChange={(e) => changeUser(e.target)}/>
                    <p className="msgEmail">{hasBeenSubmitted === true && state.email.length > 0 && state.email.length < 5
                        ? "Este campo debe tener al menos 5 caracteres." : ""}</p>
                </div>

                <div className="contraseña">
                    <label className="contraLabel" htmlFor="password">Password: </label>
                    <input type="password" name="password" value={state.password} onChange={(e) => changeUser(e.target)}/>
                    <p className="msgContraseña">{hasBeenSubmitted === true && state.password.length > 0 && state.password.length < 8
                        ? "Este campo debe tener al menos 8 caracteres." : ""}</p>
                </div>

                <div className="confCont">
                    <label className="confLabel" htmlFor="confirmPassword">Confirm Password: </label>
                    <input type="password" name="confirmPassword" value={state.confirmPassword} onChange={(e) => changeUser(e.target)}/>
                    <p className="msgConfirmar">{hasBeenSubmitted === true && state.confirmPassword.length > 0 && state.confirmPassword.length < 8
                        ? "Este campo debe tener al menos 8 caracteres." : ""}
                        {hasBeenSubmitted === true && state.password !== state.confirmPassword ? "Las contraseñas deben coincidir" : ""}</p>
                </div>
            </form>
            <button type="submit" form="formulario" value="submit">Enviar</button>
            
        </div> */