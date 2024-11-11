// script.js
const cats = [
    {
        name: "Mia",
        age: 2,
        description: "Mänguline ja uudishimulik kass.",
        image: "kass1.jpg"
    },
    {
        name: "Simba",
        age: 4,
        description: "Sõbralik ja rahulik."
        image: "kass2.webp"
    }
];

const catsContainer = document.getElementById('cats');

cats.forEach(cat => {
    const catDiv = document.createElement('div');
    catDiv.className = 'cat';
    
    catDiv.innerHTML = `
        <img src="${cat.image}" alt="${cat.name}">
        <h3>${cat.name}</h3>
        <p>Vanus: ${cat.age}<br>${cat.description}</p>
    `;
    
    catsContainer.appendChild(catDiv);
});
