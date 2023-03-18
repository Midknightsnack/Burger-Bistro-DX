const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx) =>{
  item.addEventListener('click', function (){
    let click = 0
    ratingValue.value = idx + 1
    console.log(ratingValue.value)

    allStar.forEach(i=>{
      i.classList.replace('bxs-star', 'bx-star')
      i.classList.remove('active')
    })
    for(let i=0; i < allStar.length; i++){
      if(i <= idx){
        allStar[i].classList.replace('bx-star', 'bxs-star')
        allStar[i].classList.add('active')
      } else{
        allStar[i].style.setProperty('--i', click)
        click++
      }
    }
  })
})

// myFunction();
// function myFunction(){
//   document.getElementById('thanks') = "Thank you for the rating"
// }

// openModal();
// function openModal(){
//   var modal = document.getElementById("myModal");
//   var span = document.getElementsByClassName("close")[0];
//   document
//     .getElementById("calendar-days")
//     .addEventListener("click", function () {
//         modal.style.display = "block";
//     });

//     span.onclick = function() {
//       modal.style.display = "none";
//     }

//     window.onclick = function(event) {
//       if (event.target == modal) {
//         modal.style.display = "none";
//       }
//     }
// }

// check();
// function check(){
//   document.getElementById('f1').innerHTML =  $(document).ready(function(){
//     $('#submit').click(function(){
//       var databack = $('#myModal #food').val();
//       $('#f1').html(databack);
//     }); 
//   });

//   document.getElementById('f2').innerHTML =  $(document).ready(function(){
//     $('#submit').click(function(){
//       var databack = $('#myModal #hours').val();
//       $('#f2').html(databack);
//     }); 
//   });

//   document.getElementById('f3').innerHTML =  $(document).ready(function(){
//     $('#submit').click(function(){
//       var databack = $('#myModal #minutes').val();
//       $('#f3').html(databack);
//     }); 
//   });
  
//   document.getElementById('f4').innerHTML =  $(document).ready(function(){
//     $('#submit').click(function(){
//       var databack = $('#myModal #tod').val();
//       $('#f4').html(databack);
//     }); 
//   });

//   document.getElementById('f5').innerHTML =  $(document).ready(function(){
//     $('#submit').click(function(){
//       var databack = $('#myModal #notification_time').val();
//       $('#f5').html(databack);
//     }); 
//   });
// }