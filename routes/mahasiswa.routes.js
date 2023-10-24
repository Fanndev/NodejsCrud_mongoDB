// Dan menggunakan metode Router
const router = require("express").Router();
// export controller yang ingin dipakai
const mahasiswaController = require("../controllers/Mahasiswa_Controller");

// Mahasiswa
router.get('/mahasiswa', mahasiswaController.Mahasiswa ); // get Datas Mahasiswa
router.post('/mahasiswa', mahasiswaController.addMahasiswa); //Add Data Mahasiswa

// Lalu export routernya
module.exports = router;