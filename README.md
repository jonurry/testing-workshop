# Testing Workshop

## Objectives

- Learn how to set up a testing environment for your connectors
- Increase familiarity with testing style and different types of tests
- Understand facets of testing such as stubbing and assertions.

## Setting Up

1. Clone this repo and open a terminal window at the root of the repository.

2. Follow the guide located [in the Connector HQ on Notion](https://www.notion.so/trayio/How-to-Test-a-connector-0eb8987d5e4f43398fea160fbcd30ef0) and complete the step-by-step.

3. Start your connector by running `npm start`.

4. Start the local api service which will be testing against by running `cd testapi` and `npm start`.

5. Familiarize yourself with the postman collection which contains HTTP requests for both the API and requests for each operation.

## Task 1 - Unit testing a helper method

The test API credentials are Username/Password based and for Create, Update and Delete operations the API takes an access token. The get_access_token operation uses a helper method in 'helpers/before.js' to transform the username and password into the right format to query the api for an access token.
Write a unit test for this helper method. (You can use [this tool](http://www.miraclesalad.com/webtools/md5.php) to generate suitable outputdata).

## Task 2 - Unit testing an operation

The updateCharacter operation performs some validation on the inputs to make sure that atleast one of these inputs has been defined, it also calls the private get_access_token operation to get an access token. Write a unit tests to cover the following cases:

1. That a valid set of params will be formatted into the request body.
2. That an invalid set of params will be rejected by the operation.

Note: For it to be a unit test you will need to stub out the call to get an access token.

Bonus: write a unit test for the createCharacter operation

## Task 3 - Integration testing

Write some tests which suitably test integrating with the api. I followed the format List -> Get -> Delete -> Get -> Create -> Update
