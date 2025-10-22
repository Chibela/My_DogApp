# Web Development Project 4 - **DogFetch**

Submitted by: **Chibela Changwe**

This web app: **DogFetch allows users to discover random dog images along with their breed, temperament, and origin. Users can click on attributes to ban them, preventing future dogs with those attributes from appearing. The app also keeps a history of previously viewed dogs.**

Time spent: **10 hours**

---

## Required Features

The following **required** functionality is completed:

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - Attributes displayed for each image are **Breed**, **Temperament**, and **Origin**
  - Each API call consistently displays these attributes
- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - Only a single dog image is displayed at a time
  - Displayed attributes always match the displayed image
- [x] **API call response results appear random to the user**
  - Clicking the **Discover** button fetches a random dog from the Dog API
  - Repeat results may occur but are infrequent
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - Clicking on a Breed, Temperament, or Origin adds it to the ban list
  - Clicking an attribute already in the ban list removes it immediately
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - Dogs with banned Breed, Temperament, or Origin values are skipped in future API calls
  - Removing an attribute from the ban list allows dogs with that attribute to appear again
  - [x] _Demonstrated in recording: clicking a banned attribute removes it immediately_

---

## Optional Features Implemented

- [x] Multiple types of attributes are clickable and can be added to the ban list (Breed, Temperament, Origin)
- [x] Users can see a stored history of previously displayed results from this session
  - The left sidebar displays all previously viewed dogs
  - The history updates automatically each time a new dog is fetched

---

## Additional Features Implemented

- [x] Overlay blur effect on sidebars and main card for better readability over the dog background
- [x] Responsive grid layout that adapts for mobile screens
- [x] Error handling when no breeds are found or when a banned dog is skipped

---

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='https://raw.githubusercontent.com/Chibela/My_DogApp/main/public/walkthrough4.gif' title='DogFetch Video Walkthrough' alt='DogFetch Video Walkthrough' />

GIF created with ScreenToGif

---

## Notes

Challenges encountered while building the app:

- Ensuring the background dog image covers the full page without cropping important parts
- Handling dogs with no breed or missing attributes from the API
- Managing state for previously viewed dogs and banned attributes while syncing with `localStorage`
- Avoiding banned dogs from appearing in future fetch requests while keeping results random

---

## 📄 License

Copyright [2025] [Chibela Changwe]
