import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAzAdLLuqbfiu4GWc_dCUo1ThLA-GTouss",
    authDomain: "rok4life-project.firebaseapp.com",
    projectId: "rok4life-project",
    storageBucket: "rok4life-project.appspot.com",
    messagingSenderId: "988785632716",
    appId: "1:988785632716:web:e823486f4c5797fa332969",
    measurementId: "G-NQ65V1D3L4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);
const db = getFirestore(app)


let volunteer_submit_button = document.getElementById('volunteer-submit')


volunteer_submit_button.addEventListener('click', (ev => {ev.preventDefault()
    let volunteer_name = document.getElementById('volunteer-name')
    let volunteer_email = document.getElementById('volunteer-email')
    let volunteer_subject = document.getElementById('volunteer-subject')
    let volunteer_phone = document.getElementById('volunteer-phone')
    let volunteer_message = document.getElementById('volunteer-message')
    addDoc(collection(db, "Volunteers"), {
        volunteer_name: volunteer_name,
        volunteer_email: volunteer_email,
        volunteer_subject: volunteer_subject,
        volunteer_phone: volunteer_phone,
        volunteer_message: volunteer_message,
    }).then(()=>{console.log("saved data")}).catch((error)=>{console.log(error)})}))


