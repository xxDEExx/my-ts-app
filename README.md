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

## Running the containers
- be in the root folder of repo
- run `docker-compose up -d --build` to build image and run container, remove `--build` if image already existed<br><br>

Runs the app in the development mode.<br>
Open [https://localhost:3000](https://localhost:3000) to view it in the browser.

## Stop the containers
- run `docker-compose stop`
