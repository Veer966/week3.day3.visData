document.addEventListener("DOMContentLoaded", () => {
    const dataContainer = document.getElementById("data-container");
    const generateButton = document.getElementById("generate-button"); // Get the "Generate" button element
    
    const apiUrl = "https://randomuser.me/api/?results=10";
    
    
    const fetchData = () => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(jsonData => {
                dataContainer.innerHTML = ''; 
                
                jsonData.results.forEach(person => {
                    const card = document.createElement("div");
                    card.className = "card";
    
                    const image = document.createElement("img");
                    image.src = person.picture.thumbnail;
                    card.appendChild(image);
    
                    const name = document.createElement("h2");
                    name.textContent = `${person.name.first} ${person.name.last}`;
                    card.appendChild(name);
    
                    const details = document.createElement("p");
                    details.innerHTML = `Gender: ${person.gender}<br>
                                        Email: ${person.email}<br>
                                        Location: ${person.location.city}, ${person.location.country}`;
                    card.appendChild(details);
    
                    dataContainer.appendChild(card);
                });
            })
            .catch(error => {
                console.error("Error fetching JSON data:", error);
            });
    };
    
    generateButton.addEventListener("click", fetchData);
    
    fetchData();
});
