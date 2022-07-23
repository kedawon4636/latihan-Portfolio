const txtElement = ['Freelancer',
    'Web Developer',
    'Graphic Designer'
];
let count = 0;
let txtWEB_RESPONSIVE = 0;
let currenTxt = '';
let words = '';

(function ngetik() {
    if (count == txtElement.length) {
        count = 0;
    }
    currenTxt = txtElement[count];

    words = currenTxt.slice(0, ++txtWEB_RESPONSIVE);
    document.querySelector('.efek-ngetik').textContent = words;
    if (words.length == currenTxt.length) {
        count++;
        txtWEB_RESPONSIVE = 0;
    }
    setTimeout(ngetik, 500);

})();