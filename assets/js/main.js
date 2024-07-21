/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: 'To do App',
            description: 'This is a simple To do app containing three tabs, where we can manually add the tasks which we want to do and mark them done once completed.',
            githubLink: 'https://github.com/neelp1309/to-do-app/tree/my-new-branch'
        },
        {
            title: 'Calculator',
            description: 'This calculator was made in order to test and advance my JavaScript skills.',
            githubLink: 'https://github.com/neelp1309/Calculator/tree/my-new-branch'
        },
        // Add more projects here
    ];
    
        const projectList = document.getElementById('project-list');
    
        projects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');
    
            const projectTitle = document.createElement('h2');
            projectTitle.textContent = project.title;
    
            const projectDescription = document.createElement('p');
            projectDescription.textContent = project.description;
    
            const projectLink = document.createElement('a');
            projectLink.href = project.githubLink;
            projectLink.textContent = 'View on GitHub';
            projectLink.target = '_blank';
    
            projectItem.appendChild(projectTitle);
            projectItem.appendChild(projectDescription);
            projectItem.appendChild(projectLink);
    
            projectList.appendChild(projectItem);
        });
    });