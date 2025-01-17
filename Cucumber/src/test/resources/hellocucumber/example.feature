Feature: Delete comment from moodle forum

Scenario Outline: Student views a comment on the forum
    Given Student in Home page 
    When Student is logged in with UserName <UserName> and Password <Password>
    And Student navigate to course page <CourseName>
    And Student navigate to the forum named <ForumName>
    And Student open the comment named <CommentName>
    Then The student should see the comment content
    Examples:
      | UserName   | Password    | CourseName    | ForumName        | CommentName                        |
      | "nofar"    | "Nofar123!" | "Intel"       | "no more coffee" | "why there is no coffee anymore?!" |


Scenario Outline: Teacher deletes a comment from the forum
    Given Teacher in Home page 
    When The teacher is logged in with UserName <UserName> and Password <Password>
    And Teacher navigate to course page <CourseName>
    And Teacher navigate to forum page named <ForumName>
    And Teacher navigate to the comment <commentName>
    And Teacher clicks on the delete button
    And Teacher confirm the deletion by clicking on confirm
    Then The comment should be deleted from the forum
    Examples:
      | UserName   | Password    | CourseName    | ForumName        | CommentName                        |
      | "admin"    | "Aa12345!"  | "Intel"       | "no more coffee" | "why there is no coffee anymore?!" |
