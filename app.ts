// State

const state = {
  signedIn: "false",
  main: "home",
};

// Nav

const root: HTMLElement | null = document.querySelector("#root");
const nav = document.createElement("nav");
const navContainer = document.createElement("div");
const logoContainer = document.createElement("div");
const title1: HTMLElement = document.createElement("h2");
const title2 = document.createElement("span");

title1.textContent = "LevelUp ";
title2.textContent = "+";

title1.setAttribute("class", "logo");
title2.setAttribute("class", "font-primary");
navContainer.setAttribute("class", "nav-container");

navContainer.appendChild(title1);
title1.appendChild(title2);

root?.appendChild(nav);
nav?.appendChild(navContainer);

title1.addEventListener("click", () => {
  state.main = "home";
  /* mainRender(state); */
});

// Signing Links

const linksRender = (state: any) => {
  console.log(state);
  const signIn = document.createElement("button");

  const signedInLinks = document.createElement("div");
  const signOut = document.createElement("button");
  const user = document.createElement("img");
  const userName = document.createElement("span");
  if (state.signedIn === "false") {
    let out = document.querySelector("#signedIn");
    if (out) {
      navContainer.removeChild(out);
    }
    signIn.textContent = "SIGNIN";
    signIn.setAttribute("id", "signin");
    signIn.setAttribute("class", "btn");

    navContainer?.appendChild(signIn);

    signIn.addEventListener("click", () => {
      state.main = "signin";
      /* mainRender(state); */
      // temp code until main setup

      state.signedIn = "true";
      linksRender(state);
    });
  } else {
    let myIn = document.querySelector("#signin");

    if (myIn) {
      navContainer.removeChild(myIn);
    }
    signedInLinks.setAttribute("id", "signedIn");
    signedInLinks.setAttribute("class", "signedIn");

    signOut.textContent = "LOGOUT";
    signOut.setAttribute("id", "logout");
    signOut.setAttribute("class", "btn");

    user.setAttribute("id", "user");
    user.setAttribute("src", "./images/logo11.png");
    user.setAttribute("class", "user");
    user.setAttribute("height", "50px");
    user.setAttribute("width", "50px");

    navContainer?.appendChild(signedInLinks);
    signedInLinks?.appendChild(user);
    signedInLinks?.appendChild(signOut);

    signOut.addEventListener("click", () => {
      state.signedIn = "false";
      linksRender(state);
      /* mainRender(state); */
    });
  }
};

linksRender(state);
