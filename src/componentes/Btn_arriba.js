import '../style/btn_arriba.css'





document.addEventListener("scroll", e => {
    let btnArriva = document.querySelector(".volverArriba")
        let scrolly = e.path[1].window.scrollY
        if (scrolly >= 200) {
            btnArriva.style.display = "flex"
        }
        if (scrolly < 200) {
            btnArriva.style.display = "none"
        }
    
    });


export const Btn_arriba = () =>{
    return (
        <a class="volverArriba" href="#nav">^</a>
    )
}


