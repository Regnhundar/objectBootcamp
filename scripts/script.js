//Uppgift: 1a
console.log(`Uppgift 1a: Skapa ett objekt som innehåller info om en bok`);

let taskOneBook = {
    name: `On the road`,
    author: `Jack Kerouac`,
    pages: 281
};

console.log(taskOneBook);

//Uppgift: 1b
console.log(`Uppgift 1b: Skapa en array av objekt med flera stycken böcker`);

let taskTwoBooks = [
    {
        name: `On the road`,
        author: `Jack Kerouac`,
        pages: 281
    },
    {
        name: `Pesten`,
        author: `Albert Camus`,
        pages: 253
    },
    {
        name: `The rum diary`,
        author: `Hunter S. Thompson`,
        pages: 211
    }
];

console.log(taskTwoBooks);

// Uppgift: 1c
console.log(`Uppgift 1c: Skapa en funktion som söker efter en titel i arrayen, om den hittar en så returneras objektet annars null`);

let nameOfBook = `Pesten`; // Vår sökterm.

let result = bookSearch(taskTwoBooks, nameOfBook); // Variablerna eller värden du skickar till din funktion (taskTwobooks, nameOfBook) kallas argument. 
// När du tar emot variabler eller värden blir de parametrar i din funktion. Du måste då referera till dina parameternamn i själva funktionen. 
// Undantag för variabler deklarerade med global scope.
function bookSearch(bookArray, title) {
    return bookArray.find(book => book.name === title) || null // bookArray på den här raden kan lika gärna heta taskTwobooks då den är deklarerad utanför funktionen och har "global scope". Samma gäller title (nameOfBook).
}

console.log(result)// Funktionsanrop och utskrift.

// Uppgift: 2
console.log(`Uppgift 2: Letter Frequency--------`)

// Kallar på funktionen och skickar med en sträng som värde
letterFrequency("kalle");
letterFrequency("aaaa");
letterFrequency("ni talar bra latin");

// Funktionen tar emot ett värde och sparar det i en parameter som heter string.
function letterFrequency(string) {
    // Skapar ett tomt object som vi sedan fyller genom en "for of" loop.
    let letterStorage = {};
    // Använder en "for of"-loop istället för en "for"-loop. Fungerar ungefär som en "for"-loop om du hade skrivit: for (let i = 0; i < string.length; i++)
    // Du behöver dock inte definiera start och stop med en "for of"-loop då den kör en gång per tecken, av i det här fallet, "string". 
    for (let letter of string) {
        // En "for of" loop har inte direkt åtkomst till index, och när vi skriver [letter] så är det alltså inte indexet vi skickar, utan själva tecknet.
        // Dvs i ordet kalle så har första bokstaven värdet "k" och inte index 0.
        letterStorage[letter] = (letterStorage[letter] || 0) + 1; // = Sätt värdet av nyckeln [letter] till (värdet av nyckeln [letter] OM det redan existerar, ANNARS 0) + 1;

        // EXEMPEL:
        // varv 1: letterStorage[k] = 0 + 1;    varv 1: letterStorage[a] = 0 + 1;
        // varv 2: letterStorage[a] = 0 + 1;    varv 2: letterStorage[a] = 1 + 1;
        // varv 3: letterStorage[l] = 0 + 1;    varv 3: letterStorage[a] = 2 + 1;
        // varv 4: letterStorage[l] = 1 + 1;    varv 4: letterStorage[a] = 3 + 1;
        // varv 5: letterStorage[e] = 0 + 1; 
    }
    console.log(letterStorage); // När loopen är klar loggar vi ut objectet i console.
}

// Uppgift: 3 filterByCountry
// Skapa en funktion som tar emot listan på användare och en landskod och returnerar en ny lista 
// innehållande endast användare med den landskoden.

console.log(`Uppgift: 3 filterByCountry --------`)


let nationality = `US` // vad vi skickar till vår funktion som sökord.

// Vi skapar en variabel som är resultatet av funktionen. Vi skickar variablernas ('users' och 'nationality') värden till funktionen. 
let findCitizens = countryFinder(users, nationality);

// Funktionen tar emot värdena från 'users' och 'nationality'. 'users' värde blir parametern 'listOfUsers' och 'nationalitys' värde blir 'searchWord' 
function countryFinder(listOfUsers, searchWord) {
    // Skapar en ny variabel och sätter värdet till det filtrerade värdet av 'listOfUsers' (som är samma värde som variabeln 'users')
    // 'user' i det här fallet är namnet på funktionen som filtrerar 'listOfUsers'. 
    // Vi tittar på nyckeln 'nat' och sorterar ut alla objekt vars 'nat' värde är detsamma som vår parameter searchWord (vilket är samma värde som variabeln nationality)
    let filteredUsers = listOfUsers.filter(user => user.nat === searchWord)
    // när man nu loggar ut 'filteredUsers' får vi objekten som svar. Men vi ser inte in i objekten. 
    console.log(`${filteredUsers} `)

    // för att se vad objekten innehåller kan man göra en forEach loop som tittar på varje objekt vi får tillbaka och loggar ut de nycklar vi definierar.
    filteredUsers.forEach(object => {
        console.log("Name:", object.name.first, object.name.last);
        console.log("Email:", object.email);
        console.log("Nationality:", object.nat);
        console.log("----------------------");
    });
}

console.log(`Uppgift 4: filterByGender`)
// Skapa en funktion som tar emot listan på användare och en sträng "Male" eller "Female" och returnerar en ny lista
// innehållande endast kvinnliga eller manliga användare.

let genderSearch = `Mademoiselle`;
genderApartheid(users, genderSearch);

function genderApartheid(listOfGenders, genderedTitle) {
    usersOfSameGender = listOfGenders.filter(user => user.name.title === genderedTitle);
    console.log(usersOfSameGender)
}

console.log(`Uppgift 4: listEmails`)
// Skapa en funktion som tar emot listan på användare och returnerar en lista innehållandes endast användarnas emailaddresser

mailLister(users);

function mailLister(userList) {
    let listOfEmails = userList.map(user => user.email);
    console.log(listOfEmails)
}




