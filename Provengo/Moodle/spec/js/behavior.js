/* @provengo summon selenium */

bthread('Student view comment in forum successfully', function () {
  sync({waitFor:Event("End(comment_added)")})
  let s = new SeleniumSession("http://localhost/")
      s.start("http://localhost/")
      with (s) {
        navigate_to_login(s);
        enter_details(s, {UserName: 'student', Password: 'Aa12345!'});
        navigate_to_coursePage(s, {courseName: 'Intel'});
        navigate_to_forum(s, {forumName:'no more coffee'});
        navigate_to_comment_student(s, { commentName: 'why there is no coffee anymore?!' });
      }
})

bthread('Teacher delete comment in forum successfully', function () {
      sync({waitFor:Event("End(comment_added)")})
      let s = new SeleniumSession('http://localhost')
      s.start('http://localhost')
      with (s) {
      navigate_to_login(s);
      enter_details(s, {UserName: 'admin', Password: 'Aa12345!'});
      navigate_to_coursePage(s, {courseName: 'Intel'});
      navigate_to_forum(s, {forumName:'no more coffee'});
      navigate_to_comment_teacher(s, {commentName:'why there is no coffee anymore?!'})
      delete_comment(s);
      }
})

bthread('Make sure comment exists in the forum', function () {
  let s = new SeleniumSession('http://localhost')
      s.start('http://localhost')
      with (s) {
      navigate_to_login(s);
      enter_details(s, {UserName: 'admin', Password: 'Aa12345!'});
      navigate_to_coursePage(s, {courseName: 'Intel'});
      navigate_to_forum(s, {forumName:'no more coffee'});
      comment_added(s, {commentName:'why there is no coffee anymore?!'})
      }
})

bthread("Mark Goals", function(){
  let e = sync({waitFor: goalsSet})
  let goals = []
  while(e.name !== "End(delete_comment)"){
      goals.push(e.name)
      e = sync({waitFor: goalsSet})
  }
  goals.push(e.name)

  let goalsStr = goals.join(",")
      sync({request: Ctrl.markEvent(`Goal:(${goalsStr})`)})
})


// bthread('Navigate before delete', function () {
//   sync({waitFor: Event("End(navigate_to_comment_student)"), block: Event("Start(delete_comment)")});
// })

// bthread("Student view comment in forum successfully", function() {
//   let s = new SeleniumSession("http://localhost/")
//   sync({ request: Event("Start(navigate_to_login)",{startEvent: true})})
//   s.start("http://localhost/")
//   with (s) {
//         navigate_to_login(s);
//   }
//   sync ({ request: Event("End(navigate_to_login)")})
// })