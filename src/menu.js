import menuItems from './menuitems.json';


function createMenuElement(tag,className,textContent) {
    const element = document.createElement(tag);
    if(className) element.classList.add(className);
    if (textContent) element.textContent = textContent;
    return element;
}

function MenuElements(dishName,dishDescription,dishPrice) {
    const dish = createMenuElement('div','dish');

    const name =  createMenuElement('div','dishName',dishName); 
    dish.appendChild(name);

    const description =  createMenuElement('div','description',dishDescription); 
    dish.appendChild(description);

    const price =  createMenuElement('div','price',`₹${dishPrice.toFixed(2)}`); 
    dish.appendChild(price);

    return dish;
}

function Menu() {
    const body = createMenuElement('div','menu');
    const heading =  createMenuElement('div','heading','Menu'); 
    body.appendChild(heading)

    const dishSection = document.createElement('div');

    for(let category in menuItems){
        if (menuItems.hasOwnProperty(category)){
            const categoryDiv = createMenuElement('div','category',category); 
            dishSection.appendChild(categoryDiv);
            const items = menuItems[category];
            items.forEach(
                item => {
                    const dish = MenuElements(item.name,item.description,item.price);
                    dishSection.appendChild(dish);
                }
            )
        }
    }

    body.appendChild(dishSection);
    return body;
}

export { Menu };
