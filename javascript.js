function toggleMenu() {
	const navbar = document.getElementById("navbarContent");
	navbar.classList.toggle("navbar__show");
	console.log("berhasil");
}

const navhome = document.getElementById("navhome");
const navabout = document.getElementById("navabout");
const navexperience = document.getElementById("navexperience");
const navportfolio = document.getElementById("navportfolio");

const mobhome = document.getElementById("mobhome");
const mobabout = document.getElementById("mobabout");
const mobexperience = document.getElementById("mobexperience");
const mobportfolio = document.getElementById("mobportfolio");



window.addEventListener("scroll",()=>{
	const scrollPosition = window.scrollY;

	// Tentukan posisi scroll berdasarkan elemen target
	const homePosition = document.getElementById("home").offsetTop;
	const aboutPosition = document.getElementById("about").offsetTop;
	const experiencePosition = document.getElementById("experience").offsetTop;
	const portfolioPosition = document.getElementById("portfolio").offsetTop;

	// Hapus kelas "active" dari semua elemen
	mobhome.classList.remove("activedlist");
	mobabout.classList.remove("activedlist");
	mobexperience.classList.remove("activedlist");
	mobportfolio.classList.remove("activedlist");


	switch (true) {
		case scrollPosition >= homePosition && scrollPosition < aboutPosition:
			mobhome.classList.add("activedlist");
			break;
		case scrollPosition >= aboutPosition && scrollPosition < experiencePosition:
			mobabout.classList.add("activedlist");
			break;
		case scrollPosition >= experiencePosition &&
			scrollPosition < portfolioPosition:
			mobexperience.classList.add("activedlist");
			break;
		case scrollPosition >= portfolioPosition:
			mobportfolio.classList.add("activedlist");
			break;
		default:
			// Jika tidak ada elemen yang sesuai, tidak perlu menambahkan kelas "active"
			break;
	}
});





// navbar dari bentukan web
 window.addEventListener("scroll", () => {
	const scrollPosition = window.scrollY;

	// Tentukan posisi scroll berdasarkan elemen target
	const homePosition = document.getElementById("home").offsetTop;
	const aboutPosition = document.getElementById("about").offsetTop;
	const experiencePosition = document.getElementById("experience").offsetTop;
	const portfolioPosition = document.getElementById("portfolio").offsetTop;

	// Hapus kelas "active" dari semua elemen
	navhome.classList.remove("actived");
	navabout.classList.remove("actived");
	navexperience.classList.remove("actived");
	navportfolio.classList.remove("actived");

	// Tentukan elemen yang sesuai dengan posisi scroll menggunakan switch case
	switch (true) {
		case scrollPosition >= homePosition && scrollPosition < aboutPosition:
			navhome.classList.add("actived");
			break;
		case scrollPosition >= aboutPosition && scrollPosition < experiencePosition:
			navabout.classList.add("actived");
			break;
		case scrollPosition >= experiencePosition &&
			scrollPosition < portfolioPosition:
			navexperience.classList.add("actived");
			break;
		case scrollPosition >= portfolioPosition:
			navportfolio.classList.add("actived");
			break;
		default:
			// Jika tidak ada elemen yang sesuai, tidak perlu menambahkan kelas "active"
			break;
	}
});

const skills = document.querySelectorAll(".skills__list");
const skillContents = document.querySelectorAll(".skill__content");

skills.forEach((tombol) => {
	tombol.addEventListener("click", () => {
		skills.forEach((content) => {
			content.classList.remove("show");
		});
		skillContents.forEach((btn) => {
			btn.classList.remove("active");
		});
		const tabId = tombol.getAttribute("data-tab");
		const tabContent = document.getElementById(tabId);
		tabContent.classList.add("active");
		tombol.classList.add("show");
	});
});
// skills[0].click();

// counter
const value = [
	{ id: "html", value: 90 },
	{ id: "css", value: 85 },
	{ id: "js", value: 70 },
	{ id: "php", value: 80 },
	{ id: "tailwind", value: 40 },
	{ id: "reactjs", value: 35 },
	{ id: "nextjs", value: 30 },
	{ id: "git", value: 60 },
	{ id: "github", value: 68 },
	{ id: "mysql", value: 75 },
	{ id: "npm", value: 60 },
];

const counters = document.querySelectorAll(".tech__list");
counters.forEach((counter) => {
	counter.addEventListener("mouseenter", () => {
		value.forEach((val) => {
			const element = counter.querySelector(`#${val.id}`);
			let startValue = 0;

			const interval = setInterval(() => {
				startValue++;
				element.innerHTML = startValue + "%";
				if (startValue == val.value) {
					clearInterval(interval);
				}
			}, (val.value * 20) / 100);
		});
	});
});
