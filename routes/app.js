const express = require('express');
const router = express.Router();
const faker = require('faker');




router.get('/kurss', (req, res) => {
   var kurss = [ 
       { "name": "2000$-4000$", "id": "1курс"}, 
         { "name": "4000$-6000$", "id": "2курс" },
         { "name": "6000-10000$", "id": "3курс" }
      ];
    res.render('kurss', 
  			{ "kurss": kurss}
  	);
});

router.get('/group', (req, res) => {
   var group = [ 
       { "name": "18лет - 25лет", "id": "1группа"}, 
         { "name": "26лет - 40лет", "id": "2группа" },
         { "name": "41год - 60лет", "id": "3группа" }
      ];
    res.render('group', 
        { "group": group}
    );
});
 

router.get('/students', (req, res) => {
    res.render('students', 
        { "students": [ 
           {"name": faker.name.lastName(), "id": "Иван", "url":"https://www.dw.com/image/47346155_303.jpg","mark": "18"}, 
           { "name": faker.name.lastName(),"id": "Иван", "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Valeriy_Meladze_at_Laima_Rendez_Vous_Jurmala_2017_%283%29.jpg/300px-Valeriy_Meladze_at_Laima_Rendez_Vous_Jurmala_2017_%283%29.jpg","mark": "19"},
           { "name": faker.name.lastName(),"id": "Иван", "url":"https://apostrophe.ua/uploads/23102019/c9af8e524df818f53552e188920a2646.jpg","mark": "20"},
          ]
        }
    );
});

router.get('/active', (req, res) => {
    res.render('active', 
        { "active": [ 
           { "name": "Максим Вербицкий", "id": "Иван", "url":"data:image/jpeg;base64,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","description": "Потенциальный клиент"}, 
           { "name": "Анастасия Станкевич", "id": "Петя", "url":"https://javasea.ru/uploads/posts/2019-07/1562419684_devushka-v-bolshih-opticheskih-ochkah2.jpg","description": "Потенциальная клиентка"},
          ]
        }
    );
});



module.exports = router;

  



