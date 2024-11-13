# FORMULIR FEEDBACK & WEB LANDING PAGE CV

Soal Pertama : Formulir Feedback</br>
Lokasi ada di root awal halaman : di route /</br>
contoh : namadomain.com</br>
Live Preview : https://kreasi-ai.opwarnet.my.id


Soal Kedua : Web Landing Page CV</br>
Lokasi ada di route profile : yaitu /profile</br>
contoh: namadomain.com/profile</br>
Live Preview : https://kreasi-ai.opwarnet.my.id/profile </br>
Sebagai bahan pertimbangan saya melampirkan Web Landing Page CV saya yang sebelumnya : https://opwarnet.my.id

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


Tutorial Clone :
1. git clone
2. composer install
3. npm install
4. cp .env.example .env (edit: .env)
5. php artisan key:generate
6. php artisan migrate:fresh --seed
7. npm run build
8. npm run dev
9. another terminal ( php artisan serve )
