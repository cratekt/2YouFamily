// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

// 👉 여기에 본인의 Firebase 프로젝트 설정값을 똑같이 넣으세요!
const firebaseConfig = {
    apiKey: "AIzaSyDHIPeTOFPbMBw8A6L7VWGruxS3c70sPqg",
    authDomain: "youfamily.firebaseapp.com",
    projectId: "youfamily",
    storageBucket: "youfamily.firebasestorage.app",
    messagingSenderId: "590116385195",
    appId: "1:590116385195:web:12dbd6aefb3975d508e2ee",
    measurementId: "G-J33ZYG20ZZ"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// 백그라운드에서 알림 수신 시 처리 로직
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/3237/3237472.png',
    requireInteraction: true // 앱이 꺼져있을 때도 알림 유지
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});