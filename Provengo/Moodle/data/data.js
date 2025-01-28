const paths = {
  loginPage: {
    loginLink: "//*[@id='usernavigation']/div/div/span/a",
    usernameInput: "//*[@id='username']",
    passwordInput: "//*[@id='password']",
    submitButton: "//*[@id='loginbtn']",
  },
  coursePage: {
    myCoursesLink: "//*[contains(text(),'My courses') and @role='menuitem']",
    courseLink: "//div[1]/div[1]/a[1]/span[3]/span[2]",
  },
  forumPage: {
    forumLink: "//div[1]/ul[1]/li[3]/div[1]/div[2]/ul[1]/li[1]/div[1]/div[2]/div[2]/div[1]/div[1]/a[1]",
    commentLink: "//a[contains(@title, 'why there is no coffee anymore?!')]",
    deleteButton: "//div[1]/div[2]/div[2]/div[1]/a[3]",
    confirmDeleteButton: "//div[2]/form[1]/button[1]",
    addCommentButton: "//div[1]/div[1]/div[2]/a[1]",
    navToSubjectField: "//div[2]/div[2]/input[1]",
    subjectField: "//*[@id='id_subject']",
    messageField: "//*[@id='id_message_ifr']",
    submitButton: "//*[@id='id_submitbutton']",
  },
};
