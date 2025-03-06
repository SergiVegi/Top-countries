const countries = [
    {
        name: "Japan 🇯🇵",
        image: "https://source.unsplash.com/random/800x600?japan,tokyo",
        description: "A country where modernity and tradition coexist in harmony. From Tokyo's skyscrapers to Kyoto's ancient temples. Don't miss cherry blossom season and incredible Japanese cuisine."
    },
    {
        name: "Italy 🇮🇹",
        image: "https://source.unsplash.com/random/800x600?italy,rome",
        description: "Heart of art, history, and great food. Rome's Colosseum, Venice's canals, and Tuscany's landscapes will captivate you. Pizza, pasta, and Italian wine are divine."
    },
    {
        name: "France 🇫🇷",
        image: "https://source.unsplash.com/random/800x600?france,paris",
        description: "From the Eiffel Tower to Bordeaux vineyards and French Riviera beaches. Its cuisine (croissants, cheese, wine) is considered world's best."
    },
    {
        name: "Spain 🇪🇸",
        image: "https://source.unsplash.com/random/800x600?spain,barcelona",
        description: "Vibrant country with cultural diversity. Barcelona's modernist architecture, Madrid's energy, Andalusia's Arab heritage, and Ibiza's beaches make it spectacular."
    },
    {
        name: "USA 🇺🇸",
        image: "https://source.unsplash.com/random/800x600?usa,newyork",
        description: "Iconic cities, stunning nature from NYC skyscrapers to Grand Canyon. Offers pop culture and culinary diversity."
    },
    {
        name: "Thailand 🇹🇭",
        image: "https://source.unsplash.com/random/800x600?thailand,beach",
        description: "Southeast Asian paradise with Phuket beaches, Bangkok temples, and exotic street food. Perfect for adventure lovers."
    },
    {
        name: "Australia 🇦🇺",
        image: "https://source.unsplash.com/random/800x600?australia,sydney",
        description: "Great Barrier Reef, Sydney Opera House, paradise beaches. Ideal for nature lovers and unique wildlife like kangaroos."
    },
    {
        name: "Greece 🇬🇷",
        image: "https://source.unsplash.com/random/800x600?greece,santorini",
        description: "Birthplace of Western civilization. Visit Athens' Acropolis and stunning islands like Santorini with white houses and crystal waters."
    },
    {
        name: "UK 🇬🇧",
        image: "https://source.unsplash.com/random/800x600?uk,london",
        description: "London's history, Edinburgh's medieval charm, and Scottish landscapes. A destination full of discoveries."
    },
    {
        name: "Mexico 🇲🇽",
        image: "https://source.unsplash.com/random/800x600?mexico,beach",
        description: "Colorful culture and flavors. From Cancún beaches to Chichén Itzá ruins. Mexican cuisine is UNESCO-listed."
    },
    {
        name: "Canada 🇨🇦",
        image: "https://source.unsplash.com/random/800x600?canada,nature",
        description: "Nature at its best: Rocky Mountains, Niagara Falls, northern lights. Modern cities like Toronto mix multiculturalism."
    },
    {
        name: "Switzerland 🇨🇭",
        image: "https://source.unsplash.com/random/800x600?switzerland,alps",
        description: "Alpine paradise with dream landscapes. Perfect for skiing, hiking, and world-famous Swiss chocolate."
    },
    {
        name: "New Zealand 🇳🇿",
        image: "https://source.unsplash.com/random/800x600?newzealand,hobbit",
        description: "Magical mountains, glaciers, and forests. Adventure destination and filming location for Lord of the Rings."
    },
    {
        name: "Brazil 🇧🇷",
        image: "https://source.unsplash.com/random/800x600?brazil,rio",
        description: "Land of samba, Carnival, and natural beauty. Christ the Redeemer, Amazon rainforest, and Bahia beaches."
    },
    {
        name: "Argentina 🇦🇷",
        image: "https://source.unsplash.com/random/800x600?argentina,patagonia",
        description: "From vibrant Buenos Aires to stunning Patagonia. Experience world-class steak and tango culture."
    },
    {
        name: "Egypt 🇪🇬",
        image: "https://source.unsplash.com/random/800x600?egypt,pyramids",
        description: "Home of Giza Pyramids and Nile River. Explore ancient temples like Abu Simbel and Luxor's mysteries."
    },
    {
        name: "Türkiye 🇹🇷",
        image: "https://source.unsplash.com/random/800x600?turkey,cappadocia",
        description: "Cultural crossroads. Visit Istanbul's Blue Mosque, Cappadocia's hot air balloons, and turquoise coasts."
    },
    {
        name: "India 🇮🇳",
        image: "https://source.unsplash.com/random/800x600?india,tajmahal",
        description: "Land of colors and spirituality. See the Taj Mahal, sacred Varanasi, and enjoy spicy cuisine."
    },
    {
        name: "Indonesia 🇮🇩",
        image: "https://source.unsplash.com/random/800x600?bali,temple",
        description: "Tropical paradise with ancient temples and dream beaches. Top destination for relaxation and adventure."
    },
    {
        name: "South Africa 🇿🇦",
        image: "https://source.unsplash.com/random/800x600?safari,cape-town",
        description: "Wildlife safaris in Kruger Park, Table Mountain. Rich history connected to Nelson Mandela."
    }
];

// Generate country cards
const grid = document.getElementById('countriesGrid');
countries.forEach(country => {
    const card = document.createElement('div');
    card.className = 'country-card';
    card.innerHTML = `
        <img src="${country.image}" class="country-image" alt="${country.name}">
        <h3>${country.name}</h3>
    `;
    card.addEventListener('click', () => openModal(country));
    grid.appendChild(card);
});

// Modal functions
const modal = document.getElementById('infoModal');
const span = document.getElementsByClassName("close")[0];

function openModal(country) {
    document.getElementById('modalTitle').textContent = country.name;
    document.getElementById('modalImage').src = country.image;
    document.getElementById('modalDescription').textContent = country.description;
    modal.style.display = "block";
}

span.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}