document.addEventListener("DOMContentLoaded", function() {
    // Get all quantity input elements
    const quantityInputs = document.querySelectorAll("#cart input[type='number']");

    // Add event listener to each quantity input
    quantityInputs.forEach(function(input) {
        input.addEventListener("change", function() {
            updateSubtotal(input);
            updateTotal();
        });
    });

    // Function to update subtotal for a specific row
    function updateSubtotal(input) {
        const quantity = parseInt(input.value);
        const price = parseFloat(input.parentNode.previousElementSibling.textContent.replace("$", ""));
        const subtotal = quantity * price;
        input.parentNode.nextElementSibling.textContent = "$" + subtotal.toFixed(2);
    }

    // Function to update the total
    function updateTotal() {
        let total = 0;
        document.querySelectorAll("#cart tbody tr").forEach(function(row) {
            total += parseFloat(row.querySelector("td:last-child").textContent.replace("$", ""));
        });
        document.querySelector("#subtotal table tr:last-child td:last-child").textContent = "$" + total.toFixed(2);
    }
    // Apply coupon button
    document.querySelector("#coupon button").addEventListener("click", function() {
        // Add your coupon code logic here
        alert("Coupon applied!");
    });

    // Proceed to checkout button
    document.querySelector("#subtotal button").addEventListener("click", function() {
        // Add your checkout logic here
        alert("Proceeding to checkout!");
    });
});
