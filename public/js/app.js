console.log('client side javascript file is loaded');

const weatherForm = document.querySelector('form');
const searchValue = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

//messageOne.textContent = 'From Java Script';

weatherForm.addEventListener('submit',(e) => {

    e.preventDefault();

    const locationValue = searchValue.value;

    //console.log('testing...!');
   // console.log(locationValue);

   messageOne.textContent = 'Loading....';
    messageTwo.textContent= '';

fetch('http://localhost:3000/weather?address='+ locationValue).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            //console.log(data.error);
            messageOne.textContent = data.error;
        } else {
            // console.log(data.location);
            // console.log(data.forecast);
            
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
        }
    });
});

});
