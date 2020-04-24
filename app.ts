const firebaseConfig = {
  apiKey: "AIzaSyBRtCV8NpJCXYuXEZTR8YuPWurH5wgL1MA",
  authDomain: "level-up-cce3c.firebaseapp.com",
  databaseURL: "https://level-up-cce3c.firebaseio.com",
  projectId: "level-up-cce3c",
  storageBucket: "level-up-cce3c.appspot.com",
  messagingSenderId: "850328883202",
  appId: "1:850328883202:web:356223dfa4d7618f2d571b",
};
// Initialize Firebase
/// <reference path="firebase" />
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

// State

// auth listener

auth.onAuthStateChanged((user: any) => {
  if (user) {
    console.log(user);
    db.collection(`user/${user.email}/user-details`)
      .get()
      .then((snapshot: any) => {
        snapshot.docs.forEach((doc: any) => {
          console.log(
            `user ${doc.data().username} is registered to ${
              user.email
            } and is logged in with token ${user.refreshToken}`
          );
          if (state.signedIn === "false") {
            state.signedIn = "true";
            state.username = doc.data().username;
            state.token = user.refreshToken;

            linksRender(state);
            mainRender(state);
          }
        });
      });
  } else {
    console.log(`user is not logged in`);
  }
});

// store

const state = {
  signedIn: "false",
  username: "",
  main: "home",
  token: "",
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
  const signUp = document.createElement("button");

  const signedInLinks = document.createElement("div");
  const signOut = document.createElement("button");
  const user = document.createElement("img");
  if (state.signedIn === "false") {
    let out = document.querySelector("#signedIn");
    if (out) {
      navContainer.removeChild(out);
    }
    const signingLinksContainer = document.createElement("div");

    signingLinksContainer.setAttribute("id", "links-container");
    signingLinksContainer.setAttribute("class", "links-container");

    signIn.textContent = "SIGNIN";
    signIn.setAttribute("id", "signin");
    signIn.setAttribute("class", "btn");

    signUp.textContent = "SIGNUP";
    signUp.setAttribute("id", "signup");
    signUp.setAttribute("class", "btn");

    navContainer?.appendChild(signingLinksContainer);
    signingLinksContainer?.appendChild(signIn);
    signingLinksContainer?.appendChild(signUp);

    signIn.addEventListener("click", () => {
      state.main = "signin";
      mainRender(state);
    });

    signUp.addEventListener("click", () => {
      state.main = "signup";
      mainRender(state);
    });
  } else {
    let myIn = document.querySelector("#links-container");

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

    signOut.addEventListener("click", (e: any) => {
      e.preventDefault();
      delete state.token;
      auth.signOut().then(() => {
        state.signedIn = "false";
        linksRender(state);
        mainRender(state);
      });
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
  } else if (state.main === "signup") {
    let trackerCon = document.querySelector("#tracker-container");
    if (trackerCon) {
      main?.removeChild(trackerCon);
    }
    let signCon = document.querySelector("#sign-container");
    if (signCon) {
      main?.removeChild(signCon);
    }
    const signContainer = document.createElement("div");
    const signer = document.createElement("div");
    const signContent = document.createElement("div");
    const detailsForm = document.createElement("form");
    const usernameTitle = document.createElement("label");
    const usernameInput = document.createElement("input");
    const mailTitle = document.createElement("label");
    const mailInput = document.createElement("input");
    const pWTitle = document.createElement("label");
    const pWInput = document.createElement("input");

    signContainer.setAttribute("id", "sign-container");
    signer.setAttribute("id", "signer");
    signContent.setAttribute("id", "sign-content");
    detailsForm.setAttribute("id", "details-form");
    usernameTitle.setAttribute("id", "username-title");
    usernameInput.setAttribute("id", "username-input");
    mailTitle.setAttribute("id", "mail-title");
    mailInput.setAttribute("id", "mail-input");
    pWTitle.setAttribute("id", "password-title");
    pWInput.setAttribute("id", "password-input");

    signContainer.setAttribute("class", "sign-container");
    signer.setAttribute("class", "cards");
    signContent.setAttribute("class", "sign-content");
    detailsForm.setAttribute("class", "details-form");
    usernameTitle.setAttribute("class", "username-title");
    usernameInput.setAttribute("class", "username-input");
    mailTitle.setAttribute("class", "mail-title");
    mailInput.setAttribute("class", "mail-input");
    pWTitle.setAttribute("class", "password-title");
    pWInput.setAttribute("class", "password-input");

    usernameTitle.setAttribute("for", "mail-input");
    usernameInput.setAttribute("type", "text");
    usernameInput.setAttribute("name", "mail-input");

    mailTitle.setAttribute("for", "mail-input");
    mailInput.setAttribute("type", "email");
    mailInput.setAttribute("name", "mail-input");

    pWTitle.setAttribute("for", "password-input");
    pWInput.setAttribute("type", "password");
    pWInput.setAttribute("name", "password-input");

    usernameTitle.innerText = "Username";
    mailTitle.innerText = "Email";
    pWTitle.innerText = "Password";

    let signIn = document.createElement("button");

    signIn.textContent = "SIGNUP";
    signIn.setAttribute("id", "signinFinal");
    signIn.setAttribute("class", "btn");

    main?.appendChild(signContainer);
    signContainer.appendChild(signer);
    signer.appendChild(signContent);
    signContent.appendChild(detailsForm);

    detailsForm.appendChild(usernameTitle);
    detailsForm.appendChild(usernameInput);
    detailsForm.appendChild(mailTitle);
    detailsForm.appendChild(mailInput);
    detailsForm.appendChild(pWTitle);
    detailsForm.appendChild(pWInput);
    detailsForm.appendChild(signIn);

    // auth

    const signupForm: HTMLFormElement | null = document.querySelector(
      "#details-form"
    );
    signupForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = (<HTMLInputElement>(
        document.getElementById("username-input")
      )).value;
      const email = (<HTMLInputElement>document.getElementById("mail-input"))
        .value;
      const password = (<HTMLInputElement>(
        document.getElementById("password-input")
      )).value;

      auth
        .createUserWithEmailAndPassword(email, password)
        .then((cred: any) => {
          if (cred.user.refreshToken) {
            state.signedIn = "True";
            state.main = "home";
            state.token = cred.user.refreshToken;
          }
          return db
            .collection("user")
            .doc(email)
            .collection("user-details")
            .doc(cred.user.uid)
            .set({
              username: username,
            });
        })
        .then((cred: any) => {
          signupForm.reset();
          state.username = username;

          linksRender(state);
          mainRender(state);
        });
    });
  } else if (state.main === "signin") {
    let trackerCon = document.querySelector("#tracker-container");
    if (trackerCon) {
      main?.removeChild(trackerCon);
    }
    let signCon = document.querySelector("#sign-container");
    if (signCon) {
      main?.removeChild(signCon);
    }
    const signContainer = document.createElement("div");
    const signer = document.createElement("div");
    const signContent = document.createElement("div");
    const detailsForm = document.createElement("form");
    const mailTitle = document.createElement("label");
    const mailInput = document.createElement("input");
    const pWTitle = document.createElement("label");
    const pWInput = document.createElement("input");

    signContainer.setAttribute("id", "sign-container");
    signer.setAttribute("id", "signer");
    signContent.setAttribute("id", "sign-content");
    detailsForm.setAttribute("id", "details-form");
    mailTitle.setAttribute("id", "mail-title");
    mailInput.setAttribute("id", "mail-input");
    pWTitle.setAttribute("id", "password-title");
    pWInput.setAttribute("id", "password-input");

    signContainer.setAttribute("class", "sign-container");
    signer.setAttribute("class", "cards");
    signContent.setAttribute("class", "sign-content");
    detailsForm.setAttribute("class", "details-form");
    mailTitle.setAttribute("class", "mail-title");
    mailInput.setAttribute("class", "mail-input");
    pWTitle.setAttribute("class", "password-title");
    pWInput.setAttribute("class", "password-input");

    detailsForm.setAttribute;

    mailTitle.setAttribute("for", "mail-input");
    mailInput.setAttribute("type", "email");
    mailInput.setAttribute("name", "mail-input");

    pWTitle.setAttribute("for", "password-input");
    pWInput.setAttribute("type", "password");
    pWInput.setAttribute("name", "password-input");

    mailTitle.innerText = "Email";
    pWTitle.innerText = "Password";

    let signIn = document.createElement("button");

    signIn.textContent = "SIGNIN";
    signIn.setAttribute("id", "signinFinal");
    signIn.setAttribute("class", "btn");

    main?.appendChild(signContainer);
    signContainer.appendChild(signer);
    signer.appendChild(signContent);
    signContent.appendChild(detailsForm);

    detailsForm.appendChild(mailTitle);
    detailsForm.appendChild(mailInput);
    detailsForm.appendChild(pWTitle);
    detailsForm.appendChild(pWInput);
    detailsForm.appendChild(signIn);

    // auth

    const signupForm: HTMLFormElement | null = document.querySelector(
      "#details-form"
    );
    signupForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = (<HTMLInputElement>document.getElementById("mail-input"))
        .value;
      const password = (<HTMLInputElement>(
        document.getElementById("password-input")
      )).value;

      auth.signInWithEmailAndPassword(email, password).then((cred: any) => {
        console.log(cred);
        signupForm.reset();
        if (cred.user.refreshToken) {
          state.signedIn = "True";
          state.main = "home";
          state.token = cred.user.refreshToken;

          linksRender(state);
          mainRender(state);
        }
      });
    });
  }
};

mainRender(state);
