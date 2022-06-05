import { useState } from "react";
import { Link } from "react-router-dom";

export const LoginForm = ({ title, onSubmit }) => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const submit = (e) => {
        e.preventDefault();
        onSubmit(email, pwd);
        console.log(email, pwd);
    };

    return (
        <>
            <form className="form" onSubmit={submit}>
                <p>{title}</p>
                <label className="label">Email</label>
                <input className="input" onChange={(e) => setEmail(e.target.value)} />
                <label className="label">Mot de passe</label>
                <input className="input" type="password" onChange={(e) => setPwd(e.target.value)} />
                <button className="btn">Connexion</button>
            </form>
            <div className="form">
                <Link to="/register">Pas de compte ? Enregistrez vous ici.</Link>
            </div>
        </>
    );
};
