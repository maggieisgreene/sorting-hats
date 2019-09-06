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

const randomHouse = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i ++) {
        const house = arr[Math.floor(Math.random() * arr.length)];
        domString += `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text"></p>
                <button type="button" class="btn btn-light">Expel!</button>
            </div>
        </div>
        `
    }
    printToDom(domString, 'card-here');
};

document.getElementById('newButton').addEventListener('click', () => {
    randomHouse(houses)});