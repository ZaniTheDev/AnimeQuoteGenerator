

```markdown
# 🎌 Anime Quote Generator

A fun little web app that fetches and displays random anime quotes based on the anime title you type. If the anime isn’t available or there’s an error, a custom fallback message is shown so it still looks clean!

---

## 💡 Features

- 🔍 Search quotes by anime name
- 🧠 Smart fallback when anime isn’t found
- 🎲 Random anime option (internal function)
- 🚫 Rate limit & error handling
- ⚡ Smooth loading animation on button click

---

## 🖼️ Preview

![screenshot](preview.png) <!-- Optional: Replace with your screenshot -->

---

## 🛠️ How It Works

1. You type an anime name in the input box.
2. Click the **Generate Quote** button.
3. App fetches quotes using the [Animechan API](https://animechan.io/).
4. A random quote and character name is displayed.
5. If anything breaks (API error, bad anime name), it shows a default message like:
```

"Anime not available sorry!" – Zani

````

---

## 🔧 Tech Stack

- HTML
- CSS (for animations & styles)
- JavaScript (Vanilla)
- External API: [animechan.io](https://animechan.io/)

---

## 🚀 Getting Started

To run it locally:

```bash
1. Clone the repo or copy the code
2. Open `index.html` in your browser
3. Start typing an anime and click the button!
````

---

## 📂 File Structure

```
index.html       <-- The HTML layout
style.css        <-- Your styling (optional but recommended)
script.js        <-- The JavaScript (logic & API call)
```

---

## 📦 Example API Response

```json
{
  "anime": "Naruto",
  "character": "Kakashi Hatake",
  "quote": "In the ninja world, those who break the rules are scum..."
}
```

---

## 🧠 Credits

* API by [Animechan](https://animechan.io/)
* Code written by \[your name or username here]

---

## 🧃 Extras

* Want to improve it? Add a dropdown of anime titles, or a "Random Quote" feature using the `randomAnime()` function!
* You could even show images for characters using another API like Jikan (MyAnimeList).

---

## 📜 License

MIT — do whatever you want, just don’t sell it as your own without giving credit 😄

---

```

---

Let me know if you want me to generate the HTML + CSS starter too, or a GitHub description template 🔥
```
