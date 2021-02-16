function calculate1() {
    let principle = get("p").value;
    let rate = get("r").value;
    let numberOfyears = get("n").value;
    let finalAmount = get("finalAmount");

    let finance = new Finance();
    let payment1 = finance.AM(principle,rate,numberOfyears,0);
    finalAmount.textContent = payment1;
}

function calculate2() {
    let Rate = get("R").value;
    let cashFlow = get("cf0").value;
    let number_Of_years = get("N").value;
    let final_Amount = get("final_Amount");

    let finance = new Finance();
    let payment2 = finance.FV(Rate, cashFlow, number_Of_years);
    final_Amount.textContent = payment2;
}

function calculate3() {
    let beginningValue = get("beginningValue").value;
    let endingValue = get("endingValue").value;
    let numberOfperiod = get("numberOfperiod").value;
    let total = get("total");

    let finance = new Finance();
    let payment3 = finance.CAGR(beginningValue,endingValue,numberOfperiod );
    total.textContent = payment3;
}

function showCalculator() {

    let amortizationCalc = get("amortization");
    let futureValueCalc = get("futureValue");
    let cagrCalc = get("CAGR");
    let selectElement = get("calculatorOptions");
    let selectedValue = selectElement.value;

    switch (selectedValue) {
        case "1":
            console.log("show amortization");
            show(amortizationCalc);
            hide(futureValueCalc);
            hide(cagrCalc);

            break;

        case "2":
            console.log("show futureValue");
            show(futureValueCalc);
            hide(amortizationCalc);
            hide(cagrCalc);

            break;

        case "3":
            console.log("show CAGR");
            show(cagrCalc);
            hide(amortizationCalc);
            hide(futureValueCalc);


    
        default:
            
            break;
    }
}
function get(id) {
    return document.getElementById(id);
}
function show(element) {
    element.style.display =""
}
function hide(element) {
    element.style.display = "none"
}

