
function calculate() {
    
    const capital = parseFloat(document.getElementById('capital').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const years = 10; 

   
    if (isNaN(capital) || capital <= 0) {
        alert("Mwanangu, weka kiasi cha pesa kwanza!");
        return;
    }

   
    const r = rate / 100;
    const finalAmount = capital * Math.pow((1 + r), years);


    const formattedAmount = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(finalAmount);

 
    const resultBox = document.getElementById('result');
    resultBox.innerHTML = `Baada ya miaka 10: <br> <strong style="color: #d4af37; font-size: 1.5rem;">TSh ${formattedAmount}</strong>`;
    

    resultBox.style.opacity = "0";
    setTimeout(() => {
        resultBox.style.opacity = "1";
        resultBox.style.transition = "1s";
    }, 100);
}
