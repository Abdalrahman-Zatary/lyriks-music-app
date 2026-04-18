# Melodiq 🎵 — Music Streaming Web App

> A full-featured music streaming application built with React 18 and Redux Toolkit, powered entirely by free APIs with no credit card required.

---

## Description

Melodiq is a modern music streaming web app that lets you explore top charts, discover music by genre, browse artists, and listen to song previews — all powered by the free Deezer API. With a persistent music player, real-time lyrics, geolocation-based recommendations, a full-screen expanded player, and a sleek dark UI, Melodiq delivers a polished listening experience straight in the browser.

---

## Screenshot

![Melodiq Screenshot](./public/screenshot.jpg)

---

## Live Demo

[melodiq.netlify.app](https://melodiq.netlify.app/)

---

## Features

- **Discover Page** — Browse up to 50 top global tracks with genre filtering (Pop, Hip Hop, Rock, Electronic, K-Pop, and more), displayed in a responsive card grid with instant play/pause.
- **Persistent Music Player** — A fixed bottom player with full controls: play/pause, skip forward/backward, shuffle, repeat, a seekbar with ±5s jump buttons, and volume control — all powered by the HTML5 Audio API.
- **Expanded Full-Screen Player** — Tap the track info or swipe up on the mini player to reveal a full-screen view with a spinning vinyl disc, album art, song details, seekbar, and controls. Dismiss it by tapping the down arrow or swiping down.
- **Swipe Gestures on Mobile** — On screens below 768px, swipe up on the mini player bar to open the expanded view, and swipe down (from the top) to close it — smooth and natural touch interaction.
- **Related Songs Queue** — The expanded player shows a live queue of songs from the same artist, each playable directly without leaving the player view.
- **Song Details & Lyrics** — Dedicated song page showing album art, track info, and real-time lyrics fetched from lyrics.ovh. Gracefully handles missing lyrics with a friendly message and a Genius link.
- **Top Charts** — Displays the 50 most-streamed tracks globally, with cache disabled so the list refreshes on every visit.
- **Top Artists** — Showcases the 50 most popular artists worldwide with photos and direct links to their artist pages.
- **Artist Details** — Artist profile page showing cover photo, fan count, and their most popular tracks.
- **Around You** — Auto-detects the user's country via IP geolocation and displays trending tracks in their region.
- **Search** — Live search across the Deezer catalog returning tracks and artists instantly.
- **Animated Background** — The app background subtly shifts and blurs to reflect the current song's album artwork.
- **Marquee Text** — Long song and album titles scroll smoothly instead of being cut off.
- **Sidebar Navigation** — Collapsible sidebar with icon links to all pages, with an active-state indicator for the current route.
- **Error & Loading States** — Graceful handling of API errors and loading states throughout the app, with user-friendly fallback screens.

---

## Built With

| Technology | Purpose |
|---|---|
| **React 18** | UI library |
| **Vite** | Build tool & dev server |
| **Redux Toolkit** | Global state management |
| **RTK Query** | Server-state & data fetching |
| **React Router DOM v6** | Client-side routing |
| **Tailwind CSS** | Utility-first styling |
| **Swiper.js** | Touch-friendly carousels |
| **react-icons** | Icon library |
| **Deezer API** | Songs, artists, and charts data |
| **lyrics.ovh API** | Song lyrics |
| **ipapi.co** | IP-based geolocation |

---

## What I Learned

This is my **second React project**. My first was **Crown Clothing**, built during the *Zero to Mastery — Complete React Developer 2026* course, which focused on React fundamentals, Context API, styled-components, and Firebase authentication.

### Key concepts I strengthened:

- **Redux Toolkit** architecture — slices, actions, selectors, and middleware in a real project
- **RTK Query** for all API calls — `createApi`, `fetchBaseQuery`, `transformResponse`, `keepUnusedDataFor`, and the `skip` option for dependent queries
- **`useRef` for DOM control** — using refs to directly control the HTML5 `<audio>` element and to track touch gesture positions without triggering re-renders
- **Touch event handling** — implementing swipe-up/swipe-down gestures with `onTouchStart` / `onTouchEnd`, including scroll-position awareness to avoid conflicts with scrollable content
- **Component composition** — building a full music player from small, reusable parts (Controls, Seekbar, VolumeBar, Track, Player)
- **CORS handling** — understanding browser security policies and using proxies in development vs. production
- **API error handling** — graceful 403/404 fallbacks and user-friendly error screens

---

## Getting Started Locally

```bash
# 1. Clone the repository
git clone https://github.com/your-username/melodiq.git

# 2. Navigate to the project folder
cd melodiq

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```
