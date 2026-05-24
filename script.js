const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});

const menuToggle = document.getElementById("menu-toggle");

const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");
    const announcementInput = document.getElementById("announcement-message");

const postAnnouncementBtn = document.getElementById("post-announcement");

const announcementBox = document.getElementById("announcement-box");

postAnnouncementBtn.addEventListener("click", async () => {

if(announcementInput.value.trim() === "") return;

await addDoc(collection(db, "announcements"), {

text: announcementInput.value,

time: Date.now(),

sender: currentUser

});

announcementInput.value = "";

});

const announcementQuery = query(

collection(db, "announcements"),

orderBy("time", "desc")

);

onSnapshot(announcementQuery, (snapshot) => {

announcementBox.innerHTML = "";

snapshot.docs.forEach((doc) => {

const data = doc.data();

announcementBox.innerHTML += `

<div class="announcement">

<h4>${data.sender}</h4>

<p>${data.text}</p>

<small>

${new Date(data.time).toLocaleString()}

</small>

</div>

`;

});

});

});
