const codeLink = "https://github.com/binaya-batas/outside_internship/blob/main/CSS/";
const demoLink = "./CSS/";

let cssProjects = [];
let htmlProjects = ['Assessment-1', 'Assessment-2', 'Assessment-3'];
let cssContainer = document.querySelector('.css-container');
let htmlContainer = document.querySelector('.html-container');
// debugger

//loop to add assignments for css.
for (let i=1; i<=16; i++) {
    cssProjects.push('Assessment-' + i);
}


const createProjects = (projects, container) => {
    // debugger
    for (let i=0; i<=projects.length-1; i++) {
        let assignmentCard = document.createElement('div');
        assignmentCard.setAttribute('class', 'card m-2');
        // assignmentCard.setAttribute('style', 'width: 100%;');
    
        let cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');
    
        let cardTitle = document.createElement('h5');
        cardTitle.setAttribute('class', 'card-title');
        cardTitle.innerText = cssProjects[i];
    
        let codeLink = document.createElement('a');
        codeLink.setAttribute('href', 'https://github.com/binaya-batas/outside_internship/blob/main/CSS/' + cssProjects[i]);
        codeLink.setAttribute('class', 'btn btn-primary me-2');
        codeLink.setAttribute('target', '_blank');
        codeLink.innerHTML = "Code"
    
        let demoLink = document.createElement('a');
        demoLink.setAttribute('href', './CSS/' + cssProjects[i]);
        demoLink.setAttribute('class', 'btn btn-success');
        demoLink.setAttribute('target', '_blank');
        demoLink.innerHTML = "Demo";
    
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(codeLink);
        cardBody.appendChild(demoLink);
    
        assignmentCard.appendChild(cardBody);
    
        container.appendChild(assignmentCard);
    }
}

if(htmlContainer !== null) {createProjects(htmlProjects, htmlContainer);}
if(cssContainer !== null) {createProjects(cssProjects, cssContainer);}
