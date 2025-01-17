package hellocucumber;

import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;

import java.time.Duration;
import java.util.List;
import java.util.NoSuchElementException;

public class MoodleActuator {
    
    private WebDriver driver;
    private WebDriverWait wait;

    public void initSession(String webDriver, String path) {

        System.setProperty(webDriver, path);
        WebDriverManager.chromedriver().setup();
        this.driver = new ChromeDriver();
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(40));

        driver.get("http://localhost/");

        driver.manage().window().maximize();
        System.out.println("Driver setup finished for - " + driver.getTitle());
    }

    public void goToLogin() {

        driver.findElement(By.linkText("Log in")).click();
    }

    public void enterLoginInfo(String userName, String password) {

        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='username']"))).clear();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='username']"))).sendKeys(userName);

        WebElement webElement = driver.findElement(By.xpath("//*[@id='password']"));
        webElement.sendKeys(password);

        driver.findElement(By.id("loginbtn")).click();

    }
    
    public void goToMyCoursesTab(){

        WebElement myCoursesTab = driver.findElement(By.xpath("//*[contains(text(),'My courses') and @role='menuitem']"));
        myCoursesTab.click();
    }


    public void goToCoursePage(String course) {
        goToMyCoursesTab();
    
        String dynamicXPath = "//div[1]/a[1]/span[3]/span[2][contains(text(),'" + course + "')]";
    
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(dynamicXPath))).click();
    
        System.out.println("Navigated to the course: " + course);
    }

    public void goToForum(String forum) {
        String dynamicXPath = "//a[contains(.,'" + forum + "')]";
        List<WebElement> forumElements = driver.findElements(By.xpath(dynamicXPath));
    
        if (forumElements.isEmpty()) {
            throw new NoSuchElementException("Forum not found with name: " + forum);
        }
    
        for (WebElement element : forumElements) {
            if (element.getText().contains(forum)) {
                element.click();
                System.out.println("Navigated to the forum: " + forum);
                return;
            }
        }
    
        throw new NoSuchElementException("Exact forum match not found: " + forum);
    }
    

    public void goToComment(String comment) {
        String dynamicXPath = "//div[1]/table[1]/tbody[1]/tr[1]/th[1]/div[1]/div[1]/a[contains(text(),'" + comment + "')]";
    
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(dynamicXPath))).click();
    
        System.out.println("Navigated to the comment: " + comment);
    }


    public void clickDelete() {
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.linkText("Delete"))).click();
    }

    public void confirmDelete() {
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[2]/form[1]/button[1]"))).click();
    }

    public void checkResult() { 
        boolean flag = true;
        try {
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[1]/header[1]/div[2]/h3[1]")));
        }
        catch (Exception e) {
            flag = false;
        }
        Assertions.assertTrue(flag, "not found error");

    }

    public void checkResultDelete() {
        boolean flag = true;
        try{
            driver.findElement(By.linkText("abcd"));
            flag = false;
        }catch (Exception e){
            flag = true;
        }
        Assertions.assertTrue(flag, "not deleted successfully ");
    }



}
