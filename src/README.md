# Project Name: my-react-ass5

## Overview
I built this site with my best effort to recreate the exact design. I also leveraged AI assistance to boost my development workflow. Overall, I really enjoyed building this project!

## Technologies Used
- React (Vite)
- Tailwind CSS
- React Icons
- React Toastify

## Features
- **Sticky Navigation:** Navbar remains pinned at the top on scroll.
- **Interactive Click Events:** Dynamic button states and feedback.
- **Stack Management:** Ability to select items and delete them from the stack.

---

## Technical Questions & Concepts

### 1. What is JSX?
JSX is a syntax extension for React that allows writing HTML directly inside JavaScript to easily describe UI components.

### 2. What is the difference between Props and State?
Props are used to pass data from a parent component down to a child component. State is used to manage internal dynamic data within a component that triggers re-renders when updated.

### 3. What is the State Hook (`useState`)?
The state hook (`useState`) manages dynamic internal data within a React component—such as handling inputs, toggling UI elements, or fetching API data that requires UI re-rendering upon modification.

### 4. What is the `key` prop in React?
The `key` prop gives elements in a list a unique identity so React can efficiently track, update, and re-order items without re-rendering the entire DOM.

### 5. What is Conditional Rendering?
Conditional rendering means displaying UI elements based on specific conditions or state. 
*Example in this project:* `${isClicked ? "Added" : "Add to Stack"}`

### 6. What is Props Passing & Props Drilling?
Props are passed from a parent component to a child component as custom attributes. Passing props through multiple deeply-nested component levels is known as **Props Drilling**.