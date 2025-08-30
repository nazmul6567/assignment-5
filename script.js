

// heart section
const heartBtn = document.getElementsByClassName('fa-heart')
for (const heart of heartBtn) {
  heart.addEventListener('click', function () {
    const heartCount = document.getElementById('heart-cnt')
    const heartCountValue = parseInt(heartCount.innerText)

    heartCount.innerText = heartCountValue + 1
  });
}

