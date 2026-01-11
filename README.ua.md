# Домашнє завдання

## Загальні вимоги

- Створений репозиторій **goit-react-hw-01**.
- При здачі домашньої роботи є два посилання:
  - на вихідні файли (репозиторій),
  - на робочу сторінку завдання, задеплоєну на [**Vercel**](https://vercel.com/dashboard).
- Проєкт створено за допомогою [**Vite**](https://vite.dev/).
- Під час відвідування живої сторінки в консолі **відсутні помилки та попередження**.
- Для кожного компонента у папці `src/components` створена **окрема папка**, яка містить:
  - JSX-файл компонента,
  - файл стилів.
- Назви:

  - папки,
  - JSX-файлу,
  - файла стилів (`.module.css`)

  однакові та відповідають назвам у завданні.

- Для експорту компонентів використовується **export default**.
- Компоненти всіх завдань рендеряться **на одній сторінці** всередині кореневого компонента `<App>`.
- Усі пропси передаються компонентам під час виклику.
- JS-код чистий та зрозумілий, використовується **Prettier**.
- Стилізація виконана за допомогою **CSS-модулів**.

---

## Завдання 1 — Профіль соціальної мережі

Необхідно створити компонент `<Profile>`, за допомогою якого можна відображати інформацію про користувача соціальної мережі.

![Image](./src/assets/goit-react-1.png)

### Пропси компонента

Компонент повинен приймати наступні пропси:

- `name` — ім'я користувача
- `tag` — тег у соціальній мережі (без `@`)
- `location` — місто та країна
- `image` — посилання на аватар користувача
- `stats` — об'єкт з інформацією про активності

### Структура розмітки

Компонент повинен створювати розмітку наступної структури з **динамічними даними**, що передаються через пропси:

```html
<div>
  <div>
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
    />
    <p>Petra Marica</p>
    <p>@pmarica</p>
    <p>Salvador, Brasil</p>
  </div>

  <ul>
    <li>
      <span>Followers</span>
      <span>1000</span>
    </li>
    <li>
      <span>Views</span>
      <span>2000</span>
    </li>
    <li>
      <span>Likes</span>
      <span>3000</span>
    </li>
  </ul>
</div>
```

## Приклад використання компонента Profile

Нижче наведений приклад використання компонента `<Profile>` у компоненті `<App>`:

- Рендеримо компонент `Profile` всередині `App`
- Передаємо компоненту `Profile` дані у вигляді пропсів

Використовуйте ці дані користувача у своїй роботі для значень пропсів.

### Дані користувача

```js
const userData = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};
```

Треба винести дані користувача в JSON-файл, щоб не завантажувати компонент App. Наприклад, створіть у папці src файл userData.json, перенесіть туди дані користувача, відформатуйте їх у формат JSON, а потім імпортуйте його в App, щоб передати ці дані через пропси.

```js
import userData from "../userData.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};
```

---

## Завдання 2 — Список друзів

Необхідно створити компонент `<FriendList>`, за допомогою якого можна відображати інформацію про друзів користувача.

![Image](./src/assets/goit-react-2.png)

### Вимоги до компонента

Компонент `<FriendList>` повинен:

- Приймати один проп:
  - `friends` — масив об’єктів друзів
- Створювати DOM-розмітку наступної структури:

```html
<ul>
  <!-- Кількість <li> залежить від кількості об'єктів у масиві -->
  <li>
    <FriendListItem />
  </li>
</ul>
```

### Компонент FriendListItem

Компонент `<FriendListItem>` — це картка одного друга, яка відображає його основну інформацію.

#### Пропси компонента

Компонент повинен приймати наступні пропси:

- `avatar` — посилання на аватар друга
- `name` — ім'я друга
- `isOnline` — булеве значення, що показує статус друга:
  - `true` — в мережі
  - `false` — не в мережі

#### Структура розмітки

Компонент `<FriendListItem>` повинен створювати DOM-розмітку наступної структури:

```html
<div>
  <img src="" alt="Avatar" width="48" />
  <p>Friend name</p>
  <p>Friend status</p>
</div>
```

### Логіка відображення статусу друга

Залежно від пропа **isOnline**, текст в `p.status` повинен змінюватися, а його **колір тексту** - також.  
Якщо значення **true**, то текст **Online** і колір тексту **зелений**,  
в іншому випадку текст **Offline** і колір тексту **червоний**.  
Це можна зробити за допомогою різних CSS-класів.

Приклад використання компонента `<FriendList>` в компоненті `<App>`.  
Дані про друзів — це масив об'єктів із відомими властивостями.  
Використовуй ці дані в своїй роботі для значень пропсів.

```js
const friends = [
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
    name: "Mango",
    isOnline: true,
    id: 1812,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/616/616438.png",
    name: "Kiwi",
    isOnline: false,
    id: 1137,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
    name: "Ajax",
    isOnline: true,
    id: 1213,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/2977/2977285.png",
    name: "Jay",
    isOnline: true,
    id: 1714,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
    name: "Poly",
    isOnline: false,
    id: 1284,
  },
];

const App = () => {
  return (
    <>
      <FriendList friends={friends} />
    </>
  );
};
```

Треба винести дані про друзів в JSON-файл, щоб не ускладнювати компонент App.  
Наприклад, створіть у папці src файл **friends.json**, перемістіть туди масив друзів, форматуючи дані під формат JSON, і потім імпортуйте його в App, щоб передати ці дані пропсами.

```js
import userData from "../userData.json";
import friends from "../friends.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};
```

---

## Завдання 3 — Історія транзакцій

Необхідно створити компонент історії транзакцій в особистому кабінеті інтернет-банку.

![Image](./src/assets/goit-react-3.png)

### Дані для списку

Дані доступні у форматі масиву об'єктів, де кожен об'єкт описує одну транзакцію з наступними властивостями:

- **id** — унікальний ідентифікатор транзакції
- **type** — тип транзакції
- **amount** — сума транзакції
- **currency** — тип валюти

### Вимоги до компонента

Необхідно створити компонент `<TransactionHistory>`, який приймає один проп:

- `items` — масив об'єктів транзакцій

Компонент створює розмітку таблиці. Кожна транзакція — це рядок таблиці.  
У прикладі наведена розмітка двох транзакцій:

```html
<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
```

## Приклад використання компонента TransactionHistory

Приклад використання компонента `<TransactionHistory>` у компоненті `<App>`.  
Використовуйте ці дані у своїй роботі для значень пропсів.

```js
const transactions = [
  {
    id: "1e0700a2-5183-4291-85cc-2065a036a683",
    type: "invoice",
    amount: "964.82",
    currency: "LRD",
  },
  {
    id: "a30f821b-4d25-4ff0-abdd-e340b3f0dd2b",
    type: "payment",
    amount: "686.50",
    currency: "WST",
  },
  {
    id: "44dca67a-8e5a-4798-bf8e-b15efd4e1abd",
    type: "invoice",
    amount: "828.62",
    currency: "UGX",
  },
  {
    id: "ea8ed3dc-2b68-4a53-905a-53ecb0adef33",
    type: "withdrawal",
    amount: "527.80",
    currency: "ALL",
  },
  {
    id: "63ca02f9-d637-46b5-9237-f3b24425e029",
    type: "payment",
    amount: "862.44",
    currency: "AUD",
  },
  {
    id: "ed0263e8-59a5-4bf1-87e0-2bb88e53dc34",
    type: "withdrawal",
    amount: "907.00",
    currency: "GEL",
  },
  {
    id: "4eaab41b-b967-40ac-82ed-85fc66f646f1",
    type: "deposit",
    amount: "103.10",
    currency: "BWP",
  },
  {
    id: "9648a350-8469-42d5-8bf3-18090de5fe67",
    type: "withdrawal",
    amount: "322.32",
    currency: "MRO",
  },
  {
    id: "9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc",
    type: "invoice",
    amount: "14.79",
    currency: "PYG",
  },
];

const App = () => {
  return (
    <>
      <TransactionHistory items={transactions} />
    </>
  );
};
```

Треба винести дані про транзакції у JSON-файл, щоб не захламлювати компонент App.  
Наприклад, створіть файл із назвою **transactions.json** у папці `src`, перемістіть туди масив транзакцій, відформатуйте дані у формат JSON, а потім імпортуйте його в компонент App, щоб передати ці дані як пропси.

```js
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
```

---

**Жива сторінка: [GitHub Pages](https://goit-react-hw-01-one-navy.vercel.app/)**
