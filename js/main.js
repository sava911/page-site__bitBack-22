function deleteCard() {
    let headerBtns = document.querySelectorAll('[data-headerBtn]'),
        modal = document.querySelector('.modal'),
        modalCancel = document.querySelector('.modal__btn--cancel'),
        scroll = calcScroll(); 

    headerBtns.forEach(item => {
        item.onclick = () => {
            if (item.getAttribute('data-headerBtn') === 'delete') {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
                document.body.style.paddingRight = `${scroll}px`;
                document.querySelector('.header').style.paddingRight = 40 + scroll + 'px';
            }
        }
    })

    modal.onclick = e => {
        if (e.target === modalCancel || e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            document.body.style.paddingRight = `0px`;
            document.querySelector('.header').style.paddingRight = `40px`;
        } 
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
     }
}

function deleteFile() {
    let fileDelete = document.querySelectorAll('.files__item-delete');

    fileDelete.forEach(item => {
        item.onclick = () => {
            item.closest('.files__item').style.display = 'none'
        }
    })
}

deleteFile()
deleteCard()