const index = (req, res) => {
    const berita = [
        {
            judul:"Berita 1",
            isi: "Isi berita 1"
        },
        {
            judul: "Berita 2",
            isi: "Isi berita 2"
        },

    ];
    
    
  res.render('index', { title: 'Halaman Home', berita,layout:'main' });
};

const contact = (req, res) =>{
    res.render('contact', { title: 'Halaman Contact',layout:'main' });
}
const prodi = (req, res) =>{
    const prodis = [
        {
            Prodi:"sistem informasi",
            Singkatan:"SI",
            Fakultas:"komputer"
        },
        {
            Prodi:"inof",
            Singkatan:"IF",
            Fakultas:"komputer"
        }
    ]
    res.render('prodi', { title: 'Halaman Contact',prodis,layout:'main' });
}
module.exports = {index, contact, prodi}