
// Switch between the three pages
function showPage(page) {

    const app = document.getElementById("app");

    if (page === "recipes") {
        app.innerHTML = recipesPage();
    }

    else if (page === "cook") {
        app.innerHTML = cookPage();
    }

    else if (page === "chat") {
        app.innerHTML = chatPage();
    }
}


// PAGE 1: RECIPES
function recipesPage() {

    return `
        <section>
            <h2>Discover Recipes</h2>

            <p>Find recipes based on your preferences.</p>

            <input
                type="text"
                placeholder="Search for a recipe..."
            >

            <div id="recipe-list">
                <p>Your recipes will appear here.</p>
            </div>
        </section>
    `;
}


// PAGE 2: COOK
function cookPage() {

    return `
        <section>
            <h2>What Can I Cook?</h2>

            <p>Enter the ingredients you currently have.</p>

            <textarea
                id="ingredients"
                placeholder="Example: chicken, eggs, rice, onions"
            ></textarea>

            <button onclick="findRecipes()">
                Find Recipes
            </button>

            <div id="cook-results"></div>
        </section>
    `;
}


// PAGE 3: CHAT
function chatPage() {

    return `
        <section>
            <h2>AI Cooking Assistant</h2>

            <p>Ask for cooking advice or ingredient substitutions.</p>

            <div id="chat-messages">
                <p>Hi! How can I help you with cooking today?</p>
            </div>

            <input
                type="text"
                id="chat-input"
                placeholder="Ask me something..."
            >

            <button onclick="sendMessage()">
                Send
            </button>
        </section>
    `;
}


// Temporary function for testing
function findRecipes() {
    alert("Your ingredient matching feature will go here!");
}


// Temporary function for testing
function sendMessage() {
    alert("Your AI chat feature will go here!");
}


// Display Recipes page when website first loads
showPage("recipes");
