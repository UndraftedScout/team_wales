const { createClient } = supabase;


const supabaseUrl = "https://cxeurmmnzhehulxwerku.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impka2l2YXFscXp1dnFpbHZ5cHhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzMjQzNDMsImV4cCI6MjA1NzkwMDM0M30.kGKacn6FOFhCwYLacTY-PJ21GEj14hJy2MnD9Apf9GM";

const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

document.addEventListener("DOMContentLoaded", () => {
    // Attach login event listener
    document.getElementById("login-btn").addEventListener("click", async () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("error-message");

        if (!email || !password) {
            errorMessage.textContent = "Please enter both email and password.";
            return;
        }

        try {
            const { data, error } = await supabaseClient.auth.signInWithPassword({
                email,
                password
            });

            if (error) {
                throw error;
            }

            showPopup();
            console.log("User:", data.user);
            sessionStorage.setItem("user", JSON.stringify(data.user));

            setTimeout(() => {
                window.location.href = "/dashboard.html"; // Change this to your actual dashboard page
            }, 1500);

        } catch (error) {
            errorMessage.textContent = "Login failed: " + error.message;
        } 
    });
});

function showPopup() {
    document.getElementById("login-popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("login-popup").style.display = "none";
}
