let count = 0;
let ticketPrice = 550;
const allSeat = document.getElementsByClassName('seat');
for (const seat of allSeat) {
  seat.addEventListener('click', function (event) {
    // console.log('alhamdulillah')
    count += 1;
    setInnerText('seat-num', count);
    if(count > 4){
      document.getElementsByClassName('seat').style.btn = 'disabled';
    }

    const remainingSeat = document.getElementById('remaining-seat').innerText;
    const convertedRemainingSeat = parseInt(remainingSeat);
    const allRemainingSeat = convertedRemainingSeat - 1;
    document.getElementById('remaining-seat').innerText = allRemainingSeat;

    const seatName = event.target.innerText;

    const selectedArea = document.getElementById('selectedArea');
    const p = document.createElement('p');
    p.innerText = seatName;
    selectedArea.appendChild(p);

    event.target.style.backgroundColor = "green";

    const totalPrice = document.getElementById('total-price').innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    const totalTicketPrice = convertedTotalPrice + ticketPrice;
    document.getElementById('total-price').innerText = totalTicketPrice;
    // setInnerText('grand-total',totalTicketPrice);

    const grandTotalPrice = document.getElementById('grand-total').innerText;
    const convertedGrandTotalPrice = parseInt(grandTotalPrice);
    const grandTotalTicketPrice = convertedGrandTotalPrice + ticketPrice;
    document.getElementById('grand-total').innerText = grandTotalTicketPrice;



  })
}

const btn = document.getElementById('apply-button');
// console.log(btn);
btn.addEventListener('click', function () {
  // console.log('Alhamdulillah');
  const couponElement = document.getElementById('coupon-area');
  const couponValue = couponElement.value;
  console.log(couponValue);

  const couponCode = couponValue.split(' ').join('').toUpperCase();
  console.log(couponCode);

  const totalPrice = document.getElementById('total-price').innerText;
  const convertedTotalPrice = parseInt(totalPrice);
  const totalTicketPrice = convertedTotalPrice + 0;
  const discountElement = document.getElementById('discount');
  const grandTotalPrice = document.getElementById('grand-total').innerText;
  const convertedGrandTotalPrice = parseFloat(totalPrice);

  const inputArea = document.getElementById('input-apply');
  if (couponCode === 'NEW15') {
    const discountAmount = totalTicketPrice * 0.15;
    console.log(discountAmount);
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    p.innerText = 'Discount:';
    p2.innerText = 'BDT ' + discountAmount;
    discountElement.appendChild(p);
    discountElement.appendChild(p2);
    const finalGrandTotalPrice = convertedGrandTotalPrice - discountAmount;
    document.getElementById('grand-total').innerText = finalGrandTotalPrice;
    inputArea.style.display = 'none';
  }
  else if (couponCode === 'COUPLE20') {
    const discountAmount = totalTicketPrice * 0.20;
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    p.innerText = 'Discount:';
    p2.innerText = 'BDT ' + discountAmount;
    discountElement.appendChild(p);
    discountElement.appendChild(p2);
    const finalGrandTotalPrice = convertedGrandTotalPrice - discountAmount;
    document.getElementById('grand-total').innerText = finalGrandTotalPrice;
    inputArea.style.display = 'none';
  }
  else{
    alert('Invalid Coupon Code');
  }



})












































function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}