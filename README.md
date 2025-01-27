# Software Quality Engineering - System Testing
This is a repository for the system-testing assignment of the Software Quality Engineering course at the [Ben-Gurion University](https://in.bgu.ac.il/), Israel.

## Assignment Description
In this assignment, we tested an open-source software called Moodle [Moodle's official website](https://moodle.org).

Moodle is widely used for creating online courses and supports a range of activities and resources to facilitate learning and assessment. It is highly customizable and supports plugins for extending its capabilities.

## Installation
To install Moodle for testing purposes, follow these steps:

1. Download the latest version of Moodle from [Moodle Downloads](https://download.moodle.org/).
2. Ensure your testing environment meets the [system requirements](https://docs.moodle.org/en/Installing_Moodle#Requirements), including a web server, PHP, and a database.
3. Follow the [installation guide](https://docs.moodle.org/en/Installing_Moodle) provided by Moodle, which covers downloading, unpacking, setting up the database, and configuring the web server.
4. Once installed, navigate to your Moodle instance's URL to complete the installation process through the web-based installer.

## What we tested
We tested the delete comment feature of the Moodle forum module, which allows users to view and manage comments on a forum. We chose to test the following user stories:

*User story:* A student views a comment on the forum.

*Preconditions:* The student is logged into Moodle, enrolled in a course, and a forum exists within the course. The forum contains a comment.

*Expected outcome:* The student successfully views the content of the comment.


*User story:* A teacher deletes a comment from the forum.

*Preconditions:* The teacher is logged into Moodle with admin privileges, enrolled in a course, and a forum exists with a comment.

*Expected outcome:* The comment is deleted from the forum and no longer visible to students or teachers.


## How we tested
We used two different testing methods:
1. [Cucumber](https://cucumber.io/), a behavior-driven testing framework.
2. [Provengo](https://provengo.tech/), a story-based testing framework.

Each of the testing methods is elaborated in its own directory. 

## Results
Update all README.md files (except for d-e, see Section 1). Specifically, replace all $$*TODO*…$$ according to the instructions inside the $$.
