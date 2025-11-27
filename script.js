let buttonText;
let buttonText2 = 'Свернуть';

document.querySelector('.info__link').addEventListener('click' , function () {
    document.querySelector('.info__text').classList.toggle('info__text--active');
    buttonText = this.Textcontent;
    this.Textcontent = buttonText2;
    buttonText2 = buttonText;
})