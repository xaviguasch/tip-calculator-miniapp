const totalBill = document.getElementById('totalBillAmount')
const tipSelection = document.getElementById('tipPercentage')
const numPeople = document.getElementById('numPeople')
const calculateBtn = document.getElementById('calculateBtn')
const resultsPanel = document.getElementById('resultsPanel')
let billDisplay = document.getElementById('billDisplay')
let tipDisplay = document.getElementById('tipDisplay')
let cppDisplay = document.getElementById('cppDisplay')
let partyTotal = document.getElementById('partyTotal')

const displayResults = (
  totalTip,
  totalAmountToPay,
  amountToPayPerPerson,
  totalBillAmount
) => {
  billDisplay.textContent = `$${totalBillAmount.toFixed(2)}`
  tipDisplay.textContent = `$${totalTip.toFixed(2)}`
  cppDisplay.textContent = `$${amountToPayPerPerson.toFixed(2)}`
  partyTotal.textContent = `$${totalAmountToPay.toFixed(2)}`
}

const calculateTip = (totalBillAmount, numberOfPeople, tipPercentage) => {
  let totalTip = totalBillAmount * tipPercentage
  let totalAmountToPay = totalBillAmount + totalTip
  let amountToPayPerPerson = totalAmountToPay / numberOfPeople

  displayResults(totalTip, totalAmountToPay, amountToPayPerPerson, totalBillAmount)
  resultsPanel.classList.add('results-panel-show')
}

calculateBtn.addEventListener('click', () => {
  const tipPercentage = parseFloat(tipSelection.selectedOptions[0].value)
  const totalBillAmount = parseFloat(totalBill.value)
  const numberOfPeople = parseFloat(numPeople.value)

  calculateTip(totalBillAmount, numberOfPeople, tipPercentage)
})
