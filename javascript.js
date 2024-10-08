let box_test = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
let box_test_title = 'Super cool project'

let main_box = document.querySelector(".project_boxes");

let icons = ['icons/star.svg', 'icons/eye.svg', 'icons/share.svg']

function addProjectBoxes(count) {
    for (let i = 1; i <= count; i++) {
        // Create the outer project box div
        let projectBox = document.createElement('div');
        projectBox.id = 'project_box';

        // Create the inner project box text div
        let projectText = document.createElement('div');
        projectText.id = 'project_box_text';

        // Create the h3 heading
        let projectHeading = document.createElement('h3');
        projectHeading.id = 'project_h2';
        projectHeading.textContent = 'Super Cool Project ' + i; // Adding a number for uniqueness

        // Create the h5 text with class line-clamp
        let projectDescription = document.createElement('h5');
        projectDescription.className = 'line-clamp grey_font';
        projectDescription.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.';

        // Append heading and description to the project text div
        projectText.appendChild(projectHeading);
        projectText.appendChild(projectDescription);

        // Create the icons container div
        let projectIcons = document.createElement('div');
        projectIcons.id = 'project_box_icons';

        // Add 3 icon images
        for (let j = 0; j < 3; j++) {
            let icon = document.createElement('img');
            icon.id = 'project_box_icon';
            icon.src = icons[j]; // Use your actual icon source here
            projectIcons.appendChild(icon);
        }

        // Append the text and icon sections to the outer project box
        projectBox.appendChild(projectText);
        projectBox.appendChild(projectIcons);

        // Append the entire project box to the main container
        main_box.appendChild(projectBox);
    }
}

// Call the function to add multiple project boxes (for example, 5 boxes)
addProjectBoxes(5);