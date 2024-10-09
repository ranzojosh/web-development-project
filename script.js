//projects section//
const projects=[
    {
        title:'Campus Prep Website',
        description:'A WordPress site guiding Kenyan students through campus preparation',
        link:'https://example.com/campus-prep'
        
    },
    {
        title:'HTML portfolio',
        description:'A personal portfolio showcasing my programming and design skills',
        link:'https://example.com/my-portfolio'

    },
    {
        title:'Microbiology Lab Managment System',
        description:'A system developed to manage and record microbiology lab processes',
        link:'https://example.com/lab managment'
    }

];
const projectContainer=
document.getElementaryById('projectContainer');
//function to add projects to the container//
function addprojectsToContainer(){
    projects.forEach(project=>{
        const projectCard=
        document.createElement('div');
        projectCard.classList.add('project-card');

        const projectTitle=
        document.createElement('h3');
        projectTitle.innerText=project.description;

        const projectDescription=
        document.createElement('p');
        projectDescription.innerText=
        project.description;

        const projectLink=
        document.createElement('a');
        projectLink.href=project.link;
        projectLink.innerText='view Project'
        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectDescription);
        projectCard.appendChild(projectLink);

        projectContainer.appendChild(projectCard);


    });
    //call the function to add projects on page load//
}
addprojectsToContainer();
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for your message, " + name + "!");
        // Here, you could add functionality to send the message to your email or a server
    } else {
        alert("Please fill in all fields.");
    }
    
});

