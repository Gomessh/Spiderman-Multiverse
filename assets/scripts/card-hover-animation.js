function handleMouseEnter() {
    this.classList.add('card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
    this.classList.remove('card--hovered');
    document.body.id = '';
}

function addEventListnersToCard () {
    const cardElemments = document.getElementsByClassName("card");

    for (let i = 0; i < cardElemments.length; i++) {
        const card = cardElemments[i];  
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListnersToCard, false);