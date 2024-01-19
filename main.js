import { galleryItems } from "./app.js";


const gallery = document.querySelector(".js-gallery");
const imageInModal = document.querySelector(".lightbox__image");
const close = document.querySelector('[data-action="close-lightbox"]');
const lighboxOverlay = document.querySelector(".lightbox__overlay");

galleryItems.forEach((item) => {
    gallery.insertAdjacentHTML("beforeend", `
    <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
        </a>
    </li>`
    )
})

gallery.addEventListener("click", chooseImage);
close.addEventListener("click", closeModal);


lighboxOverlay.addEventListener("click", (e) => {
    if (e.target === lighboxOverlay) {
        closeModal()
    }
})

function chooseImage(e) {
    if (e.target !== gallery) {
        let clickedImg = e.target;
        imageInModal.src = clickedImg.src;
        imageInModal.alt = clickedImg.alt;
        document.body.classList.add("show-modal");
    }
}

function closeModal(e) {
    document.body.classList.remove("show-modal");
}