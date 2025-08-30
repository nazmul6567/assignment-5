//calling CLASS
function callClass(cls) {
    const element = document.getElementsByClassName(cls)
    return element
}
// calling ID
function callId(id) {
    const element = document.getElementById(id)
    return element
}

// heart buttuon
const heartBtn = callClass('heart')
for (const heart of heartBtn) {

    heart.addEventListener('click', function () {
      
    const heartCount = callId('heart-cnt')
    const heartCountValue = Number(heartCount.innerText)

    heartCount.innerText = heartCountValue + 1
  });
}

//call button
const callBtn = callClass('phone')
for (const call of callBtn) {
    
    call.addEventListener('click', function () {

        // call service title
        const serviceTitle = call.parentNode.parentNode.children[0].children[0].innerText        
        //call service
        const serviceName = call.parentNode.parentNode.children[0].children[1].innerText
        //call service num
        const serviceNumber = call.parentNode.parentNode.children[1].children[0].innerText 

        // limiting call number
        const coinCount = callId('coin')
        const coinCountValue = Number(coinCount.innerText)
        if (coinCountValue > 19) {
            alert("📞 Calling "+serviceName+ " "+serviceNumber+ "...")
            coinCount.innerText = coinCountValue - 20
        }
        else {
            alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।")
            return;
        }


        // adding history
        const now = new Date()
        const timeString = now.toLocaleTimeString('en-US', { hour12: true })
        
        const newCart = document.createElement('div')
        newCart.innerHTML = `
            <div class="my-5 p-4 bg-[#f2f2f2] flex justify-between items-center gap-4 rounded-lg">
                <div class="">
                  <h1 class="text-lg">${serviceTitle}</h1>
                  <p class="text-[#5c5c5c] text-lg">${serviceNumber}</p>
                </div>
                <div>
                  <p class="text-lg">${timeString}</p>
                </div>
            </div>
        `
        const carContainer = callId('cart-container')
        carContainer.append(newCart)

    })
}

// clear button
const clearBtn = callId('clear').addEventListener('click', function () {
    const carContainer = callId('cart-container')
    carContainer.innerHTML = ''

})

//copy button
const copyBtn = callClass('copy')
for (const copy of copyBtn) {
    
    copy.addEventListener('click', function () {

        // copy service number
        const copyNumber = copy.parentNode.parentNode.children[1].children[0].innerText
        navigator.clipboard.writeText(copyNumber)
        alert('নম্বর কপি হয়েছে: '+ copyNumber);

        // copy count increase
        const copyCount = Number(callId('copy-cnt').innerText)
        const newCopyCount = copyCount+1
        
        if (copyCount < newCopyCount) {
            
            document.getElementById('copy-cnt').innerText = newCopyCount
        }
        
    })
}