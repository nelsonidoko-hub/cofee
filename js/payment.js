      const cardPaymentForm = document.getElementById("cardPaymentForm");
if(cardPaymentForm) {
        cardPaymentForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Payment form submitted successfully!");
            window.location.href = "place-an-order.html";
      });
    }

    const giftCardForm = document.getElementById("giftCardPayment");
    if (giftCardForm) {
        giftCardForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const codeinput = document.getElementById("giftCardCode");
            const code = codeinput.value.trim();

            const isValidFormat = /^[a-zA-Z0-9]{16}$/.test(code);
            if (!isValidFormat) {
                alert("Please enter a valid 16-character gift card code.");
                return;
            }

            alert("Gift Card applied successfully!");
            window.location.href = "place-an-order.html";
          });
    }
const bitcoinForm = document.getElementById("bitcoinPayment");

if (bitcoinForm) {
    bitcoinForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thanks! We'll verify your payment shortly and activate your subscription.");
        window.location.href = "place-an-order.html";

    });
}

const bankTransferForm = document.getElementById("bankTransferForm");

if (bankTransferForm) {
    bankTransferForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const bankName = document.getElementById("bank-name").value.trim();
        const accountName = document.getElementById("account-name").value.trim();
        const accountNumber = document.getElementById("account-number").value.trim();
        const amount = document.getElementById("transfer").value.trim();

        if (!bankName || !accountName || !accountNumber || !amount) {
            alert("Please fill out all fields.");
            return;
        }

        const isValidAccount = /^[0-9]{6,17}$/.test(accountNumber);
        if (!isValidAccount) {
            alert("Please enter a valid account number.");
            return;
        }

        const isValidAmount = /^[0-9]+(\.[0-9]{1,2})?$/.test(amount) && parseFloat(amount) > 0;
        if (!isValidAmount) {
            alert("Please enter a valid transfer amount.");
            return;
        }

        alert("Bank transfer submitted! We'll process it shortly.");
        window.location.href = "place-an-order.html";
    });
}

