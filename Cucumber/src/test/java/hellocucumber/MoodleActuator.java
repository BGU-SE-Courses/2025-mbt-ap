package hellocucumber;

import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;

import java.time.Duration;
import java.util.List;

public class MoodleActuator {
    
    private WebDriver driver;
    private WebDriverWait wait;

    public void initSession(String webDriver, String path) {

        System.setProperty(webDriver, path);
        WebDriverManager.chromedriver().setup();

        // new chrome driver object
        this.driver = new ChromeDriver();

        // new web driver wait -> waits until element are loaded (40 sec max)
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(40));

        // launch website -> localhost
        driver.get("http://localhost/");

        // maximize the window - some web apps look different in different sizes
        driver.manage().window().maximize();
        System.out.println("Driver setup finished for - " + driver.getTitle());
    }

    public void goToLogin() {

        driver.findElement(By.linkText("Log in")).click();
    }

    public void enterLoginInfo(String userName, String password) {
        // locate the username input box and enter username

        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='username']"))).clear();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='username']"))).sendKeys(userName);

        // locate the password input box and enter password

         WebElement webElement = driver.findElement(By.xpath("//*[@id='password']"));
         webElement.sendKeys(password);

        // locate Log in button and press

        driver.findElement(By.id("loginbtn")).click();

    }
    public void goToMyCoursesTab(){

        WebElement myCoursesTab = driver.findElement(By.xpath("//*[contains(text(),'My courses') and @role='menuitem']"));
        myCoursesTab.click();
    }


    public void goToCoursePage(String course) {
        goToMyCoursesTab();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[1]/a[1]/span[3]/span[2]"))).click();

    }

    public void goToForum(String forum) { //need to use string forum to navigate todo
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"module-1\"]/div/div[1]/div/div[1]/div/div[2]/div[2]"))).click();

    }

    public void goToComment(String query) {

        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"module-1\"]/th[1]/div[1]/div[1]/a[1]"))).click();
    }


    public void clickDelete() {
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.linkText("Delete"))).click();
    }

    public void confirmDelete() {
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[2]/form[1]/button[1]"))).click();
    }

    public void checkResult() { //todo path
//        boolean flag = true;
        boolean flag = true;
        try {
//        WebElement webElement = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"yui_3_17_2_1_1673266595593_48\"]/div[2]/div/a[1]")));
        driver.findElement(By.xpath("//*[@id=\"yui_3_17_2_1_1673266595593_48\"]/div[2]/div/a[1]"));
        }
        catch (Exception e) {
            flag = false;
        }
        Assertions.assertTrue(flag, "not found error");

    }

    public void checkResultDelete() {
        boolean flag = true;
        try{
//           driver.findElement(By.xpath( "//*[@id=\"user-notifications\"]div"));
            driver.findElement(By.linkText("abcd"));
            flag = false;
        }catch (Exception e){
            flag = true;
        }
        Assertions.assertTrue(flag, "not deleted successfully ");
    }



}
