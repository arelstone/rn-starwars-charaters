# React Native Assignment

I would like to see how you approach building an application for displaying characters from the Star Wars API (https://swapi.dev/).

The app can be built using either "Create React Native App" (scripts) or "Expo". The assignment should be pushed to Github.

The app must be able to do the following:

* list all characters (people) sorted by name (FlatList vs SectionList vs ScrollView vs another)
* show a spinner while data is being loaded
* consider how many people to load at a time (full vs paging vs other)
* display "name" and actual name of "homeworld" for each character in list [1]
* go to a character details screen when tapping a character
* show "name" of character together with an avatar based on "gender", "hair_color", "eye_color" and "skin_color" [2]

Please consider

* what would you test in the app and how
* what feature(s) would you consider adding as next step

Please document each choice you're making in a readme in your repo.


### NOTES

[1] You will need a combination of two API calls and I would like to see how you would optimize this to avoid excessive/unnecessary API calls
[2] Use `react-native-avataaars` or a similar package to build the avatar

### PACKAGES (to considered)

* axios
* react-native-avataaars
* react-navigation