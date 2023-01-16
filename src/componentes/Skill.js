import '../style/skill.css';
import HTML from '../recursos/img/logo_html.png'
import css from '../recursos/img/logo_css.png'
import javascript from '../recursos/img/logo_javascript.png'
import java from '../recursos/img/logo_java.png'
import python from '../recursos/img/logo_phyton.png'
import django from '../recursos/img/logo-django.png'
import sql from '../recursos/img/logo_SQL.png'



export const Skill = () =>{
    return (
        <section id="skill-dominado" class="skill">
            <h2 class="skill_titulo">
                SKILL
            </h2>
            <div class="container_skill">
                <div class="div_skill">
                    <img class="img_logo__skill" src={HTML} alt="CSS" />
                    <p>HTML</p>
                </div>
                <div class="div_skill">
                    <img class="img_logo__skill" src={css} alt="HTML" />    
                    <p>CSS</p>
                </div>
                <div class="div_skill">
                    <img class="img_logo__skill" src={javascript} alt="JAVASCRIPT" />
                    <p>JAVASCRIPT</p>
                </div>
                <div class="div_skill">
                    <img class="img_logo__skill" src={java} alt="JAVA" />
                    <p>JAVA</p>
                </div>
                <div class="div_skill">
                    <img class="img_logo__skill" src={python} alt="PHYTON" />
                    <p>PHYTON</p>
                </div>
                <div class="div_skill">
                    <img class="img_logo__skill" src={django} alt="DJANGO" />
                    <p>DJANGO</p>
                </div>
                <div class="div_skill">
                    <img class="img_logo__skill" src={sql} alt="SQL" />
                    <p>SQL</p>
                </div>
            </div>
        </section>
    );
}