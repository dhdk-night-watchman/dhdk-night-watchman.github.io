# The Night Watchman

**A hybrid museum game for the Rijksmuseum — after dark.**

🔦 **Play it live:** https://dhdk-night-watchman.github.io/

A museum night guard, the *Night Watchman*, lets you wander the Rijksmuseum after closing.
He guides you by lantern through four dark galleries, revealing real objects from the
museum's open collection and asking a question or two about each. A wrong answer is never
punished: the Watchman hints, then lets you **study** the object or **move on**. Passive
browsing becomes a guided, forgiving tour.

Built on real [Rijksmuseum Collection Online](https://www.rijksmuseum.nl/en/collection) records.

---

## How it plays

1. **Take the lantern** on the title screen.
2. In the **dark hall**, choose one of four galleries.
3. The gallery is dark — **sweep your lantern** (move the pointer, or tap a frame) to reveal the works.
4. Answer the Watchman's question: right first time → full points; wrong → a hint and a retry;
   still unsure → the answer is revealed, then **study** it or **move on**. No dead ends.
5. Finish all four galleries to reach dawn.

**Scoring:** first try `10` · after a hint `6` · after help `2` · skip `0`.

---

## The collection (8 real objects, 2 per gallery)

| Gallery | Objects |
|---|---|
| The Gallery of Honour | The Night Watch (Rembrandt, 1642) · The Milkmaid (Vermeer, c. 1660) |
| Delftware & Decorative Arts | Flower Pyramid (Delft, c. 1690s) · Dolls' House of Petronella Oortman (c. 1686–1710) |
| The Golden Age of Sail | Model of the William Rex (1698) · Dutch Ships in a Calm Sea (Van de Velde the Younger, c. 1665) |
| Life on the Ice | Winter Landscape with Ice Skaters (Avercamp, c. 1608) · Enjoying the Ice near a Town (Avercamp, c. 1620) |

Every question, hint and study note is drawn from the object's real Rijksmuseum record.

---

## Project structure

```
index.html       # the game (title, hall, gallery, object, ending)
design.html      # concept + diagrams (user flow, swimlane, user journey)
css/style.css    # "museum after dark" theme + the lantern mechanic
js/data.js       # the 8 objects: questions, hints, study notes, Watchman lines
js/game.js       # game logic, lantern, forgiving loop, scoring
twine/           # playable Twine-style version + importable story.twee
images/          # photographs of the works
```

Plain HTML, CSS and JavaScript — no build step or server needed.