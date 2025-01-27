# Testing $$*TODO* software name$$ using Cucumber
This directory contains the cucumber files for testing the "delete comment" module of the Moodle application.

## Running the tests
Run ```mvn test``` to run all the tests.

## Feature files
The behaviors that we tested are in the feature files that inside the [resources/hellocucumber](resources/hellocucumber) directory. See the files for a detailed description of the tests.

Make sure that the text inside the feature files is informative and self-explanatory. This includes the "Feature: Delete comment from moodle forum", "Scenario Outline: Student views a comment on the forum", and the "Given/When/Then ..." steps that define the scenario. "Scenario Outline: Teacher deletes a comment from the forum", and the "Given/When/Then ..." steps that define the scenario.

## Step files
The step files in the [src/test/java/hellocucumber](src/test/java/hellocucumber) directory contain the code that defines how each sentence in the feature files is translated to Selenium actions. See the files for a detailed description of the implementation.