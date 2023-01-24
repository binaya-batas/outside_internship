let projects = [
    {title: 'figma', href: 'figma-projects.html'},
    {title: 'html', href: 'html-projects.html'},
    {title: 'css', href: 'css-projects.html'},
    {title: 'scss', href: 'scss-projects.html'},
    {title: 'bootstrap', href: 'bootstrap-projects.html'},
    {title: 'final fed', href: 'final-assignment.html'},  
];

const createProjects = (projects, container, folder) => {
    // debugger
    for (let i=0; i<=projects.length-1; i++) {
        let assignmentCard = document.createElement('div');
        assignmentCard.setAttribute('class', 'card m-2');
        assignmentCard.setAttribute('style', 'width: 18rem;');
    
        let cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');
    
        let cardTitle = document.createElement('h5');
        cardTitle.setAttribute('class', 'card-title');
        cardTitle.innerText = cssProjects[i];
    
        let codeLink = document.createElement('a');
        codeLink.setAttribute('href', 'https://github.com/binaya-batas/outside_internship/blob/main/'+ folder + cssProjects[i]);
        codeLink.setAttribute('class', 'btn btn-primary me-2');
        codeLink.setAttribute('target', '_blank');
        codeLink.innerHTML = "Code"
    
        let demoLink = document.createElement('a');
        demoLink.setAttribute('href', folder + cssProjects[i]);
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

let cssProjects = [];
for (let i=1; i<=16; i++) {
    cssProjects.push('Assessment-' + i);
}
let cssContainer = document.querySelector('.css-container');
if(cssContainer !== null) {createProjects(cssProjects, cssContainer, 'CSS/');}


let htmlProjects = ['Assessment-1', 'Assessment-2', 'Assessment-3'];
let htmlContainer = document.querySelector('.html-container');
if(htmlContainer !== null) {createProjects(htmlProjects, htmlContainer, 'HTML/');}

let scssProjects = ['Assessment-1'];
let scssContainer = document.querySelector('.scss-container');
if(htmlContainer !== null) {createProjects(scssProjects, scssContainer, 'SCSS/');}

let bootstrapProjects = ['Assessment-1'];
let bootstrapContainer = document.querySelector('.bootstrap-container');
if(bootstrapContainer !== null) {createProjects(bootstrapProjects, bootstrapContainer, 'BOOTSTRAP/');}



////////
let assignments = document.querySelector('.assignments'); //assignments list.
for (let i=0; i<=projects.length-1; i++) {
    let project = document.createElement('li');

    let a = document.createElement('a'); // a tag inside of li.
    a.classList.add('btn');
    a.classList.add('btn-primary');
    a.classList.add('m-2');
    a.setAttribute('href', projects[i].href)
    a.innerText = projects[i].title.toUpperCase();


    //Appending a tag to project(li).
    project.appendChild(a);

    //Appending main projects to the assignment container.
    assignments.appendChild(project);
}

//End of javascript for main index.html

