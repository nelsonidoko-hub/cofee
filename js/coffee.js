const notification=document.querySelector(".welcome-notification")
const closebutton=document.querySelector(".js-btn")
const hidebutton=document.querySelector(".x-btn")
if (notification) {
    window.addEventListener("load", function() {notification.style.display="block";
    });
    if(closebutton) {
        closebutton.addEventListener("click", function() {notification.style.display="none";

        });
    }
    if (hidebutton) {
        hidebutton.addEventListener("click",function() {
            notification.style.display="none"

        });
        
    }

}


const coffeeForm=document.querySelectorAll(".coffeeForm");
   let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartTotal = document.querySelector(".cart-total h3");

    function updateCartTotal() {
          if (!cartTotal) return;
          let overallTotal = 0;
    
          cart.forEach(item => {overallTotal += item.price * item.quantity;
          });

          cartTotal.textContent = `Overall Total: $${overallTotal}`;
   }

   updateCartTotal();

   const addcartContainer=document.getElementById("addcart");
   console.log(cart[0]);
    console.log(addcartContainer)
   if (addcartContainer) {
        if (cart.length === 0) {
            addcartContainer.innerHTML = "<p> Your cart is empty.</p>";
        }
    
    cart.forEach(function(item) {addcartContainer.innerHTML +=`
        <div class="cart-cardy">
        <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <p>Size: ${item.size}</p>
            <p class="total">Total: $${item.price * item.quantity}</p>
        <div class="quantity">
            <button class="minus">-</button>
            <span>Quantity:${item.quantity}</span>
            <button class="plus">+</button>
        </div>
        <button class="delete">Delete</button>
        `;
 
    });
}



coffeeForm.forEach(function(coffeeForm) {
    coffeeForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const selectedSize=coffeeForm.querySelector('input[name="size"]:checked');
        const quantity=coffeeForm.querySelector('input[name="quantity"]').value;
        if (selectedSize) {
          
            const productinfo=coffeeForm.dataset.name;
            const productPrice=Number(coffeeForm.dataset.price);
            const productImage=coffeeForm.dataset.image;

          

            const addcart= {
                name: productinfo,
                price: productPrice,
                image: productImage,
                size:selectedSize.value,
                quantity: Number(quantity)


            };
   
            cart.push(addcart);
            localStorage.setItem("cart" ,JSON.stringify(cart));
            console.log(cart);

        } else{
            console.log("Please select a size");
        }

    });
});
if (addcartContainer) {
    
addcartContainer.addEventListener("click", function(event) {

    if (event.target.classList.contains("plus")) {

        const card = event.target.closest(".cart-cardy");
        const cards = [...addcartContainer.querySelectorAll(".cart-cardy")];
        const index = cards.indexOf(card);

        cart[index].quantity++;

        card.querySelector(".quantity span").textContent =`Quantity: ${cart[index].quantity}`;
        card.querySelector(".total").textContent = `Total:$${cart[index].price * cart[index].quantity}`;
        updateCartTotal();
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    if (event.target.classList.contains("minus")) {

        const card = event.target.closest(".cart-cardy");
        const cards = [...addcartContainer.querySelectorAll(".cart-cardy")];
        const index = cards.indexOf(card);

        if (cart[index].quantity> 1) {
            cart[index].quantity--;

            card.querySelector(".quantity span").textContent =`Quantity: ${cart[index].quantity}`;
            card.querySelector(".total").textContent = "Total: $" + (cart[index].price * cart[index].quantity).toFixed(2);
            updateCartTotal();
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }
    if (event.target.classList.contains("delete")) {
        const card = event.target.closest(".cart-cardy");
        const cards = [...addcartContainer.querySelectorAll(".cart-cardy")];
        const index = cards.indexOf(card);

        cart.splice(index, 1);

        localStorage.setItem("cart", JSON.stringify(cart));

        card.remove();
        updateCartTotal();
    }

});

}


const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const user = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            username: document.getElementById('userName').value,
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value,
            phone: document.getElementById('phoneNumber').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };

        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        alert('Account created!');
        window.location.href = 'login.html'; // or wherever you want to send them
    });
}


document.addEventListener('DOMContentLoaded', function () {
    const navToggleBtn = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.linkwe');

    if (navToggleBtn && navLinks) {
        navToggleBtn.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
  const picInput = document.getElementById('profile-picture');
  const picPreview = document.getElementById('pic-preview');
  const picIcon = document.getElementById('pic-icon');
  const picMsg = document.getElementById('pic-msg');

  if (picInput && picPreview && picIcon && picMsg) {
    picInput.addEventListener('change', function () {
      const file = picInput.files[0];

      if (file) {
        if (!file.type.startsWith('image/')) {
          picMsg.textContent = 'Please choose an image file.';
          picInput.value = '';
        } else if (file.size > 2 * 1024 * 1024) {
          picMsg.textContent = 'Image must be smaller than 2MB.';
          picInput.value = '';
        } else {
          picMsg.textContent = '';
          picPreview.src = URL.createObjectURL(file);
          picPreview.hidden = false;
          picIcon.style.display = 'none';
        }
      }
    });
  }
});