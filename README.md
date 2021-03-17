# React-MOTC_Transport_API

## Introduction

This website shows "All" or "City's" scenic spots of Taiwan using [MOTC Transport API V2](https://ptx.transportdata.tw/MOTC?t=Tourism&v=2).

It's [Dcard's 2021 Web Frontend Intern Homework](https://boards.greenhouse.io/dcard/jobs/2670808) as well.

## Pre-requisites

`git`, `npm` installed. (latest version is preffered)

```sh
git clone https://github.com/andyliangtw/React-MOTC_Transport_API.git
cd React-MOTC_Transport_API
npm install
```

## Getting Started

```sh
npm start
```

Then you can see the website in [http://localhost:3000/](http://localhost:3000/)

> You can also visit [this link](https://andyliangtw.github.io/React-MOTC_Transport_API) to reach out my published website.

## Design of Website

### Route

- `/` -> `<Main />` (Root)
- `/scenicSpot` -> `<ScenicSpots />` (All Scenic Spots)
- `/scenicSpot/:city` -> `<ScenicSpots />` (City's Scenic Spots)
  - if `:city` is `LienchiangCounty`, the url will become `/scenicSpot/LienchiangCounty` and shows only the scenic spots in LienchiangCounty

### Structure

```html
<App>
  <Header />
  <Main /> or <ScenicSpots />
<App>
```

### Components

#### `<Header>`

The navbar of the website (on the top).

It can link to `/scenicSpot` or `/scenicSpot/:city`

#### `<Main>`

The root page of the website which gives hints to the users.

#### `<ScenicSpots>`

If there's `city` specified in the url, this component will show only the scenic spots in that `city`.
Otherwise, this component will show all scenic spots in Taiwan.

It will show only the first 30 scenic spots until user scrolls to the bottom of the website. Then it will show the next 30 scenic spots if there exists.

If it's in waiting state (e.g. API hasn't been back), there will be a `<Spinner>` to tell user it's processing.

#### `<Spinner>`

A spinner.
