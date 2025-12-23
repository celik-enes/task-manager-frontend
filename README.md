Task Manager – Frontend

Bu proje, basit bir Task Manager uygulamasının frontend kısmını içerir.
Kullanıcıların görev ekleyebildiği, listeleyebildiği, tamamlayabildiği ve silebildiği bir arayüz sunar.

Kullanılan Teknolojiler

HTML – Sayfa yapısı

CSS – Basit ve okunabilir arayüz tasarımı

Vanilla JavaScript – Kullanıcı etkileşimleri ve API istekleri

Fetch API – Backend ile HTTP üzerinden iletişim

Özellikler

Görevleri backend’den çekip listeleme

Yeni görev ekleme

Görev silme

Görev tamamlama (backend API üzerinden)

Backend Bağlantısı

Frontend, aşağıdaki endpoint üzerinden backend ile haberleşir:

http://localhost:4000/tasks


Uygulamanın doğru çalışabilmesi için backend servisinin çalışıyor olması gerekir.

Proje Yapısı
task-manager-frontend/
│
├── index.html
├── app.js
└── .gitignore


index.html → Uygulamanın arayüzü

app.js → API istekleri ve DOM işlemleri

.gitignore → Git için hariç tutulan dosyalar

Çalıştırma

Backend’i çalıştır

index.html dosyasını tarayıcıda aç

Task eklemeye başla

Notlar

Bu frontend uygulaması, backend tarafındaki REST API yapısına bağlı olarak çalışır ve veri kalıcılığı backend tarafından yönetilir.
