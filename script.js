document.getElementById('get-temperatures').addEventListener('click', function(){
    const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Хабаровск'];
    const temperatures = [];

    for(let i = 0; i < cities.length; i ++) {
        let temperature = prompt(`Введите температуру для города ${cities[i]}`)
        temperatures.push(Number(temperature));
    }

    const cityList = document.getElementById('city-list');
    cityList.innerHTML = '';

    for(let i = 0; i < cities.length; i ++) {
        const li = document.createElement('li');
        li.textContent = `${cities[i]}: ${temperatures[i]} °C`;
        cityList.appendChild(li);
    }

    let maxTemp = Math.max(...temperatures);
    let minTemp = Math.min(...temperatures);

    document.getElementById('max-temp').textContent = `${maxTemp} °C`;
    document.getElementById('min-temp').textContent = `${minTemp} °C`;


});