// State

const state = {
  signedIn: "false",
  main: "home",
};

// Nav

const root: HTMLElement | null = document.querySelector("#root");

const nav = document.createElement("nav");
const mainDiv = document.createElement("main");

mainDiv.setAttribute("id", "main");

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
root?.appendChild(mainDiv);
nav?.appendChild(navContainer);

title1.addEventListener("click", () => {
  state.main = "home";
  mainRender(state);
});

// Signing Links

const linksRender = (state: any) => {
  console.log(state);
  const signIn = document.createElement("button");

  const signedInLinks = document.createElement("div");
  const signOut = document.createElement("button");
  const user = document.createElement("img");
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
      mainRender(state);
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
      mainRender(state);
    });
  }
};

linksRender(state);

// Home

const mainRender = (state: any) => {
  console.log(state);
  const main: HTMLElement | null = document.querySelector("#main");
  if (state.main === "home") {
    if (state.signedIn === "true") {
      let signcon = document.querySelector("#sign-container");
      if (signcon) {
        main?.removeChild(signcon);
      }
      let trackerCon = document.querySelector("#tracker-container");
      if (trackerCon) {
      } else {
        const trackerContainer = document.createElement("div");
        const tracker = document.createElement("div");

        let content = document.createElement("div");

        const trackerTitle = document.createElement("h2");

        trackerContainer.setAttribute("id", "tracker-container");
        tracker.setAttribute("id", "card1");

        content.setAttribute("id", "tracker-content");

        trackerTitle.setAttribute("id", "title--tracker");

        trackerContainer.setAttribute("class", "tracker-container");
        tracker.setAttribute("class", "cards");

        content.setAttribute("class", "tracker-content");

        trackerTitle.setAttribute("class", "title--tracker");

        trackerTitle.textContent = "tracker";

        main?.appendChild(trackerContainer);
        trackerContainer.appendChild(tracker);
        tracker.appendChild(content);
        content.appendChild(trackerTitle);
      }
    } else {
      let signcon = document.querySelector("#sign-container");
      if (signcon) {
        main?.removeChild(signcon);
      }
      let trackerCon = document.querySelector("#tracker-container");
      if (trackerCon) {
        main?.removeChild(trackerCon);
      }
      const trackerContainer = document.createElement("div");
      const tracker = document.createElement("div");
      let content = document.createElement("div");
      const trackerTitle = document.createElement("h2");
      const offline = document.createElement("p");

      trackerContainer.setAttribute("id", "tracker-container");
      tracker.setAttribute("id", "card1");
      content.setAttribute("id", "tracker-content");
      trackerTitle.setAttribute("id", "title--tracker");
      offline.setAttribute("id", "offline-text");

      trackerContainer.setAttribute("class", "tracker-container");
      tracker.setAttribute("class", "cards");
      content.setAttribute("class", "tracker-content");
      trackerTitle.setAttribute("class", "title--tracker");
      offline.setAttribute("class", "offline-text");

      trackerTitle.textContent = "Skills Tracker";
      offline.textContent = "Please sign in to view tracker";

      main?.appendChild(trackerContainer);
      trackerContainer.appendChild(tracker);
      tracker.appendChild(content);
      content.appendChild(trackerTitle);
      content.appendChild(offline);
    }
  } else if (state.main === "signin") {
    let trackerCon = document.querySelector("#tracker-container");
    if (trackerCon) {
      main?.removeChild(trackerCon);
    }
    let signCon = document.querySelector("#sign-container");
    if (signCon) {
    } else {
      const signContainer = document.createElement("div");
      const signer = document.createElement("div");
      const signContent = document.createElement("div");
      let userCont = document.createElement("div");
      let user = document.createElement("img");
      const signQuestion = document.createElement("p");

      signContainer.setAttribute("id", "sign-container");
      signer.setAttribute("id", "signer");
      signContent.setAttribute("id", "sign-content");
      userCont.setAttribute("id", "user-container");
      user.setAttribute("id", "user");
      signQuestion.setAttribute("id", "sQ");

      signContainer.setAttribute("class", "sign-container");
      signer.setAttribute("class", "cards");
      signContent.setAttribute("class", "sign-content");
      userCont.setAttribute("class", "user-container");
      user.setAttribute("class", "user");
      signQuestion.setAttribute("class", "sQ");
      user.setAttribute("src", "./images/logo11.png");
      user.setAttribute("height", "50px");
      user.setAttribute("width", "50px");

      signQuestion.textContent = "Sign-in as User1?";

      let signIn = document.createElement("button");

      signIn.textContent = "SIGNIN";
      signIn.setAttribute("id", "signinFinal");
      signIn.setAttribute("class", "btn");

      main?.appendChild(signContainer);
      signContainer.appendChild(signer);
      signer.appendChild(signContent);
      signContent.appendChild(userCont);
      userCont.appendChild(user);
      userCont.appendChild(signQuestion);
      signContent.appendChild(signIn);

      signIn.addEventListener("click", () => {
        state.signedIn = "true";
        state.main = "home";
        linksRender(state);
        mainRender(state);
      });
    }
  }
};

mainRender(state);
