function openWhatsApp() {
    let phone = "923567612871";
    let message = "Hello Bistro Pizza! I want to place an order.";
    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}
