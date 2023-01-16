import '../style/nav.css'

export const Nav = ()=>{
    return (
        <nav id="nav" class="nav">
            <span class="nav_Logo">
                <h2>Pascual Silvestri</h2>
            </span>
            <ul class="ul_nav">
                <li class="li_nav"><a href="#sobre-mi" class="a_nav">Sobre mi</a></li>
                <li class="li_nav"><a href="#skill-dominado" class="a_nav">Skill</a></li>
                <li class="li_nav"><a href="#formacion" class="a_nav">Formacion</a></li>
                <li class="li_nav"><a href="#experiencia-laboral" class="a_nav">Proyectos</a></li>
                <li class="li_nav correo"><a href="#contacto-correo" class="a_nav">pascualsilvestri14@gmail.com</a>
                </li>
            </ul>
        </nav>
    );
}