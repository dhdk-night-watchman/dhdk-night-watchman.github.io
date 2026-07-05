# Contributions

## Second Developer Contribution Summary

This document summarises the contributions made after joining the existing project. The aim was to preserve the original concept and functionality while strengthening the prototype from the perspectives of accessibility, Digital Heritage, user experience, documentation and maintainability.

## Accessibility Improvements

- Added a skip link so keyboard users can move directly to the game content.
- Added semantic screen regions for the title, gallery map, gallery room, object question and ending screens.
- Added a screen-reader live region for dynamic quiz feedback.
- Improved announcements for correct answers, hints, revealed answers, study information and tour completion.
- Strengthened visible keyboard focus states across buttons, links and interactive elements.
- Added clearer accessible labels for gallery cards, object frames, progress indicators and answer groups.

## Digital Heritage Enhancements

- Added museum-style metadata for every object in the study section.
- Included artist / creator, title, date, medium / material, gallery, museum, collection ID and historical period.
- Added official Rijksmuseum object links for continued exploration.
- Integrated the metadata into the existing Watchman study flow without changing the gameplay loop.
- Added concise gallery introductions that explain the historical value of each room.

## User Experience Improvements

- Improved the progress interface with completed galleries, remaining galleries, object progress and a visual progress bar.
- Kept the existing score and gallery progression while making overall progress easier to understand.
- Updated the score display immediately after the player chooses to study after help.
- Improved mobile layout for gallery frames, object views, buttons, spacing and study panels.
- Preserved the current visual identity, atmosphere and narrator tone.

## Documentation Improvements

- Rewrote the README with a clearer project overview, gameplay description, folder structure, architecture summary, technologies, accessibility features, Digital Heritage features and running instructions.
- Added an AI use statement for transparent academic submission.
- Added this contribution summary to document the role of the second developer.

## Technical Improvements

- Extended the existing data model rather than introducing a new architecture.
- Added reusable helper functions for progress, object metadata and Learn More sections.
- Preserved the static HTML/CSS/JavaScript implementation.
- Avoided frameworks, backend services, databases or unrelated refactors.

## Scope Boundary

These contributions were intentionally incremental. They do not replace the original project, redesign the interface, change the core game loop, remove existing features or introduce new gameplay. The work focuses on making the existing prototype more accessible, educational, maintainable and review-ready.
