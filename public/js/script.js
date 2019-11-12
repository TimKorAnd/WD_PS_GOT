'use strict'

$(() => {
    const $houseSlider = $('#houses-slider');
    /*create DOM elems in slider*/
    createHousesElemsInSlider($houseSlider);
    /*slider init*/
    $('#houses-slider').slick({
        arrows: true,
        dots: true/*,
        variableWidth: true*/
    });

    const $houseSelect = $('#selecthouse');
    /*create DOM elems from Houses for select*/
    createHousesOptionsInSelect($houseSelect);
    /*select init*/
    $houseSelect.select2({
        placeholder: 'Select House'
        /*minimumResultsForSearch: Infinity*/
    });

    eventsLoader($houseSelect, $houseSlider);
})
/* CONSTANTS */

const EMAIL_VALID_REGEXP = /^(\w+(-(?=\w))?\w*)@\w+\.(\w+(-(?=\w))?\w+)$/;
//const PASSWORD_VALID_REGEX = /^(\w|\W){8,}$/;
const PASSWORD_VALID_REGEX = /^(?=.*\d)(?=.*[a-zа-я])(?=.*[A-ZА-Я])[0-9a-zA-Zа-яА-Я]{8,}$/;
const USERNAME_VALID_REGEX = /^[\d\w]+$/;
const USERWISHES_VALID_REGEX = /^.+$/;
const SELECTHOUSE_VALID_REGEX = /.+/;
const ERROR_FIELD_CLASS = 'input--invalid';
const HOUSES = ['Arryn', 'Baratheon', 'Bolton', 'Frey', 'Greyjoy', 'Lannister',
    'Martell', 'Nightwatchs', 'Stark', 'Targarien', 'Tully', 'Tyrell'];
const IMG_PATH = 'img/';
const IMG_TYPE = '.png';

/*class for inputs*/
class InputField {
    constructor(inputId, VALID_REGEXP, firstEventType, secondEventType, isShowPin = false) {
        this.inputId = inputId;
        this.element = document.getElementById(this.inputId);
        this.VALID_REGEXP = VALID_REGEXP;
        this.isShowPin = isShowPin;
        this.addEvents(firstEventType, secondEventType);
    }

    /*return true if regexp match the input value*/
    isValid() {
        if (this.element.nodeName === 'SELECT') {
            return this.element.value !== '';
        }
        return this.VALID_REGEXP.test(this.element.value);
    };

    /*write valid/invalid class in input DOM elem*/
    viewValidation() {
        if (this.isValid()) {
            this.element.classList.remove(ERROR_FIELD_CLASS);
            this.showPin(false);
        } else {
            this.element.classList.add(ERROR_FIELD_CLASS);
            if (this.isShowPin)
                this.showPin(true);
        }

    };

    /*show pin for input from input's title*/
    showPin(displayPin) {
        if (this.element.parentElement.querySelector('.pin') != null && displayPin) {
            return;
        }
        if (!displayPin) {
            if (this.element.parentElement.querySelector('.pin') != null) {
                this.element.parentElement.querySelector('.pin').remove();
            }
            return;
        }
        let pinElem = document.createElement('div');
        let pinContent = document.createTextNode(this.element.title);
        let att = document.createAttribute('class');
        att.value = 'pin';
        pinElem.setAttributeNode(att);
        pinElem.appendChild(pinContent);
        this.element.parentNode.insertBefore(pinElem, this.element);
    }

    /*add both events listeners to input instances*/
    addEvents(firstEventType, secondEventType) {
        this.element.addEventListener(firstEventType, () => {
                this.viewValidation();
                this.element.addEventListener(secondEventType, this.viewValidation.bind(this), {once: false});
            }
            , {once: true});
    }
}

function createHousesElemsInSlider($houseSlider) {
    HOUSES.forEach((houseName) => {
        houseName = houseName.toLowerCase();
        $houseSlider.append(`<div><img src="${IMG_PATH}${houseName}${IMG_TYPE}"></div>`);
    })
}

function createHousesOptionsInSelect($houseSelect) {
    HOUSES.map((houseName, index) => {
        return new Option('House ' + houseName, index + '', index === 0, false);
    }).forEach((option) => {
        option.className = 'nav-panel__select-house-option';
        $houseSelect.append(option);
    });
}

/*submit handler - form submited only if specified inputs is valid*/
function submitHandler(event, btnSubmit, inputElems, submitFunc) {
    //event.preventDefault();
    /*if (inputElems.every((currInputElem) => {
        currInputElem.viewValidation();
        return currInputElem.isValid();
    })) {
        submitFunc();
    }*/
}

function changeSubmitedForm(submitedForm, nextForm) {
    submitedForm.style.display = 'none';
    nextForm.style.display = 'block';
}


function eventsLoader($houseSelect, $houseSlider) {
    /*get form1 DOM elems */
    let emailInput = new InputField('user-email', EMAIL_VALID_REGEXP, 'blur', 'input');
    let passwordInput = new InputField('user-password', PASSWORD_VALID_REGEX, 'blur', 'input', true);
    /*get form2 DOM elems */
    let usernameInput = new InputField('username', USERNAME_VALID_REGEX, 'blur', 'input');
    let userWishesTextArea = new InputField('user-wishes', USERWISHES_VALID_REGEX, 'blur', 'input');
    let selectHouse = new InputField('selecthouse', SELECTHOUSE_VALID_REGEX, 'blur', 'input');
    $houseSelect.on('select2:select', (e) => {
        console.log(e.params.data.id);
        $houseSlider.slick('slickGoTo', e.params.data.id);

    });
    $houseSlider.on('afterChange', () => {
        $houseSelect.val($houseSlider.slick('slickCurrentSlide'));
        $houseSelect.trigger('change.select2');
    });


    const btnForm1 = document.getElementById('form-1__submit-button');
    const btnForm2 = document.getElementById('form-2__submit-button');

    const form1 = document.getElementById('reg-form-1');
    const form2 = document.getElementById('reg-form-2');
    const form3 = document.getElementById('reg-form-3');

    form1.addEventListener('submit', (event) => submitHandler(event, btnForm1,
        [emailInput, passwordInput], () => changeSubmitedForm(form1, form2)));
    form2.addEventListener('submit', (event) => submitHandler(event, btnForm2,
        [usernameInput, userWishesTextArea/*, selectHouse*/], () => changeSubmitedForm(form2, form3)));
}
