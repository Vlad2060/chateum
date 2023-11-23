// elements
const registerPageButton = document.getElementById('register-panel-button')
const registerPanel = document.getElementById('register-panel')

const mail = document.getElementById('mail').textContent

const loginPanel = document.getElementById('login-panel')
const returnButton = document.getElementById('return')


registerPageButton.addEventListener('click', () => {
    loginPanel.style.transform = 'scale(0)'
    loginPanel.style.opacity = '0'

    registerPanel.style.transform = 'scale(1)'
    registerPanel.style.opacity = '1'
})

returnButton.addEventListener('click', () => {
    loginPanel.style.transform = 'scale(1)'
    loginPanel.style.opacity = '1'

    registerPanel.style.transform = 'scale(0)'
    registerPanel.style.opacity = '0'
})


document.getElementById('fileInput').addEventListener('change', function () {
    const fileInput = document.getElementById('fileInput')
    const label = document.getElementById('fileInputLabel')

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader()

        reader.onload = function (e) {
            // Set the background of the label to the image
            label.style.backgroundImage = `url(${e.target.result})`
            label.textContent = '' // Clear text content
        }

        reader.readAsDataURL(fileInput.files[0])
    }
})