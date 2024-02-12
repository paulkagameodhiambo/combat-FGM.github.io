let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});
function submitPost() {
    const postInput = document.getElementById('post-input');
    const forumPosts = document.getElementById('forum-posts');

    if (postInput.value.trim() !== '') {
        const postDiv = document.createElement('div');
        postDiv.className = 'forum-post';
        postDiv.innerHTML = `<p>${postInput.value}</p>`;
        
        forumPosts.appendChild(postDiv);
        postInput.value = '';
    }
}
document.getElementById('volunteer-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Fetch form data
    const formData = new FormData(this);
    const firstName = formData.get('firstName');
    const surName = formData.get('surName');
    const email = formData.get('email');
    const phoneNumber = formData.get('phoneNumber');

    // Display form data on the client side (you can customize this part)
    const alertMessage = `First Name: ${firstName}\nSurName: ${surName}\nEmail: ${email}\nPhone Number: ${phoneNumber}`;
    alert('Form submitted!\n\n' + alertMessage);

    // You can also send the form data to the server using AJAX/fetch if needed
    // Example: sendFormDataToServer(formData);
    function sendFormDataToServer(formData) {
        fetch('http://127.0.0.1:3000/submit-form', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Server response:', data);
            // Handle server response as needed
        })
        .catch(error => {
            console.error('Error sending data to the server:', error);
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the carousel
    // Example: $('#carousel').slick();
    // Adjust the code based on the carousel library you choose
});
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    });
document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const newsItem = this.closest('li');
            const description = newsItem.querySelector('.description');

            if (description.style.display === 'none' || description.style.display === '') {
                description.style.display = 'block';
                this.textContent = 'Read Less';
            } else {
                description.style.display = 'none';
                this.textContent = 'Read More';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Fetch form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Validate form data (you can add your validation logic here)

        // For this example, simply show an alert with the form data
        const alertMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        alert('Form submitted!\n\n' + alertMessage);

        // Optionally, you can send the form data to a server using AJAX/fetch
        // Example: sendFormDataToServer(formData);
    });
});

// Example function for sending form data to the server using fetch
function sendFormDataToServer(formData) {
    fetch('http://127.0.0.1:3000/submit-form', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Server response:', data);
        // Handle server response as needed
    })
    .catch(error => {
        console.error('Error sending data to the server:', error);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const newsItem = this.closest('li');
            const description = newsItem.querySelector('.description');

            if (description.classList.contains('expanded')) {
                // If description is expanded, collapse it
                description.classList.remove('expanded');
                this.textContent = 'Read More';
            } else {
                // If description is collapsed, expand it
                description.classList.add('expanded');
                this.textContent = 'Read Less';
            }
        });
    });
});

function toggleDarkMode() {
    const bodyElement = document.getElementById('bodyElement');
    bodyElement.classList.toggle('dark-mode');

    // You can add additional logic if needed, like saving the user's preference to localStorage
}