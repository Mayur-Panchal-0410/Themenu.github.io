
// function one() {

//     document.getElementById("changeMenu").innerHTML = ("1conatiner");
// }

// function two() {

//     document.getElementById("changeMenu").innerHTML = ("2ndconatiner");
// }

// function three() {

//     document.getElementById("changeMenu").innerHTML = ("3rdconatiner");
// }
// function four() {

//     document.getElementById("changeMenu").innerHTML = ("4conatiner");
// }
// function five() {

//     document.getElementById("changeMenu").innerHTML = ("5conatiner");
// }
// function six() {

//     document.getElementById("changeMenu").innerHTML = ("6conatiner");
// }
// function seven() {

//     document.getElementById("changeMenu").innerHTML = ("7conatiner");
// }
// function eight() {

//     document.getElementById("changeMenu").innerHTML = ("8conatiner");
// }
// function nime() {

//     document.getElementById("changeMenu").innerHTML = ("9conatiner");
// }
window.onload = function () {
    // Function to get URL parameters
    function getQueryParameter(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Check if the 'callFunction' parameter exists in the URL
    const functionName = getQueryParameter('callFunction');

    // Automatically call the function if it exists
    if (functionName === 'one') {
        one(); // Call the 'one' function if specified in the URL
    }
    else if (functionName === 'two') {
        two(); // Call the 'one' function if specified in the URL
    }
    else if (functionName === 'three') {
        three(); // Call the 'three' function
    }
    else if (functionName === 'four') {
        four(); // Call the 'four' function
    }
    else if (functionName === 'five') {
        five(); // Call the 'five' function
    }
    else if (functionName === 'six') {
        six(); // Call the 'six' function
    }
    else if (functionName === 'seven') {
        seven(); // Call the 'seven' function
    }
    else if (functionName === 'eight') {
        eight(); // Call the 'eight' function
    }
    else if (functionName === 'nine') {
        nine(); // Call the 'nine' function
    }
};




menu1 = `
      <div id="changeMenuu">
        <div class="container mt-4">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Shakes
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body shakescards">`;
var shakesArr = [
    { "name": "Milk Shake", "price": "200", "imgPath": "Cafe2images/Beverages/Shakes/milkshake.jpg" },
    // { "name": "Cappuccino", "price": "250", "imgPath": "page1img/1.jpeg" },
    // { "name": "Tea", "price": "100", "imgPath": "page1img/1.jpeg" },
    // { "name": "Coffee", "price": "100", "imgPath": "page1img/1.jpeg" },
    // { "name": "Cold Coffee", "price": "150", "imgPath": "page1img/1.jpeg" },
    // { "name": "Sandwich", "price": "200", "imgPath": "page1img/1.jpeg" }
]
for (let i = 0; i < shakesArr.length; i++) {
    menu1 += `<div class="card">
                                    <img class="card-img-top img-fluid" src="`+ shakesArr[i].imgPath + `" alt="Beverages">
                                    <div class="card-body">
                                        <h5>`+ shakesArr[i].name + `</h5>
                                        <h5>Rs.`+ shakesArr[i].price + `</h5>
                                    </div>
                                </div>`;
}
menu1 += ` </div>
                </div>
                    </div>
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Cold Coffee
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body shakescards">`;
var coldcoffeeArr = [
    { "name": "Cold Coffee ", "price": "200", "imgPath": "Cafe2images/Beverages/Cc/IMG_6071.JPG" },
]
for (let i = 0; i < coldcoffeeArr.length; i++) {
    menu1 += `<div class="card">
        <img class="card-img-top img-fluid" src="`+ coldcoffeeArr[i].imgPath + `" alt="Beverages">
        <div class="card-body">
        <h5>`+ coldcoffeeArr[i].name + `</h5>
        <h5>Rs.`+ coldcoffeeArr[i].price + `</h5>
        </div>
    </div>`;
}

menu1 += `
   
</div>
 </div >
</div >`
                     menu1 += `
                  
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Hot Coffee
                        </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body shakescards">`;
                        var hotcoffeeArr = [
                            { "name": "Hot Coffee ", "price": "30", "imgPath": "Cafe2images/Beverages/Hc/IMG_6060.jpeg" },
                           
                        ]
                        for (let i = 0; i < hotcoffeeArr.length; i++) {
                            menu1 += `<div class="card">
                                <img class="card-img-top img-fluid" src="`+ hotcoffeeArr[i].imgPath + `" alt="Beverages">
                                <div class="card-body">
                                <h5>`+ hotcoffeeArr[i].name + `</h5>
                                <h5>Rs.`+ hotcoffeeArr[i].price + `</h5>
                                </div>
                            </div>`;
                        }

                         menu1 +=` 
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSix">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            Water Bottle
                        </button>
                    </h2>
                    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body shakescards">
                            `;
                            var waterArr = [
                                { "name": "Chilled Water", "price": "20", "imgPath": "Cafe2images/Beverages/Water bottle/IMG_6061.jpeg"},
                                
                              
                            ]
                            for (let i = 0; i < waterArr.length; i++) {
                                menu1 += `<div class="card">
                                    <img class="card-img-top img-fluid" src="`+ waterArr[i].imgPath + `" alt="Beverages">
                                    <div class="card-body">
                                    <h5>`+ waterArr[i].name + `</h5>
                                    <h5>Rs.`+ waterArr[i].price + `</h5>
                                    </div>
                                </div>`;
                            }
menu1+=`
                        </div>
                    </div>
                </div>
            </div >
        </div >
    </div >
        `;


menuchinesestarter = `
<div id="changeMenuu">
  <div class="container mt-4">
      <div class="accordion" id="accordionExample">
          <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Chinese Snacks
                  </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body shakescards">`;
var chinesesnacksArr =[
    { "name": "Peanut Chaat", "price": 90, "imgPath": "Cafe2images/Chinese starter/Chinese snacks/IMG_6033.jpeg" },
    { "name": "Chole Bhature", "price": 110, "imgPath": "Cafe2images/Chinese starter/Chinese snacks/IMG_6034.jpeg" },
    { "name": "Paneer Chole Bhature", "price": 140, "imgPath": "Cafe2images/Chinese starter/Chinese snacks/IMG_6035.jpeg" },
    { "name": "French Fries", "price": 100, "imgPath": "Cafe2images/Chinese starter/Chinese snacks/IMG_6036.jpeg" },
    { "name": "Chana Roasted", "price": 130, "imgPath": "Cafe2images/Chinese starter/Chinese snacks/IMG_6037.webp" }
  ]
  

for (let i = 0; i < chinesesnacksArr.length; i++) {
menuchinesestarter += `<div class="card">
                              <img class="card-img-top img-fluid" src="`+ chinesesnacksArr[i].imgPath + `" alt="Beverages">
                              <div class="card-body">
                                  <h5>`+ chinesesnacksArr[i].name + `</h5>
                                  <h5>Rs.`+ chinesesnacksArr[i].price + `</h5>
                              </div>
                          </div>`;
}
menuchinesestarter += ` </div>
          </div>
              </div> 
              <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Chilly Chinese
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body shakescards">`;
                        var chineseplainArr =[
                            { "name": "Veg Lolipop Half (4 piece)", "price": 95, "imgPath": "Cafe2images/Chinese starter/Chilly chinese/IMG_6038.jpeg" },
                            { "name": "Veg Lolipop (8 piece)", "price": 140, "imgPath": "Cafe2images/Chinese starter/Chilly chinese/IMG_6068.JPG" },
                            { "name": "Manchurian", "price": 110, "imgPath": "Cafe2images/Chinese starter/Chilly chinese/IMG_6039.jpeg" },
                            { "name": "Veg Noodles", "price": 120, "imgPath": "Cafe2images/Chinese starter/Chilly chinese/IMG_6041.jpeg" },
                            { "name": "Hakka Noodles", "price": 140, "imgPath": "Cafe2images/Chinese starter/Chilly chinese/IMG_6040.jpeg" },
                            { "name": "Mashroom Chilli", "price": 160, "imgPath": "Cafe2images/Chinese starter/Chilly chinese/IMG_6069.JPG" }
                        ]
                        for (let i = 0; i < chineseplainArr.length; i++) {
                            menuchinesestarter += `<div class="card">
                                <img class="card-img-top img-fluid" src="`+ chineseplainArr[i].imgPath + `" alt="Beverages">
                                <div class="card-body">
                                <h5>`+ chineseplainArr[i].name + `</h5>
                                <h5>Rs.`+ chineseplainArr[i].price + `</h5>
                                </div>
                            </div>`;
                        }          
                          menuchinesestarter +=   `
                        </div>
                    </div>
                </div><div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Other Starters
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body shakescards">`;
                        var otherstarterArr =[
                            { "name": "Veg Pakoda", "price": 110, "imgPath": "Cafe2images/Chinese starter/Other starters/IMG_6043.jpeg" },
                            { "name": "Paneer Pakoda", "price": 150, "imgPath": "Cafe2images/Chinese starter/Other starters/IMG_6044.jpeg" },
                            { "name": "Crispy Corn", "price": 135, "imgPath": "Cafe2images/Chinese starter/Other starters/IMG_6045.jpeg" },
                            { "name": "Hara Bhara Kabab", "price": 160, "imgPath": "Cafe2images/Chinese starter/Other starters/IMG_6047.jpeg" },
                            { "name": "Paneer Soti Moti Tikka", "price": 150, "imgPath": "Cafe2images/Chinese starter/Other starters/IMG_6048.jpeg" },
                            { "name": "Aloo Lazzakat", "price": 150, "imgPath": "Cafe2images/Chinese starter/Other starters/IMG_6049.jpeg" },
                            { "name": "Veg Seekh Kabab", "price": 165, "imgPath": "Cafe2images/Chinese starter/Other starters/IMG_6050.jpeg" },
                            { "name": "Dahi Kabab", "price": 155, "imgPath": "Cafe2images/Chinese starter/Other starters/IMG_6051.jpeg" },
                            { "name": "Onion Seekh Kabab", "price": 155, "imgPath": "Cafe2images/Chinese starter/Other starters/IMG_6052.jpeg" },
                            { "name": "Chilli Paneer", "price": 165, "imgPath": "Cafe2images/Chinese starter/Other starters/IMG_6053.jpeg" },
                            { "name": "Corn Cheese Kabab", "price": 165, "imgPath": "Cafe2images/Chinese starter/Other starters/IMG_6054.jpeg" },
                            { "name": "Mashroom Tikka", "price": 165, "imgPath": "Cafe2images/Chinese starter/Other starters/IMG_6055.jpeg" },
                            { "name": "Tandoori Paneer Tikka", "price": 175, "imgPath": "Cafe2images/Chinese starter/Other starters/IMG_6056.jpeg" },
                            { "name": "Paneer Angara", "price": 175, "imgPath": "Cafe2images/Chinese starter/Other starters/IMG_6043.jpeg" },
                            { "name": "Paneer Kamlin", "price": 180, "imgPath": "Cafe2images/Chinese starter/Other starters/IMG_6044.jpeg" },
                            { "name": "Paneer Malai Tikka", "price": 190, "imgPath": "Cafe2images/Chinese starter/Other starters/IMG_6045.jpeg" },
                            { "name": "Paneer Lahsuni Tikka", "price": 180, "imgPath": "Cafe2images/Chinese starter/Other starters/IMG_6047.jpeg" },
                            { "name": "Paneer Amritsari Tikka", "price": 200, "imgPath": "Cafe2images/Chinese starter/Other starters/IMG_6048.jpeg" },
                            { "name": "Paneer 65", "price": 200, "imgPath": "Cafe2images/Chinese starter/Other starters/IMG_6049.jpeg" },
                            { "name": "Paneer Pahadi Tikka", "price": 200, "imgPath": "Cafe2images/Chinese starter/Other starters/IMG_6050.jpeg" }
                          ]
                        for (let i = 0; i < otherstarterArr.length; i++) {
                            menuchinesestarter += `<div class="card">
                                <img class="card-img-top img-fluid" src="`+ otherstarterArr[i].imgPath + `" alt="Beverages">
                                <div class="card-body">
                                <h5>`+ otherstarterArr[i].name + `</h5>
                                <h5>Rs.`+ otherstarterArr[i].price + `</h5>
                                </div>
                            </div>`;
                        }          

;

menuimc = `
      <div id="changeMenuu">
        <div class="container mt-4">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Panner
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body shakescards">`;
var pannerArr =[
    { "name": "Mutter Paneer", "price": 150, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5965.jpeg" },
    { "name": "Palak Paneer", "price": 150, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5969.jpeg" },
    { "name": "Paneer Masala", "price": 150, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5967.jpeg" },
    { "name": "Butter Paneer Masala", "price": 165, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5968.jpeg" },
    { "name": "Kadhai Paneer", "price": 165, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5966.jpeg" },
    { "name": "Chola Paneer", "price": 165, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5970.jpeg" },
    { "name": "Paneer Chatpata", "price": 170, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5971.jpeg" },
    { "name": "Paneer Korma", "price": 170, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5972.jpeg" },
    { "name": "Mushroom Masala", "price": 170, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5973.jpeg" },
    { "name": "Paneer Tikka", "price": 180, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5974.jpeg" },
    { "name": "Navratan Korma", "price": 180, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5975.jpeg" },
    { "name": "Paneer do Payaza", "price": 180, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5976.jpeg" },
    { "name": "Mushroom Paneer", "price": 180, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5977.jpeg" },
    { "name": "Paneer Peshawari", "price": 185, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5979.jpeg" },
    { "name": "Paneer Hyderabadi", "price": 185, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5978.jpeg" },
    { "name": "Shahi Paneer", "price": 185, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5980.jpeg" },
    { "name": "Paneer Handi", "price": 185, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5981.jpeg" },
    { "name": "Paneer Pudina", "price": 185, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5982.jpeg" },
    { "name": "Paneer Mastana", "price": 185, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5983.jpeg" },
    { "name": "Paneer Punjabi", "price": 190, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5984.jpeg" },
    { "name": "Paneer Kohlapuri", "price": 190, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5985.jpeg" },
    { "name": "Paneer Bhurji", "price": 190, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5987.jpeg" },
    { "name": "Paneer Dildar", "price": 190, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5986.jpeg" },
    { "name": "Paneer Makhni", "price": 190, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5988.jpeg" },
    { "name": "Paneer Rogan Juice", "price": 190, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5989.jpeg" },
    { "name": "Paneer Lawabdar", "price": 190, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5990.jpeg" },
    { "name": "Paneer Tikka Masala", "price": 195, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5991.jpeg" },
    { "name": "Paneer Pahadi Tikka Masala", "price": 195, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5965.jpeg" },
    { "name": "Paneer Angara", "price": 195, "imgPath": "Cafe2images/Imc/Paneer image/IMG_5966.jpeg" }
  ]
  
for (let i = 0; i < pannerArr.length; i++) {
    menuimc += `<div class="card">
                                    <img class="card-img-top img-fluid" src="`+ pannerArr[i].imgPath + `" alt="Beverages">
                                    <div class="card-body">
                                        <h5>`+ pannerArr[i].name + `</h5>
                                        <h5>Rs.`+ pannerArr[i].price + `</h5>
                                    </div>
                                </div>`;
}
menuimc += ` </div>
                </div>
                    </div>
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Kaju 
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body shakescards">`;
var kajuArr = [
    { "name": "Kaju Curry", "price": 190, "imgPath": "Cafe2images/Imc/Kaju/IMG_6062.jpeg" },
    { "name": "Kaju Masala", "price": 195, "imgPath": "Cafe2images/Imc/Kaju/IMG_6063.jpeg" },
    { "name": "Kaju Singapuri", "price": 195, "imgPath": "Cafe2images/Imc/Kaju/IMG_6064.jpeg" },
    { "name": "Kaju Paneer", "price": 200, "imgPath": "Cafe2images/Imc/Kaju/IMG_6065.jpeg" },
    { "name": "Kaju Paneer Makhanwala", "price": 210, "imgPath": "Cafe2images/Imc/Kaju/IMG_6066.jpeg" },
    { "name": "Kaju Malai Paneer", "price": 220, "imgPath": "Cafe2images/Imc/Kaju/IMG_6067.jpeg" }
  ]
  
for (let i = 0; i < kajuArr.length; i++) {
    menuimc += `<div class="card">
        <img class="card-img-top img-fluid" src="`+ kajuArr[i].imgPath + `" alt="Beverages">
        <div class="card-body">
        <h5>`+ kajuArr[i].name + `</h5>
        <h5>Rs.`+ kajuArr[i].price + `</h5>
        </div>
    </div>`;
}

menuimc += `
   
</div>
 </div >
</div >
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Roti
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body shakescards">`;
                        var rotiArr =[
                            { "name": "Tandoori Roti", "price": 10, "imgPath": "Cafe2images/Imc/Roti/IMG_6009.jpeg" },
                            { "name": "Tandoori Roti Butter", "price": 12, "imgPath": "Cafe2images/Imc/Roti/IMG_6009.jpeg" },
                            { "name": "Tawa Roti", "price": 12, "imgPath": "Cafe2images/Imc/Roti/tawaroti.jpg" },
                            { "name": "Tawa Roti Butter", "price": 14, "imgPath": "Cafe2images/Imc/Roti/tawaroti.jpg" },
                            { "name": "Makka Roti", "price": 17, "imgPath": "Cafe2images/Imc/Roti/mkaaroti.jpeg" },
                            { "name": "Bajra Roti", "price": 17, "imgPath": "Cafe2images/Imc/Roti/bajra.jpg" },
                            { "name": "Makka Roti Butter", "price": 20, "imgPath": "Cafe2images/Imc/Roti/mkaaroti.jpeg" },
                            { "name": "Bajra Roti Butter", "price": 20, "imgPath": "Cafe2images/Imc/Roti/bajra.jpg" },
                            { "name": "Plain Naan", "price": 20, "imgPath": "Cafe2images/Imc/Roti/naan.webp" },
                            { "name": "Missi Roti", "price": 25, "imgPath": "Cafe2images/Imc/Roti/missi.jpg" }
                          ]
                          
                          
                        for (let i = 0; i < rotiArr.length; i++) {
                            menuimc += `<div class="card">
                                <img class="card-img-top img-fluid" src="`+ rotiArr[i].imgPath + `" alt="Beverages">
                                <div class="card-body">
                                <h5>`+ rotiArr[i].name + `</h5>
                                <h5>Rs.`+ rotiArr[i].price + `</h5>
                                </div>
                            </div>`;
                        }          
                          menuimc +=   `
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Paratha
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body shakescards">`;


                        var parathaArr =[
                            { "name": "Tawa Paratha", "price": 30, "imgPath": "Cafe2images/Imc/Paratha/Tawa_Paratha.jpg" },
                            { "name": "Lachha Paratha", "price": 25, "imgPath": "Cafe2images/Imc/Paratha/Lachha.jpg" },
                            { "name": "Plain Kulcha", "price": 25, "imgPath": "Cafe2images/Imc/Paratha/plain_kulcha.jpeg" },
                            { "name": "Butter Kulcha", "price": 30, "imgPath": "Cafe2images/Imc/Paratha/plain_kulcha.jpeg" },
                            { "name": "Butter Naan", "price": 30, "imgPath": "Cafe2images/Imc/Paratha/naan.webp" },
                            { "name": "Aloo Paratha", "price": 30, "imgPath": "Cafe2images/Imc/Paratha/IMG_6022.jpeg" },
                            { "name": "Gobhi Paratha", "price": 30, "imgPath": "Cafe2images/Imc/Paratha/IMG_6023.jpeg" },
                            { "name": "Sev Paratha", "price": 40, "imgPath": "Cafe2images/Imc/Paratha/IMG_6024.jpeg" },
                            { "name": "Stuff Paratha", "price": 40, "imgPath": "Cafe2images/Imc/Paratha/IMG_6016.jpeg" },
                            { "name": "Paneer Paratha", "price": 40, "imgPath": "Cafe2images/Imc/Paratha/IMG_6018.jpeg" },
                            { "name": "Mix Paratha", "price": 40, "imgPath": "Cafe2images/Imc/Paratha/IMG_6019.jpeg" },
                            { "name": "Stuff Naan", "price": 40, "imgPath": "Cafe2images/Imc/Paratha/IMG_6020.jpeg" },
                            { "name": "Garlic Naan", "price": 40, "imgPath": "Cafe2images/Imc/Paratha/IMG_6021.jpeg" },
                            { "name": "Kashmiri Naan", "price": 50, "imgPath": "Cafe2images/Imc/Paratha/IMG_6022.jpeg" },
                            { "name": "Cheese Paratha", "price": 50, "imgPath": "Cafe2images/Imc/Paratha/IMG_6023.jpeg" },
                            { "name": "Methi Paratha", "price": 40, "imgPath": "Cafe2images/Imc/Paratha/IMG_6024.jpeg" }
                          ]
                        
                        for (let i = 0; i < parathaArr.length; i++) {
                            menuimc += `<div class="card">
                                <img class="card-img-top img-fluid" src="`+ parathaArr[i].imgPath + `" alt="Beverages">
                                <div class="card-body">
                                <h5>`+ parathaArr[i].name + `</h5>
                                <h5>Rs.`+ parathaArr[i].price + `</h5>
                                </div>
                            </div>`;
                        }   

                     menuimc += `
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Rice And Pulao
                        </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body shakescards">`;
                        var riceandpulaoArr = [
                            { "name": "Plain Rice", "price": 70, "imgPath": "Cafe2images/Imc/Riceandpulao/IMG_6001.jpeg" },
                            { "name": "Zeera Rice", "price": 90, "imgPath": "Cafe2images/Imc/Riceandpulao/IMG_6004.jpeg" },
                            { "name": "Khichdi", "price": 100, "imgPath": "Cafe2images/Imc/Riceandpulao/IMG_6003.jpeg" },
                            { "name": "Masala Rice", "price": 115, "imgPath": "Cafe2images/Imc/Riceandpulao/IMG_6002.jpeg" },
                            { "name": "Fried Rice", "price": 115, "imgPath": "Cafe2images/Imc/Riceandpulao/IMG_6005.jpeg" },
                            { "name": "Lemon Rice", "price": 115, "imgPath": "Cafe2images/Imc/Riceandpulao/IMG_6006.jpeg" },
                            { "name": "Tomato Rice", "price": 115, "imgPath": "Cafe2images/Imc/Riceandpulao/IMG_6007.jpeg" },
                            { "name": "Veg Biryani", "price": 135, "imgPath": "Cafe2images/Imc/Riceandpulao/IMG_6008.jpeg" },
                            { "name": "Sechzwan Fried Rice", "price": 145, "imgPath": "Cafe2images/Imc/Riceandpulao/IMG_6004.jpeg" },
                            { "name": "Butter Khichdi", "price": 130, "imgPath": "Cafe2images/Imc/Riceandpulao/butterkhicdi.webp" },
                            { "name": "Veg Pulao", "price": 125, "imgPath": "Cafe2images/Imc/Riceandpulao/IMG_6003.jpeg" },
                            { "name": "Kashmiri Pulao", "price": 135, "imgPath": "Cafe2images/Imc/Riceandpulao/kp.webp" },
                            { "name": "Shahi Pulao", "price": 150, "imgPath": "Cafe2images/Imc/Riceandpulao/sahipulao.webp" },
                            { "name": "Mutter Pulao", "price": 140, "imgPath": "Cafe2images/Imc/Riceandpulao/mutterpulao.jpg" }
                          ]
                        
                        for (let i = 0; i < riceandpulaoArr.length; i++) {
                            menuimc += `<div class="card">
                                <img class="card-img-top img-fluid" src="`+ riceandpulaoArr[i].imgPath + `" alt="Beverages">
                                <div class="card-body">
                                <h5>`+ riceandpulaoArr[i].name + `</h5>
                                <h5>Rs.`+ riceandpulaoArr[i].price + `</h5>
                                </div>
                            </div>`;
                        }

                         menuimc +=` 
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSix">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            Dal 
                        </button>
                    </h2>
                    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body shakescards">
                            `;
                            var dalArr =[
                                { "name": "Dal Plain", "price": 80, "imgPath": "Cafe2images/Imc/Dal/IMG_5995.jpeg" },
                                { "name": "Dal Fry", "price": 90, "imgPath": "Cafe2images/Imc/Dal/IMG_5996.jpeg" },
                                { "name": "Dal Hari Mirchi", "price": 90, "imgPath": "Cafe2images/Imc/Dal/IMG_5994.jpeg" },
                                { "name": "Dal Tadka", "price": 120, "imgPath": "Cafe2images/Imc/Dal/Daltadka.jpg" },
                                { "name": "Dal Khada Masala", "price": 115, "imgPath": "Cafe2images/Imc/Dal/IMG_5997.jpeg" },
                                { "name": "Dal Punjabi", "price": 115, "imgPath": "Cafe2images/Imc/Dal/punjabdal.jpg" },
                                { "name": "Dal Khati Mithi", "price": 125, "imgPath": "Cafe2images/Imc/Dal/dakkm.jpg" },
                                { "name": "Special Butter Dal", "price": 135, "imgPath": "Cafe2images/Imc/Dal/IMG_5993.jpeg" }
                            ]
                            
                            for (let i = 0; i < dalArr.length; i++) {
                                menuimc += `<div class="card">
                                    <img class="card-img-top img-fluid" src="`+ dalArr[i].imgPath + `" alt="Beverages">
                                    <div class="card-body">
                                    <h5>`+ dalArr[i].name + `</h5>
                                    <h5>Rs.`+ dalArr[i].price + `</h5>
                                    </div>
                                </div>`;
                            }
menuimc+=`
                        </div>
                    </div>
                </div>
            </div >
        </div >
    </div >
        `;


menuthali= `
<div id="changeMenuu">
  <div class="container mt-4">
      <div class="accordion" id="accordionExample">
          <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Thali
                  </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body shakescards">`;
var thaliArr = [
    { "name": "Small Thali", "price": 70, "imgPath": "Cafe2images/Thali/IMG_6029.jpeg" },
    { "name": "Medium Thali", "price": 100, "imgPath": "Cafe2images/Thali/IMG_6030.jpeg" },
    { "name": "Full Thali", "price": 150, "imgPath": "Cafe2images/Thali/IMG_6031.jpeg" },
    { "name": "Shivsagar Special", "price": 250, "imgPath": "Cafe2images/Thali/IMG_6032.webp" }
]

  

for (let i = 0; i < thaliArr.length; i++) {
menuthali += `<div class="card">
                              <img class="card-img-top img-fluid" src="`+ thaliArr[i].imgPath + `" alt="Beverages">
                              <div class="card-body">
                                  <h5>`+ thaliArr[i].name + `</h5>
                                  <h5>Rs.`+ thaliArr[i].price + `</h5>
                              </div>
                          </div>`;
}
menuthali+= ` </div>
          </div>
              </div>`

;
;




menudesserts = `
<div id="changeMenuu">
  <div class="container mt-4">
      <div class="accordion" id="accordionExample">
          <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Desserts & Sweets
                  </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body shakescards">`;
var dessertsArr = [
    { "name": "Gulab Jamun (3 pieces)", "price": 30, "imgPath": "Cafe2images/Desserts/IMG_6025.jpeg" },
    { "name": "Shrikhand", "price": 60, "imgPath": "Cafe2images/Desserts/IMG_6026.jpeg" },
    { "name": "Fruit Custard", "price": 70, "imgPath": "Cafe2images/Desserts/IMG_6027.jpeg" },
    { "name": "Ice Cream", "price": null, "imgPath": "Cafe2images/Desserts/IMG_6028.jpeg" }
]

  

for (let i = 0; i < dessertsArr.length; i++) {
menudesserts += `<div class="card">
                              <img class="card-img-top img-fluid" src="`+ dessertsArr[i].imgPath + `" alt="Beverages">
                              <div class="card-body">
                                  <h5>`+ dessertsArr[i].name + `</h5>
                                  <h5>Rs.`+ dessertsArr[i].price + `</h5>
                              </div>
                          </div>`;
}
menudesserts += ` </div>
          </div>
              </div>`

;


function one() {
    document.getElementById("changeMenu").innerHTML = menu1;
}
function two() {
    document.getElementById("changeMenu").innerHTML = menutandoristarter;
}
function three() {
    document.getElementById("changeMenu").innerHTML = menuchinesestarter;
}
function four() {
    document.getElementById("changeMenu").innerHTML = menuimc;
}
function five() {
    document.getElementById("changeMenu").innerHTML = menurolls;
}
function six() {
    document.getElementById("changeMenu").innerHTML = menuthaicurry;
}
function seven() {
    document.getElementById("changeMenu").innerHTML = menucandi;
}
function eight() {
    document.getElementById("changeMenu").innerHTML = menuthali;
}

function nine() {
    document.getElementById("changeMenu").innerHTML = menudesserts;
}