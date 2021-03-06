# FRONTEND TEMPLATE

Installation
===

One time installation
---
- Install docker - https://store.docker.com/search?type=edition&offering=community
- Install docker-compose
    - On Mac
        - install [homebrew](https://brew.sh/)
        - install docker-compose `brew install docker-compose`

# Environment setup
- set following env variables in terminal:
    - COUNTRY_CODE=sg
- update .env.development file
    - you can use Postman (mockup/postman/Data.postman_collection.json) source file as your mockup backend server. (just import the json file to Postman)

## Running the containers
- be in the root folder of repo
- run `docker-compose up -d --build` to build image and run container
- run `docker-compose -f docker-compose-prod.yml up -d --build` for production build<br><br>

Runs the app in the development mode.<br>
Open [https://localhost:3000](https://localhost:3000) to view it in the browser.

## Stop the containers
- run `docker-compose stop|down`

## Run Test
- run `yarn test` (run changed file test case)
- run `yarn test -- <path>` (run specific test case path)
- run `yarn test -u --watchAll` (run all test case and update snapshot)

## Run EsLint
- run `yarn lint`
