function createMenuElement(tag,className,textContent) {
    const element = document.createElement(tag);
    if(className) element.classList.add(className);
    if(textContent) element.textContent = textContent;
    return element;
}

function Contact() {
    const body = createMenuElement('div','contact');
    const heading = createMenuElement('div','heading','Contact Us');
    body.appendChild(heading);

    const formSection = createMenuElement('div','formSection')
    const form = document.createElement('form');
    form.innerHTML = `
    <input type='next' name='name' placeholder='Name'>
    <input type='email' name='email' placeholder='Email'>
    <input type='text' name='message' class='message' placeholder='Message'>
    <button type='submit' id> Submit </button>
    `
    form.classList.add('form')
    formSection.appendChild(form);

    body.appendChild(formSection);
    
    return body;
}
export {Contact};