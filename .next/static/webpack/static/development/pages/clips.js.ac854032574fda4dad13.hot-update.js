webpackHotUpdate("static/development/pages/clips.js",{

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: addVideoUrl, addClipToClipList, updateFullVideoDuration, toggleSelectClipCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVideoUrl", function() { return addVideoUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClipToClipList", function() { return addClipToClipList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFullVideoDuration", function() { return updateFullVideoDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleSelectClipCard", function() { return toggleSelectClipCard; });


var addVideoUrl = function addVideoUrl(url) {
  return {
    type: 'ADD_VIDEO_URL',
    url: url
  };
};
var addClipToClipList = function addClipToClipList(clip) {
  return {
    type: 'ADD_CLIP_TO_CLIP_LIST',
    clip: clip
  };
};
var updateFullVideoDuration = function updateFullVideoDuration(duration) {
  return {
    type: 'UPDATE_FULL_VIDEO_DURATION',
    duration: duration
  };
};
var toggleSelectClipCard = function toggleSelectClipCard(id) {
  return {
    type: 'TOGGLE_SELECTED_CLIP_CARD',
    id: id
  };
};

/***/ })

})
//# sourceMappingURL=clips.js.ac854032574fda4dad13.hot-update.js.map