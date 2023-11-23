import styled from "styled-components";
import MicrosoftLogin from "react-microsoft-login";
import { Toaster, toast } from "sonner";
import { useState } from "react"
import secrets from "../../../secrets.json";
import { createAxiosInstance } from "../../utils/main";


const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 40%;

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    padding: 2rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    & > * {
        margin-bottom: 1rem;
    }
`;

const WelcomeMessage = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    color: #4b5563;
    margin-bottom: 1.5rem;
`;

const Input = styled.input`
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #e5e7eb;
    outline: none;
    font-size: 1rem;
    font-weight: 500;
    color: #4b5563;
    margin-bottom: 1rem;
`;

const Button = styled.button`
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    background-color: #000;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #1f2937;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export default function LoginForm() {

    const [data, setData] = useState({});

    const authHandler = (err, data, msal) => {
        if (err) {
            console.log(err);
        }

        window.sessionStorage.setItem("accessToken", data.accessToken)
        window.sessionStorage.setItem("account", JSON.stringify(data.account))
        window.sessionStorage.setItem("accessMethod", "microsoft")
        
        toast.success("Bienvenido/a a bordo: " + data.account.username);

        setTimeout(() => {
            window.location.href = "/";
        }, 2000);
    };

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if(!data.email || !data.password) {
            toast.error('Todos los campos son requeridos.');
            return;
        }

        try {
            const response = await createAxiosInstance(secrets.authUri).post("/api/v1/auth/login", data);
            if (response.status === 200) {
                toast.success("Bienvenido/a a bordo: " + response.data.data.user);
                window.sessionStorage.setItem("accessToken", response.data.data.token)
                window.sessionStorage.setItem("user", response.data.data.user)
                window.sessionStorage.setItem("accessMethod", "email")

                setTimeout(() => {
                    window.location.href = "/";
                }, 2000);
            }
        } catch (error) {
            console.log(error.response);
            toast.error("Error al iniciar sesión: " + error.response.data.message);
        }

    };

  return (
    <LoginFormContainer>
        <Toaster
        richColors
        position="top-right"
        />
        <Form>
            <WelcomeMessage>
                Bienvenido/a a AdaraTPS, por favor inicia sesión para continuar.
            </WelcomeMessage>
            <MicrosoftLogin
                clientId={secrets.microsoftClientId}
                authCallback={authHandler}
                buttonTheme="dark"
                className="microsoft-login"
            />
            <p style={{fontSize: '15px', textAlign: 'center', color: '#9ca3af', marginBottom: 30}}>
                Si ocurre algún error al iniciar sesión con Microsoft, puedes hacerlo con tu correo electrónico y contraseña.
            </p>
            <Input
                onChange={handleChange}
                type="email" placeholder="Correo electrónico" name="email" id="email" 
            />
            <Input 
                onChange={handleChange}
                type="password" placeholder="Contraseña" name="password" id="password" 
            />
            <Button onClick={handleSubmit}>Iniciar sesión</Button>
            <p style={{fontSize: '15px', textAlign: 'center', color: '#9ca3af'}}>
                Recuerda no compartir tus credenciales con nadie, son personales e intransferibles.
            </p>
        </Form>
    </LoginFormContainer>
  )
}
