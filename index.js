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

showSubmit();
function showSubmit(){
  $(document).ready(function() {
    $('#submit').click(function() {
      if (!$('#stars').val()) {
        alert('Please select a number of stars.');
      } else if (!$('#name').val()) {
          alert('Please enter your name');
      } else if (!$('#opinion').val()) {
          alert('Please write a review before submission');
      } else{
          var name = $('#name').val();
          alert("Thank you " + name + " for rating Burger Bistro!");
      }
    })
  });
};

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