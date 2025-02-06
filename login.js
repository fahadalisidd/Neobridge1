function toggleForms() {
    document.getElementById('login-container').classList.toggle('hidden');
    document.getElementById('signup-container').classList.toggle('hidden');
}

function validateLogin() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
    } else {
        document.getElementById('login-error-message').style.display = 'block';
    }
}

function signupUser() {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    if (username && email && password) {
        alert('Signup successful! You can now login.');
        toggleForms();
    } else {
        alert('Please fill in all fields.');
    }
}

// Language Translations
const translations = {
    "en": {
        "login-title": "Login to Neobridge",
        "login-btn": "Login",
        "signup-title": "Sign Up to Neobridge",
        "signup-btn": "Sign Up",
        "login-error-message": "Invalid username or password",
        "signup-link": "Don't have an account? <a href='#' onclick='toggleForms()'>Sign up</a>",
        "login-link": "Already have an account? <a href='#' onclick='toggleForms()'>Login</a>"
    },
    "hi": {
        "login-title": "NeoBridge में लॉगिन करें",
        "login-btn": "लॉगिन",
        "signup-title": "NeoBridge में साइन अप करें",
        "signup-btn": "साइन अप",
        "login-error-message": "अमान्य उपयोगकर्ता नाम या पासवर्ड",
        "signup-link": "कोई खाता नहीं है? <a href='#' onclick='toggleForms()'>साइन अप करें</a>",
        "login-link": "पहले से ही खाता है? <a href='#' onclick='toggleForms()'>लॉगिन करें</a>"
    },
    "te": {
        "login-title": "NeoBridge లో లాగిన్ అవ్వండి",
        "login-btn": "లాగిన్",
        "signup-title": "NeoBridge లో సైన్ అప్ చేయండి",
        "signup-btn": "సైన్ అప్",
        "login-error-message": "చెల్లని వినియోగదారు పేరు లేదా పాస్‌వర్డ్",
        "signup-link": "ఖాతా లేదు? <a href='#' onclick='toggleForms()'>సైన్ అప్ చేయండి</a>",
        "login-link": "ఖాతా ఉందా? <a href='#' onclick='toggleForms()'>లాగిన్ అవ్వండి</a>"
    }
};

function changeLanguage() {
    let lang = document.getElementById("language").value;
    for (let key in translations[lang]) {
        document.getElementById(key).innerHTML = translations[lang][key];
    }
}
