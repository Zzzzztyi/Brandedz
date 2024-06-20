// Mollie API sleutel instellen
var mollie = Mollie("YOUR_API_KEY");

// Functie om de betaling te starten wanneer de knop wordt geklikt
document.getElementById('buyButton').addEventListener('click', function() {
    mollie.createPayment({
        amount: {
            value: '10.00',
            currency: 'EUR'
        },
        description: 'Innovatief Product',
        redirectUrl: 'https://jouwwebsite.nl/betalingssucces',
        webhookUrl: 'https://jouwwebsite.nl/webhook'
    }).then(function(payment) {
        window.location.href = payment.getPaymentUrl();
    }).catch(function(error) {
        console.error(error);
    });
});