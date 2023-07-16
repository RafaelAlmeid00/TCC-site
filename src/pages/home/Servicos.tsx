import Footer from "../../components/footer"
import MenuApp from "../../components/menu/menuApp"
import SectionServiceBus from "../../components/servicos/sectionServiceBus"
import SectionService1 from "../../components/servicos/sectionServicos"
import '../../App.css'


export default function ServicosAll() {
    
    return (
        <>
        <MenuApp />
        <SectionService1 />
        <SectionServiceBus />
        <Footer />
        </>
    )
}