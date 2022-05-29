To run the website,

1. Run `yarn i` to install dependencies.

2. Run `yarn dev` locally and visit `localhost:3000` on the browser. ( Check terminal message if port is not open for some reason and use that instead )

## Directory file structure.

`styles` - For all global css that are specific for the project and is used across pages

`components` - Common components used by different views / layouts / other components

`layouts` - Layout for pages and its components should be here

`modules` - Maintain this folder to have it's own specific store and components unique to a module or domain.

`router` - Router things should only be here.

`views` - Main views or screens

## Commit messages

`ui` - For design only changes that are visible to the user

`tech` - Package changes / and everything that doesn't affect UI

`feature` - Prefix used when using a story

`docs` - Changing documentations / or comments within the project.

### Notes, some variables are hardcoded and should be moved to env variables when time is given.
