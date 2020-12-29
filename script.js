let name_job = document.getElementById('name_job');
let revenues = document.getElementById('revenues');
let expenses = document.getElementById('expenses');
let time = document.getElementById('time');
let profit = revenues.value - expenses.value;
let value_hour = (revenues.value - expenses.value) / time.value;
let results = document.getElementById('results')

function showResults(){
    results.style = 'background-color: white; width: 15%;border: solid gray; border-radius: 5%; margin: auto;'
    'font-size: 1.5em; ';
    results.innerHTML = `<p>Profit obteined: R$${revenues.value - expenses.value}.</p>`;
    results.innerHTML += `<p>Value-hour: R$${(revenues.value - expenses.value) / time.value}`
    
}

