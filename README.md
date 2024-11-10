# doka.guide custom header search/menu button 

Пользовательские скрипт и стиль для [Доки](https://doka.guide/), которые изменяют то, как работает и выглядит шапка и кнопка показа поиска/меню. 

Для чего это:
* чтобы не нужно было целиться в кнопку, а можно было кликать на всю шапку. 
* чтобы при клике на кнопку меню, можно было сразу набирать в поиске текст.

[doka-search-focus.user.js](https://github.com/Vallek/vallek-doka-search/raw/refs/heads/master/doka-search-focus.user.js) - ставит фокус на инпут поиска при клике на кнопку поиска/меню мышью. Можно использовать с помощью [Tampermonkey](https://www.tampermonkey.net/).

[doka-search-visible.user.css](https://github.com/Vallek/vallek-doka-search/raw/refs/heads/master/doka-search-visible.user.css) - растягивает кнопку поиска/меню на всю свободную ширину шапки и стилизует ее под поиск. При использовании вместе со скриптом по сути делает поиск всегда видимым. Можно использовать с помощью [Stylus](https://add0n.com/stylus.html) с [userstyles.world](https://userstyles.world/style/19187/doka-guide-header-searchmenu-button-width).

И user.js, и user.css можно установить, открыв raw файл в браузере при наличие нужных расширений.