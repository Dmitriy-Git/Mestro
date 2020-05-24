export default class Api {
  constructor(option) {
    this.option = option;
    this.url = option.baseUrl;
    this.key = option.headers.authorization;
  }

  getInitialCards() {
    return fetch(`${this.option.baseUrl}/users/me`, {
      headers: {
        authorization: this.key,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .then((result) => {
        //console.log(result);

        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addArrayCard() {
    return fetch(`${this.option.baseUrl}/cards`, {
      headers: {
        authorization: this.key,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  sendData(name, about) {
    return fetch(`${this.url}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this.key,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch((err) => {
        console.log(err);
      });

    //  Надо исправить: Необходимо в метод добавить обработку ошибок
    //    .catch((err) => {
    //  	console.log(err);
    //  	});
  }
}
// Надо исправить:  это перенести в script.js
// Надо исправить: вызовы надо делать из классов

/**
    * Здравствуйте. Хорошая работа
    * 
    * 	
        * Класс Api это отдельный класс, который ничего не знает о других классах и методах
        * Вы можете только получать данные из этого класса и использовать эти данные.
        * Представьте, что я дам Вам другой класс(допустим DataBase) к внутренностям которого вы не будете иметь доступ и даже прочитать этот файл не сможете
        * предварительно скажу, что у него есть несколько методов  getInitialCards deleteCard addCard, editUserInfo, setUserInfo и так далее
        * Который только возвращает/записывает данные, а вы можете получить только обращаясь к этим методам.
        * Соответственно в классе нельзя реализовать такие методы как querySelector или обратиться к другому классу, а только обратиться к методам сервера или базы.
        * Получается отдельная обязанность. Таким же способом Вы обращаетесь к серверу. Вы не знаете, что на сервере, даже язык программирования, но вы знаете методы
        * к которым обращаетесь и способ обращения. Это и есть обязанность отдельного класса.
        *
    * 
    * 
     * Самый правильный способ, как пример указан в брифе
     // url лучше передавать при инициализации класса в конструктор
     fetch(`url/cards`,
                {
       headers: {
                        // ключ который надо передавать в параметрах
      authorization: param.authorization
                    }
                })
      .then(res => {
        if (res.ok) {
       return res.json();
                }
                // если ошибка, переходим в catch
       return Promise.reject(`Ошибка: ${res.status
                }`);
            })
    .then((result) => {
                // обрабатываем результат
                // а точнее возвращает результат работы прямо в тот класс откуда вызывали
            })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
                });
    
 Хочу заметить что данные авторизации лучше передать при создании класса API в ввиде объекта	
    
     * Вызывать же методы класса Api лучше из других классов
     *
     * Стоит отметить, что реализации в классе API быть не должно. Точнее прямого взаимодействия. Методы могут вызываться
     * из других классов и возвращать данные, а работа с этими данными должны быть непосредственно в классах создаваемых в 8 спринте
    *
     * работа принимается только при исправлении всех "Надо исправить"
     *
    */

/* Здравствуйте. Думаю, вы написали, что работа хорошая , с целью ободрить , так как исправить нужно чуть ли не все
С пунктом передачи ссылки и токена в параметры я вроде бы разобрался, а вот с вызовом методов класса Api в других классов
оказалось сложнее. Обращался в группу с этим, попробовал применить то, что посоветовали для метода addArrayCard() , пробовал
вызвать этот метод в CardList, но почему то не работает. Ума не приложу, почему так ? Пожалуйста,если вам не сложно, можете попроще объяснить, как
этот выполнить пункт этого задания.По-моему, это спринт гораздо тяжелее предыдущего, что странно, так как накануне
жесткий дедлайн.
*/

/** 
 * Здравствуйте. Отвечаю на ваш призыв )
 * Вот смотрите, вы инициализировали класс API 
 * const api = new Api({
  baseUrl: 'https://praktikum.tk/cohort10',
  headers: {
    authorization: '165f3206-22d5-423f-975a-7e75b1aca5ec',
    'Content-Type': 'application/json'
  }
});
 * Дальше вам надо просто передать переменную в класс
 
// Обратите внимание на переменную api, я просто передал её в другой класс
const cardList = new CardList(cardPlaces, initialCards, newUserCard , api);

в классе CardList вы уже вызываете 
    this.api.getInitialCards()
      .then(cards => {
        for (const card of cards) {
          this.addCard(card);
        }
      })
      а надо вот так 
      this.api.addArrayCard()
      .then(cards => {
        for (const card of cards) {
          this.addCard(card);
        }
      })
      я поправил
     
    То есть в классе API вы обращаетесь к серверу, получаете эти данные 
        .then(res => {
             if (res.ok) {
                return res.json(); // вот здесь мы получаем данные и отправляем в класс  CardList
             }
                return Promise.reject(`Ошибка: ${res.status}`)
            })


 * Посмотрите консоль и работу, я чуть подредактировал
 Используйте console.log для дебага
 */

/* Здравствуйте, спасибо вам за участие и помощь в выполнении заданий , разобрался более менее с тем,  
 как вызывать методы класса Api  в других классах , что в then мы возвращаем то, что получаем с сервера. 
 Скажу вам честно , не каждый проверяющий отвечает на призывы студента, это очень помогает в выполнении заданий. 
 Тем более похвально, что проверяющий не обязан что-либо объяснять. Первый метод вызвал в классе UserInfo, называется 
 defaultData(). Второй, как вы написали в классе CardList . С третьим так и не удалось разораться , вернее , в группе помогли
 с ним , я код написал , но у меня почему-то результат попадает в catch (Ошибка 400). Этот третий метод вызвал в осоновном файле 
 api.sendData(). С первыми методома было все нормально , с сервера приходил объект с человеческим именем и информацией о себе, 
 а поле некоторого времени что-то поломалось: c сервера стал приходить объект с именем [Object Object], изображения почему-то не отрисовываются
Не могу разобраться, почему все так печально выходит. Код постарался почистить перед отправкой работы. 
Спасибо за внимание!

 */

/**
 * Здравствуйте
 * .catch верните в метод sendData
 * C сервером всё хорошо. Просто вы записали на сервере "[Object Object]" данные пользователя, вот вам и приходит то что вы записали.
 *
 * Отслеживайте, что вам приходит или уходит от вас в консоли f12 в network
 * Ставьте console.log если необходимо.
 * Я не нашёл в классе Api данных для отправки карточки или профиля пользователя для изменения или добавления.
 *
 * из файла script перенесите api.sendData(edit.value, self.value) в классы. Там по идее только взаимосвязь между классами должна быть
 *
 */

/**
 * Исправил все "Надо исправить", которые нашел, перенес sendData в класс, все равно, та же ошибка , также ничего не
 * попадает в данные для отправки формы. Может есть ещё какие-нибудь критичные ошибки, которые "Надо исправить"?
 *
 * */

/**
 * Вы проследите всю цепочку. После вызова какой метод вызывается, какие слушатели весят на кнопке, что в методах вызывается и так далее.
 * Начните с самого начала. используйте console.log и debugger;
 * Посмотрите какие методы вызываются при клике сохранить и какие действия происходят и методы вызываются.
 * Класс Api у вас нормальный, но вы не отправляете данные на сервер потому что не вызываете метод отправки класса Api
 *
 */

/*
Разобрался с этим методом, я же его не вызывал при событии 'submit' на форме . Сейчас все отправляется на сервер.
Реализацию оставил в методе класса sendForm, а вызвал метод в слушателе формы


*/

/**
 * Здравствуйте. Тепеь вам надо разобраться с карточками. Вы их запрашиваете много раз, а надо 1 раз только
 * посмотрите в консоли...
 *
 *
 */

/*
 Принял, исправил.
 
 */

/*
 * Здравствуйте, 
 * работа принимается 
 * очень большая просьба перед следующим спринтом удалить все комментарии
 * 
        удалите console.log() везде 
        console.log() используется только для разработки.
 
 * 
 */