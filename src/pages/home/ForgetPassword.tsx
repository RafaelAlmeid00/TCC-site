import Exit from '../../components/buttonexit';
import EsqueciAsenha from "../../components/cadastro/recuperarconta/forgetPass";

function ForgetPassword() {

    return(
        <>
            <Exit previousRoute={'/cadastro'} />
            <EsqueciAsenha />
        </>
    )
}

export default ForgetPassword