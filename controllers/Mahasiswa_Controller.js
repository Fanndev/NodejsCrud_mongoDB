const modelMahasiswa = require('../model/Mahasiswa.model');



// Get Datas Mahasiswa
exports.Mahasiswa = async (req, res) => {
  try {
    const allmahasiswa = await modelMahasiswa.find({})
    res.status(200).json(allmahasiswa)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

exports.GetMahasiswaID = async (req, res) => {
  try {
      const {id} = req.params;
      const mahasiswa = await modelMahasiswa.findById(id);
      res.status(200).json(mahasiswa);
  } catch (error) {
      res.status(500).json({message: error.message})
  }
}


// add Data Mahasiswa
exports.addMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await modelMahasiswa.create(req.body)
    res.status(200).json(mahasiswa)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
}

// Update mahasiswa
exports.editMahasiswa = async (req, res) => {
  try {
    const {id} = req.params.id;
  const mahasiswa = await modelMahasiswa.findByIdAndUpdate(id, req.body)
  if (!mahasiswa) {
    return res.status(404).json({message: `Cannot find data mahasiswa ID ${id}`})
  }
  const updateMahasiswa = await modelMahasiswa.findById(id);
  res.status(200).json({message: 'Success Update Data'})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

