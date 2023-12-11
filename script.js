let cities = [
    {
        name: "bricaldemar",
        imageSrc: "assets/townbricaldemar.png",
        title: "Brical de Mar",
        desc: "Brical de Mar is the first town on Deniz, where tamers begin their journey. It's a small coastal town with essential facilities like Temporium (item shop) and the Tamer's School."
    },

    {
        name: "zadar",
        imageSrc: "assets/townzadar.png",
        title: "Zadar",
        desc: "Zadar is the first area and town in the game. This is where the protagonist starts their adventure by receiving their first Creature and meeting their opponents."
    },

    {
        name: "mokupuni",
        imageSrc: "assets/townmokupuni.png",
        title: "Mokupuni",
        desc: "Mokupuni is the Omninesia's main town, known for its desert aesthetics and research centers. Tamers can find Temporiums and explore the local culture."
    },

    {
        name: "quetzal",
        imageSrc: "assets/townquetzal.png",
        title: "Quetzal",
        desc: "Quetzal is a mining and manufacturing city on Tucma. Residents of Quetzal are known as Quetzaleño's, but are also called 'mine-worms'."
    }
]

let townContainer = document.getElementById("towns")


cities.forEach(city => {
    let html = 
        `<div class="town">
            <img class="image" src="${city.imageSrc}">
            <p class="title">${city.title}</p>
            <p class="desc">${city.desc}</p>
            <a href="${city.name}.html">
            <button>Details</button>
        </a>
        </div>`

    townContainer.innerHTML += html
});