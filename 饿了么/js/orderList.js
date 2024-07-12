window.onload = function () {
    let showBtnArr = document.getElementsByClassName('fa-caret-down');
    let detailedBoxArr = document.getElementsByClassName('order-detailed');

    for (let i = 0; i < showBtnArr.length; i++) {
        detailedBoxArr[i].style.display = 'none';
        showBtnArr[i].onclick = function () {
            if (detailedBoxArr[i].style.display == 'none') {
                detailedBoxArr[i].style.display = 'block';
            } else {
                detailedBoxArr[i].style.display = 'none';
            }
        }
    }

}

