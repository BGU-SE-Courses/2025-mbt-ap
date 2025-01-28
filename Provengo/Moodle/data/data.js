const paths = {
  loginPage: {
    loginLink: "//*[@id='usernavigation']/div/div/span/a",
    usernameInput: "//*[@id='username']",
    passwordInput: "//*[@id='password']",
    submitButton: "//*[@id='loginbtn']",
  },
  coursePage: {
    myCoursesLink: "//*[contains(text(),'My courses') and @role='menuitem']",
    courseLink: "//div[1]/a[1]/span[3]/span[2][contains(text(),'${e.courseName}')]",
  },
  forumPage: {
    forumLink: "//a[contains(.,'${forumName}')]",
    commentLink: "//div[1]/table[1]/tbody[1]/tr[1]/th[1]/div[1]/div[1]/a[contains(text(),'${e.commentName}')]",
    deleteButton: "//div[1]/div[2]/div[2]/div[1]/a[3]",
    confirmDeleteButton: "//div[2]/form[1]/button[1]",
    addCommentButton: "//div[1]/div[1]/div[2]/a[1]",
    navToSubjectField: "//div[2]/div[2]/input[1]",
    subjectField: "//*[@id='id_subject']",
    messageField: "//*[@id='id_message_ifr']",
    submitButton: "//*[@id='id_submitbutton']",
  },
};
