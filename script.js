
function priceAdd(priceBox,count,unitPrice){

    let itemPrice = parseFloat(document.getElementById(priceBox).innerText);
    let cartPlus = parseFloat(document.getElementById("cartAdd").innerText);
    let cartCount=parseInt(document.getElementById(count).innerText);
    // alert(unitPrice);

    if(cartCount<10){

    // update card counter
    cartCount+=1;
    document.getElementById(count).innerText=cartCount;


    // Update Check Out
    let Cout= parseInt(document.getElementById('Out').innerText);
    Cout+=1;
    document.getElementById('Out').innerText= Cout;

    // coupon Box update
    if(Cout >= 5){
        document.getElementById('coupon-box').style.visibility='visible';
    }
    // updating price in the Card
    itemPrice+=unitPrice;
    document.getElementById(priceBox).innerText=itemPrice;

    // updating price in the Cart/counter
    cartPlus+=unitPrice;
    document.getElementById('cartAdd').innerText=cartPlus;

    deliveryCadd();
    
    // check out update
    total();
    }
    else{
        alert("max 10 per item!")
    }

}

// Delivery Charge Add
function deliveryCadd(){
    let delChar = parseInt(document.getElementById('dchar').innerText);
    if(delChar === 0){
        delChar = 20;
        document.getElementById('dchar').innerText=delChar;
    }
}

function priceSub(priceBox,count,unitPrice){

    let itemPrice = parseFloat(document.getElementById(priceBox).innerText);
    let cartPlus = parseFloat(document.getElementById("cartAdd").innerText);
    let Cout = parseInt(document.getElementById("Out").innerText);

        // updating price in the Card
        // If checkpoint so items/price cant go Negetive

        if(itemPrice>0){
          // update Card counter
          let ph = parseFloat(
            document.getElementById(count).innerText);
          ph -= 1;
          document.getElementById(count).innerText = ph;

          // Update Check Out
          Cout -= 1;
          document.getElementById("Out").innerHTML = Cout;

        // Update Coupon box
        
            if(Cout < 5){
            document.getElementById('coupon-box').style.visibility='hidden';
            }   

        // update card

          itemPrice -= unitPrice;
          document.getElementById(priceBox).innerText = itemPrice;

          // updating price in the Cart/counter
          cartPlus -= unitPrice;
          document.getElementById("cartAdd").innerText = cartPlus;
        }
        
        if(Cout===0){
            deliveryCsub();
        }
        
        total();
       
}

// Delivery Charge set 0 if cart empty
function deliveryCsub(){
    let delChar = parseInt(document.getElementById('dchar').innerText);
    
        if(delChar){
            document.getElementById('dchar').innerText='00';
        }
}

// Calculating Total bill

function total(){
    let itemPrice = parseInt(document.getElementById("cartAdd").innerText);
    let delChar = parseInt(document.getElementById('dchar').innerText);
    let cDisc = parseInt(document.getElementById('cDis').innerText);
    let Cout = parseInt(document.getElementById("Out").innerText);
    let gTotal = parseInt(document.getElementById('totalB').innerText);

    //coupon check
    if(Cout<5){
        if(cDisc === 50){
            alert('Coupon Removed!')
            document.getElementById('cDis').innerText='00';
            cDisc= 0;
            gTotal -= 50;
        }
        
    }
    
    let Total = itemPrice + delChar - cDisc;

    document.getElementById('totalB').innerText=Total;
}

// Coupon Apply check

function cApply(){
    let cop = document.getElementById('coup').value;
    let cDisc = parseInt(document.getElementById('cDis').innerText);

    if(cop === 'Hungry50'){
        // cDis= 50;
        if(cDisc > 0){
            alert('Coupon already Applied!')
        }
        else{

            document.getElementById("cDis").innerText = "50";
            alert("Success!");
            document.getElementById('coup').value='';
            total();
        }
        
    }
    else{
        alert('Invalid Coupon! Please try again!');
        document.getElementById('coup').value='';
    }
    // alert('test');

}