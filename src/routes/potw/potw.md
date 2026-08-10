# PoTW

## Adding New Problems

Add problems to src/routes/potw/server/potw.json. Pay attention to correct 
formatting. Unfortunately, at least currently, you need to format the problems'
Latex in a weird way.

Each problem object should have the following structure:
```json
{
    "id": N,
    "title": "PoTW #N",
    "problem": "Formatted problem",
    "answer": "The answer to the problem",
    "solution": "The detailed solution to the problem",
    "image": "/potw/images/[imagefile]"
}
```

Note that the images are stored in `static/potw/images/`.

## Date-Based Problem Selection

The current problem displayed on the PoTW page is determined by the server's current date and a `startDate` defined in `src/routes/potw/+layout.server.js`.

Note that there is a separate `startDate` defined for the archive page in `src/routes/potw/archive/+page.js`. This is used to (separately) determine which problems from the problem bank to display.

Also, note that the problems cycle if the last PoTW problem is reached.

## Debugging Dates

The best way as of now is to modify the `startDate` in `src/routes/potw/+layout.server.js` temporarily to a date in the past or future to simulate different weeks.

However, if this change were to be permanent, you must also change the `startDate` in `src/routes/potw/archive/+page.js` so that excess answers/solutions are not revealed in the PoTW archive page accidentally.
