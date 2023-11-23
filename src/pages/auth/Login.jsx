import AuthRoot from "../../layouts/AuthRoot"
import LoginForm from "../../components/forms/LoginForm"

export default function Login() {
  return (
    <AuthRoot title={'CirculoCorp | Inicio de sesión'}>
        <LoginForm />
    </AuthRoot>
  )
}
