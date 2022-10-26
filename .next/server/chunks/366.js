"use strict";
exports.id = 366;
exports.ids = [366];
exports.modules = {

/***/ 366:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ auth),
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_app__WEBPACK_IMPORTED_MODULE_0__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_app__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
// Import the functions you need from the SDKs you need



// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTKhoWxsh9ZtJBL1a8UwCV9YSa3ChB3eI",
    authDomain: "temp-chatapp.firebaseapp.com",
    projectId: "temp-chatapp",
    storageBucket: "temp-chatapp.appspot.com",
    messagingSenderId: "9311945166",
    appId: "1:9311945166:web:c1e3932fe27d228dcbeb9f"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)();
// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider(process.env.RECAPTCHA),
//   isTokenAutoRefreshEnabled: true,
// });


});

/***/ })

};
;