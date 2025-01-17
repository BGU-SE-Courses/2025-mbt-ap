package hellocucumber;

import io.cucumber.java.en.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Assertions.*;

public class StepDefinitions {
    private String path = "2025-mbt-ap\\Selenium\\chromedriver.exe\\";
    private  static List<MoodleActuator> _openMoodle;
    private static  MoodleActuator _student;
    private static  MoodleActuator _admin;
    private String webDriver = "webdriver.chrome.driver";


    //Student

    // $$*TODO* explain what this step does$$
    @Given("Student in Home page")
    public void moodleHomePage() {
        InitStudent();
    }

    // $$*TODO* explain what this step does$$
    @When("Student is logged in with UserName {string} and Password {string}")
    public void login(String username, String passowrd) {
        _student.goToLogin();
        _student.enterLoginInfo(username, passowrd);
    }

    // $$*TODO* explain what this step does$$
    @And("Student navigate to course page {string}")
    public void navigateToCourse(String course) {
        _student.goToCoursePage(course);
    }

    // $$*TODO* explain what this step does$$
    @And("Student navigate to the forum named {string}")
    public void navigateToForum(String forum) {
        _student.goToForum(forum);
    }

    // $$*TODO* explain what this step does$$
    @And("Student open the comment named {string}")
    public void openComment(String comment) {
        _student.goToComment(comment);
    }

    // $$*TODO* explain what this step does$$
    @Then("The student should see the comment content")
    public void displayComment() {
        _student.checkResult();
    }


    //Admin
    // $$*TODO* explain what this step does$$
    @Given("Teacher in Home page")
    public void moodleHomePage_admin() {
        InitAdmin();
    }

    // $$*TODO* explain what this step does$$
    @When("The teacher is logged in with UserName {string} and Password {string}")
    public void login_admin(String username, String passowrd) {
        _admin.goToLogin();
        _admin.enterLoginInfo(username, passowrd);
    }

    // $$*TODO* explain what this step does$$
    @And("Teacher navigate to course page {string}")
    public void navigateToCourse_admin(String course) {
        _admin.goToCoursePage(course);
    }

    // $$*TODO* explain what this step does$$
    @And("Teacher navigate to forum page named {string}")
    public void navigateToForum_admin(String forum) {
        _admin.goToForum(forum);
    }

    // $$*TODO* explain what this step does$$
    @And("Teacher navigate to the comment {string}")
    public void navigateToComment_admin(String comment) {
        _admin.goToComment(comment);
    }

    // $$*TODO* explain what this step does$$
    @And("Teacher clicks on the delete button")
    public void clickDelete_admin() {
        _admin.clickDelete();
    }

    // $$*TODO* explain what this step does$$
    @And("Teacher confirm the deletion by clicking on confirm")
    public void confirmDelete_admin() {
        _admin.confirmDelete();
    }

    // $$*TODO* explain what this step does$$
    @Then("The comment should be deleted from the forum")
    public void commentDeleted_admin() {
        _admin.checkResultDelete();
    }


    //Initialize
    public void OpenMoodleInit(int windowFlag){
        System.out.println("--------------- INITIALIZING MOODLE TEST - OPENING WEBPAGE ---------------"); //todelete
        if(_openMoodle == null)
            _openMoodle = new ArrayList<>();
        if (windowFlag == 0) {
            InitAdmin();
        }
        else if (windowFlag == 1) {
            InitStudent();
        }
        else{
            InitAdmin();
            InitStudent();
        }       
    }
    public void InitAdmin(){
        System.out.println("--------------- INITIALIZING MOODLE TEST - OPENING WEBPAGE ADMIN---------------"); //todelete
            _admin = new MoodleActuator();
            _admin.initSession(webDriver, path);        
    }
    public void InitStudent(){
        System.out.println("--------------- INITIALIZING MOODLE TEST - OPENING WEBPAGE STUDENT---------------"); //todelete        
        _student = new MoodleActuator();
        _student.initSession(webDriver, path);
       
    }

}
