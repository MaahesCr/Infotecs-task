// === Создание html документа ===

const fs = require('fs'); 

let htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/style.css">
    <title>Document</title>
</head>
<body>
    <section class="main-section">
        <div class="main-section__header-div">
            <h1 class="main-section__header">Тестовое задание для стажера на
                позицию «Программист на языке
                JS»</h1>
        </div>
 
            <table class="main-section__table table">
                <thead>
                    <tr>
                        <th>First Name <img src="assets/img/icons8-sort-24.png" alt="sort"></th>
                        <th>Last Name <img src="assets/img/icons8-sort-24.png" alt="sort"></th>
                        <th>About <img src="assets/img/icons8-sort-24.png" alt="sort"></th>
                        <th>Eye Color <img src="assets/img/icons8-sort-24.png" alt="sort"></th>
                    </tr>
                </thead>
                <tbody class="table__tbody">

                </tbody>
            </table>
            <div class="main-section__absolute-div-form">
                <div class = "main-section__edit-form">
                    <form action="#">
                        <h3>Редактируемая строка</h3>
                        <input type="text" name="" id="first-name-input">
                        <input type="text" name="" id="last-name-input">
                        <textarea name="" id="about-input" rows="5" ></textarea>
                        <!--<input type="text" name="" id="about-input">-->
                        <input type="text" name="" id="eye-color-input">
                        <hr>
                        <button onclick="updateData()">Обновить данные </button>
                    </form>
                </div>
            </div>
    </section>
    <script src="main.js"></script>
</body>
</html>
`;

fs.writeFile('index.html', htmlContent, (error) => {}); //throw new Error('something went wrong')} );
