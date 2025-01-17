/* @Provengo summon selenium */

defineEvent(SeleniumSession, "navigate_to_login", function(session, e) {

  session.click("//*[@id='usernavigation']/div/div/span/a");
})
defineEvent(SeleniumSession, "enter_details", function(session, e) {
  session.writeText("//*[@id='username']", e.UserName);
  session.writeText("//*[@id='password']", e.Password);
  session.click("//*[@id='loginbtn']")
})
defineEvent(SeleniumSession, "navigate_to_coursePage", function(session, e) {
  session.click("//*[contains(text(),'My courses') and @role='menuitem']") //click on my courses
  session.click("//div[1]/a[1]/span[3]/span[2][contains(text(),'" + e.courseName + "')]") //click on course name

})
defineEvent(SeleniumSession, "navigate_to_forum", function(session, e) {

  session.click("//a[contains(.,'" + e.courseName+ "')]")

})
defineEvent(SeleniumSession, "navigate_to_comment", function(session, e) {

  session.click("//div[1]/table[1]/tbody[1]/tr[1]/th[1]/div[1]/div[1]/a[contains(text(),'" + e.commentName + "')]")
})

defineEvent(SeleniumSession, "delete_comment", function(session, e) {
  session.click("//div[1]/div[2]/div[2]/div[1]/a[3]") //delete button
  session.click("//div[2]/form[1]/button[1]")


})