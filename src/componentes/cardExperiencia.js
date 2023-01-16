import '../style/cardExperiencia.css';


export const CardExperiencia = ({img,titulo,detalle,repo,demo}) => {
    return (
        <div class="experiencia_card">
            <div class="card_img">
                <img src={img} alt="Encriptador"/>
            </div>
            <div class="card_detalle">
                <h3 class="experiencia_card_titulo">
                    {titulo}
                </h3>
                <p class="experiencia_card_parrafo">
                    {detalle}
                </p>
                <div class="experiencia_card_btn">
                    <button class="experiencia_btn repositorio"><a href={repo} target="_blank" rel="noopener noreferrer">Repositoro</a></button>
                    <button class="experiencia_btn demo"><a href={demo} target="_blank" rel="noopener noreferrer">Ver demo</a></button>
                </div>
            </div>
        </div>
    )
}