# FORMULIR FEEDBACK & WEB LANDING PAGE CV

Soal Pertama : Formulir Feedback
Lokasi ada di root awal halaman : di route /
contoh : namadomain.com
Live Preview : https://kreasi-ai.opwarnet.my.id

Soal Kedua : Web Landing Page CV
Lokasi ada di route profile : yaitu /profile
contoh: namadomain.com/profile
Live Preview : https://kreasi-ai.opwarnet.my.id/profile

Design :
- Figma : https://www.figma.com/design/2Wy1GN5uezlatJ9E6ENcdd/School-Education-Website-UI-Template---Light-Theme-(Neubrutalism)---FREE-Editable-(Community)?node-id=33-6&t=0rQJ4Igfj26la9uu-1

Technologi yang digunakan :
- Backend : Laravel 11 - (Inertia JS)
- Frontend : React JS
- Styling : TailwindCSS - Responsife all Device

Detail Aplikasi : 
1. Formulir Feedback :
   - Sebuah form untuk mengisi feedback
   - Form berisi 3 inputan yaitu : nama, email, message
   - Validation: 3 sisi yaitu: html, javascript, backend laravel
   - Jika semua validation terlewati maka akan menyimpan data ke database MySQL, dengan table:
   - name, email, img_url (generate otomatis dari lorem picsum), massage, timestamp.
   - Tampilan List Feedback: menampilkan 10 Feedback terbaru dan ditampilkan berbentuk slider, dimana slider bergerak secara otomatis ke kiri, ketika di hover akan berhenti bergerak.
   - Component Card dari feedback berisi: Foto, Nama, Email Button, Message.
     
2. Web Landing Page CV
   - Berisi sesuai dengan profile pribadi saya yang ada di CV.
