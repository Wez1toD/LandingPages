const header = document.getElementById("header");

const nav_links = document.getElementsByClassName("hero_header_nav_link");
const contact_btn = document.getElementsByClassName("hero_body_contact");

const header_bars_btn = document.getElementById("header_bars");
const header_nav = document.getElementById("header_nav");

function ScrollSection(sectionIndex) {
	let sectionScroll = (window.innerHeight - header.clientHeight) * sectionIndex;
	window.scrollTo({
		top: sectionScroll,
		left: 0,
		behavior: "smooth",
	});
}

contact_btn[0].addEventListener("click", () => {
	ScrollSection(5);
	if (header_nav.classList.contains("active"))
		header_nav.classList.remove("active");
});

[...nav_links].map((link, index) => {
	link.addEventListener("click", () => {
		ScrollSection(index);
		if (header_nav.classList.contains("active"))
			header_nav.classList.remove("active");
	});
});

header_bars_btn.addEventListener("click", () => {
	header_nav.classList.toggle("active");
});
