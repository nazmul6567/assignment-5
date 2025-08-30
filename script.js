const heartButtons = document.querySelectorAll('.fa-heart');
heartButtons.forEach(icon => {
  icon.parentElement.addEventListener('click', function () {
    const heartCount = document.getElementById('heart-cnt');
    const heartCountValue = parseInt(heartCount.innerText);

    heartCount.innerText = heartCountValue + 1;
  });
});
