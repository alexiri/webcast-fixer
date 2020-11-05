// ==UserScript==
// @name         Webcast fixer
// @namespace    http://cern.ch
// @version      0.2
// @description  Make the webcam view bigger
// @author       Alex Iribarren
// @match        https://webcast.web.cern.ch/*
// @grant        GM_addStyle
// @require 	 https://code.jquery.com/jquery-latest.min.js
// @downloadURL  https://raw.githubusercontent.com/alexiri/webcast-fixer/master/webcast-fixer.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Old Webcast
    $('div.twelve.wide.column').removeClass('twelve wide column').addClass('eight wide column');
    $('div.sixteen.wide.column').attr('style', 'width: 90%!important;');

    // New Webcast
    $('div.ui.container').attr('style', 'width: 95% !important;');

})();