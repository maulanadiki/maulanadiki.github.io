function toggleMenu() {
	const navbar = document.getElementById("navbarContent");
	navbar.classList.toggle("navbar__show");
	console.log("berhasil");
}

document.addEventListener("scroll", function () {
	const element = document.getElementById("home");
	const navWeb = document.getElementById("navbarContent");

	const scrollPosition = window.scrollY;
	// if (scrollPosition > 0) {
	// 	const opacity = 1 - scrollPosition / 500;
	// 	element.style.opacity = opacity;
	// 	navWeb.style.opacity = opacity;
	// 	console.log(opacity);
	// } else {
	// 	element.style.opacity = 1;
	// 	mobile.style.opacity = 1;
	// }
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

// function motionScroll(){
// 	const skillContents = document.querySelectorAll(".reveal");
// 	for(let i = 0; i<skillContents.length; i++){
// 		const windowsHeight = window.innerHeight;
// 		const elemenTop = skillContents[i].getBoundingClientRect().top;
// 		const elemenVisible =150;

// 		if(elemenTop < windowsHeight - elemenVisible){
// 			skillContents[i].classList.add("active");
// 		}else{
// 			skillContents[i].classList.remove("active");
// 		}
// 	}
// }
// window.addEventListener("scroll", motionScroll);

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
		value.forEach(val=>{
			const element = counter.querySelector(`#${val.id}`);
			let startValue = 0;

			const interval = setInterval(()=>{
				startValue++;
				element.innerHTML = startValue + "%";
				if(startValue == val.value){
					clearInterval(interval);
				}

			},val.value*20/100);
		});
	});
});


  
  
  
