
import Exit from '../../components/buttonexit'
import ContainerCad from '../../components/cadastro/containercad'
import '../../App.css'

function Cadlog() {



  return (
    <>
      <Exit previousRoute={'/opcoes'} />
      <ContainerCad />
    </>
  )
}

export default Cadlog
