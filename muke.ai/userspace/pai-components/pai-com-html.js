

// kodepay 支付

window.KODEPAY_APPLICATION_ID = "e23797ba-408b-11ee-ac3d-8aab52088258"; // application_id
window.KODEPAY_CLIENT_ID = "f2ad3314-42ef-11ee-8ff7-2668ac0df4c0"; //client_id
window.KODEPAY_ENV = "production"; //env，development 和  production
// window.KODEPAY_APPLICATION_ID = "7e2e08f8-408b-11ee-bc77-8aab52088258"; // application_id
// window.KODEPAY_CLIENT_ID = "b5c933c8-408b-11ee-a04e-8aab52088258"; //client_id
// window.KODEPAY_ENV = "development"; //env，development 和  production
(function () {
    const s = document.createElement("script");
    s.src = "https://muke.ai/userspace/pai-components/kodepay-website.js";
    s.async = 1;
    document.head.appendChild(s);
})();

