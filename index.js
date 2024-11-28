let rankBoard = [
    { name: 'Alice', score: 100 },
    { name: 'Bob', score: 90 },
    { name: 'Charlie', score: 80 },
    { name: 'David', score: 70 },
    { name: 'Eve', score: 60 },
    { name: 'Frank', score: 50 },
    { name: 'Grace', score: 40 },
    { name: 'Helen', score: 30 },
    { name: 'Ivy', score: 20 },
    { name: 'Jack', score: 10 }
];

const tItems = document.querySelector('.tItems');

for (let i = 0; i < rankBoard.length; i++) {
    let trow = document.createElement('tr');

    let tdName = document.createElement('td');
    tdName.textContent = rankBoard[i].name;

    let tdScore = document.createElement('td');
    tdScore.textContent = rankBoard[i].score;

    trow.append(tdName, tdScore);

    tItems.appendChild(trow);
}