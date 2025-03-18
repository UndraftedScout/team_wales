const { createClient } = supabase;
const supabaseUrl = "https://jdkivaqlqzuvqilvypxb.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impka2l2YXFscXp1dnFpbHZ5cHhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzMjQzNDMsImV4cCI6MjA1NzkwMDM0M30.kGKacn6FOFhCwYLacTY-PJ21GEj14hJy2MnD9Apf9GM";

const supabaseClient = createClient("https://jdkivaqlqzuvqilvypxb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impka2l2YXFscXp1dnFpbHZ5cHhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzMjQzNDMsImV4cCI6MjA1NzkwMDM0M30.kGKacn6FOFhCwYLacTY-PJ21GEj14hJy2MnD9Apf9GM");

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("login-btn").addEventListener("click", async () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("error-message");

        if (!email || !password) {
            errorMessage.textContent = "Please enter both email and password.";
            return;
        }

        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            errorMessage.textContent = "Login failed: " + error.message;
        } else {
            showPopup(); 
            console.log("User:", data.user);
        }
    });
});

function showPopup() {
    document.getElementById("login-popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("login-popup").style.display = "none";
}