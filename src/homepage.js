function createMenuElement(tag,className,textContent) {
    const element = document.createElement(tag);
    if(className) element.classList.add(className);
    if (textContent) element.innerHTML = textContent;
    return element;
}


const homePageText = "At Mehfil, we celebrate vibrant Indian flavors with a modern twist. Our menu pushes the boundaries of fusion, featuring dishes like Butter Chicken Pizza and Dal Makhani Arancini - each bite bursting with flavor and creativity.  <br><br> Craving classic Indian or a culinary adventure? Mehfil offers something for everyone in a vibrant atmosphere perfect for any occasion. <br><br> Discover the art of Indian fusion at Mehfil - where tradition meets innovation.";



function Homepage() {
    const body = createMenuElement('div','homepage');
    const heading = createMenuElement('div','heading','Mehfil')
    const tagline = createMenuElement('div','tagline','Flavor with a story')
    body.appendChild(heading)
    body.appendChild(tagline)

    const text = createMenuElement('div', 'homePageText' , homePageText)
    body.appendChild(text)
    return body;
}

export {Homepage};