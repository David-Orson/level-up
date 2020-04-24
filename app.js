"use strict";
var firebaseConfig = {
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
var auth = firebase.auth();
var db = firebase.firestore();
// State
var state = {
    signedIn: "false",
    main: "home",
};
// Nav
var root = document.querySelector("#root");
var nav = document.createElement("nav");
var mainDiv = document.createElement("main");
mainDiv.setAttribute("id", "main");
var navContainer = document.createElement("div");
var logoContainer = document.createElement("div");
var title1 = document.createElement("h2");
var title2 = document.createElement("span");
title1.textContent = "LevelUp ";
title2.textContent = "+";
title1.setAttribute("class", "logo");
title2.setAttribute("class", "font-primary");
navContainer.setAttribute("class", "nav-container");
navContainer.appendChild(title1);
title1.appendChild(title2);
root === null || root === void 0 ? void 0 : root.appendChild(nav);
root === null || root === void 0 ? void 0 : root.appendChild(mainDiv);
nav === null || nav === void 0 ? void 0 : nav.appendChild(navContainer);
title1.addEventListener("click", function () {
    state.main = "home";
    mainRender(state);
});
// Signing Links
var linksRender = function (state) {
    console.log(state);
    var signIn = document.createElement("button");
    var signedInLinks = document.createElement("div");
    var signOut = document.createElement("button");
    var user = document.createElement("img");
    if (state.signedIn === "false") {
        var out = document.querySelector("#signedIn");
        if (out) {
            navContainer.removeChild(out);
        }
        signIn.textContent = "SIGNIN";
        signIn.setAttribute("id", "signin");
        signIn.setAttribute("class", "btn");
        navContainer === null || navContainer === void 0 ? void 0 : navContainer.appendChild(signIn);
        signIn.addEventListener("click", function () {
            state.main = "signin";
            mainRender(state);
        });
    }
    else {
        var myIn = document.querySelector("#signin");
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
        navContainer === null || navContainer === void 0 ? void 0 : navContainer.appendChild(signedInLinks);
        signedInLinks === null || signedInLinks === void 0 ? void 0 : signedInLinks.appendChild(user);
        signedInLinks === null || signedInLinks === void 0 ? void 0 : signedInLinks.appendChild(signOut);
        signOut.addEventListener("click", function () {
            state.signedIn = "false";
            linksRender(state);
            mainRender(state);
        });
    }
};
linksRender(state);
// Home
var mainRender = function (state) {
    console.log(state);
    var main = document.querySelector("#main");
    if (state.main === "home") {
        if (state.signedIn === "true") {
            var signcon = document.querySelector("#sign-container");
            if (signcon) {
                main === null || main === void 0 ? void 0 : main.removeChild(signcon);
            }
            var trackerCon = document.querySelector("#tracker-container");
            if (trackerCon) {
            }
            else {
                var trackerContainer = document.createElement("div");
                var tracker = document.createElement("div");
                var content = document.createElement("div");
                var trackerTitle = document.createElement("h2");
                trackerContainer.setAttribute("id", "tracker-container");
                tracker.setAttribute("id", "card1");
                content.setAttribute("id", "tracker-content");
                trackerTitle.setAttribute("id", "title--tracker");
                trackerContainer.setAttribute("class", "tracker-container");
                tracker.setAttribute("class", "cards");
                content.setAttribute("class", "tracker-content");
                trackerTitle.setAttribute("class", "title--tracker");
                trackerTitle.textContent = "tracker";
                main === null || main === void 0 ? void 0 : main.appendChild(trackerContainer);
                trackerContainer.appendChild(tracker);
                tracker.appendChild(content);
                content.appendChild(trackerTitle);
            }
        }
        else {
            var signcon = document.querySelector("#sign-container");
            if (signcon) {
                main === null || main === void 0 ? void 0 : main.removeChild(signcon);
            }
            var trackerCon = document.querySelector("#tracker-container");
            if (trackerCon) {
                main === null || main === void 0 ? void 0 : main.removeChild(trackerCon);
            }
            var trackerContainer = document.createElement("div");
            var tracker = document.createElement("div");
            var content = document.createElement("div");
            var trackerTitle = document.createElement("h2");
            var offline = document.createElement("p");
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
            main === null || main === void 0 ? void 0 : main.appendChild(trackerContainer);
            trackerContainer.appendChild(tracker);
            tracker.appendChild(content);
            content.appendChild(trackerTitle);
            content.appendChild(offline);
        }
    }
    else if (state.main === "signin") {
        var trackerCon = document.querySelector("#tracker-container");
        if (trackerCon) {
            main === null || main === void 0 ? void 0 : main.removeChild(trackerCon);
        }
        var signCon = document.querySelector("#sign-container");
        if (signCon) {
        }
        else {
            var signContainer = document.createElement("div");
            var signer = document.createElement("div");
            var signContent = document.createElement("div");
            var detailsForm = document.createElement("form");
            var mailTitle = document.createElement("label");
            var mailInput = document.createElement("input");
            var pWTitle = document.createElement("label");
            var pWInput = document.createElement("input");
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
            pWInput.setAttribute("type", "text");
            pWInput.setAttribute("name", "password-input");
            mailTitle.innerText = "Email";
            pWTitle.innerText = "Password";
            var signIn = document.createElement("button");
            signIn.textContent = "SIGNIN";
            signIn.setAttribute("id", "signinFinal");
            signIn.setAttribute("class", "btn");
            main === null || main === void 0 ? void 0 : main.appendChild(signContainer);
            signContainer.appendChild(signer);
            signer.appendChild(signContent);
            signContent.appendChild(detailsForm);
            detailsForm.appendChild(mailTitle);
            detailsForm.appendChild(mailInput);
            detailsForm.appendChild(pWTitle);
            detailsForm.appendChild(pWInput);
            detailsForm.appendChild(signIn);
            // auth
            var signupForm = document.querySelector("#details-form");
            signupForm === null || signupForm === void 0 ? void 0 : signupForm.addEventListener("submit", function (e) {
                e.preventDefault();
                var email = document.getElementById("mail-input")
                    .value;
                var password = (document.getElementById("password-input")).value;
                auth
                    .createUserWithEmailAndPassword(email, password)
                    .then(function (cred) {
                    console.log(cred);
                });
            });
            /* signIn.addEventListener("click", () => {
              state.signedIn = "true";
              state.main = "home";
              linksRender(state);
              mainRender(state);
            }); */
        }
    }
};
mainRender(state);
