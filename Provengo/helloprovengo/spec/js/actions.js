/* @Provengo summon selenium */

function navigate_to_login(session) {
  // sync({request: Event("Start(navigate_to_login)")});
  session.click("//*[@id='usernavigation']/div/div/span/a");
  // sync({request: Event("End(navigate_to_login)")});
}


function enter_details(session, e){
  // sync({request: Event("Start(enter_details)")});
  session.writeText("//*[@id='username']", e.UserName);
  session.writeText("//*[@id='password']", e.Password);
  session.click("//*[@id='loginbtn']")
  // sync({request: Event("End(enter_details)")});
}


function navigate_to_coursePage(session, e){
  // sync({request: Event("Start(navigate_to_coursePage)")});
  session.click("//*[contains(text(),'My courses') and @role='menuitem']") //click on my courses
  session.click("//div[1]/a[1]/span[3]/span[2][contains(text(),'" + e.courseName + "')]") //click on course name
  // sync({request: Event("End(navigate_to_coursePage)")});
}


function navigate_to_forum(session, e){
  // sync({request: Event("Start(navigate_to_forum)")});
  session.click("//a[contains(.,'" + e.forumName + "')]")
  // sync({request: Event("End(navigate_to_forum)")});
}

function navigate_to_comment_student(session, e){
  sync({request: Event("Start(navigate_to_comment_student)")});
  session.click( "//div[1]/table[1]/tbody[1]/tr[1]/th[1]/div[1]/div[1]/a[contains(text(),'" + e.commentName + "')]")
  sync({request: Event("End(navigate_to_comment_student)")});
}

function navigate_to_comment_teacher(session, e){
  sync({request: Event("Start(navigate_to_comment_teacher)")});
  session.click( "//div[1]/table[1]/tbody[1]/tr[1]/th[1]/div[1]/div[1]/a[contains(text(),'" + e.commentName + "')]")
  sync({request: Event("End(navigate_to_comment_teacher)")});
}

function delete_comment(session){
  sync({request: Event("Start(delete_comment)")});
  session.click("//div[1]/div[2]/div[2]/div[1]/a[3]") //delete button
  session.click("//div[2]/form[1]/button[1]")
  sync({request: Event("End(delete_comment)")});
}

function insert_comment(session, e){
  sync({request: Event("Start(insert_comment)")});
  session.click("//div[1]/div[1]/div[2]/a[1]") //add discussion topic
  session.click("//div[2]/div[2]/input[1]") // subject
  session.writeText("//*[@id='id_subject']", e.commentName);
  session.writeText("//*[@id='id_message_ifr']", e.commentMessage);
  session.click("//*[@id='id_submitbutton']")
  // session.waitForVisibility( "//div[1]/table[1]/tbody[1]/tr[1]/th[1]/div[1]/div[1]/a[contains(text(),'" + e.commentName + "')]")
  sync({request: Event("End(insert_comment)")});
}

function comment_added(session, e){
  sync({request: Event("Start(comment_added)")});
  session.waitForVisibility( "//div[1]/table[1]/tbody[1]/tr[1]/th[1]/div[1]/div[1]/a[contains(text(),'" + e.commentName + "')]")
  session.close()
  sync({request: Event("End(comment_added)")});
}


