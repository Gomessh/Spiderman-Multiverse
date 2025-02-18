function handleMouseEnter() {
    this.classList.add('card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
    this.classList.remove('card--hovered');
    document.body.id = '';
}

function addEventListnersToCard() {
    const cardElemments = document.getElementsByClassName("card");

    for (let i = 0; i < cardElemments.length; i++) {
        const card = cardElemments[i];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListnersToCard, false);

function selectCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

    carousel.style.transform = newTransform;

    const activeButtonElement = document.querySelector('.buttonActive');

    if (activeButtonElement) {
        activeButtonElement.classList.remove('buttonActive');
    }

    // Adiciona a nova classe sem remover a classe original
    selectedButtonElement.classList.add('buttonActive');


}
