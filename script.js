emailjs.init('ltLJe7kfBxvGEYb_H');

document.getElementById('contact-form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = {
            user_name: document.getElementById('name').value,
            user_email: document.getElementById('email').value,
            user_message: document.getElementById('message').value,
        };

        emailjs.send('service_lfuek7v', 'template_3otf0sg', formData)
            .then(function (response) {
                console.log('Email sent successfully!', response);
                alert('Email sent successfully!');
            }, function (error) {
                console.error('Failed to send email:', error);
                alert('Failed to send email.');
            });
    });

const upButton = document.getElementById('up-button');

const observer = new IntersectionObserver((entires) => {
    if (entires[0].isIntersecting) {
        upButton.style.backgroundColor = "rgb(189, 189, 189)";
    } else {
        upButton.style.backgroundColor = "coral";
    }
});

observer.observe(document.querySelector('.footer'));

window.addEventListener('scroll', (e) => {
    if (window.scrollY > 600) {
        upButton.style.visibility = "visible";
    }

    if (window.scrollY < 600) {
        upButton.style.visibility = "hidden";
    }
});

upButton.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.presentation-page').scrollIntoView({
        behavior: 'smooth'
    });
});

const navHomeButton = document.querySelector(".nav-home-button");

navHomeButton.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.presentation-page').scrollIntoView({
        behavior: 'smooth'
    });
});

const navAboutButton = document.querySelector(".nav-about-button");

navAboutButton.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.about-page').scrollIntoView({
        behavior: 'smooth'
    });
});

const navResumeButton = document.querySelector(".nav-resume-button");

navResumeButton.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.resume-container').scrollIntoView({
        behavior: 'smooth'
    });
});

const navSkillsButton = document.querySelector(".nav-skills-button");

navSkillsButton.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.skills-container').scrollIntoView({
        behavior: 'smooth'
    });
});

const navyPortfolioButton = document.querySelector(".nav-portfolio-button");

navyPortfolioButton.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.portfolio-container').scrollIntoView({
        behavior: 'smooth'
    });
});

const navContactButton = document.querySelector(".nav-contact-button");

navContactButton.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.contact-container').scrollIntoView({
        behavior: 'smooth'
    });
});