
// Question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
}
cat.complain(); 

// Question 2

const heading = document.querySelector("h3");

// Question 3

heading.style.fontSize = "2em";


// Question 4

heading.classList.add("subheading");

// Question 5

const paragraphs = document.querySelectorAll("p");

// Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";

// Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
        
    },
    {
        name: "Blurt",
        age: 21
    }
];


function catName(catArray) {
    for (let i = 0; i < catArray.length; i++) {
        console.log(catArray[i].name);
    }
}

catName(cats); 

// Question 8

function catName(catArray) {
    let catHTML = "";

    for (let i = 0; i < catArray.length; i++) {
        catHTML += `<h5>${catArray[i].name}</h5>`;
        
    }

  return catHTML; 
}
catName(cats); 

// Question 9


function catName(catArray) {
    let catHTML = "";

    for (let i = 0; i < catArray.length; i++) {
        catHTML += `<h5>${catArray[i].name}</h5>`
    }

 resultsContainer.innerHTML = catHTML; 
}

catName(cats); 

// Question 10

function catName(catArray) {
    let catHTML = "";

    for (let i = 0; i < catArray.length; i++) { 
        
        if(catArray[i].age === undefined) {
            catHTML += `
            <div> 
                <h5>${catArray[i].name}</h5>    
                <p>Age unknown</p>
            </div> `;    
        }
            else 

    catHTML += `
        <div> 
            <h5>${catArray[i].name}</h5>    
            <p>${catArray[i].age}</p>
        </div> `;    
    }

    resultsContainer.innerHTML = catHTML; 
}
catName(cats); 





