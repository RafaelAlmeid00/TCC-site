import Exit from '../../components/buttonexit';
import EsqueciAsenha from "../../components/cadastro/recuperarconta/recuperation";

function RecPass() {

    return(
        <>
            <Exit previousRoute={'/cadastro/esqueciasenha'} />
            <EsqueciAsenha/>
        </>
    )
}

export default RecPass