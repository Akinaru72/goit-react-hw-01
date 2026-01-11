# Homework Assignment

## General Requirements

- A repository **goit-react-hw-01** is created.
- When submitting the homework, provide two links:
  - to the source files (repository),
  - to the live task page deployed on [**Vercel**](https://vercel.com/dashboard).
- The project is created using [**Vite**](https://vite.dev/).
- When visiting the live page, the console shows **no errors or warnings**.
- For each component in the `src/components` folder, a **separate folder** is created containing:
  - the JSX file of the component,
  - the style file.
- Names of:

  - the folder,
  - the JSX file,
  - the style file (`.module.css`)

  are the same and match the names in the task.

- Components are exported using **export default**.
- Components for all tasks are rendered **on a single page** inside the root `<App>` component.
- All props are passed to components during their call.
- JS code is clean and readable, **Prettier** is used.
- Styling is done using **CSS modules**.

---

## Task 1 — Social Network Profile

You need to create a `<Profile>` component to display information about a social network user.

![Image](./src/assets/goit-react-1.png)

### Component Props

The component should accept the following props:

- `name` — user's name
- `tag` — social network tag (without `@`)
- `location` — city and country
- `image` — URL to the user's avatar
- `stats` — object containing activity information

### Markup Structure

The component should render the following structure with **dynamic data** passed via props:

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

## Example of Using the Profile Component

Below is an example of how to use the `<Profile>` component inside the `<App>` component:

- Render the `Profile` component inside `App`
- Pass user data to the `Profile` component via props

Use this user data in your work for the prop values.

### User Data

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

You need to move the user data to a JSON file so that the `App` component is not overloaded.  
For example, create a `userData.json` file in the `src` folder, move the user data there, format it as JSON, and then import it into `App` to pass the data via props.

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

## Task 2 — Friends List

You need to create a `<FriendList>` component to display information about a user's friends.

![Image](./src/assets/goit-react-2.png)

### Component Requirements

The `<FriendList>` component must:

- Accept one prop:
  - `friends` — an array of friend objects
- Render the following DOM structure:

```html
<ul>
  <!-- The number of <li> elements depends on the number of objects in the array -->
  <li>
    <FriendListItem />
  </li>
</ul>
```

### FriendListItem Component

The `<FriendListItem>` component represents a single friend card that displays their basic information.

#### Component Props

The component should accept the following props:

- `avatar` — URL of the friend's avatar
- `name` — friend's name
- `isOnline` — boolean indicating the friend's status:
  - `true` — online
  - `false` — offline

#### Markup Structure

The `<FriendListItem>` component should render the following DOM structure:

```html
<div>
  <img src="" alt="Avatar" width="48" />
  <p>Friend name</p>
  <p>Friend status</p>
</div>
```

### Friend Status Display Logic

Depending on the **isOnline** prop, the text in `p.status` should change, as well as its **text color**.
If the value is **true**, the text should be **Online** with a **green** color,
otherwise the text should be **Offline** with a **red** color.
This can be achieved using different CSS classes.

Example of using the `<FriendList>` component in the `<App>` component.
The friends data is an array of objects with known properties.
Use this data in your work for the prop values.

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

You need to move the friends data to a JSON file so that the `App` component is not overloaded.
For example, create a **friends.json** file in the `src` folder, move the friends array there, format it as JSON, and then import it into `App` to pass the data via props.

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

## Task 3 — Transaction History

You need to create a transaction history component for an online banking dashboard.

![Image](./src/assets/goit-react-3.png)

### Data for the List

The data is available as an array of objects, where each object describes a single transaction with the following properties:

- **id** — unique transaction identifier
- **type** — type of the transaction
- **amount** — transaction amount
- **currency** — currency type

### Component Requirements

You need to create a `<TransactionHistory>` component that accepts one prop:

- `items` — an array of transaction objects

The component should render a table. Each transaction is a row in the table.
The example below shows the markup for two transactions:

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

## Example of Using the TransactionHistory Component

Example of using the `<TransactionHistory>` component inside the `<App>` component.
Use this data in your work for the prop values.

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

You need to move the transaction data to a JSON file so that the `App` component is not overloaded.
For example, create a file named **transactions.json** in the `src` folder, move the transactions array there, format it as JSON, and then import it into the `App` component to pass the data as props.

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

**Live page: [GitHub Pages](https://goit-react-hw-01-one-navy.vercel.app/)**


