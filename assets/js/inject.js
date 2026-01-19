// DOM Element Selections
const titleContent = document.querySelector('#welcome')
const leftContent = document.querySelector('.left')
const rightContent = document.querySelector('.right')
const textContent = document.querySelector('.text')
const contactContent = document.querySelector('.contact')

const titleString = "Welcome to grit:lab!"

document.getElementsByTagName("head")[0].innerHTML += (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5HQQCP6')


const authenticateButton = document.querySelector('#authenticate-button')
if (authenticateButton) {
    if (authenticateButton.textContent.toLowerCase() === 'register') {
        authenticateButton.textContent = 'Create an Account'
    }
    
    const observer = new MutationObserver(() => {
        if (authenticateButton.textContent.toLowerCase() === 'register') {
            authenticateButton.textContent = 'Create an Account'
        }
    })
    
    observer.observe(authenticateButton, {
        childList: true,
        characterData: true,
        subtree: true
    })
}

const contentString = ` 
    <span id="zone-01-process"><h4>Applying to grit:lab? Here's what you need to do:</h4></span>
    <br>
    1)
    <span id="instruction-1">Register an account and log into the platform.</span>
    <br>
    2) <span id="instruction-2">Complete the Online Cognitive Games.</span>
    <br>
    3)
    <span id="instruction-3">Check your results and continue</span>
    <br>
    <br>
    <span id="account">That's it! If you've already created an account, sign in to complete your application.</span>
`

const contactString = `
    <div id="about-us">
        <h3>Want to know more about grit:lab and the Åland Islands?</h3>
        <br>
        <span style="font-size: 1.25rem;">Visit our website and follow us on social media:</span>
    </div>
    <div class="contact">
        <a target="_blank" href="https://gritlab.ax/">
            <span class="arrow">→</span>
            <span id="contact">Visit our main website</span>
        </a>
    </div>
    <div class="contact">
        <a target="_blank" href="https://gritlab.ax/faq">
            <span class="arrow">→</span>
            <span id="faq">Read the Frequently Asked Questions</span>
        </a>
    </div>
    <div class="contact"> 
        <a target="_blank" href="https://www.instagram.com/gritlab.ax/">
            <span class="arrow">→</span>
            <span id="contactus">Instagram</span>
        </a>
        &nbsp;
        <a target="_blank" href="https://www.linkedin.com/company/grit-lab-%C3%A5land/?viewAsMember=true">
            <span class="arrow">→</span>
            <span id="contactus">LinkedIn</span>
        </a>
        &nbsp;
        <a target="_blank" href="https://www.facebook.com/gritlab.ax/">
            <span class="arrow">→</span>
            <span id="contactus">Facebook</span>
        </a>
    </div>
    <div class="contact">
        <a target="_blank" href="mailto:info@gritlab.ax">
            <span class="arrow">→</span>
            <span id="contactus">Contact us</span>
        </a>
    </div>
`

const fontLink = document.createElement('link')
fontLink.href = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap'
fontLink.rel = 'stylesheet'
document.head.appendChild(fontLink)

const responsiveStyles = document.createElement('style')
responsiveStyles.textContent = `
    body, p, h1, h2, h3, h4, h5, h6, span, div, a, button, input, label, textarea {
        font-family: 'IBM Plex Sans', sans-serif !important;
    }
    
    /* Exclude Font Awesome icons */
    .fa, .fas, .far, .fab, .fal, .fad {
        font-family: 'Font Awesome 6 Free', 'Font Awesome 6 Brands' !important;
    }

	.contact {
        margin-top: 10px;
    }
    
	#welcome {
		padding-left: 0px !important;
	}

    /* Match heading styles */
    #zone-01-process h4,
    #about-us h3 {
        font-size: 1.25rem !important;
        color: #ffffff !important;
        font-weight: 600 !important;
        margin: 0 !important;
    }
    
    /* Position logo top-left */
    .logo {
        position: absolute !important;
        top: 0px !important;
        left: 20px !important;
    }
    
    @media screen and (max-width: 768px) {
        
        #welcome {
            font-size: 1.5rem !important;
			padding-top: 20px !important;
        }
        
        .text, .contact {
            font-size: 0.9rem !important;
            padding: 10px !important;
        }
		
    	.contact {
    	    margin-top: 0px !important;
    	    margin-bottom: 0px !important;
    	    padding-top: 0px !important;
    	    padding-bottom: 0px !important;
    	}
        
        .text p, .contact p {
            margin: 5px 0 !important;
        }
        
        .blocks-container {
            flex-direction: column !important;
            padding: 10px !important;
        }
        
        .left, .right {
            width: 100% !important;
            padding: 10px !important;
        }
        
        #zone-01-process h4,
        #about-us h3 {
            font-size: 1.1rem !important;
        }
    }
`
document.head.appendChild(responsiveStyles)

if (titleContent) {
    titleContent.innerHTML = titleString
    titleContent.style.padding = "10px"
    titleContent.style.fontFamily = "'IBM Plex Sans', sans-serif"
}

if (textContent) {
    textContent.innerHTML = contentString
    textContent.style.color = "#ffffff"
    textContent.style.fontFamily = "'IBM Plex Sans', sans-serif"
}

if (contactContent) {
    contactContent.insertAdjacentHTML('afterend', contactString)
}

document.querySelector('#about-us')?.remove()
document.querySelector('#contact')?.remove()
document.querySelector('.arrow')?.remove()

const contactLinks = document.querySelectorAll(".contact a")
contactLinks.forEach(element => {
    element.style.color = "#ffc959ff"
    element.style.borderColor = "#ffc959ff"
    element.style.fontFamily = "'IBM Plex Sans', sans-serif"
})

const signIn = document.querySelector("#sign-in")
if (signIn) {
    signIn.style.background = "#5562EB"
}

const logoSize = document.querySelector('.logo')
if (logoSize) {
    logoSize.style.width = '100px'
    logoSize.style.height = '100px'
    logoSize.style.backgroundSize = 'contain'
    logoSize.style.backgroundRepeat = 'no-repeat'
    logoSize.style.backgroundPosition = 'center'
}