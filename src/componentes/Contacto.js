import '../style/contacto.css'
import img_form from '../recursos/img/img_contacto.jpg'

import { Form } from './Form'




export const Contacto = () => {
    return (
        <section id="contacto-correo" class="contacto">
            <div class="contacto_img">
                <img src={img_form} alt="" />
            </div>
            <Form/>
        </section>
    )
}

