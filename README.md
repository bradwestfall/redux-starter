# A Sample Redux Setup

```sh
# Install
npm i

# Start
npm start

# Vanilla Redux Example
npm run vanilla-redux
```

# Articles

Leveling Up with React: Redux
- https://css-tricks.com/learning-react-redux/

Action Strategies:
- https://github.com/bradwestfall/CSS-Tricks-React-Series/blob/master/guide-3-redux/docs/action-strategies.md


# Terminology

```
// Action Type:
// A unique app-wide "word" that suggests what type of action is being dispatched
'ADD_USER'

// Action: An object with an action type
{ type: 'ADD_USER', name: 'Dave' }

// Action Creator: A function that returns an action
const addUserAction = name => {
  return { type: 'ADD_USER', name }
}
```