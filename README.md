# General

Answers to Part 1 are in QUESTIONS.md.
Link to deployed app: https://heygo-challenge-frontend.herokuapp.com/

# Setup

I've started the project with create-react-app and added react-router-dom for routing (https://www.npmjs.com/package/react-router-dom). For querying the data I'm using the Fetch API. CSS-modules are used for styling. For displaying the map I'm using the external library google-map-react (https://www.npmjs.com/package//google-map-react).

# Structure

The app consists of two pages with respective routes:

- LocationSearch: The start page with the search typeahead
- LocationDetails: The details page with a map view of the location

Three components:

- LocationSearchInput: fetching data and mouse handling
- LocationResults: displaying list of locations
- LocationMap: google map location view

Two custom hooks:

- useDebounce: debouncing user input to save bandwidth
- useFetch: data fetching

# Notes

Some features that come to mind that I would add if more time was allotted:

- keyboard handling (UP and DOWN to navigate results, ESC to blur, ENTER to select result)
- loading state for LocationResults
- search term highlighting in results
- The Maps API key is used as an .env variable to avoid uploading it to a github repo. To make it 100% safe this should rather be handled on the backend instead of the frontend as the key is still be contained in the frontend build.
