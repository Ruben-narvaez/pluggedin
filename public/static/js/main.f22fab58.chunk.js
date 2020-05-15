(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),c=a.n(l),o=(a(75),a(8)),s=a(10),i=a(12),u=a(11),m=a(32),h=(a(76),a(77),a(7)),p=a(15),d=a(16),E=a(9),g=a(29),f=a(33),b=a(36),v=a.n(b),j=function e(){var t=this;Object(o.a)(this,e),this.signup=function(e){var a=e.username,n=e.password,r=e.email;return t.service.post("/signup",{username:a,password:n,email:r})},this.login=function(e){var a=e.username,n=e.password;return t.service.post("/login",{username:a,password:n})},this.logout=function(){return t.service.post("/logout")},this.isLoggedIn=function(){return t.service.get("/loggedin")},this.userProfile=function(e){var a=e.id;return t.service.get("/profile/".concat(a))},this.service=v.a.create({baseURL:"".concat("https://plugged-in-app.herokuapp.com/api"),withCredentials:!0})},k=a(6),I=a(26),C=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=Object(f.a)({},n.state.loginInfo),a=e.target,r=a.name,l=a.value;t=Object(f.a)(Object(f.a)({},t),{},Object(g.a)({},r,l)),n.setState({loginInfo:t})},n.handleSubmit=function(e){e.preventDefault(),console.log("hey",n.authService),n.authService.signup(n.state.loginInfo).then((function(e){n.props.setTheUser(e.data),n.props.history.push("/")})).catch((function(e){400===e.response.status&&n.setState({errorMessage:e.response.data.message})}))},n.state={loginInfo:{username:"",password:""},errorMessage:""},n.authService=new j,n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement("h3",null,"Registro de usuario"),r.a.createElement("hr",null),r.a.createElement(k.a,{onSubmit:this.handleSubmit},r.a.createElement(k.a.Group,{controlId:"name"},r.a.createElement(k.a.Label,null,"Usuario"),r.a.createElement(k.a.Control,{name:"username",type:"text",value:this.state.username,onChange:this.handleInputChange})),r.a.createElement(k.a.Group,{controlId:"pwd"},r.a.createElement(k.a.Label,null,"Contrase\xf1a"),r.a.createElement(k.a.Control,{name:"password",type:"password",value:this.state.password,onChange:this.handleInputChange})),r.a.createElement("p",{className:"error-message",style:{display:this.state.errorMessage?"block":"none"}},this.state.errorMessage),r.a.createElement(I.a,{variant:"dark",type:"submit"},"Registrarme")),r.a.createElement("p",null,r.a.createElement("small",null,"\xbfYa tienes cuenta? ",r.a.createElement(h.b,{to:"/login"},"Inicia sesi\xf3n"))))))}}]),a}(n.Component),O=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=Object(f.a)({},n.state.loginInfo),a=e.target,r=a.name,l=a.value;t=Object(f.a)(Object(f.a)({},t),{},Object(g.a)({},r,l)),n.setState({loginInfo:t})},n.handleSubmit=function(e){e.preventDefault(),n.authService.login(n.state.loginInfo).then((function(e){n.props.setTheUser(e.data),n.props.history.push("/profile")})).catch((function(e){400===e.response.status&&n.setState({errorMessage:e.response.data.message})}))},n.state={loginInfo:{username:"",password:""},errorMessage:""},n.authService=new j,n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement("h3",null,"Inicio de sesi\xf3n"),r.a.createElement("hr",null),r.a.createElement(k.a,{onSubmit:this.handleSubmit},r.a.createElement(k.a.Group,{controlId:"name"},r.a.createElement(k.a.Label,null,"Usuario"),r.a.createElement(k.a.Control,{name:"username",type:"text",value:this.state.username,onChange:this.handleInputChange})),r.a.createElement(k.a.Group,{controlId:"pwd"},r.a.createElement(k.a.Label,null,"Contrase\xf1a"),r.a.createElement(k.a.Control,{name:"password",type:"password",value:this.state.password,onChange:this.handleInputChange})),r.a.createElement("p",{className:"error-message",style:{display:this.state.errorMessage?"block":"none"}},this.state.errorMessage),r.a.createElement(I.a,{variant:"dark",type:"submit"},"Iniciar sesi\xf3n")),r.a.createElement("p",null,r.a.createElement("small",null,"\xbfNo tienes cuenta? ",r.a.createElement(h.b,{to:"/signup"},"Reg\xedstrate"))))))}}]),a}(n.Component),y=(a(101),function(){return r.a.createElement(p.a,{fluid:!0},r.a.createElement(d.a,{className:"homePhrase"},r.a.createElement(E.a,{className:"colPhrase",md:"6"},r.a.createElement("section",null,r.a.createElement("h1",null,"La red social de los filmmakers independientes")),r.a.createElement(h.b,{className:"homeButton",to:"/signup"},"Crea tu cuenta")),r.a.createElement(E.a,{className:"travolta",md:"6"},r.a.createElement("section",null))),r.a.createElement(d.a,{className:"blueRow"},r.a.createElement(E.a,{className:"miaWallace",md:"6"}),r.a.createElement(E.a,{className:"bluePhrase",md:"6"},r.a.createElement("h2",null,"\xdanete, determina tu rol y colabora en los proyectos de la comunidad, o busca compa\xf1eros para tu propios proyectos."),r.a.createElement(h.b,{className:"loginButton",to:"/login"},"Entra"))),r.a.createElement(d.a,{className:"homeFooter"},r.a.createElement("p",null,"Made by Rub")))}),S=a(38),w=a(35),U=(a(102),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).logout=function(){n.props.setTheUser(!1),n.authService.logout()},n.authService=new j,n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(S.a,{className:"nav",expand:"md"},r.a.createElement(S.a.Brand,{as:"div"},r.a.createElement(h.b,{to:"/"},"PluggedIn")),r.a.createElement(S.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(S.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(w.a,null,this.props.loggedInUser?r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a.Link,{as:"div"},r.a.createElement(h.b,{to:"/profile"},"Mi perfil")),r.a.createElement(w.a.Link,{as:"div"},r.a.createElement(h.b,{to:"/projects"},"Proyectos")),r.a.createElement(w.a.Link,{as:"div"},r.a.createElement(h.b,{to:"/filmmakers"},"Comunidad")),r.a.createElement(w.a.Link,{as:"div",onClick:this.logout},"Cerrar sesi\xf3n")):r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a.Link,{as:"div"},r.a.createElement(h.b,{to:"/login"},"Iniciar sesi\xf3n")),r.a.createElement(w.a.Link,{as:"div"},r.a.createElement(h.b,{to:"/signup"},"Registro")))),r.a.createElement(S.a.Text,{className:"ml-auto"}," ",this.props.loggedInUser?this.props.loggedInUser.username:"invitad@")))}}]),a}(n.Component)),L=function e(){var t=this;Object(o.a)(this,e),this.getFilmmakers=function(){return t.service.get("/filmmakers")},this.getFilmmaker=function(e){return t.service.get("/filmmakers/".concat(e))},this.service=v.a.create({baseURL:"".concat("https://plugged-in-app.herokuapp.com/api"),withCredentials:!0})},N=a(19),P=function(e){return r.a.createElement(E.a,{ld:3,md:4,sm:6},r.a.createElement(N.a,{bg:"light",border:"light",as:"article"},r.a.createElement(h.b,{to:"/filmmakers/".concat(e._id),className:"btn btn-block"},r.a.createElement(N.a.Img,{variant:"top",src:e.picture}),r.a.createElement(N.a.Body,null,r.a.createElement(N.a.Title,null,e.name," ",e.lastname),r.a.createElement(N.a.Text,null," Equipo de ",e.team," - ",e.age," a\xf1os")))))},M=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).getAllFilmmakers=function(){e.filmmakersService.getFilmmakers().then((function(t){return e.setState({filmmakers:t.data})})).catch((function(e){return console.log(e)}))},e.componentDidMount=function(){e.getAllFilmmakers()},e.state={filmmakers:[]},e.filmmakersService=new L,e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{as:"section"},r.a.createElement("h1",null,"Listado de users"),r.a.createElement(d.a,null,this.state.filmmakers.map((function(e){return r.a.createElement(P,Object.assign({key:e._id},e))}))))}}]),a}(n.Component),T=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.getFilmmakerInfo()},n.state={},n.filmmakerService=new L,n}return Object(s.a)(a,[{key:"getFilmmakerInfo",value:function(){var e=this,t=this.props.match.params.id;this.filmmakerService.getFilmmaker(t).then((function(t){return e.setState(t.data)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(p.a,{as:"section",className:"filmmaker-details"},r.a.createElement("h1",null,this.state.name," ",this.state.lastname),r.a.createElement("hr",null),r.a.createElement(d.a,null,r.a.createElement(E.a,{md:{span:4,offset:1}},r.a.createElement("h4",null,"Info"),r.a.createElement("p",null,this.state.team),r.a.createElement("h4",null,"Detalles t\xe9cnicos"),r.a.createElement("ul",null,r.a.createElement("li",null,"edad: ",this.state.age))),r.a.createElement(E.a,{md:6},r.a.createElement("img",{src:this.state.picture,alt:this.state.name}))),r.a.createElement(h.b,{to:"/filmmakers",className:"btn btn-dark"},"Volver"))}}]),a}(n.Component),x=function e(){var t=this;Object(o.a)(this,e),this.getProjects=function(){return t.service.get("/projects")},this.getProject=function(e){return t.service.get("/projects/details/".concat(e))},this.saveProject=function(e){return t.service.post("/projects/new",e)},this.service=v.a.create({baseURL:"".concat("https://plugged-in-app.herokuapp.com/api"),withCredentials:!0})},F=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).projectsService=new x,n.state={user:e.loggedInUser},n}return Object(s.a)(a,[{key:"render",value:function(){if(this.state.user){var e=this.state.user,t=e.name,a=(e.lastname,e.team);e.email,e.favoriteGenre,e.profilePic;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{as:"section",className:"profile-section"},r.a.createElement("div",null,r.a.createElement("h1",null,"hey man, ",t),r.a.createElement("div",null,r.a.createElement("p",null,"Team: ",a)),r.a.createElement(h.b,{to:"/filmmakers"},"Buscar filmmakers"),r.a.createElement(h.b,{to:"/projects"},"Buscar proyectos"))))}return r.a.createElement("p",null,"Cargando...")}}]),a}(n.Component),D=function(e){return r.a.createElement(E.a,{sm:12},r.a.createElement(N.a,{bg:"light",border:"light",as:"article"},r.a.createElement(N.a.Img,{variant:"top",src:e.poster}),r.a.createElement(N.a.Body,null,r.a.createElement(N.a.Title,null,e.title),r.a.createElement(N.a.Title,null,e.genre," - ",e.format),r.a.createElement(N.a.Text,null," ",e.description," "),r.a.createElement(h.b,{to:"/projects/details/".concat(e._id),className:"btn btn-dark btn-block btn-sm"},"Visitar Proyecto"))))},G=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(g.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault(),n.projectService.saveProject(n.state).then((function(){return n.props.finishNewProject()})).catch((function(e){return console.log(e)}))},n.state={title:"",description:"",genre:"",format:"",poster:""},n.projectService=new x,n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement("h1",null,"Nuevo proyecto"),r.a.createElement("hr",null),r.a.createElement(k.a,{onSubmit:this.handleSubmit},r.a.createElement(k.a.Group,{controlId:"title"},r.a.createElement(k.a.Label,null,"T\xedtulo del proyecto"),r.a.createElement(k.a.Control,{name:"title",type:"text",value:this.state.title,onChange:this.handleInputChange})),r.a.createElement(k.a.Group,{controlId:"desc"},r.a.createElement(k.a.Label,null,"Descripci\xf3n"),r.a.createElement(k.a.Control,{as:"textarea",rows:"3",name:"description",type:"textarea",value:this.state.description,onChange:this.handleInputChange})),r.a.createElement(k.a.Group,{controlId:"gen"},r.a.createElement(k.a.Label,null,"G\xe9nero"),r.a.createElement(k.a.Control,{size:"sm",as:"select",name:"genre",type:"text",value:this.state.genre,onChange:this.handleInputChange},r.a.createElement("option",null,"Seleccionar"),r.a.createElement("option",null,"Documental"),r.a.createElement("option",null,"Comedia"),r.a.createElement("option",null,"Drama"),r.a.createElement("option",null,"Acci\xf3n"),r.a.createElement("option",null,"Ciencia-ficci\xf3n"),r.a.createElement("option",null,"Comedia rom\xe1ntica"),r.a.createElement("option",null,"Musical"),r.a.createElement("option",null,"Fantas\xeda"),r.a.createElement("option",null,"Artes Marciales"),r.a.createElement("option",null,"Video-arte"),r.a.createElement("option",null,"Video-ensayo"),r.a.createElement("option",null,"Otros"))),r.a.createElement(k.a.Group,{controlId:"format"},r.a.createElement(k.a.Label,null,"Formato"),r.a.createElement(k.a.Control,{size:"sm",as:"select",name:"format",type:"text",value:this.state.format,onChange:this.handleInputChange},r.a.createElement("option",null,"Seleccionar"),r.a.createElement("option",null,"Largometraje"),r.a.createElement("option",null,"Cortometraje"),r.a.createElement("option",null,"Web Serie"),r.a.createElement("option",null,"Publicidad"),r.a.createElement("option",null,"Videoclip"),r.a.createElement("option",null,"Otro formato"))),r.a.createElement(k.a.Group,{controlId:"img"},r.a.createElement(k.a.Label,null,"P\xf3ster (URL)"),r.a.createElement(k.a.Control,{name:"poster",type:"text",value:this.state.poster,onChange:this.handleInputChange})),r.a.createElement(I.a,{variant:"dark",onClick:function(){return e.props.closeModal},style:{marginRight:"10px"}},"Cerrar"),r.a.createElement(I.a,{variant:"dark",type:"submit"},"Crear proyecto")))}}]),a}(n.Component),R=a(39),B=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleModal=function(t){return e.setState({modalShow:t})},e.getAllProjects=function(){e.projectsService.getProjects().then((function(t){return e.setState({projects:t.data})})).catch((function(e){return console.log(e)}))},e.componentDidMount=function(){e.getAllProjects()},e.finishNewProject=function(){e.getAllProjects(),e.handleModal(!1)},e.state={modalShow:!1,projects:[]},e.projectsService=new x,e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(p.a,{as:"section"},r.a.createElement("h1",null,"Listado de proyectos"),r.a.createElement(I.a,{onClick:this.handleModal,variant:"dark",size:"lg"},"Crear un nuevo proyecto"),r.a.createElement(d.a,null,this.state.projects.map((function(e){return r.a.createElement(D,Object.assign({key:e._id},e))}))),r.a.createElement(R.a,{show:this.state.modalShow,onHide:function(){return e.handleModal(!1)}},r.a.createElement(R.a.Body,null,r.a.createElement(G,{finishNewProject:this.finishNewProject,closeModal:function(){return e.handleModal(!1)}}))))}}]),a}(n.Component),A=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.getProjectInfo()},n.state={},n.projectsService=new x,n}return Object(s.a)(a,[{key:"getProjectInfo",value:function(){var e=this,t=this.props.match.params.id;this.projectsService.getProject(t).then((function(t){return e.setState(t.data)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(p.a,{as:"section"},r.a.createElement("h1",null,this.state.title),r.a.createElement("hr",null),r.a.createElement(d.a,null,r.a.createElement(E.a,{md:{span:4,offset:1}},r.a.createElement("h4",null,this.state.genre," ",this.state.format),r.a.createElement("h4",null,"Detalles"),r.a.createElement("p",null,this.state.description)),r.a.createElement(E.a,{md:6},r.a.createElement("img",{src:this.state.poster,alt:this.state.title}))),r.a.createElement(h.b,{to:"/projects",className:"btn btn-dark"},"Volver"))}}]),a}(n.Component),V=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).setTheUser=function(t){return e.setState({loggedInUser:t},(function(){return e.state}))},e.fetchUser=function(){null===e.state.loggedInUser&&e.authService.isLoggedIn().then((function(t){return e.setTheUser(t.data)})).catch((function(){return e.setTheUser(!1)}))},e.state={loggedInUser:null},e.authService=new j,e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return this.fetchUser(),r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{setTheUser:this.setTheUser,loggedInUser:this.state.loggedInUser}),r.a.createElement("main",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,render:function(){return r.a.createElement(y,{loggedInUser:e.state.loggedInUser})}}),r.a.createElement(m.b,{path:"/filmmakers",exact:!0,render:function(){return r.a.createElement(M,{loggedInUser:e.state.loggedInUser})}}),r.a.createElement(m.b,{path:"/projects",exact:!0,render:function(){return r.a.createElement(B,{loggedInUser:e.state.loggedInUser})}}),r.a.createElement(m.b,{path:"/projects/details/:id",render:function(e){return r.a.createElement(A,e)}}),r.a.createElement(m.b,{path:"/projects/new",render:function(){return r.a.createElement(G,null)}}),r.a.createElement(m.b,{path:"/filmmakers/:id",render:function(e){return r.a.createElement(T,e)}}),r.a.createElement(m.b,{path:"/profile",render:function(){return e.state.loggedInUser?r.a.createElement(F,{loggedInUser:e.state.loggedInUser}):r.a.createElement(m.a,{to:"/"})}}),r.a.createElement(m.b,{path:"/signup",render:function(t){return r.a.createElement(C,Object.assign({},t,{setTheUser:e.setTheUser}))}}),r.a.createElement(m.b,{path:"/login",render:function(t){return r.a.createElement(O,Object.assign({},t,{setTheUser:e.setTheUser}))}}))))}}]),a}(n.Component);c.a.render(r.a.createElement(h.a,null,r.a.createElement(V,null)),document.getElementById("root"))},70:function(e,t,a){e.exports=a(103)},75:function(e,t,a){},77:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.f22fab58.chunk.js.map