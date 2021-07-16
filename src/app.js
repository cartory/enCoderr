// FILES
import logo from './assets/throwcode.png'
import soundtrack from './assets/amongus.mp3'

// STYLES
import './css/stars.css'
import './css/input.css'
import './css/index.css'
import './css/github-corner.css'

// SCRIPTS
import './js/events'
import students from './assets/students.json'


const ost = document.getElementById('ost')

ost.volume = .2
ost.src = soundtrack
ost.playbackRate = 1.1

document.getElementById('logo').src = logo
document.addEventListener('click', async _ => await ost.play())

// LOADING STUDENTS
const ul = document.getElementById('students')
students.forEach(student => {
    if (!document.getElementById(student.name)) {
        ul.innerHTML += (`
            <li id="${student.name}" title="${student.fullName}">
                <img class="student-profile" src=${student.src} alt="#" loading="lazy">
                <a href=${student.github} target="_blank">${student.name}</a>
            </li>
        `)
    }
})