package hellocucumber;

import io.cucumber.java.en.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Assertions.*;

public class StepDefinitions {
    private String path = "2025-mbt-ap\\Selenium\\chromedriver.exe\\";
    private static List<MoodleActuator> _openMoodle;
    private static MoodleActuator _student;
    private static MoodleActuator _admin;
    private String webDriver = "webdriver.chrome.driver";

    // Student

    // Initializes the student session by opening the Moodle home page in the browser.
    @Given("Student in Home page")
    public void moodleHomePage() {
        InitStudent();
    }

    // Logs in the student with the provided username and password.
    @When("Student is logged in with UserName {string} and Password {string}")
    public void login(String username, String passowrd) {
        _student.goToLogin();
        _student.enterLoginInfo(username, passowrd);
    }

    // Navigates the student to the specified course page.
    @And("Student navigate to course page {string}")
    public void navigateToCourse(String course) {
        _student.goToCoursePage(course);
    }

    // Navigates the student to the specified forum within the current course.
    @And("Student navigate to the forum named {string}")
    public void navigateToForum(String forum) {
        _student.goToForum(forum);
    }

    // Navigates the student to the specified comment within the forum.
    @And("Student open the comment named {string}")
    public void openComment(String comment) {
        _student.goToComment(comment);
    }

    // Verifies that the comment content is displayed to the student.
    @Then("The student should see the comment content")
    public void displayComment() {
        _student.checkResult();
    }

    // Admin

    // Initializes the admin session by opening the Moodle home page in the browser.
    @Given("Teacher in Home page")
    public void moodleHomePage_admin() {
        InitAdmin();
    }

    // Logs in the teacher with the provided username and password.
    @When("The teacher is logged in with UserName {string} and Password {string}")
    public void login_admin(String username, String passowrd) {
        _admin.goToLogin();
        _admin.enterLoginInfo(username, passowrd);
    }

    // Navigates the teacher to the specified course page.
    @And("Teacher navigate to course page {string}")
    public void navigateToCourse_admin(String course) {
        _admin.goToCoursePage(course);
    }

    // Navigates the teacher to the specified forum within the current course.
    @And("Teacher navigate to forum page named {string}")
    public void navigateToForum_admin(String forum) {
        _admin.goToForum(forum);
    }

    // Navigates the teacher to the specified comment within the forum.
    @And("Teacher navigate to the comment {string}")
    public void navigateToComment_admin(String query) {
        _admin.goToComment(query);
    } 

    // Clicks the delete button for the selected comment.
    @And("Teacher clicks on the delete button")
    public void clickDelete_admin() {
        _admin.clickDelete();
    }

    // Confirms the deletion of the selected comment.
    @And("Teacher confirm the deletion by clicking on confirm")
    public void confirmDelete_admin() {
        _admin.confirmDelete();
    }

    // Verifies that the comment has been successfully deleted.
    @Then("The comment should be deleted from the forum")
    public void commentDeleted_admin() {
        _admin.checkResultDelete();
    }

    // Initialize

    // Initializes the Moodle sessions for student or admin based on the provided flag.
    public void OpenMoodleInit(int windowFlag) {
        if (_openMoodle == null)
            _openMoodle = new ArrayList<>();
        if (windowFlag == 0) {
            InitAdmin();
        } else if (windowFlag == 1) {
            InitStudent();
        } else {
            InitAdmin();
            InitStudent();
        }       
    }

    // Initializes the admin session by setting up a web driver and opening the Moodle page.
    public void InitAdmin() {
        _admin = new MoodleActuator();
        _admin.initSession(webDriver, path);        
    }

    // Initializes the student session by setting up a web driver and opening the Moodle page.
    public void InitStudent() {
        _student = new MoodleActuator();
        _student.initSession(webDriver, path);
    }
}
