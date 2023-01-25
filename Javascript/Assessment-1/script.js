let profileLinks = ['https://www.facebook.com/', 'https://twitter.com/', 'https://www.linkedin.com/in/binaya-batas-a87a31255/','https://github.com/binaya-batas'];

let container = document.querySelector('.container');

let profile = document.createElement('div');
profile.setAttribute('class', 'profile');

container.appendChild(profile);

//profile child
let figure = document.createElement('figure');
figure.setAttribute('class', 'profile__image');

profile.appendChild(figure);

let image = document.createElement('img');
image.setAttribute('src', 'binaya-image.jpeg');

figure.appendChild(image);

let profileInfo = document.createElement('div');
profileInfo.setAttribute('class', 'profile__info');

profile.appendChild(profileInfo);

let facebookIcon = document.createElement('i');
facebookIcon.setAttribute('class', 'fa fa-facebook')

let facebookLink = document.createElement('a');
facebookLink.setAttribute('href', 'https://www.facebook.com/');
facebookLink.setAttribute('target', '_blank');
facebookLink.appendChild(facebookIcon)

let twitterIcon = document.createElement('i');
twitterIcon.setAttribute('class', 'fa fa-twitter');

let twitterLink = document.createElement('a');
twitterLink.setAttribute('href', 'https://www.twitter.com/');
twitterLink.setAttribute('target', '_blank');
twitterLink.appendChild(twitterIcon)

let linkedinIcon = document.createElement('i');
linkedinIcon.setAttribute('class', 'fa fa-linkedin');

let linkedinLink = document.createElement('a');
linkedinLink.setAttribute('href', 'https://www.linkedin.com/in/binaya-batas-a87a31255/');
linkedinLink.setAttribute('target', '_blank');
linkedinLink.appendChild(linkedinIcon)

let githubIcon = document.createElement('i');
githubIcon.setAttribute('class', 'fa fa-github');

let githubLink = document.createElement('a');
githubLink.setAttribute('href', 'https://github.com/binaya-batas');
githubLink.setAttribute('target', '_blank');
githubLink.appendChild(githubIcon)

profileInfo.appendChild(facebookLink);
profileInfo.appendChild(twitterLink);
profileInfo.appendChild(linkedinLink);
profileInfo.appendChild(githubLink);

let description = document.createElement('div');
description.setAttribute('class', 'description');

let descriptionText = document.createElement('p');
descriptionText.innerText = "Hi, my name is Binaya Batas. I am studying BSc. IT at ISMT college."

description.appendChild(descriptionText)
container.appendChild(description)

