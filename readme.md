### 6. Answer the following questions clearly:

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: 
getElementById: Select element using its unique id.
getElementsByClassName: Select multiple elements using same class name
querySelectorAll: Select all elements that match
querySelector: Select the first element that matches


2. How do you  create and insert a new element into the DOM ?
Ans:
create an element with createElement() function and append with the parentnode.
Example: 
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

3. What is  Event Bubbling  and how does it work?
Ans: Event Bubbling means when an event happens on a child element, it also travels up to its parent elements.

4. What is  Event Delegation  in JavaScript? Why is it useful?
Ans: Event Delegation means you attach the event to a parent and handle its children through it.

5. What is the difference between  preventDefault() and stopPropagation()  methods?
Ans: preventDefault() stops the browser’s default action, and stopPropagation() stops the event from bubbling up.
