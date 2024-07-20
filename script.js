document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        {
            question: 'Sebutkan benda yang biasa dibawa saat berpergian!',
            answers: [
                { jawaban: 'Handphone', poin: 30 },
                { jawaban: 'Kunci', poin: 25 },
                { jawaban: 'Dompet', poin: 20 },
                { jawaban: 'Tas', poin: 15 },
                { jawaban: 'Power Bank/Charger', poin: 14 },
                { jawaban: 'Antis/Handsanitizer', poin: 12 },
                { jawaban: 'Botol Minum', poin: 11 },
                { jawaban: 'Payung', poin: 10 },
                { jawaban: 'Tisu', poin: 8 },
                { jawaban: 'Laptop', poin: 5 },
            ]
        },
        {
            question: 'Sebutkan nama-nama negara dengan penduduk terbanyak!',
            answers: [
                { jawaban: 'China', poin: 30 },
                { jawaban: 'India', poin: 25 },
                { jawaban: 'Amerika Serikat', poin: 20 },
                { jawaban: 'Indonesia', poin: 15 },
                { jawaban: 'Pakistan', poin: 10 },
                { jawaban: 'Brasil', poin: 8 },
                { jawaban: 'Nigeria', poin: 7 },
                { jawaban: 'Bangladesh', poin: 5 },
                { jawaban: 'Rusia', poin: 4 },
                { jawaban: 'Meksiko', poin: 3 },
            ]
        },
        {
            question: 'Sebutkan kegiatan yang biasa dilakukan di pagi hari!',
            answers: [
                { jawaban: 'Mengecek ponsel', poin: 30 },
                { jawaban: 'Sarapan', poin: 25 },
                { jawaban: 'Mandi', poin: 20 },
                { jawaban: 'Berolahraga', poin: 15 },
                { jawaban: 'Menggosok gigi', poin: 10 },
                { jawaban: 'Membersihkan rumah', poin: 8 },
                { jawaban: 'Menyeduh kopi', poin: 7 },
                { jawaban: 'Memasak', poin: 5 },
                { jawaban: 'Menjemur pakaian', poin: 4 },
                { jawaban: 'Menonton TV', poin: 3 },
            ]
        },
        {
            question: 'Sebutkan makanan yang biasa dikonsumsi untuk sarapan!',
            answers: [
                { jawaban: 'Nasi goreng', poin: 30 },
                { jawaban: 'Roti', poin: 25 },
                { jawaban: 'Sereal', poin: 20 },
                { jawaban: 'Bubur ayam', poin: 15 },
                { jawaban: 'Telur', poin: 10 },
                { jawaban: 'Pancake', poin: 8 },
                { jawaban: 'Sandwich', poin: 7 },
                { jawaban: 'Yogurt', poin: 5 },
                { jawaban: 'Oats', poin: 4 },
                { jawaban: 'Mie', poin: 3 },
            ]
        },
        {
            question: 'Sebutkan jenis minuman yang sering dikonsumsi!',
            answers: [
                { jawaban: 'Air putih', poin: 30 },
                { jawaban: 'Teh', poin: 25 },
                { jawaban: 'Kopi', poin: 20 },
                { jawaban: 'Jus buah', poin: 15 },
                { jawaban: 'Susu', poin: 10 },
                { jawaban: 'Soda', poin: 8 },
                { jawaban: 'Bir', poin: 7 },
                { jawaban: 'Smoothie', poin: 5 },
                { jawaban: 'Lemonade', poin: 4 },
                { jawaban: 'Air kelapa', poin: 3 },
            ]
        },
        {
            question: 'Sebutkan hewan peliharaan yang populer!',
            answers: [
                { jawaban: 'Kucing', poin: 30 },
                { jawaban: 'Anjing', poin: 25 },
                { jawaban: 'Ikan', poin: 20 },
                { jawaban: 'Burung', poin: 15 },
                { jawaban: 'Hamster', poin: 10 },
                { jawaban: 'Kura-kura', poin: 8 },
                { jawaban: 'Kelinci', poin: 7 },
                { jawaban: 'Ular', poin: 5 },
                { jawaban: 'Iguana', poin: 4 },
                { jawaban: 'Ferret', poin: 3 },
            ]
        }
        // Add more questions as needed
    ];

    const answersTable = document.getElementById('answersTable').getElementsByTagName('tbody')[0];
    const answersDiv = document.querySelector('.answers');
    const totalPointsElement = document.getElementById('totalPoints');
    const questionTitle = document.querySelector('.container h1');
    const questionButtons = document.querySelectorAll('.question-button');

    function loadQuestion(questionIndex) {
        const selectedQuestion = questions[questionIndex];
        const answers = selectedQuestion.answers;

        questionTitle.innerText = selectedQuestion.question;

        // Clear existing rows and answer boxes
        answersTable.innerHTML = '';
        answersDiv.innerHTML = '';

        let totalPoints = 0;

        // Create empty rows in the table
        answers.forEach(() => {
            const row = answersTable.insertRow();
            const cellJawaban = row.insertCell(0);
            const cellPoin = row.insertCell(1);

            cellJawaban.innerText = "";
            cellPoin.innerText = "";
        });

        // Create answer boxes
        answers.forEach((answer, index) => {
            const box = document.createElement('div');
            box.classList.add('answer-box');
            box.innerText = `${index + 1}`;
            box.dataset.index = index;
            answersDiv.appendChild(box);

            // Add click event listener
            box.addEventListener('click', function() {
                const row = answersTable.rows[index];
                const cellJawaban = row.cells[0];
                const cellPoin = row.cells[1];

                // Update table with answer and points
                cellJawaban.innerText = answer.jawaban;
                cellPoin.innerText = answer.poin;

                // Disable the box after clicking
                box.classList.add('disabled');
                box.removeEventListener('click', arguments.callee);

                // Update total points
                totalPoints += answer.poin;
                totalPointsElement.innerText = totalPoints;
            });
        });
    }

    // Add click event listeners to question buttons
    questionButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            questionButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to the clicked button
            button.classList.add('active');

            // Load the selected question
            loadQuestion(index);
        });
    });

    // Optionally, load the first question by default
    loadQuestion(0);
});