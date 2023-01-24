let projects = [
    {title: 'figma', href: 'figma-projects.html'},
    {title: 'html', href: 'html-projects.html'},
    {title: 'css', href: 'css-projects.html'},
    {title: 'scss', href: 'scss-projects.html'},
    {title: 'bootstrap', href: 'bootstrap-projects.html'},
    {title: 'final fed', href: 'final-assignment.html'},  
];

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

