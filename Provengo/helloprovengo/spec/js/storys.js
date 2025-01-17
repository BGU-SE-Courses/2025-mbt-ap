//@provengo summon selenium

story('Student view comment in forum successfully', function () {
    let s = new SeleniumSession().start('http://localhost')
    s.navigate_to_login()
    s.enter_details({ UserName: 'student', Password:'Aa12345!'})
    s.navigate_to_coursePage({courseName:'Intel'})
    s.navigate_to_forum({forumName:'no more coffee'})
    s.navigate_to_comment({commentName:'why there is no coffee anymore?!'})
  
  })
  
  story('Teacher delete comment in forum successfully', function () {
    let s = new SeleniumSession().start('http://localhost')
    s.navigate_to_login()
    s.enter_details({ UserName: 'admin', Password:'Aa12345!'})
    s.navigate_to_coursePage({courseName:'Intel'})
    s.navigate_to_forum({forumName:'no more coffee'})
    s.navigate_to_comment({commentName:'why there is no coffee anymore?!'})
    s.delete_comment()
  
  })
  story('waiting for student to view comment', function () {
    block(Any("delete_comment"), function () {
            waitFor(Any("view_student"))
    })
  
  })