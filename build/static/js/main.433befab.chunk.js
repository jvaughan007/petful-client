(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{14:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=(n(14),n(1)),i=n(20),o=n.n(i),s=n(23),c=n(2),l=n(7),d=n(8),u=n(10),h=n(9),p=n(15),j=n.n(p),m=n(21),b=["Diann Goodere","Dorie Pimblott","Teddy Booker","Rena Jardein","Kirsteni Enoch","Mathilda Glas","Lindsy Congreave","Shaylynn McAsgill","Sydney Vannah","Page Kitchaside","Leicester Petren","Vladamir Grzelewski","Teddi Twyford","Brandise Harburtson","Karlik Sandyford","Alexandr Delacoste","Beverie Biagini","Rawley de Aguirre","Huntley Ickovici","Tawsha Isaak","Fae Maestrini","Carlen McLuckie","Ingeborg Woodroffe","Jarid Sprowle","Felisha Colquite","Zara Guerri","Gard Wyson","Chico MacQuaker","Delainey Jirzik","Germain Gladtbach","Ariela Nunn","Pansie McCrainor","Kayley Mercik","Bren Barz","Nataniel Boissier","Hans Wisniowski","Kathrine Leverette","Sean Fredi","Anette Balsdon","Heddie Rallings","Ariel Goacher","Garrick Mc Caghan","Rhianna Straw","Verine Breukelman","Issie Huggan","Mart Stollenhof","Fons Kerwood","Brittany De Santos","Ted Reace","Katrine Jeanes","Kailey Weblin","Sonny Nolot","Caterina Kohler","Kinny Lindwasser","Rollin Coltart","Erich Bliss","Jacynth Cahn","Ram Clifforth","Carmel Hunnicot","Mal Sholl","Georgette Ward","Onfroi Dalling","Halette Lowdes","Gleda Drains","Brittni Neeson","Jamima Chark","Puff Ahrens","Corabel Wroth","Tadd Carlos","Gareth Treversh","Inesita Ravenshear","Meggi Broader","Mike Paddock","Dominic Libreros","Harlan Sturman","Audry Ivanishev","Ardyth Brunotti","Catharine Kaines","Amabelle Whittle","Sigfried Abramowsky","Clem Castelli","Ferrel Buglar","Dennie Kerin","Kristos Rouby","Delmor McCalum","Ashlan McGiveen","Jasmin Boothebie","Olvan Bondley","Linc Challace","Eleonora Oxteby","Shalne Hoston","Curry Hurley","Estevan Erricker","Alleen Goldbourn","Lindi Ivashintsov","Amii Fitzsimmons","Dale Guenther","Domini Bantham","Melitta Prujean","Godfrey Grix","Dinah Cantillion","Cindy Ryves","Suki Hover","Chelsie Boriston","Uri Cottill","Lorrin Kensley","Lilly Salerg","Johnnie Biscomb","Christy O'Rourke","Hobart Peres","Alaster Emanuelli","Cad Moens","Marillin Nozzolii","Byrann Spowage","Ambur Sollom","Shayne Trenholm","Collie Geerits","Jo ann Bolin","Rayna Abate","Erinn Gayne","Julio Haylands","Coleen Tudgay","Roch Dagless","Bertina Prowting","Glory Davage","Rowena Sackett","Anastasia Addyman","Liesa Fieldgate","Hesther Duddle","Claudian Scarratt","Charlie Lawtey","Daryle Leveritt","Derrick Chaulk","Martita Seleway","Sawyere Crolla","Reinaldo Polk","Magnum Muat","Friederike Beavon","Marieann Lewry","Jourdain Gierke","Grantham Varfalameev","Wilone Fogt","Margy Piatkowski","Alyosha Freeburn","Nonna Triggs","Ly Jelfs","Queenie Philcox","Pru Greeve","Desmund Dedmam","Averil Bounde","Aubine Cantu","Tiffie Dinnis","Chip Jain","Rhianna Capeling","Tamera Faunt","Charyl Dawidowicz","Emmy Chasemoore","Agnesse Klimuk","Wade Rubinshtein","Bernelle Viney","Nye Haycock","Giustina Wycliffe","Wilhelmine Aires","Yves Pendle","Lucilia Lismer","Field Swin","Padraig Wastling","Vincents Steadman","Tamas Ramey","Edie Anselmi","Israel Pepper","Abigail Hunnywell","Avram Poytheras","Faith Dagon","Laurette Gatrill","Giuseppe Lindwasser","Kristen Arnott","Kali Tripcony","Elliott Velden","Berkly Brotherhead","Idette Buse","Darda Meeus","Cornelle Bosse","Elvina Wife","Roseanne Jeaffreson","Madelon Rogeon","Bordie Catherick","Orin Mennell","Lisha Yurlov","Jameson Cowl","Sofie Binning","Bartolomeo Hendrikse","Mable McFetrich","Erroll Wetherby","Harriett Roizin","Willie Grimsey","Dacy Shankland","Waring Legges","Edwina Eckh","Corrine Aylen"],y="https://petfulserveractive.herokuapp.com",f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getAnimals=function(){fetch("".concat(y,"/pets"),{method:"GET",redirect:"follow"}).then((function(e){return e.json()})).then((function(e){return a.setState({pets:e})}))},a.getPeopleQueue=function(){fetch("".concat(y,"/people/people_queue"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){a.setState({peopleQueue:e}),console.log("this is the peopleque",a.state.peopleQueue)})).catch((function(e){return console.log("error",e)}))},a.addPeople=function(e){var t=new Headers;t.append("Content-Type","application/json");var n={method:"POST",headers:t,body:JSON.stringify({person:e})};return fetch("".concat(y,"/people"),n)},a.removePeople=function(e){var t=new Headers;t.append("Content-Type","application/json");var n={method:"DELETE",headers:t,body:JSON.stringify({type:e})};return fetch("".concat(y,"/pets"),n)},a.asyncHandleListCycle=Object(m.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=b[Math.floor(Math.random()*b.length)],a.state.peopleQueue[0]!==a.props.userName){e.next=6;break}a.myStopFunction(),window.location.href="/adopt",e.next=13;break;case 6:return e.next=8,a.removePeople("cat");case 8:return e.next=10,a.addPeople(t);case 10:a.getPeopleQueue(),a.getAnimals(),a.timer=setTimeout((function(){return a.asyncHandleListCycle()}),5e3);case 13:case"end":return e.stop()}}),e)}))),a.myStopFunction=function(){clearTimeout(a.timer)},a.state={peopleQueue:[],person:a.props.userName,pets:{dog:{name:"",age:"",imgURL:"",description:"",breed:"",gender:"",story:""},cat:{name:"",age:"",imgURL:"",description:"",breed:"",gender:"",story:""}}},a.timer=null,a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getPeopleQueue(),this.getAnimals()}},{key:"adoptionPage",value:function(e){return Object(a.jsxs)("div",{className:"pet-card",children:[Object(a.jsx)("img",{src:e.imageURL,alt:e.description}),Object(a.jsxs)("div",{className:"petDetails",children:[Object(a.jsxs)("p",{children:["Name: ",e.name]}),Object(a.jsxs)("p",{children:["Breed: ",e.breed]}),Object(a.jsxs)("p",{children:["Gender: ",e.gender]}),Object(a.jsxs)("p",{children:["Story: ",e.story]})]})]})}},{key:"render",value:function(){return console.log("this is the passed down prop userName",this.props.userName),Object(a.jsxs)("div",{className:"peopleQueue_container",children:[Object(a.jsx)("ul",{className:"peopleQueue",children:this.state.peopleQueue&&this.state.peopleQueue.map((function(e){return Object(a.jsx)("li",{className:"item",children:e})}))}),Object(a.jsxs)("div",{className:"queueControls",children:[Object(a.jsx)("button",{onClick:this.asyncHandleListCycle,children:"Check-In!"}),Object(a.jsx)("button",{onClick:this.myStopFunction,children:"Hold the Line!"})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"petQueueControl",children:[Object(a.jsx)("div",{className:"dog-card",children:this.adoptionPage(this.state.pets.dog)}),Object(a.jsx)("div",{className:"cat-card",children:this.adoptionPage(this.state.pets.cat)})]})]})}}]),n}(r.Component),g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).redirect=function(){return window.location.href="/queue"},a.handleSubmit=function(e){e.preventDefault();var t={person:a.state.person};console.log("completed the handle submit"),fetch("".concat(y,"/people/"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(){a.setState({queueToggle:!0})})).catch((function(e){console.log(e)}))},a.handlePerson=function(e){a.setState({person:e.target.value})},a.state={person:"",queueToggle:!1},a}return Object(d.a)(n,[{key:"handleRender",value:function(e){return!0===e?Object(a.jsx)("div",{children:Object(a.jsx)(f,{userName:this.state.person})}):Object(a.jsx)("div",{className:"signIn-container",children:Object(a.jsxs)("div",{className:"signIn-form",children:[Object(a.jsx)("h2",{children:"Please sign in below!"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("div",{className:"form-control",children:[Object(a.jsx)("label",{htmlFor:"person",children:"Name"}),Object(a.jsx)("input",{required:!0,type:"text",id:"person",value:this.state.person,onChange:this.handlePerson,placeholder:"i.e. - John Doe"})]}),Object(a.jsx)("div",{className:"signInFormButton",children:Object(a.jsx)("button",{type:"submit",className:"signInButton",children:"Sign-In"})})]})]})})}},{key:"render",value:function(){var e=this.state.queueToggle;return Object(a.jsx)("div",{children:this.handleRender(e)})}}]),n}(r.Component),O=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"aboutContainer",children:[Object(a.jsx)("h1",{children:"Thinkful Adoption Agency"}),Object(a.jsx)("br",{}),Object(a.jsx)(g,{})]})}}]),n}(r.Component),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={personName:"Place Holder Bob",pets:{dog:{name:"",age:"",imgURL:"",description:"",breed:"",gender:"",story:""},cat:{name:"",age:"",imgURL:"",description:"",breed:"",gender:"",story:""}}},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(y,"/pets"),{method:"GET",redirect:"follow"}).then((function(e){return e.json()})).then((function(t){return e.setState({pets:t})}))}},{key:"adoptionPage",value:function(e){return Object(a.jsxs)("div",{className:"pet-card",children:[Object(a.jsx)("div",{className:"imgControl",children:Object(a.jsx)("img",{src:e.imageURL,alt:e.description})}),Object(a.jsxs)("div",{className:"petDetails",children:[Object(a.jsxs)("p",{children:["Name: ",e.name]}),Object(a.jsxs)("p",{children:["Breed: ",e.breed]}),Object(a.jsxs)("p",{children:["Gender: ",e.gender]}),Object(a.jsxs)("p",{children:["Story: ",e.story]})]})]})}},{key:"handleClickAdopt",value:function(e,t){var n=this;t.preventDefault();var a=new Headers;a.append("Content-Type","application/json");var r={method:"DELETE",headers:a,body:JSON.stringify({type:e}),redirect:"follow"};fetch("".concat(y,"/pets"),r).then((function(e){return e.text()})).then((function(e){return n.props.history.push("/adopted")})).catch((function(e){return console.log("error",e)}))}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"pets-container",children:[Object(a.jsx)("h2",{children:"Congratulations! It is your turn!"}),Object(a.jsx)("p",{children:"Pick your new best friend by pressing the 'Adopt' button below. You can choose a dog or a cat."}),Object(a.jsxs)("div",{className:"selectContainer",children:[Object(a.jsx)("form",{className:"select-dog",onSubmit:function(t){return e.handleClickAdopt("dog",t)},children:Object(a.jsxs)("div",{className:"dog-card",children:[Object(a.jsx)("div",{children:this.adoptionPage(this.state.pets.dog)}),Object(a.jsx)("div",{className:"buttonControl",children:Object(a.jsx)("button",{type:"submit",className:"adopt-dog",children:"Adopt Dog"})})]})}),Object(a.jsx)("form",{className:"select-cat",onSubmit:function(t){return e.handleClickAdopt("cat",t)},children:Object(a.jsxs)("div",{className:"cat-card",children:[Object(a.jsx)("div",{children:this.adoptionPage(this.state.pets.cat)}),Object(a.jsx)("div",{className:"buttonControl",children:Object(a.jsx)("button",{type:"submit",className:"adopt-cat",children:"Adopt Cat"})})]})})]})]})}}]),n}(r.Component),x=Object(c.f)(v),C=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"handleHomeRedirect",value:function(){return window.location.href="/"}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"confirmContainer",children:[Object(a.jsx)("div",{className:"confirmOne",children:Object(a.jsx)("h1",{children:"CONGRATULATIONS!"})}),Object(a.jsx)("div",{className:"confirmTwo",children:Object(a.jsx)("h2",{children:"We hope your new furry friend warms your heart and home!"})}),Object(a.jsx)("div",{className:"confirmThree",children:Object(a.jsx)("h3",{children:"Click below to be redirected to our home page!"})}),Object(a.jsx)("div",{className:"backHome",children:Object(a.jsx)("button",{onClick:this.handleHomeRedirect,children:"Back to Home"})})]})}}]),n}(r.Component);var k=function(){return Object(a.jsx)(s.a,{children:Object(a.jsxs)(c.c,{children:[Object(a.jsx)(c.a,{exact:!0,path:"/",component:O}),Object(a.jsx)(c.a,{exact:!0,path:"/adopt",component:x}),Object(a.jsx)(c.a,{exact:!0,path:"/queue",component:f}),Object(a.jsx)(c.a,{exact:!0,path:"/adopted",component:C})]})})};o.a.render(Object(a.jsx)(k,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.433befab.chunk.js.map