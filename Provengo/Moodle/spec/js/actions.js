/* @Provengo summon selenium */

function navigate_to_login(session) {
  // sync({request: Event("Start(navigate_to_login)")});
  session.click(paths.loginPage.loginLink);
  // sync({request: Event("End(navigate_to_login)")});
}


function enter_details(session, e){
  // sync({request: Event("Start(enter_details)")});
  session.writeText(paths.loginPage.usernameInput, e.UserName);
  session.writeText(paths.loginPage.passwordInput, e.Password);
  session.click(paths.loginPage.submitButton)
  // sync({request: Event("End(enter_details)")});
}


function navigate_to_coursePage(session, e){
  // sync({request: Event("Start(navigate_to_coursePage)")});
  session.click(paths.coursePage.myCoursesLink) //click on my courses
  session.click(paths.coursePage.courseLink) //click on course name
  // sync({request: Event("End(navigate_to_coursePage)")});
}


function navigate_to_forum(session, e){
  // sync({request: Event("Start(navigate_to_forum)")});
  session.click(paths.forumPage.forumLink)
  // sync({request: Event("End(navigate_to_forum)")});
}

function navigate_to_comment_student(session, e){
  sync({request: Event("Start(navigate_to_comment_student)")});
  session.click( paths.forumPage.commentLink)
  sync({request: Event("End(navigate_to_comment_student)")});
}

function navigate_to_comment_teacher(session, e){
  sync({request: Event("Start(navigate_to_comment_teacher)")});
  session.click( paths.forumPage.commentLink)
  sync({request: Event("End(navigate_to_comment_teacher)")});
}

function delete_comment(session){
  sync({request: Event("Start(delete_comment)")});
  session.click(paths.forumPage.deleteButton) //delete button
  session.click(paths.forumPage.confirmDeleteButton)
  sync({request: Event("End(delete_comment)")});
}

function insert_comment(session, e){
  sync({request: Event("Start(insert_comment)")});
  session.click(paths.forumPage.addCommentButton) //add discussion topic
  session.click(paths.forumPage.navToSubjectField) // subject
  session.writeText(paths.forumPage.subjectField, e.commentName);
  session.writeText(paths.forumPage.messageField, e.commentMessage);
  session.click(paths.forumPage.submitButton)
  // session.waitForVisibility( paths.commentLink)
  sync({request: Event("End(insert_comment)")});
}

function comment_added(session, e){
  sync({request: Event("Start(comment_added)")});
  session.waitForVisibility( paths.forumPage.commentLink)
  session.close()
  sync({request: Event("End(comment_added)")});
}

const goalsSet =[
  Event("End(navigate_to_comment_student)"),
  Event("End(delete_comment)")
]


