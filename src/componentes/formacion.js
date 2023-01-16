import '../style/formacion.css';
import analista from '../recursos/img/Logo_issd.jpeg'
import curso1 from '../recursos/img/Logo_alura.png'
import curso2 from '../recursos/img/logo_informatorio.png'


export const Formacion = ()=>{
    return (
        <section id="formacion" class="formacion_academica">
            <h2 class="formacion_titulo">Formación Académica</h2>
            <div class="formacion_container_card">
                <div class="card">
                    <div class="formacion_card">
                        <img src={analista} alt="Analista"/>
                    </div>
                    <h3 class="formacion_card_titulo">
                        Analista de sistema
                    </h3>
                    <p class="formacion_card_parrafo">
                        En curso                        
                    </p>
                </div>
                <div class="card">
                    <div class="formacion_card">
                        <img src={curso1} alt="
                        desarrollador web"/>
                    </div>
                    <h3 class="formacion_card_titulo">
                        Desarrollador web
                    </h3>
                    <p class="formacion_card_parrafo">
                        En curso
                    </p>
                </div>
                <div class="card">   
                    <div class="formacion_card">
                        <img src={curso2} alt="desarrollador web"/>
                    </div>
                    <h3 class="formacion_card_titulo">
                        Desarrollador web
                    </h3>
                    <p class="formacion_card_parrafo">
                        En curso
                    </p>
                </div>
            </div>
        </section>
    );
}