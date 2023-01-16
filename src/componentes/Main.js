import '../style/main.css';
import { Skill } from './Skill';
import { SobreMi } from './SobreMi';
import { Formacion } from './formacion';
import { Contacto } from './Contacto';
import {Experiencias} from '../componentes/ExperienciaLaborales'


export const Main = ()=>{
    return (
        <>
            <SobreMi/>
            <Skill/>
            <Formacion/>
            <Experiencias/>
            <Contacto/>
        </>
    );
}