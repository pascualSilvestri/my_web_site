import '../style/header.css'
import img_principal from '../recursos/img/fotoperfil.jpg';
import curriculum from '../recursos/Doc/Curriculum_Pascual_programador.pdf'


export const Header = () => {
    return (
        <header>
            <section class="presentacion_titulo">
                <h2 class="titulo_header">Hola, mi nombre es pascual silvestri y soy desarrollador web</h2>
                <p class="parrafo_header">
                    La tecnologia es el futuro y el camino al futuro son los programadores.
                </p>
                <ul class="sobre_mi__ul_header">
                    <li class="sobre_mi__li_header">
                        <a href="https://github.com/pascualSilvestri" class="a_header" target="_blank">Githud</a><i class="fas fa-arrow-up"></i>
                    </li>
                    <li class="sobre_mi__li_header">
                        <a href="https://www.linkedin.com/in/pascual-silvestri-ab86961a5/" class="a_header" target="_blank">Linkedin</a><i class="fas fa-arrow-up"></i>
                    </li>
                    <li class="sobre_mi__li_header">
                        <a href="https://www.instagram.com/silvestri.pascual/" class="a_header" target="_blank">Instagram</a><i class="fas fa-arrow-up"></i>
                    </li>
                    <li class="sobre_mi__li_header">
                        <a href={curriculum} class="a_header" target="_blank">Curriculum</a><i class="fas fa-arrow-up"></i>
                    </li>
                </ul>
            </section>
            <section class="img_header">
                <img src={img_principal} alt="" />
            </section>
        </header>
    );
}