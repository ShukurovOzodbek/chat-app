"use strict";
exports.id = 483;
exports.ids = [483];
exports.modules = {

/***/ 483:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(716);
/* harmony import */ var _chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(692);
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(271);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(401);
/* harmony import */ var _firebaseconfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(366);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(829);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(767);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebaseconfig__WEBPACK_IMPORTED_MODULE_7__, firebase_auth__WEBPACK_IMPORTED_MODULE_6__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_10__]);
([_firebaseconfig__WEBPACK_IMPORTED_MODULE_7__, firebase_auth__WEBPACK_IMPORTED_MODULE_6__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);













function Sidebar() {
    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuthState)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_7__/* .auth */ .I);
    const [snapshot, loading, error] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__.useCollection)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_7__.db, "chats"));
    const chats = snapshot?.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
        })
    );
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const redirect = (id)=>{
        router.push(`/chat/${id}`);
    };
    const chatExists = (email)=>{
        chats?.find((chat)=>chat.users.includes(user.email) && chat.users.includes(email)
        );
    };
    const newChat = async ()=>{
        const input = prompt("Enter email of chat recipient");
        if (!chatExists(input) && input != user.email) {
            await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.addDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_7__.db, "chats"), {
                users: [
                    user.email,
                    input
                ]
            });
        }
    };
    const chatList = ()=>{
        return chats?.filter((chat)=>chat.users.includes(user.email)
        ).map((chat)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Flex, {
                p: 3,
                align: "center",
                _hover: {
                    bg: "gray.100",
                    cursor: "pointer"
                },
                onClick: ()=>redirect(chat.id)
                ,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                        src: "",
                        marginEnd: 3
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Text, {
                        children: user.displayName
                    })
                ]
            }, Math.random())
        );
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Flex, {
        h: "100%",
        w: "300px",
        borderEnd: "1px solid",
        borderColor: "gray.200",
        direction: "column",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Flex, {
                h: "81px",
                w: "100%",
                align: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid",
                borderColor: "gray.200",
                p: 3,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Flex, {
                        align: "center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                                src: user.photoURL,
                                marginEnd: 3
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Text, {
                                children: user.displayName
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                        size: "sm",
                        isRound: true,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.ArrowLeftIcon, {}),
                        onClick: ()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.signOut)(_firebaseconfig__WEBPACK_IMPORTED_MODULE_7__/* .auth */ .I)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                m: 5,
                p: 4,
                onClick: ()=>newChat()
                ,
                children: "New Chat"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Flex, {
                overflowX: "scroll",
                direction: "column",
                sx: {
                    scrollbarWidth: "none"
                },
                flex: 1,
                children: chatList()
            })
        ]
    }));
};

});

/***/ })

};
;