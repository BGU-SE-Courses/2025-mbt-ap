/* @provengo summon selenium */

// bthread('Student view comment in forum successfully', function () {
//   sync({waitFor:Event("End(navigate_to_comment)")})
//   interrupt( Event("Middle(delete_comment)"),function(){
//       let s = new SeleniumSession().start('http://localhost')
//       navigate_to_login(s);
//       enter_details(s, {UserName: 'student', Password: 'Aa12345!'});
//       navigate_to_coursePage(s, {courseName: 'Intel'});
//       navigate_to_forum(s, {forumName:'no more coffee'});
//       navigate_to_comment(s, {commentName:'why there is no coffee anymore?!'})
      
//   }) 
// })

// bthread('Teacher delete comment in forum successfully', function () {
//   sync({waitFor:Event("End(navigate_to_comment)")})
//       let s = new SeleniumSession().start('http://localhost')
//       navigate_to_login(s);
//       enter_details(s, {UserName: 'admin', Password: 'Aa12345!'});
//       navigate_to_coursePage(s, {courseName: 'Intel'});
//       navigate_to_forum(s, {forumName:'no more coffee'});
//       navigate_to_comment(s, {commentName:'why there is no coffee anymore?!'})
//       delete_comment(s);
// }) 


// bthread('Student view comment in forum successfully', function () {
//   sync({request: Event({name: "Start(navigate_to_login)"})});
//   let s = new SeleniumSession().start('http://localhost/')
//   navigate_to_login(s);
//   sync({request:Event("End(navigate_to_login)")})

// })

bthread("Student view comment in forum successfully", function() {
  const customerSession = new SeleniumSession("http://localhost/")
  sync({ request: Event("Start(navigate_to_login)",{startEvent: true})})
  customerSession.start('http://localhost/')
  with (customerSession) {
      click("//*[@id='usernavigation']/div/div/span/a")
  }
  sync ({ request: Event("End(navigate_to_login)")})
})