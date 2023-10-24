// Dan menggunakan metode Router
const router = require("express").Router();
// export controller yang ingin dipakai
const mahasiswaController = require("../controllers/Mahasiswa_Controller");

// Mahasiswa
router.get('/mahasiswa', mahasiswaController.Mahasiswa ); // get Datas Mahasiswa
router.post('/mahasiswa', mahasiswaController.addMahasiswa); //Add Data Mahasiswa
router.get('/mahasiswa/:id', mahasiswaController.GetMahasiswaID) //Get by ID
router.delete('/mahasiswa/:id', mahasiswaController.deleteMahasiswa) //Delete Mahasiswa

// Lalu export routernya
module.exports = router;