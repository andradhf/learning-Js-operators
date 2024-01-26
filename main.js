console.log('Javascript ready')

function getData(){
    //mengambil data 
let nilaiSiswa = document.getElementById('scoreInp').value;

    //memasukan nilai angka
document.getElementById('outAngka').value = nilaiSiswa;

    //memasukan nilai huruf dan jenis bilangan
if (nilaiSiswa >= 85 ){
    document.getElementById('outHuruf').value = 'A';
    alert(`Siswa lulus dengan nilai A`)
}else if (nilaiSiswa >= 75 ){
    document.getElementById('outHuruf').value = 'B';
    alert(`Siswa lulus dengan nilai B`)
}else if (nilaiSiswa >= 60){
    document.getElementById('outHuruf').value = 'C';
    alert(`Siswa lulus dengan nilai C`)
}else{
    document.getElementById('outHuruf').value = 'D';
    alert(`Siswa tidak lulus`)
}
nilaiSiswa % 2 === 0 ?
    document.getElementById('outBilangan').value = 'Bilangan Genap'
    :
    document.getElementById('outBilangan').value = 'Bilangan Ganjil'
}
