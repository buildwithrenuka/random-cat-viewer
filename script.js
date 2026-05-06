const API_URL = "https://api.freeapi.app/api/v1/public/cats/cat/random";

const img = document.getElementById("catImage");
const btn = document.getElementById("btn");

async function getCat() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    console.log("API Response:", data); // 👈 debug ke liye

    const imageUrl =
      data?.data?.imageUrl ||
      data?.data?.url ||
      data?.data?.image;

    if (!imageUrl) {
      throw new Error("Image URL not found in API response");
    }

    img.src = imageUrl;

  } catch (error) {
    console.log("Error fetching cat:", error);
    img.alt = "Failed to load cat 😿";
  }
}

btn.addEventListener("click", getCat);
getCat();