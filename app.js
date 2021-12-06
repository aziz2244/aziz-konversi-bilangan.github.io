document.querySelector('.konvensi').addEventListener('submit', (e) => {
    document.querySelector('.hitung').style.display = 'none';
    document.querySelector('.loading').style.display = 'block';
    setTimeout(() => {
        hitung();
    }, 500);

    e.preventDefault();
})

function hitung() {
    document.querySelector('.hitung').style.display = 'block';
    document.querySelector('.loading').style.display = 'none';
    const pilih = document.querySelector('.pilih'),
        input = document.querySelector('.bilangan'),
        hasilBiner = document.querySelector('.hasil-biner'),
        hasilDesimal = document.querySelector('.hasil-desimal');

    if (pilih.value == '2') {
        if (input.value >= 2) showError('Hanya nilai 0 & 1');
        if (input.value == '') showError('Nilai Yang anda input Invalid!!');
        else {
            function BinerToDesimal(bilBiner) {
                let desimalNumber = 0;
                const binerToDesimal = bilBiner.split('').reverse();
                binerToDesimal.forEach((biner, index) => {
                    desimalNumber += biner * Math.pow(2, index)
                });
                hasilBiner.value = input.value;
                hasilDesimal.value = desimalNumber;
                input.value = '';
            }
            BinerToDesimal(input.value);
        }
    }

    if (pilih.value == '10') {
        if (input.value == '') showError('Nilai yang anda input tidak valid');
        else {
            const desimalNumber = parseInt(input.value),
                konvensi = desimalNumber.toString(2);
            hasilBiner.value = input.value;
            hasilDesimal.value = konvensi;
            input.value = '';
        }
    }

    function showError(error) {
        document.querySelector('.hitung').style.display = 'none';
        document.querySelector('.loading').style.display = 'none';

        const card = document.querySelector('.card');
        const h1 = document.querySelector('.heading');

        const div = document.createElement('div');
        div.className = 'alert alert-danger';
        div.appendChild(document.createTextNode(error));
        card.insertBefore(div, h1);
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}