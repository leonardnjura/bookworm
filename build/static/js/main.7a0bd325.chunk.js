(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{46:function(e,a,t){e.exports=t.p+"static/media/logo.d024f191.png"},48:function(e,a,t){e.exports=t(65)},53:function(e,a,t){},63:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(38),o=t.n(l),c=(t(53),t(47)),m=t(5),s=t(13),i=t(17),u=t(18),d=t(19),E=t(22),b=t(20),p=t(23),h=t(21),g=t(16),v=t.n(g),k=t(66),y=t(29),N=t.n(y);function f(e){console.log(e.book);var a=e.book,t=a.id,n=a.name,l=a.author,o=a.authorId,c=a.madeInKenya,m=a.coverUrl;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("h4",null,r.a.createElement("span",{className:N()({"bg-success":c,"bg-danger":!c,"px-1 mr-2":!0})}),"Book: ",n),r.a.createElement("h1",{className:"author"},r.a.createElement(s.b,{to:"/author/".concat(o),className:"silent-link"},"By ",l.name)),r.a.createElement(s.b,{to:"/book/".concat(t),className:"btn btn-secondary  mb-2"},"Book Details")),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("img",{src:m,alt:"Book Cover",style:{width:30,float:"right",borderRadius:3}}))))}function w(){return r.a.createElement("div",{className:"my-3"},r.a.createElement("p",null,r.a.createElement("span",{className:"px-3 mr-2 bg-success"})," Local"),r.a.createElement("p",null,r.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," International"))}function O(){var e=Object(h.a)(["\n  query BooksQuery {\n    books {\n      id\n      name\n      authorId\n      author {\n        name\n      }\n      madeInKenya\n      publishedAt\n      coverUrl\n    }\n  }\n"]);return O=function(){return e},e}var j=v()(O()),x=function(e){function a(){return Object(u.a)(this,a),Object(E.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h4",{className:"display-4 my-3"},"Books"),r.a.createElement("p",null,"Checkout these awesome books from my collection!"),r.a.createElement(w,null),r.a.createElement(k.a,{query:j},function(e){var a=e.loading,t=e.error,l=e.data;return a?r.a.createElement("h4",null,"Loading.."):(t&&console.log(t),r.a.createElement(n.Fragment,null,l.books.map(function(e){return r.a.createElement(f,{key:e.id,book:e})})))}),r.a.createElement("hr",{className:"mb-5"}))}}]),a}(n.Component),B=t(25),I=function(e){return r.a.createElement(B.a,{target:r.a.createElement("div",{className:"book"},r.a.createElement("img",{src:e.item,alt:"Book Cover",style:{width:230,display:"block",margin:"auto",borderRadius:5}}))},r.a.createElement(B.b,{from:{opacity:0,scale:0},to:{opacity:1,scale:1}}),r.a.createElement(B.b,{to:{rotation:13,delay:1.4}}),r.a.createElement(B.b,{to:{x:"-63px",y:"-23px"}}))};function A(e){return r.a.createElement(B.b,{to:{x:"0px",rotation:-360,color:"#0cf"}},r.a.createElement("div",{className:"author book-details"},e.item," "))}var q=t(45),D=t.n(q);function C(){var e=Object(h.a)(["\n  query BookQuery($id: Int!) {\n    book(id: $id) {\n      name\n      author {\n        id\n        name\n      }\n      madeInKenya\n      publishedAt\n      isbn\n      format\n      coverUrl\n      pages\n      bookDesc\n    }\n  }\n"]);return C=function(){return e},e}var F=v()(C()),K=function(e){function a(){return Object(u.a)(this,a),Object(E.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props.match.params.id;return e=parseInt(e),r.a.createElement(n.Fragment,null,r.a.createElement(k.a,{query:F,variables:{id:e}},function(e){var a=e.loading,t=e.error,n=e.data;if(a)return r.a.createElement("h4",null,"Loading Book..");t&&console.log(t);var l=n.book.name,o=n.book,c=o.madeInKenya,m=o.publishedAt,i=o.isbn,u=o.format,d=o.coverUrl,E=o.pages,b=o.bookDesc,p=n.book.author.id,h=n.book.author.name,g=D()(m).local().format("Do MMMM, YYYY");return console.log({publicationDay:g}),console.log(n),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/",className:"btn btn-secondary mt-2"},"All Books"),r.a.createElement("h1",{className:"display-4 my-3"},r.a.createElement("span",{className:"text-dark"},l)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("ul",{className:"list-group mb-3"},r.a.createElement("li",{className:"list-group-item"},"Author:",r.a.createElement(s.b,{to:"/author/".concat(p),className:"silent-link"},r.a.createElement(A,{item:h}))),r.a.createElement("li",{className:"list-group-item"},"Published: ",r.a.createElement(A,{item:g})),r.a.createElement("li",{className:"list-group-item"},"ISBN: ",r.a.createElement(A,{item:i})),r.a.createElement("li",{className:"list-group-item"},"Format: ",r.a.createElement(A,{item:u})),r.a.createElement("li",{className:"list-group-item"},"Pages: ",r.a.createElement(A,{item:E})),r.a.createElement("li",{className:"list-group-item"},"Overview: ",r.a.createElement(A,{item:b})),r.a.createElement("li",{className:"list-group-item"},"Made in Kenya:"," ",r.a.createElement("span",{className:N()({"text-success":c,"text-danger":!c})},c?"Yes":"No")))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement(I,{item:d}),r.a.createElement("hr",{className:"mb-5"}))))}))}}]),a}(n.Component);function M(){var e=Object(h.a)(["\n  query AuthorQuery($id: Int!) {\n    author(id: $id) {\n      name\n      books {\n        id\n        name\n      }\n      authorDesc\n    }\n  }\n"]);return M=function(){return e},e}var Y=v()(M()),$=function(e){function a(){return Object(u.a)(this,a),Object(E.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){console.log(this.props);var e=this.props.match.params.id;return e=parseInt(e),r.a.createElement(n.Fragment,null,r.a.createElement(k.a,{query:Y,variables:{id:e}},function(e){var a=e.loading,t=e.error,n=e.data;if(a)return r.a.createElement("h4",null,"Loading Author..");t&&console.log(t),console.log(n);var l=n.author,o=l.authorDesc,c=l.name,m=l.books;return r.a.createElement("div",null,r.a.createElement(s.b,{to:"/",className:"btn btn-secondary mt-2"},"All Books"),r.a.createElement("h1",{className:"display-4 my-3"},r.a.createElement("span",{className:"text-dark"},c)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("h4",null,"Bio"),r.a.createElement(A,{item:o}),r.a.createElement("hr",{className:"mb-5"})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h4",null,"Books"),r.a.createElement("ul",{className:"list-group mb-3"},m.map(function(e){return r.a.createElement("li",{className:"list-group-item",key:e.id},"Book:",r.a.createElement(s.b,{to:"/book/".concat(e.id),className:"silent-link"},r.a.createElement(A,{item:e.name})))})))))}))}}]),a}(n.Component),L=(t(63),t(46)),U=t.n(L),Q=new c.a({uri:"/graphql"});var J=function(){return r.a.createElement(m.a,{client:Q},r.a.createElement(s.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:U.a,style:{width:230,display:"block",margin:"auto"}}),r.a.createElement(i.a,{exact:!0,path:"/",component:x}),r.a.createElement(i.a,{exact:!0,path:"/book/:id",component:K}),r.a.createElement(i.a,{exact:!0,path:"/author/:id",component:$}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[48,1,2]]]);
//# sourceMappingURL=main.7a0bd325.chunk.js.map