import '../style/experienciaLaborales.css';
import { CardExperiencia } from './cardExperiencia';
import { imagenExp } from './imagenes';




export const Experiencias = () => {
    return (
        <section id="experiencia-laboral" class="experiencia">
            <h2 class="experiencia_titulo">
                Proyectos Realizados
            </h2>
            <div class="container_experiencia">

                {imagenExp.map( e => {
                     return <CardExperiencia img = {e.ruta} titulo = {e.titulo}detalle = {e.detalle} repo = {e.repo} demo = {e.demo} />
                })}

            </div>
        </section>
    )
}