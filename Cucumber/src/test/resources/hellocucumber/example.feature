Feature: Delete comment from moodle forum

Scenario Outline: Student views a comment on the forum
    Given Student in Home page 
    And the forum has at least one comment 
    When Student is logged in with <UserName> and <Password>
    And Student navigate to course page <CourseName>
    And Student navigate to the forum named <ForumName>
    Then the student should see the comment <CommentName>
    Examples:
      | UserName   | Password    | CourseName    | ForumName        | CommentName                        |
      | "nofar"    | "Nofar123!" | "Intel"       | "no more coffee" | "why there is no coffee anymore?!" |


Scenario Outline: Teacher deletes a comment from the forum
    Given teacher in Home page 
    And the forum has at least one comment
    When the teacher is logged in with <UserName> and <Password>
    And teacher navigate to course page <CourseName>
    And teacher navigate to forum page named <ForumName>
    And teacher navigate to the comment <commentName>
    And teacher clicks on the delete button
    And teacher confirm the deletion by clicking on confirm
    Then the comment should be deleted from the forum
    Examples:
      | UserName   | Password    | CourseName    | ForumName        | CommentName                        |
      | "admin"    | "Aa12345!"  | "Intel"       | "no more coffee" | "why there is no coffee anymore?!" |
