import gsap from "gsap";

export const gsapFooter = () => {
    const tl = gsap.timeline();
    tl.fromTo(".footer", { opacity: 0 }, { opacity: 1, duration: 1, delay: 1 });
}

export const gsapNav = () => {
    const tl = gsap.timeline();
    tl.fromTo(".nav", { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
    tl.fromTo(".nav-link", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5");
}

export const gsapHome = () => {
    const tl = gsap.timeline();
    tl.fromTo(".home-title", { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: "back" });
    tl.fromTo(".home-img", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5");
}

export const gsapTable = () => {
    const tl = gsap.timeline();
    tl.fromTo(".tableDriverStandings", { scale: 0 }, { scale: 1, duration: 1});
}
