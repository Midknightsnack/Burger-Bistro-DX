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