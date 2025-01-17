/* @Provengo summon selenium */

function navigate_to_login(session) {
  sync({request: Event("Start(navigate_to_login)")});
  session.click("//*[@id='usernavigation']/div/div/span/a");
  sync({request: Event("End(navigate_to_login)")});
}


function enter_details(session){
  sync({request: Event("Start(enter_details)")});
  session.writeText("//*[@id='username']", e.UserName);
  session.writeText("//*[@id='password']", e.Password);
  session.click("//*[@id='loginbtn']")
  sync({request: Event("End(enter_details)")});
}


function navigate_to_coursePage(session){
  sync({request: Event("Start(navigate_to_coursePage)")});
  session.click("//*[contains(text(),'My courses') and @role='menuitem']") //click on my courses
  session.click("//div[1]/a[1]/span[3]/span[2][contains(text(),'" + e.courseName + "')]") //click on course name
  sync({request: Event("End(navigate_to_coursePage)")});
}


function navigate_to_forum(session){
  sync({request: Event("Start(navigate_to_forum)")});
  session.click("//a[contains(.,'" + e.courseName+ "')]")
  sync({request: Event("End(navigate_to_forum)")});
}

function navigate_to_comment(session){
  sync({request: Event("Start(navigate_to_comment)")});
  session.click("//div[1]/table[1]/tbody[1]/tr[1]/th[1]/div[1]/div[1]/a[contains(text(),'" + e.commentName + "')]")
  sync({request: Event("End(navigate_to_comment)")});
}

function delete_comment(session){
  sync({request: Event("Start(delete_comment)")});
  session.click("//div[1]/div[2]/div[2]/div[1]/a[3]") //delete button
  session.click("//div[2]/form[1]/button[1]")
  sync({request: Event("End(delete_comment)")});
}


