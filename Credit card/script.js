class PayForm{
  constructor(){
    this.creditCard = document.querySelector('.pay-container__pay-card');
    this.rotateBtn = document.querySelector('.rotate');
    this.rotateBtn.addEventListener('click', this.rotate);
    this.payBtn = document.querySelector('.pay');
    this.payBtn.addEventListener('click', this.pay);
  }

  rotate() {
    const back = document.querySelector('.back');
    const front = document.querySelector('.front');
    const creditCard = document.querySelector('.pay-container__pay-card');
    creditCard.classList.toggle('is-flipped');
    back.classList.toggle('none');
    front.classList.toggle('none');
  }

  pay(){
    const cardNumber = document.querySelector('.number').value;
    const cardDate = document.querySelector('.date').value;
    const cardOwner = document.querySelector('.name').value;
    const cardCode = document.querySelector('.code').value;
    const price = document.querySelector('.price').innerHTML.split(' ')[1];

    const orderInfo = {
      number: cardNumber,
      date: cardDate,
      owner: cardOwner,
      code: cardCode,
      price: price,
    }

    console.log(orderInfo);

    const jsonOrderInfo = JSON.stringify(orderInfo);
  }
}

const app = new PayForm();
