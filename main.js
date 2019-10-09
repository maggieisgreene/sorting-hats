const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

 document.getElementById('sadness').addEventListener('click', () => {
    document.getElementById('superSadness').innerHTML = `   
    <form>
        <div class="form-group">
            <label for="name">Student Name:</label>
            <input type="name" class="form-control" id="student-name" aria-describedby="emailHelp" placeholder="Enter name">
        </div>
        <div class="form-group">
            <button type="button" id="newButton" class="btn btn-light">Submit</button>
        </div>
    </form>
    `
  });

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint;
}

let i = 0;

const randomHouse = (arr) => {
    let domString = '';
    const house = arr[Math.floor(Math.random() * arr.length)];
    const inputVal = document.getElementById('student-name').value;
    domString += `
        <div class="card" id="card-${i}">
            <div class="card-body">
                <h5 class="card-title">${inputVal}</h5>
                <p class="card-text">${house}</p>
                <button type="button" value="${i}" id="deleteButton" class="btn btn-light expel">Expel!</button>
            </div>
        </div>
        `
        i += 1;
    printToDom(domString, 'card-here');
};

document.body.addEventListener('click', (event) => {
        if (event.target.id === 'deleteButton') {
            const buttonValue = event.target.value;
            const cardId = `card-${buttonValue}`;
            const card = document.getElementById(cardId);
            card.parentNode.removeChild(card);
        }
        if (event.target.id === 'newButton') {
            randomHouse(houses);
        }
    });

document.getElementById('newButton').addEventListener('click', (event) => {
        event.preventDefault();
});
