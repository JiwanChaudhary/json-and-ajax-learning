let pageCount = 1;
let btn = document.getElementById('btn');
let animalInfo = document.getElementById('animal-info');

btn.addEventListener('click', () => {
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCount + '.json', true);
    ourRequest.onload = function () {
        // console.log(ourRequest.responseText);
        let ourData = JSON.parse(ourRequest.responseText);
        renderHtml(ourData);
    }
    ourRequest.send();
    pageCount++;
    if(pageCount > 3) {
        btn.classList.add("hideMe");
    }
});

function renderHtml(data) {
    let htmlString = '';
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " and " + data[i].name + " likes " + data[i].foods.likes[0] + "</p>";
    }
    animalInfo.insertAdjacentHTML('beforeend', htmlString);
};




