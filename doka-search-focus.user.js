// ==UserScript==
// @name         Doka search focus with mouse
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Помещает фокус на строку поиска при вызове меню мышью
// @author       Vallek
// @match        https://doka.guide/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=doka.guide
// @grant        none
// ==/UserScript==

'use strict';

const searchButton = document.querySelector('.header-button[aria-expanded="false"]');
const search = document.querySelector('#search-field');

searchButton.addEventListener('click', () => {
  search.focus();
});