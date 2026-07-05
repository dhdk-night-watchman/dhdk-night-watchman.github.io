# The Night Watchman

**The Night Watchman** is a hybrid educational museum game about the Rijksmuseum after dark. A fictional museum guard guides the player through four galleries by lantern, revealing eight real collection objects and asking short, forgiving questions about what each object shows and why it matters.

The project is built as a static web prototype with HTML, CSS and JavaScript. It preserves a simple single-player flow: choose a gallery, inspect an object, answer questions, receive hints when unsure, study the museum record, and continue until the full tour is complete.

## Gameplay Overview

1. Take the lantern from the title screen.
2. Choose one of four Rijksmuseum galleries.
3. Inspect the two objects in that gallery.
4. Answer two multiple-choice questions per object.
5. If an answer is wrong, the Watchman gives a hint.
6. If the player is still unsure, the answer is revealed and the player may study the object record or move on.
7. Complete all four galleries to reach the ending screen.

Scoring is intentionally forgiving:

- First correct answer: `10` points
- Correct after a hint: `6` points
- Study after help: `2` points
- Move on / skip: `0` points

## Digital Heritage Features

The game uses eight real objects from the Rijksmuseum collection:

- The Night Watch
- The Milkmaid
- Flower Pyramid
- Dolls' House of Petronella Oortman
- Model of the William Rex
- Dutch Ships in a Calm Sea
- Winter Landscape with Ice Skaters
- Enjoying the Ice near a Town

Each object includes structured museum-style metadata in the study section:

- Artist / creator
- Title
- Date
- Medium / material
- Gallery
- Museum
- Collection or inventory ID
- Historical period
- Official Rijksmuseum object page

The learning design focuses on cultural heritage interpretation rather than memorisation. Questions are paired with hints and study notes so that mistakes become part of the learning process.

## Accessibility Improvements

The interface includes:

- Semantic screen regions for the title, map, gallery, object and ending screens
- A skip link for keyboard users
- Visible keyboard focus states
- Keyboard-accessible buttons and links
- `aria-live` announcements for quiz feedback, study information and tour completion
- Screen-reader labels for gallery cards, object frames, progress and answer groups
- A reduced-motion mode that disables the moving lantern overlay when requested by the user's system settings

## Project Structure

```text
index.html       Main game shell and screen containers
design.html      Concept page with diagrams and hybrid interaction notes
css/style.css    Visual theme, layout, responsive rules and accessibility styles
js/data.js       Galleries, objects, scoring, questions, hints and museum metadata
js/game.js       Rendering, state management, progression, scoring and lantern logic
images/          Artwork images used by the game
diagrams/        Diagram image assets
twine/           Twine-style user journey prototype
```

## Architecture Summary

The application is a static client-side prototype. `index.html` provides the page shell and loads the CSS and JavaScript. `data.js` acts as the source of truth for content, while `game.js` renders each screen dynamically and manages the current game state.

State is kept in one object containing:

- Current score
- Completed galleries
- Completed objects
- Current gallery, object, question index and answer attempts

The game does not use a backend, database, framework or build step.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Static image assets
- Twine-style story prototype

## How to Run the Project

Because the project is static, it can be opened directly in a browser:

```text
index.html
```

For local testing with a simple server, run this command from the project folder:

```bash
python3 -m http.server 8765
```

Then open:

```text
http://127.0.0.1:8765/
```

No installation step is required.
