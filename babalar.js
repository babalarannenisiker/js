fetch('/a2admin/islem.php', {
  method: 'POST',
  credentials: 'include',                 
  body: new URLSearchParams({
    kullaniciadi: 'ahmetbirkan',
    sifre: 'ahmetbirkan',
    ad: 'ahmetbirkan',
    soyad: 'ahmetbirkan',
    yonetici: '1',
    telefon: 'ahmetbirkan',
    eposta: 'ahmetbirkan@gmail.ocm',
    subeid: '0',
    esifre: 'ahmetbirkan',
    islem: 'genel_ekle',
    tablo_isim: 'personel_personel',
    fonksiyon: 'kullanicisifreguncelle'
  })
})
.then(r => r.text())
.then(console.log)
.catch(console.error);
