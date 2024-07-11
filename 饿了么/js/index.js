window.onload = function () {
    document.onscroll = function () {
        let sl = document.documentElement.scrollTop;
        let s2 = document.body.scrollTop;
        let scroll = sl == 0 ? s2 : s1;
        let width = document.documentElement.clientWidth;
        let search = document.querySelector('fixedBox');
        if (scroll > width * 0.2) {
            search.style.display = 'fixed';
            search.style.left = '0';
            search.style.top = '0';
        } else {
            search.style.display = 'static';
        }
    }

}
