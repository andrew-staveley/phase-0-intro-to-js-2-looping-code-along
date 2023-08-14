const attendees = [
    "Andrew",
    "Libby",
    "Kayleen",
    "Kellie",
    "Sabrin",
    "Nadia",
];

const description = "Poopy";

function writeCards(name, gift) {
    let cardCollection = [];
    for (let counter = 0; counter < name.length; counter++) {
        console.log(`Thank you, ${name[counter]}, for the wonderful ${gift} gift!`);
        cardCollection.push(`Thank you, ${name[counter]}, for the wonderful ${gift} gift!`);
    }
    return cardCollection;
}

writeCards(attendees, description);

function countDown(count) {
    let timer = count;
    while (timer >= 0) {
    console.log(timer--);
    }

}

countDown(10);

