// Enhanced JavaScript with section collapse/expand animations and improved interactions

// Document ready function
document.addEventListener('DOMContentLoaded', function() {
    // Initialize collapsible sections
    initCollapsibleSections();
    
    // Initialize dropdown menu
    initDropdownMenu();
    
    // Initialize scroll to top button
    initScrollToTopButton();
    
    // Add smooth scrolling to all links
    initSmoothScrolling();
    
    // Add hover effects to skill items
    initSkillItemsAnimation();
});

// Initialize collapsible sections
function initCollapsibleSections() {
    // Get all section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    
    // Add click event listener to each section title
    sectionTitles.forEach(title => {
        // Get the next sibling element (section content)
        const content = title.nextElementSibling;
        
        // Add section-content class to the content
        content.classList.add('section-content');
        
        // Store the original height of the content
        content.dataset.height = content.scrollHeight + 'px';
        content.style.maxHeight = content.scrollHeight + 'px';
        
        // Add click event listener
        title.addEventListener('click', function() {
            // Toggle collapsed class on title
            this.classList.toggle('collapsed');
            
            // Toggle collapsed class on content
            content.classList.toggle('collapsed');
            
            // Set max-height based on collapsed state
            if (content.classList.contains('collapsed')) {
                content.style.maxHeight = '0';
            } else {
                content.style.maxHeight = content.dataset.height;
            }
        });
    });
}

// Initialize dropdown menu
function initDropdownMenu() {
    const dropbtn = document.getElementById('nav-dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    if (dropbtn && dropdownContent) {
        // Replace mouseover with click for better mobile experience
        dropbtn.addEventListener('click', function(e) {
            e.preventDefault();
            dropdownContent.classList.toggle('hidden');
            dropdownContent.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.matches('.dropbtn') && !dropdownContent.contains(e.target)) {
                if (dropdownContent.classList.contains('show')) {
                    dropdownContent.classList.remove('show');
                    dropdownContent.classList.add('hidden');
                }
            }
        });
    }
}

// Initialize scroll to top button
function initScrollToTopButton() {
    // Create scroll to top button
    const scrollToTopBtn = document.createElement('div');
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize smooth scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Initialize skill items animation
function initSkillItemsAnimation() {
    const skillItems = document.querySelectorAll('.skill-item, .tool-item');
    
    // Add hover effect with random delay
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Replace the old random animation with a more subtle and professional one
    animateSkillItems();
}

// Animate skill items with a subtle pulse effect
function animateSkillItems() {
    const toolItems = document.querySelectorAll('.tool-item');
    let index = 0;
    
    // Create a subtle animation sequence
    setInterval(() => {
        // Reset previous item
        if (index > 0) {
            toolItems[index - 1].style.transform = 'translateY(0)';
        } else if (index === 0 && toolItems.length > 0) {
            toolItems[toolItems.length - 1].style.transform = 'translateY(0)';
        }
        
        // Animate current item
        if (toolItems[index]) {
            toolItems[index].style.transform = 'translateY(-5px)';
        }
        
        // Increment index
        index = (index + 1) % toolItems.length;
    }, 2000);
}

// Side navigation functionality (preserved from original)
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Password generator functionality (preserved from original)
function genPassword() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()";
    var passwordLength = document.getElementById("password-length").value;
    var password = "";
    if (passwordLength > 200) {
        passwordLength = 200;
    }
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password-generated").value = password;
}

function copyPassword() {
    var copyText = document.getElementById("password-generated");
    copyText.select();
    document.execCommand("copy");
    
    // Add feedback for copy action
    const feedback = document.createElement('div');
    feedback.textContent = 'Copied!';
    feedback.style.position = 'absolute';
    feedback.style.backgroundColor = 'var(--secondary-color)';
    feedback.style.color = 'white';
    feedback.style.padding = '5px 10px';
    feedback.style.borderRadius = '3px';
    feedback.style.opacity = '0';
    feedback.style.transition = 'opacity 0.3s ease';
    
    const rect = copyText.getBoundingClientRect();
    feedback.style.top = `${rect.top - 30}px`;
    feedback.style.left = `${rect.left + rect.width / 2 - 30}px`;
    
    document.body.appendChild(feedback);
    
    // Show and then hide feedback
    setTimeout(() => {
        feedback.style.opacity = '1';
        setTimeout(() => {
            feedback.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(feedback);
            }, 300);
        }, 1500);
    }, 0);
}

// Random number generator functionality (preserved from original)
function getRandom() {
    var lowBoundRandom = parseFloat(document.getElementById("low-bound-random").value);
    var highBoundRandom = parseFloat(document.getElementById("high-bound-random").value);

    document.getElementById("random-generated").value = Math.floor(((highBoundRandom - lowBoundRandom) * Math.random() + lowBoundRandom) * 100) / 100;
}

function copyRandom() {
    var copyText = document.getElementById("random-generated");
    copyText.select();
    document.execCommand("copy");
    
    // Add feedback for copy action (same as password copy)
    const feedback = document.createElement('div');
    feedback.textContent = 'Copied!';
    feedback.style.position = 'absolute';
    feedback.style.backgroundColor = 'var(--secondary-color)';
    feedback.style.color = 'white';
    feedback.style.padding = '5px 10px';
    feedback.style.borderRadius = '3px';
    feedback.style.opacity = '0';
    feedback.style.transition = 'opacity 0.3s ease';
    
    const rect = copyText.getBoundingClientRect();
    feedback.style.top = `${rect.top - 30}px`;
    feedback.style.left = `${rect.left + rect.width / 2 - 30}px`;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.style.opacity = '1';
        setTimeout(() => {
            feedback.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(feedback);
            }, 300);
        }, 1500);
    }, 0);
}

// RegExp test functionality (preserved from original)
function testRegexp() {
    var regexpPattern = document.getElementById("regexpPattern").value;
    var testString = document.getElementById("testString").value;
    var regexpMatches = testString.match(regexpPattern)
    if (regexpMatches != null) {
        document.getElementById("regexpMatches").value = '"' + regexpMatches.join('", "') + '"';
    } else {
        document.getElementById("regexpMatches").value = '';
    }
}

// Image upload functionality (preserved from original)
const fileinput = document.getElementById('fileinput');
const canvas = document.getElementById('canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    
    const srcImage = new Image;
    
    let imgData = null;
    
    let originalPixels = null;
    
    fileinput.onchange = function(e) {
        if (e.target.files && e.target.files.item(0)) {
            srcImage.src = URL.createObjectURL(e.target.files[0]);
        }
    }
    
    srcImage.onload = function() {
        canvas.width = srcImage.width;
        canvas.height = srcImage.height;
        ctx.drawImage(srcImage, 0, 0, srcImage.width, srcImage.height);
        imgData = ctx.getImageData(0, 0, srcImage.width, srcImage.height);
        originalPixels = imgData.data.slice();
    
        // Process to text
        var n_columns = parseFloat(document.getElementById("ascii-art-columns").value);
        // TODO implementation
    }
}

// Add section for handling section collapse state persistence
function saveSectionStates() {
    const sections = document.querySelectorAll('.section-title');
    const states = {};
    
    sections.forEach((section, index) => {
        states[index] = section.classList.contains('collapsed');
    });
    
    localStorage.setItem('sectionStates', JSON.stringify(states));
}

function loadSectionStates() {
    const savedStates = localStorage.getItem('sectionStates');
    
    if (savedStates) {
        const states = JSON.parse(savedStates);
        const sections = document.querySelectorAll('.section-title');
        
        sections.forEach((section, index) => {
            if (states[index]) {
                // Trigger click to collapse
                section.click();
            }
        });
    }
}

// Call load section states after initialization
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for other initializations to complete
    setTimeout(loadSectionStates, 500);
});

// Save section states when user leaves page
window.addEventListener('beforeunload', saveSectionStates);
