// export const API_SERVER = 'https://admin.carryshipment.com/api';
export const API_SERVER = 'http://127.0.0.1:8000/api';
// export const SERVER_IMAGE_PATH = "https://admin.carryshipment.com/admin/img/profile/";export const API_SERVER = 'https://admin.carryshipment.com/api';
export const SERVER_IMAGE_PATH = "http://127.0.0.1:8000/admin/img/profile/";

export const getMapUrl = (mapCode) => {
    let parser = new DOMParser();
    mapCode = parser.parseFromString(mapCode, 'text/html');
    return mapCode?.querySelector('iframe')?.getAttribute('src') || "https://www.google.com/maps/";
}

export const scrollToTop = () => {
    window.scrollTo(0, 0);
}

export const scrollToElement = (e) => {
    let scrollElement = document.querySelector(e.target.getAttribute('scroll-to'));
    if (scrollElement) {
        scrollElement.scrollIntoView({ behavior: 'smooth' });
    } else window.scrollTo(0, 350);
}
