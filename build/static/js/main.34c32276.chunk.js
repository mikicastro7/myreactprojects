(this.webpackJsonpmyreactprojects=this.webpackJsonpmyreactprojects||[]).push([[0],{13:function(t,e,n){t.exports={centerForm:"Register_centerForm__8IJE0",topBar:"Register_topBar__1jdcL",login:"Register_login__1y7DF",register:"Register_register__2781S",topBarContainer:"Register_topBarContainer__1hrxL",noUn:"Register_noUn__hGsKA",formTitle:"Register_formTitle__3Uupz",bodyForm:"Register_bodyForm__3jBr6",formLabel:"Register_formLabel__3hpfP",formInput:"Register_formInput__GowCo",formButton:"Register_formButton__fwbVt"}},15:function(t,e,n){t.exports={centerForm:"Login_centerForm__3QY9g",topBar:"Login_topBar__1efrh",register:"Login_register__YRu-r",login:"Login_login__3VE_n",topBarContainer:"Login_topBarContainer__1Oz1I",noUn:"Login_noUn__3Khjp",formTitle:"Login_formTitle__3uBJQ",bodyForm:"Login_bodyForm__12E0m",formLabel:"Login_formLabel__3edpI",formInput:"Login_formInput__3HBrp",formButton:"Login_formButton__1aQ5E"}},21:function(t,e,n){t.exports={projectsContianer:"Project_projectsContianer__3zd-V",projectContainer:"Project_projectContainer__1gqaj",image:"Project_image__3_79n",projectTitle:"Project_projectTitle__kNN1f",description:"Project_description__3ydID",link:"Project_link__2vj9q",links:"Project_links__3Hle5"}},22:function(t,e,n){t.exports={principalNav:"PrincipalPageHeader_principalNav__1sl_M",baner:"PrincipalPageHeader_baner__3yJ3U",noUnder:"PrincipalPageHeader_noUnder__2iE1o",logRe:"PrincipalPageHeader_logRe__2Lnci",login:"PrincipalPageHeader_login__1RFoP",register:"PrincipalPageHeader_register__ScPb4"}},24:function(t,e,n){t.exports={commentInput:"PostComment_commentInput__2RVti",commentButtons:"PostComment_commentButtons__29dM5",commentButton:"PostComment_commentButton__1eObH",cancelButton:"PostComment_cancelButton__3Zj_7",punctuationButtons:"PostComment_punctuationButtons__1xn9a",puntuation:"PostComment_puntuation__1rOSk"}},25:function(t,e,n){t.exports={username:"Comment_username__35P9a",topComment:"Comment_topComment__2Gje-",comment:"Comment_comment__ldTsf",commentText:"Comment_commentText__1-4TP",postedTime:"Comment_postedTime__3VLLT",dropdownI:"Comment_dropdownI__1L64a"}},26:function(t,e,n){t.exports={commentInput:"EditComment_commentInput__2hxwO",commentButtons:"EditComment_commentButtons__2ZX03",commentButton:"EditComment_commentButton__RCzSO",cancelButton:"EditComment_cancelButton__2BNwY",punctuationButtons:"EditComment_punctuationButtons__V_xvg",puntuation:"EditComment_puntuation__oGoc6"}},37:function(t,e,n){t.exports={principalNav:"LoginRegisterHeader_principalNav__weoz3",baner:"LoginRegisterHeader_baner__37QDW",noUnder:"LoginRegisterHeader_noUnder__2cpjG"}},44:function(t,e,n){t.exports={commentsIntro:"myComments_commentsIntro__sxZGb",commentsContainer:"myComments_commentsContainer__1ji5K"}},55:function(t,e,n){t.exports={project:"Project_project__1W_dQ"}},56:function(t,e,n){t.exports={projects:"Projects_projects__3OfDY"}},57:function(t,e,n){t.exports={comments:"Comments_comments__1LVZN"}},64:function(t,e,n){},87:function(t,e,n){},96:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(1),r=n.n(a),s=n(28),c=n.n(s),i=(n(64),n(10)),l=n(5),d=n(6),m=n(8),j=n(7),u=n(9),p=n(12),h=n(37),b=n.n(h),O=function(){return Object(o.jsx)("nav",{className:b.a.principalNav,children:Object(o.jsx)(u.b,{className:"".concat(b.a.noUnder," ").concat(b.a.baner),to:"/",children:"MyProjects"})})},f=n(15),x=n.n(f),g=n(11),_=n.n(g),v=function(t,e,n){return{type:"AUTH_SUCCESS",access_token:t,userId:e,name:n}},C=function(t){return{type:"AUTH_FAIL",error:t}},y=function(t,e,n){return function(o){o({type:"AUTH_START"}),null==n?_()({method:"post",url:"/login",data:{name:t,password:e}}).then((function(t){o(v(t.data.access_token,t.data.user.id,t.data.user.name))})).catch((function(t){o(C(t.response.data.message))})):_()({method:"post",url:"/register",data:{name:t,password:e,password_confirmation:n}}).then((function(t){o(v(t.data.access_token,t.data.user.id,t.data.user.name))})).catch((function(t){o(C(t.response.data.message))}))}},N=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={Username:"",Password:""},t.submitHandler=function(e){e.preventDefault(),t.props.onAuth(t.state.Username,t.state.Password)},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e=null;this.props.error&&(e=Object(o.jsx)("p",{style:{color:"red"},children:this.props.error}));var n=null;return this.props.isAuth&&(n=Object(o.jsx)(i.a,{to:"/"})),Object(o.jsxs)("div",{children:[Object(o.jsx)(O,{}),Object(o.jsxs)("div",{className:x.a.centerForm,children:[Object(o.jsxs)("div",{className:x.a.topBar,children:[Object(o.jsx)("div",{className:x.a.topBarContainer,children:Object(o.jsx)("p",{className:x.a.login,children:"Login"})}),Object(o.jsx)("div",{className:x.a.topBarContainer,children:Object(o.jsx)(u.b,{to:"/register",className:x.a.noUn,children:Object(o.jsx)("p",{className:x.a.register,children:"Register"})})})]}),Object(o.jsxs)("div",{className:x.a.bodyForm,children:[Object(o.jsx)("h3",{className:x.a.formTitle,children:"Welcome login"}),n,e,Object(o.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(o.jsx)("label",{className:x.a.formLabel,children:"Username"}),Object(o.jsx)("input",{onChange:function(e){return t.setState({Username:e.target.value})},placeholder:"Username",className:x.a.formInput,type:"text"}),Object(o.jsx)("label",{style:{marginTop:"20px"},className:x.a.formLabel,children:"Password"}),Object(o.jsx)("input",{onChange:function(e){return t.setState({Password:e.target.value})},placeholder:"Password",className:x.a.formInput,type:"password"}),Object(o.jsx)("button",{className:x.a.formButton,children:"Login"})]})]})]})]})}}]),n}(a.Component),T=Object(p.b)((function(t){return{error:t.auth.error,isAuth:null!==t.auth.access_token}}),(function(t){return{onAuth:function(e,n){return t(y(e,n))}}}))(N),k=n(13),S=n.n(k),L=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={Username:"",Password:"",ConfirmPassword:""},t.submitHandler=function(e){e.preventDefault(),t.props.onAuth(t.state.Username,t.state.Password,t.state.ConfirmPassword)},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e=null;this.props.error&&(e=Object(o.jsx)("p",{style:{color:"red"},children:this.props.error}));var n=null;return this.props.isAuth&&(n=Object(o.jsx)(i.a,{to:"/"})),Object(o.jsxs)("div",{children:[Object(o.jsx)(O,{}),Object(o.jsxs)("div",{className:S.a.centerForm,children:[Object(o.jsxs)("div",{className:S.a.topBar,children:[Object(o.jsx)("div",{className:S.a.topBarContainer,children:Object(o.jsx)(u.b,{to:"/login",className:S.a.noUn,children:Object(o.jsx)("p",{className:S.a.login,children:"Login"})})}),Object(o.jsx)("div",{className:S.a.topBarContainer,children:Object(o.jsx)("p",{className:S.a.register,children:"Register"})})]}),Object(o.jsxs)("div",{className:S.a.bodyForm,children:[Object(o.jsx)("h3",{className:S.a.formTitle,children:"Welcome register"}),e,n,Object(o.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(o.jsx)("label",{className:S.a.formLabel,children:"Username"}),Object(o.jsx)("input",{onChange:function(e){return t.setState({Username:e.target.value})},placeholder:"Username",className:S.a.formInput,type:"text"}),Object(o.jsx)("label",{style:{marginTop:"20px"},className:S.a.formLabel,children:"Password"}),Object(o.jsx)("input",{onChange:function(e){return t.setState({Password:e.target.value})},placeholder:"Password",className:S.a.formInput,type:"password"}),Object(o.jsx)("label",{style:{marginTop:"20px"},className:S.a.formLabel,children:"Password confimartion"}),Object(o.jsx)("input",{onChange:function(e){return t.setState({ConfirmPassword:e.target.value})},placeholder:"Password confirmation",className:S.a.formInput,type:"password"}),Object(o.jsx)("button",{className:S.a.formButton,children:"Register"})]})]})]})]})}}]),n}(a.Component),P=Object(p.b)((function(t){return{error:t.auth.error,isAuth:null!==t.auth.access_token}}),(function(t){return{onAuth:function(e,n,o){return t(y(e,n,o))}}}))(L),w=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(i.b,{path:"/login",exact:!0,component:T}),Object(o.jsx)(i.b,{path:"/register",exact:!0,component:P})]})},B=n(22),H=n.n(B),I=function(t){return Object(o.jsxs)("nav",{className:H.a.principalNav,children:[Object(o.jsx)(u.b,{className:"".concat(H.a.noUnder," ").concat(H.a.baner),to:"/",children:"MyProjects"}),Object(o.jsx)("div",{className:H.a.logRe,children:!0!==t.isauth?Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)(u.b,{className:H.a.login,to:"/login",children:"Login"}),Object(o.jsx)(u.b,{className:H.a.register,to:"/register",children:"Register"})]}):Object(o.jsx)(u.b,{className:H.a.register,to:"/logout",children:"Logout"})})]})},E=n(21),A=n.n(E),M=function(t){return Object(o.jsxs)("div",{className:A.a.projectContainer,children:[Object(o.jsx)("img",{className:A.a.image,alt:"mytodolist",src:t.img}),Object(o.jsx)("h2",{className:A.a.projectTitle,children:t.title}),Object(o.jsx)("p",{className:A.a.description,children:t.description}),Object(o.jsxs)("div",{className:A.a.links,children:[Object(o.jsx)("a",{className:A.a.link,href:t.github,children:"Github Code"}),Object(o.jsx)(u.b,{className:A.a.link,to:t.linkProject,children:"Live Project"})]})]})},R=n.p+"static/media/MyTodoList.ccbc51c5.png",U=n.p+"static/media/MyComments.3be37c74.png",D=function(){return Object(o.jsxs)("div",{className:A.a.projectsContianer,children:[Object(o.jsx)(M,{linkProject:"/myTodoList",github:"https://github.com/mikicastro7/mytodolist",description:"This project is my own Todo List made with Bootstrap modals and the backend is a Laravel API",title:"MyTodoList",img:R}),Object(o.jsx)(M,{linkProject:"/myComments",github:"https://github.com/mikicastro7/mycomments-puntuation",description:"In this project you can comment and rate my projects",title:"MyComments",img:U})]})},F=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(I,{isauth:this.props.token}),Object(o.jsx)(D,{})]})}}]),n}(a.Component),G=Object(p.b)((function(t){return{token:null!==t.auth.access_token}}),null)(F),V=n(35),z=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"headercontainer",children:[Object(o.jsx)(u.b,{className:"headerMyProjects",to:"/",children:"MyProjects"}),Object(o.jsx)("h1",{className:"headerTitle",children:"MyTodolist"})]})}}]),n}(a.Component),J=n(20),Q=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={title:"",description:"",priority:"High"},t.fieldHandler=function(e){t.setState(Object(J.a)({},e.target.name,e.target.value))},t.onSubmit=function(){t.props.AddTodo(t.state.title,t.state.description,t.state.priority),t.setState({title:"",description:"",priority:"High"})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"modal fade",id:"exampleModal",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(o.jsx)("div",{className:"modal-dialog",role:"document",children:Object(o.jsxs)("div",{className:"modal-content",children:[Object(o.jsxs)("div",{className:"modal-header",children:[Object(o.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Add Todo"}),Object(o.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(o.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(o.jsx)("div",{className:"modal-body",children:Object(o.jsx)("form",{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Todo Title"}),Object(o.jsx)("input",{onChange:this.fieldHandler,name:"title",value:this.state.title,type:"text",className:"form-control",placeholder:"Enter Todo Title"}),Object(o.jsx)("label",{children:"Description"}),Object(o.jsx)("textarea",{onChange:this.fieldHandler,name:"description",value:this.state.description,type:"text",className:"form-control",placeholder:"Enter the decription of the todo"}),Object(o.jsx)("label",{children:"Priority"}),Object(o.jsxs)("select",{value:this.state.priority,onChange:this.fieldHandler,name:"priority",className:"form-control",children:[Object(o.jsx)("option",{value:"High",children:"High"}),Object(o.jsx)("option",{value:"Medium",children:"Medium"}),Object(o.jsx)("option",{value:"Low",children:"Low"})]})]})})}),Object(o.jsxs)("div",{className:"modal-footer",children:[Object(o.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Close"}),Object(o.jsx)("button",{onClick:this.onSubmit,type:"submit",className:"btn btn-primary","data-dismiss":"modal",children:"Save changes"})]})]})})})})}}]),n}(a.Component),Y=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"todoButton-div",children:[Object(o.jsxs)("button",{className:"todoButton","data-toggle":"modal","data-target":"#exampleModal",children:[Object(o.jsx)("i",{className:"fas fa-plus"})," Add Todo"]}),Object(o.jsx)(Q,{AddTodo:this.props.AddTodo})]})})}}]),n}(a.Component),W=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={title:t.props.todo.title,description:t.props.todo.description,priority:t.props.todo.priority},t.fieldHandler=function(e){t.setState(Object(J.a)({},e.target.name,e.target.value))},t.onSubmit=function(){t.props.EditTodo(t.props.todo.id,t.state.title,t.state.description,t.state.priority)},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"modal fade",id:"e"+this.props.todo.id,role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(o.jsx)("div",{className:"modal-dialog",role:"document",children:Object(o.jsxs)("div",{className:"modal-content",children:[Object(o.jsxs)("div",{className:"modal-header",children:[Object(o.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Edit Todo"}),Object(o.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(o.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(o.jsx)("div",{className:"modal-body",children:Object(o.jsx)("form",{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Todo Title"}),Object(o.jsx)("input",{onChange:this.fieldHandler,name:"title",value:this.state.title,type:"text",className:"form-control",placeholder:"Enter Todo Title"}),Object(o.jsx)("label",{children:"Description"}),Object(o.jsx)("textarea",{onChange:this.fieldHandler,name:"description",value:this.state.description,type:"text",className:"form-control",placeholder:"Enter the decription of the todo"}),Object(o.jsx)("label",{children:"Priority"}),Object(o.jsxs)("select",{value:this.state.priority,onChange:this.fieldHandler,name:"priority",className:"form-control",children:[Object(o.jsx)("option",{value:"High",children:"High"}),Object(o.jsx)("option",{value:"Medium",children:"Medium"}),Object(o.jsx)("option",{value:"Low",children:"Low"})]})]})})}),Object(o.jsxs)("div",{className:"modal-footer",children:[Object(o.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Close"}),Object(o.jsx)("button",{onClick:this.onSubmit,type:"submit",className:"btn btn-primary","data-dismiss":"modal",children:"Save changes"})]})]})})})})}}]),n}(a.Component),Z=function(t){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{style:t.Completed?{backgroundColor:"#adadad"}:{},className:"todo",children:[Object(o.jsxs)("div",{onClick:function(){return t.MarkComplete(t.todo.id)},className:"todoTitle",children:[Object(o.jsx)("div",{className:"priority",style:{backgroundColor:function(){var e="";switch(t.todo.priority){case"Low":e="#7d99ff";break;case"Medium":e="#fcaf62";break;case"High":e="#eb260c"}return e}()}}),Object(o.jsx)("span",{children:t.todo.title})]}),Object(o.jsx)("span",{onClick:function(){return t.MarkComplete(t.todo.id)},className:"todoDescription",children:t.todo.description.length>85?t.todo.description.substring(0,85)+" ...":t.todo.description}),Object(o.jsxs)("div",{className:"todoButtons",children:[Object(o.jsx)("i",{"data-toggle":"modal","data-target":"#e"+t.todo.id,className:"far fa-edit icon"}),Object(o.jsx)("i",{onClick:function(){return t.DeleteTodo(t.todo.id)},className:"fas fa-trash-alt icon"}),Object(o.jsx)("i",{"data-toggle":"collapse","data-target":"#i"+t.todo.id,"aria-expanded":"false","aria-controls":"i"+t.todo.id,className:"fas fa-plus icon"})]})]}),Object(o.jsx)("div",{className:"collapse",id:"i"+t.todo.id,children:Object(o.jsx)("div",{className:"fullInfo",children:Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Title: "}),t.todo.title]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Description: "}),t.todo.description]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Priority: "}),t.todo.priority]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Created at: "}),function(){var e=t.todo.created_at.split("T")[0].split("-");return e[2]+"/"+e[1]+"/"+e[0]+" "+t.todo.created_at.split("T")[1].slice(0,8)}()]})]})})}),Object(o.jsx)(W,{EditTodo:t.EditTodo,todo:t.todo})]})},K=function(t){return Object(o.jsxs)("div",{className:"todos",children:[" ",t.Todos.map((function(e){return Object(o.jsx)(Z,{EditTodo:t.EditTodo,DeleteTodo:t.DeleteTodo,MarkComplete:t.MarkComplete,Completed:e.completed,todo:e},e.id)}))]})},X=(n(87),function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(_()({method:"patch",url:"todo/"+e,data:{completed:!t.completed,title:t.title,description:t.description,priority:t.priority}}),t.completed=!t.completed),t}))})},t.editTodo=function(e,n,o,a){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(_()({method:"patch",url:"todo/"+e,data:{completed:!!t.completed,title:n,description:o,priority:a}}),t.title=n,t.description=o,t.priority=a),t}))})},t.deleteTodo=function(e){t.setState({todos:t.state.todos.filter((function(t){return t.id!==e}))}),_.a.delete("todo/"+e)},t.addTodo=function(e,n,o){_()({method:"post",url:"/todo",data:{title:e,description:n,priority:o,completed:!1}}).then((function(a){var r={id:a.data.todo.id,title:e,description:n,priority:o,completed:!1,created_at:a.data.todo.created_at};t.setState({todos:[].concat(Object(V.a)(t.state.todos),[r])})}))},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;_.a.get("userTodos").then((function(e){t.setState({todos:e.data.todo})}))}},{key:"render",value:function(){return _.a.defaults.headers.common.Authorization="Bearer "+this.props.token,Object(o.jsx)("div",{children:null===this.props.token?Object(o.jsx)(i.a,{to:"/login"}):Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)(z,{}),Object(o.jsx)(Y,{AddTodo:this.addTodo}),Object(o.jsx)(K,{EditTodo:this.editTodo,DeleteTodo:this.deleteTodo,MarkComplete:this.markComplete,Todos:this.state.todos})]})})}}]),n}(a.Component)),q=Object(p.b)((function(t){return{token:t.auth.access_token}}),null)(X),$=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return Object(o.jsx)(i.a,{to:"/"})}}]),n}(a.Component),tt=Object(p.b)(null,(function(t){return{onLogout:function(){return t({type:"AUTH_LOGOUT"})}}}))($),et=n(30),nt=n(55),ot=n.n(nt),at=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{className:ot.a.project,children:Object(o.jsxs)(u.b,{to:"/MyComments/"+this.props.projectName,children:[Object(o.jsx)("img",{src:"/"+this.props.projectName+".png",alt:""}),Object(o.jsx)("h1",{children:this.props.projectName})]})})}}]),n}(a.Component),rt=n(56),st=n.n(rt);var ct=Object(p.b)((function(t){return{token:t.auth.access_token}}),null)((function(t){return Object(o.jsxs)("div",{children:[Object(o.jsx)(I,{isauth:!!t.token}),Object(o.jsx)("div",{className:st.a.projects,children:t.projects.map((function(t){return Object(o.jsx)(at,{projectName:t.name},t.id)}))})]})})),it=n(44),lt=n.n(it),dt=n(36),mt=n(24),jt=n.n(mt),ut=n(29),pt=n.n(ut),ht=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={comment:"",rating:0},t.changeRating=function(e,n){t.setState({rating:e})},t.fieldHandler=function(e){t.setState(Object(J.a)({},e.target.name,e.target.value))},t.submitHandler=function(e){e.preventDefault(),t.state.comment.length>5&&t.state.rating>0&&(t.props.onComment(t.state.comment,t.state.rating),t.setState({comment:"",rating:0}))},t.cancelHandler=function(e){e.preventDefault(),t.setState({comment:"",rating:0})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(o.jsx)("div",{children:Object(o.jsx)(dt.a,{name:"comment",value:this.state.comment,onChange:this.fieldHandler,className:jt.a.commentInput,placeholder:"Comment here"})}),Object(o.jsxs)("div",{className:jt.a.punctuationButtons,children:[Object(o.jsx)("div",{className:jt.a.puntuation,children:Object(o.jsx)(pt.a,{rating:this.state.rating,changeRating:this.changeRating,numberOfStars:5,name:"rating",starDimension:"30px",starSpacing:"1px",starRatedColor:"#ffd900",starHoverColor:"#ffcc00"})}),Object(o.jsxs)("div",{className:jt.a.commentButtons,children:[Object(o.jsx)("button",{onClick:this.cancelHandler,className:jt.a.cancelButton,children:"CANCEL"}),Object(o.jsx)("button",{className:jt.a.commentButton,children:"POST"})]})]})]})}}]),n}(a.Component),bt=n(25),Ot=n.n(bt),ft=n(27),xt=n(26),gt=n.n(xt),_t=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={comment:t.props.comment.comment_text,rating:t.props.comment.rating},t.changeRating=function(e){t.setState({rating:e})},t.fieldHandler=function(e){t.setState(Object(J.a)({},e.target.name,e.target.value))},t.submitHandler=function(e){e.preventDefault(),t.state.comment.length>5&&t.state.rating>0&&(t.props.onCommentEdit(t.state.comment,t.state.rating,t.props.comment.id),t.setState({comment:"",rating:0})),t.props.cancelEdit()},t.cancelHandler=function(e){e.preventDefault(),t.props.cancelEdit(),t.setState({comment:"",rating:0})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(o.jsx)("div",{children:Object(o.jsx)(dt.a,{name:"comment",value:this.state.comment,onChange:this.fieldHandler,className:gt.a.commentInput,placeholder:"Comment here"})}),Object(o.jsxs)("div",{className:gt.a.punctuationButtons,children:[Object(o.jsx)("div",{className:gt.a.puntuation,children:Object(o.jsx)(pt.a,{rating:this.state.rating,changeRating:this.changeRating,numberOfStars:5,name:"rating",starDimension:"30px",starSpacing:"1px",starRatedColor:"#ffd900",starHoverColor:"#ffcc00"})}),Object(o.jsxs)("div",{className:gt.a.commentButtons,children:[Object(o.jsx)("button",{onClick:this.cancelHandler,className:gt.a.cancelButton,children:"CANCEL"}),Object(o.jsx)("button",{className:gt.a.commentButton,children:"EDIT"})]})]})]})})}}]),n}(a.Component),vt=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={edit:!1},t.getTime=function(t){var e=(new Date).getTime()-new Date(t).getTime(),n=[];n.push(parseInt(Math.floor(e/1e3))),n.push(parseInt(Math.floor(n[0]/60))),n.push(parseInt(Math.floor(n[1]/60))),n.push(parseInt(Math.floor(n[2]/24))),n.push(parseInt(Math.floor(n[3]/30))),n.push(parseInt(Math.floor(n[4]/12)));for(var o=0,a=n.length-1;a>0;a--)if(0!==n[a]){o=a;break}var r=n[o]+" "+["second","minut","hour","day","month","year"][o]+(n[o]>1?"s":"")+" ago";return 0===n[o]&&(r="now"),r},t.edit=function(){t.setState({edit:!t.state.edit})},t.delete=function(){t.props.deleteComment(t.props.comment.id)},t.cancelEdit=function(e){t.setState({edit:!1})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{className:Ot.a.comment,children:this.state.edit?Object(o.jsx)(_t,{onCommentEdit:this.props.onCommentEdit,comment:this.props.comment,cancelEdit:this.cancelEdit}):Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsxs)("div",{className:Ot.a.topComment,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:Ot.a.username,children:this.props.comment.name}),Object(o.jsx)("span",{className:Ot.a.postedTime,children:this.getTime(this.props.comment.created_at)})]}),Object(o.jsxs)(ft.a,{children:[Object(o.jsx)(ft.a.Toggle,{className:Ot.a.dropdownI,id:"dropdown-basic",children:"Options"}),Object(o.jsx)(ft.a.Menu,{children:this.props.id===this.props.comment.user_id?Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)(ft.a.Item,{onClick:this.edit,children:"Edit"}),Object(o.jsx)(ft.a.Item,{onClick:this.delete,children:"Delete"})]}):Object(o.jsx)(r.a.Fragment,{children:Object(o.jsx)(ft.a.Item,{children:"Report"})})})]})]}),Object(o.jsx)(pt.a,{rating:this.props.comment.rating,numberOfStars:5,name:"rating",starDimension:"20px",starSpacing:"0px",starRatedColor:"#ffd900",starHoverColor:"#ffcc00"}),Object(o.jsx)("p",{className:Ot.a.commentText,children:this.props.comment.comment_text})]})})}}]),n}(a.Component),Ct=Object(p.b)((function(t){return{id:t.auth.userId,name:t.auth.name}}),null)(vt),yt=n(57),Nt=n.n(yt),Tt=function(t){return Object(o.jsx)("div",{className:Nt.a.comments,children:t.comments.map((function(e){return Object(o.jsx)(Ct,{deleteComment:t.deleteComment,onCommentEdit:t.onCommentEdit,comment:e},e.id)}))})},kt=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={comments:[]},t.onComment=function(e,n){_()({method:"post",url:"comment",data:{comment_text:e,rating:n,project_id:t.props.projectId}}).then((function(o){console.log(o);var a={id:o.data.comments.id,comment_text:e,rating:n,project_id:t.props.projectId,created_at:o.data.comments.created_at,user_id:o.data.comments.user_id,name:t.props.name};t.setState({comments:[].concat(Object(V.a)(t.state.comments),[a])})}))},t.onCommentEdit=function(e,n,o){t.setState({comments:t.state.comments.map((function(a){return a.id===o&&(_()({method:"patch",url:"comment/"+o,data:{comment_text:e,rating:n,project_id:t.props.projectId}}),a.comment_text=e,a.rating=n),a}))})},t.deleteComment=function(e){t.setState({comments:t.state.comments.filter((function(t){return t.id!==e}))}),_.a.delete("comment/"+e)},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;_.a.get("projectComments/"+this.props.projectId).then((function(e){console.log(e.data),t.setState({comments:e.data.comments})}))}},{key:"render",value:function(){return _.a.defaults.headers.common.Authorization="Bearer "+this.props.token,Object(o.jsx)("div",{children:null===this.props.token?Object(o.jsx)(i.a,{to:"/login"}):Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)(I,{isauth:!!this.props.token}),Object(o.jsxs)("div",{className:lt.a.commentsIntro,children:[Object(o.jsxs)("h2",{children:["You are in the review of ",Object(o.jsx)("strong",{children:this.props.projectName})," project"]}),Object(o.jsxs)(u.b,{to:"/"+this.props.projectName,children:[" ",Object(o.jsx)("h3",{children:"See the project"})," "]})]}),Object(o.jsxs)("div",{className:lt.a.commentsContainer,children:[Object(o.jsx)("hr",{}),Object(o.jsxs)("h2",{children:[this.state.comments.length," COMMENTS"]}),Object(o.jsx)(ht,{onComment:this.onComment}),Object(o.jsx)(Tt,{deleteComment:this.deleteComment,onCommentEdit:this.onCommentEdit,comments:this.state.comments})]})]})})}}]),n}(a.Component),St=Object(p.b)((function(t){return{token:t.auth.access_token,name:t.auth.name}}),null)(kt),Lt=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={projects:[]},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;_.a.get("projects").then((function(e){console.log(e),t.setState({projects:e.data.projects})}))}},{key:"render",value:function(){var t=this;return Object(o.jsxs)("div",{children:[Object(o.jsx)(i.b,{path:"/myComments",exact:!0,render:function(e){return Object(o.jsx)(ct,Object(et.a)({projects:t.state.projects},e))}}),this.state.projects.map((function(t){return Object(o.jsx)(i.b,{path:"/myComments/"+t.name,exact:!0,component:function(e){return Object(o.jsx)(St,Object(et.a)({projectName:t.name,projectId:t.id},e))}},t.id)}))]})}}]),n}(a.Component);var Pt=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(i.b,{path:"/",exact:!0,component:G}),Object(o.jsx)(w,{}),Object(o.jsx)(i.b,{path:"/myTodoList",exact:!0,component:q}),Object(o.jsx)(i.b,{path:"/myComments",exact:!0,component:Lt}),Object(o.jsx)(i.b,{path:"/myComments/:name",exact:!0,component:Lt}),Object(o.jsx)(i.b,{path:"/logout",exact:!0,component:tt})]})},wt=n(23),Bt=n(58),Ht=(n(92),n(93),function(t,e){return Object(et.a)(Object(et.a)({},t),e)}),It={access_token:null,userId:null,name:null,error:null,loading:!1},Et=function(t,e){return Ht(t,{error:null,loading:!0})},At=function(t,e){return Ht(t,{access_token:e.access_token,userId:e.userId,name:e.name,error:null,loading:!1})},Mt=function(t,e){return Ht(t,{error:e.error,loading:!1})},Rt=function(t,e){return Ht(t,{access_token:null,userId:null,name:null})},Ut=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:It,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"AUTH_START":return Et(t);case"AUTH_SUCCESS":return At(t,e);case"AUTH_FAIL":return Mt(t,e);case"AUTH_LOGOUT":return Rt(t);default:return t}},Dt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||wt.d;_.a.defaults.baseURL="http://localhost:8000/api/",_.a.defaults.headers.post["Content-Type"]="application/json";var Ft=Object(wt.c)({auth:Ut}),Gt=Object(wt.e)(Ft,Dt(Object(wt.a)(Bt.a)));c.a.render(Object(o.jsx)(p.a,{store:Gt,children:Object(o.jsx)(u.a,{children:Object(o.jsx)(Pt,{})})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.34c32276.chunk.js.map