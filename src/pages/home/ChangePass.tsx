import Exit from '../../components/buttonexit';
import Change from "../../components/cadastro/recuperarconta/PassChange";

function PassChange() {
    return(
        <>
            <Exit previousRoute='/cadastro/esqueciasenha'></Exit>
            <Change></Change>
        </>
    )
};

export default PassChange;