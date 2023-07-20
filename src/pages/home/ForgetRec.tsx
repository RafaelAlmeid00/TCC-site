import Exit from '../../components/buttonexit';
import Rec from "../../components/cadastro/recuperarconta/recuperation";

function RecPass() {

    return(
        <>
            <Exit previousRoute={'/cadastro/esqueciasenha'} />
            <Rec/>
        </>
    )
}

export default RecPass