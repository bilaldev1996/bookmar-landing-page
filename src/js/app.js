const imagenHero = document.querySelector('.imagenPrincipal')
const enlaces = document.querySelectorAll('.link-nav')
/* const bookmark = document.getElementById('bookmark')
const intelligent = document.getElementById('intelligent')
const sharing = document.getElementById('sharing') */
const textContent = document.querySelector('.text-content')





if(innerWidth < 769){
    imagenHero.classList.add('img-fluid')
}else{
    imagenHero.classList.remove('img-fluid')
}

const reset = (element,className) => {
    element.forEach(el => el.classList.remove(className))
}

const template =  (h1,p,src) => {
    return textContent.innerHTML = ` <div id="sharing" class="ac">
            <div class="row mt-5 flex-column-reverse flex-lg-row">
                <div class="col-lg-6">
                    <img src="${src}" alt="imagen tab 1" class="img-fluid text">
                </div>
                <div class="col-lg-6 text-lg-start text-center d-flex flex-column justify-content-center gap-4 p-5 img">
                    <h1 class="fw-bold">${h1}</h1>
                    <p class="text-danger fs-4">${p}
                    </p>

                    ${
                        innerWidth < 769

                    ? `<div class="d-block"></div>`
                    : `<div class="d-block">
                        <button class="btn btn-primary p-3 rounded-3 fs-5 moreInfo">More Info</button>
                    </div>`
                    }
                </div>
            </div>
        </div>`
}

textContent.innerHTML = template('Bookmark in one click','Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',"src/images/illustration-features-tab-1.svg")

enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) =>{
        e.preventDefault();
        reset(enlaces,'active')
        enlace.classList.add('active')
        if(enlace.firstChild.data === 'Simple Bookmarking'){
            template('Bookmark in one click','Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',"src/images/illustration-features-tab-1.svg")
        }else if(enlace.firstChild.data === 'Speedy Searching'){
            template('Intelligent search','Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',"src/images/illustration-features-tab-2.svg")
        }else if(enlace.firstChild.data === 'Easy Sharing'){
            template('Share your bookmarks',"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button","src/images/illustration-features-tab-3.svg")
        }
    })
})

/* Validacion formulario */
// Example starter JavaScript for disabling form submissions if there are invalid fields
const f = () =>{ 
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  }

f()

/* Elevator */
var elevator = new Elevator({
    element: document.querySelector('.subir')
});

/* Scroll reveal */

const sr = ScrollReveal({
    origin:top,
    distance:'60px',
    duration:2500,
    delay:400,
    //reset:true // lo que hace es que vuelve a efectuar el efecto
})


sr.reveal('.logo',{delay:500,origin:'left'})
sr.reveal('.text',{delay:500,origin:'left'})
sr.reveal('.img',{delay:500,origin:'right'})
sr.reveal('.boxes',{delay:1000,origin:'left'})
sr.reveal('.accordion',{delay:1000,origin:'bottom'})
sr.reveal('.icons',{delay:500,origin:'right'})
sr.reveal('.img-fluid',{delay:500,origin:'left'})

/* Change background header*/
function scrollHeader() {
    const header = document.querySelector('.header');
    const logo = document.querySelector('.img-logo');
    const subir = document.querySelector('.subir');

    /* Mostrar boton subir */
    if(this.scrollY>400) {
        subir.style.display = 'block'
    }else{
        subir.style.display = 'none'
    }

    if(this.scrollY>=50) header.classList.add('scroll-header')
    const logo2 = logo.getAttribute('src')
    logo.src = logo2.replace('bookmark','modal')
    document.querySelectorAll('.white-link').forEach(w =>{
        w.style.color = 'white'
    })
}

window.addEventListener('scroll',scrollHeader)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bi-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bi bi-moon' : 'bi bi-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bi bi-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})