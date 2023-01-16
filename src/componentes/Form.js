import '../style/contacto.css'
import React from 'react'


const redex = {
    'nombre': /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
    'email': /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    'asunto': /[a-zA-Z0-9][^_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
};

const errorMensaje = {
    'nombre': `No puede estar vacio ni contener numeros, min-3 letras.`,
    'email': `El formato correcto es ejemplo@correo.com`,
    'asunto': `No puede estar vacio debe contener min 2 letra`,
    'btnError': "Por favor complete los campo correctamente."
}

export const Form = () => {

    const [values, setValue] = React.useState(
        {
            'nombre': '',
            'email': '',
            'asunto': '',
            'mensaje':''
        }
    )

    const [nombre, setNombre] = React.useState({
        value:'',
        errorN:false
    })

    const [email, setEmail] = React.useState({
        value:'',
        errorE:false
    })

    const [asunto, setAsunto] = React.useState({
        value:'',
        errorA:false
    })

    const formRef = React.useRef();

    const valor = (e) => {

        const { target } = e
        const { name, value } = target

        const newValue = {
            ...values,
            [name]: value,
        }
        setValue(newValue)
    }

    function prevenirCompor(evt) {
        evt.preventDefault();

        const formData = new FormData(formRef.current)
        const values = Object.fromEntries(formData)

        console.log(values)
    }

    const validarNombre = (e)=>{
        const {target} = e
        const valido = !redex['nombre'].test(target.value)

        const newArr = {
            ...nombre.value,
            errorN:valido
        }

        console.log(newArr)
      
        setNombre(newArr)

    }

    const validarEmail = (e)=>{
        const {target} = e
        const valido = !redex['email'].test(target.value)

        const newArr = {
            ...email.value,
            errorE:valido
        }

        console.log(newArr)
      
        setEmail(newArr)

    }

    const validarAsunto = (e)=>{
        const {target} = e
        const valido = !redex['asunto'].test(target.value)

        const newArr = {
            ...asunto.value,
            errorA:valido
        }

        console.log(newArr)
      
        setAsunto(newArr)

    }


    return (
        <form method='POST' class="contacto_form" onSubmit={prevenirCompor} ref={formRef}>
            <div class="contacto_container_titulo">
                <h2 class="contacto_form__titulo">
                    Contacto
                </h2>
                <p class="contacto_form__parrafo">
                    ¿Quieres contactarme?
                </p>
                <p class="contacto_form__parrafo">
                    Complete el siguiente formulario y me pondré en contacto con usted lo antes posible.
                </p>
            </div>

            <div class="div_label_contacto form_cont_nombre">
                <label 
                for="nombre" 
                class="contacto_form__label form_label_nombre"
                >Nombre</label>

                <input 
                type="text" 
                id="form-nombre" 
                class="contacto_form__input" 
                name='nombre' 
                value={values.nombre} 
                onChange={valor}
                onBlur = {validarNombre}
                />

                <div 
                style = {{display:nombre.errorN?'flex':'none'}} 
                className='mensaje-error'
                >{errorMensaje['nombre']}</div>
            </div>

            <div class="div_label_contacto form_cont_email">
                <label 
                for="email" 
                class="contacto_form__label form_label_email "
                >Email</label>

                <input 
                type="email" 
                id="form-email"
                name = 'email' 
                class="contacto_form__input" 
                value={values.email} 
                onChange={valor}
                onBlur = {validarEmail}
                 />

            <div 
                style = {{display:email.errorE?'flex':'none'}} 
                className='mensaje-error'
                >{errorMensaje['email']}</div>
            </div>

            <div class="div_label_contacto form_cont_asunto">
                <label 
                for="asunto"
                 class="contacto_form__label form_label_asunto"
                 >Asunto</label>

                <input 
                type="text" 
                id="form-asunto" 
                class="contacto_form__input " 
                name='asunto' 
                value={values.asunto} 
                onChange={valor}
                onBlur = {validarAsunto}
                />

<div 
                style = {{display:asunto.errorA?'flex':'none'}} 
                className='mensaje-error'
                >{errorMensaje['asunto']}</div>
            </div>

            <div class="div_label_contacto form_cont_mensaje">
                <textarea name="mensaje" id="form-mensaje" class="contacto_mensaje" cols="30" rows="10" placeholder="Mensaje" value={values.mensaje} onChange={valor}></textarea>
            </div>

            <button type="submit" class="contacto_btn">Enviar Mensaje</button>
        </form>
    )
}