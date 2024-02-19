let count = 0;
let ticketPrice = 550;
const allSeat = document.getElementsByClassName('seat');

for (const seat of allSeat) {
  seat.addEventListener('click', function (event) {
    // console.log('Alhamdulillah')  
    if(count < 4){
      count += 1;

    const seatNum = document.getElementById('seat-num').innerText;
    document.getElementById('seat-num').innerText = count;

    const remainingSeat = document.getElementById('remaining-seat').innerText;
    const convertedRemainingSeat = parseInt(remainingSeat);
    const allRemainingSeat = convertedRemainingSeat - 1;
    document.getElementById('remaining-seat').innerText = allRemainingSeat;

    const seatName = event.target.innerText;
    const tBody = document.getElementById('selectedArea');
    const tRow = document.createElement('tr')

    const firstCol = document.createElement('td');
    firstCol.innerText = seatName;
    const secondCol = document.createElement('td');
    secondCol.innerText = 'Economy'
    const thirdCol = document.createElement('td');
    thirdCol.innerText = '550'
    firstCol.classList.add('p-2');
    secondCol.classList.add('px-24');
    tRow.appendChild(firstCol);
    tRow.appendChild(secondCol);
    tRow.appendChild(thirdCol);
    tBody.appendChild(tRow);

    event.target.style.backgroundColor = "green";
    event.target.style.color = "white";

    const totalPrice = document.getElementById('total-price').innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    const totalTicketPrice = convertedTotalPrice + ticketPrice;
    document.getElementById('total-price').innerText = totalTicketPrice;

    const grandTotalPrice = document.getElementById('grand-total').innerText;
    const convertedGrandTotalPrice = parseInt(grandTotalPrice);
    const grandTotalTicketPrice = convertedGrandTotalPrice + ticketPrice;
    document.getElementById('grand-total').innerText = grandTotalTicketPrice;


    }
    else{
      alert('You can not buy more than 4 tickets at a time !!!')
    }  
    

  })
}

const btn = document.getElementById('apply-button');
btn.addEventListener('click', function () {

    const couponElement = document.getElementById('coupon-area');
    const couponValue = couponElement.value;
    console.log(couponValue);
  
    const couponCode = couponValue;
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
      p.innerText = 'Discount price:';
      p2.innerText = 'BDT ' + discountAmount;
      discountElement.appendChild(p);
      discountElement.appendChild(p2);
      const finalGrandTotalPrice = convertedGrandTotalPrice - discountAmount;
      document.getElementById('grand-total').innerText = finalGrandTotalPrice;
      inputArea.style.display = 'none';
    }
    else if (couponCode === 'Couple 20') {
      const discountAmount = totalTicketPrice * 0.20;
      const p = document.createElement('p');
      const p2 = document.createElement('p');
      p.innerText = 'Discount Price:';
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
