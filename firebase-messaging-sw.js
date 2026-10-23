importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDgpS0FqB5b4oi7NTvdm9sHM0DVaPuxYuY",
    authDomain: "nudge-relay-3fce7.firebaseapp.com",
    projectId: "nudge-relay-3fce7",
    storageBucket: "nudge-relay-3fce7.firebasestorage.app",
    messagingSenderId: "533763167345",
    appId: "1:533763167345:web:6bdbc5786aaf7cb735b7d0"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/564/564619.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
