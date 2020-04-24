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
// auth listener
auth.onAuthStateChanged(function (user) {
    if (user) {
        console.log(user);
        db.collection("user/" + user.email + "/user-details")
            .get()
            .then(function (snapshot) {
            snapshot.docs.forEach(function (doc) {
                console.log("user " + doc.data().username + " is registered to " + user.email + " and is logged in with token " + user.refreshToken);
                if (state.signedIn === "false") {
                    state.signedIn = "true";
                    state.username = doc.data().username;
                    (state.email = user.email), (state.token = user.refreshToken);
                    linksRender(state);
                    mainRender(state);
                }
            });
        });
    }
    else {
        console.log("user is not logged in");
    }
});
// store
var state = {
    signedIn: "false",
    username: "",
    email: "",
    token: "",
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
    var signUp = document.createElement("button");
    var signedInLinks = document.createElement("div");
    var signOut = document.createElement("button");
    var user = document.createElement("img");
    if (state.signedIn === "false") {
        var out = document.querySelector("#signedIn");
        if (out) {
            navContainer.removeChild(out);
        }
        var signingLinksContainer = document.createElement("div");
        signingLinksContainer.setAttribute("id", "links-container");
        signingLinksContainer.setAttribute("class", "links-container");
        signIn.textContent = "SIGNIN";
        signIn.setAttribute("id", "signin");
        signIn.setAttribute("class", "btn");
        signUp.textContent = "SIGNUP";
        signUp.setAttribute("id", "signup");
        signUp.setAttribute("class", "btn");
        navContainer === null || navContainer === void 0 ? void 0 : navContainer.appendChild(signingLinksContainer);
        signingLinksContainer === null || signingLinksContainer === void 0 ? void 0 : signingLinksContainer.appendChild(signIn);
        signingLinksContainer === null || signingLinksContainer === void 0 ? void 0 : signingLinksContainer.appendChild(signUp);
        signIn.addEventListener("click", function () {
            state.main = "signin";
            mainRender(state);
        });
        signUp.addEventListener("click", function () {
            state.main = "signup";
            mainRender(state);
        });
    }
    else {
        var myIn = document.querySelector("#links-container");
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
        signOut.addEventListener("click", function (e) {
            e.preventDefault();
            delete state.token;
            auth.signOut().then(function () {
                state.signedIn = "false";
                linksRender(state);
                mainRender(state);
            });
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
                main === null || main === void 0 ? void 0 : main.removeChild(trackerCon);
            }
            var trackerContainer = document.createElement("div");
            var tracker = document.createElement("div");
            var content = document.createElement("div");
            var trackerTitle = document.createElement("h2");
            var trackerBody_1 = document.createElement("div");
            var trackerBodyTitle = document.createElement("h3");
            var addSkill_1 = document.createElement("p");
            trackerContainer.setAttribute("id", "tracker-container");
            tracker.setAttribute("id", "card1");
            content.setAttribute("id", "tracker-content");
            trackerTitle.setAttribute("id", "title--tracker");
            trackerBody_1.setAttribute("id", "tracker-body");
            trackerBodyTitle.setAttribute("id", "title--tracker-body");
            addSkill_1.setAttribute("id", "add-skill");
            trackerContainer.setAttribute("class", "tracker-container");
            tracker.setAttribute("class", "cards");
            content.setAttribute("class", "tracker-content");
            trackerTitle.setAttribute("class", "title--tracker");
            trackerBody_1.setAttribute("class", "tracker-body");
            trackerBodyTitle.setAttribute("class", "title--tracker-body");
            addSkill_1.setAttribute("class", "add-skill");
            trackerTitle.textContent = "tracker";
            trackerBodyTitle.textContent = "Skills";
            addSkill_1.textContent = "+";
            main === null || main === void 0 ? void 0 : main.appendChild(trackerContainer);
            trackerContainer.appendChild(tracker);
            tracker.appendChild(content);
            content.appendChild(trackerTitle);
            content.appendChild(trackerBody_1);
            trackerBody_1.appendChild(trackerBodyTitle);
            trackerBody_1.appendChild(addSkill_1);
            addSkill_1 === null || addSkill_1 === void 0 ? void 0 : addSkill_1.addEventListener("click", function () {
                trackerBody_1.removeChild(addSkill_1);
                var addSkillForm = document.createElement("form");
                var skillLabel = document.createElement("label");
                var skillInput = document.createElement("input");
                var hoursLabel = document.createElement("label");
                var hoursInput = document.createElement("input");
                var skillFormButton = document.createElement("button");
                addSkillForm.setAttribute("id", "skill-form");
                skillLabel.setAttribute("id", "skill-label");
                skillInput.setAttribute("id", "skill-input");
                hoursLabel.setAttribute("id", "hours-label");
                hoursInput.setAttribute("id", "hours-input");
                skillFormButton.setAttribute("id", "skill-form-btn");
                addSkillForm.setAttribute("class", "skill-form");
                skillLabel.setAttribute("class", "skill-label");
                skillInput.setAttribute("class", "skill-input");
                hoursLabel.setAttribute("class", "hours-label");
                hoursInput.setAttribute("class", "hours-input");
                skillFormButton.setAttribute("class", "skill-form-btn");
                skillLabel.setAttribute("for", "skill-input");
                hoursLabel.setAttribute("for", "hours-input");
                skillInput.setAttribute("name", "skill-input");
                hoursInput.setAttribute("name", "hours-input");
                skillLabel.textContent = "Skill";
                hoursLabel.textContent = "hours";
                skillFormButton.textContent = "ADD SKILL";
                trackerBody_1.appendChild(addSkillForm);
                addSkillForm.appendChild(skillLabel);
                addSkillForm.appendChild(skillInput);
                addSkillForm.appendChild(hoursLabel);
                addSkillForm.appendChild(hoursInput);
                addSkillForm.appendChild(skillFormButton);
                var skillForm = document.querySelector("#skill-form");
                skillForm === null || skillForm === void 0 ? void 0 : skillForm.addEventListener("submit", function (e) {
                    e.preventDefault();
                    var skill = (document.getElementById("skill-input")).value;
                    var hours = (document.getElementById("hours-input")).value;
                    var skillObject = {};
                    skillObject[skill] = hours;
                    db.collection("user/" + state.email + "/skills").doc("coding").set({
                        skill: skillObject,
                    }, { merge: true });
                });
            });
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
    else if (state.main === "signup") {
        var trackerCon = document.querySelector("#tracker-container");
        if (trackerCon) {
            main === null || main === void 0 ? void 0 : main.removeChild(trackerCon);
        }
        var signCon = document.querySelector("#sign-container");
        if (signCon) {
            main === null || main === void 0 ? void 0 : main.removeChild(signCon);
        }
        var signContainer = document.createElement("div");
        var signer = document.createElement("div");
        var signContent = document.createElement("div");
        var detailsForm = document.createElement("form");
        var usernameTitle = document.createElement("label");
        var usernameInput = document.createElement("input");
        var mailTitle = document.createElement("label");
        var mailInput = document.createElement("input");
        var pWTitle = document.createElement("label");
        var pWInput = document.createElement("input");
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
        var signIn = document.createElement("button");
        signIn.textContent = "SIGNUP";
        signIn.setAttribute("id", "signinFinal");
        signIn.setAttribute("class", "btn");
        main === null || main === void 0 ? void 0 : main.appendChild(signContainer);
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
        var signupForm_1 = document.querySelector("#details-form");
        signupForm_1 === null || signupForm_1 === void 0 ? void 0 : signupForm_1.addEventListener("submit", function (e) {
            e.preventDefault();
            var username = (document.getElementById("username-input")).value;
            var email = document.getElementById("mail-input")
                .value;
            var password = (document.getElementById("password-input")).value;
            auth
                .createUserWithEmailAndPassword(email, password)
                .then(function (cred) {
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
                .then(function (cred) {
                signupForm_1.reset();
                state.username = username;
                linksRender(state);
                mainRender(state);
            });
        });
    }
    else if (state.main === "signin") {
        var trackerCon = document.querySelector("#tracker-container");
        if (trackerCon) {
            main === null || main === void 0 ? void 0 : main.removeChild(trackerCon);
        }
        var signCon = document.querySelector("#sign-container");
        if (signCon) {
            main === null || main === void 0 ? void 0 : main.removeChild(signCon);
        }
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
        pWInput.setAttribute("type", "password");
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
        var signupForm_2 = document.querySelector("#details-form");
        signupForm_2 === null || signupForm_2 === void 0 ? void 0 : signupForm_2.addEventListener("submit", function (e) {
            e.preventDefault();
            var email = document.getElementById("mail-input")
                .value;
            var password = (document.getElementById("password-input")).value;
            auth.signInWithEmailAndPassword(email, password).then(function (cred) {
                console.log(cred);
                signupForm_2.reset();
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
