(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{209:function(e,t,a){e.exports=a(328)},214:function(e,t,a){},218:function(e,t,a){},328:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),s=a.n(c),l=(a(214),a(9)),o=a(54),i=a(184),u=a(72),m=a(73),d=a(87),p=a(88),E=(a(218),a(219),a(10)),g=a(6),h=a(334),f=a(329),v=a(332),S=a(335),y=a(331),b=a(149),N=a.n(b),T=a(4),_=a.n(T),C=a(29),A=a(23),R=a.n(A);R.a.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers.common.Authorization="Token ".concat(t)),e}),(function(e){return Promise.reject(e)}));var O=function(e){return{type:"SET_ARTICLES",payload:{articles:e}}},k=function(e){return{type:"ADD_ERROR_MESSAGE",payload:{err:e}}},U=function(e){return{type:"SET_AUTH",payload:{auth:e}}},w=function(){return{type:"SET_POSTCHANGE_STATUS_TO_NONE"}},L=function(e){return function(){var t=Object(C.a)(_.a.mark((function t(a){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"FAVORITE_REQUESTED"}),t.prev=1,t.next=4,R.a.post("https://conduit.productionready.io/api/articles/".concat(e,"/favorite"));case 4:n=t.sent,a({type:"SET_FAVORITED",payload:{article:n.data.article}}),a({type:"FAVORITE_SUCCESS"}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),a({type:"FAVORITE_FAILURE"});case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(C.a)(_.a.mark((function t(a){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"FAVORITE_REQUESTED"}),t.prev=1,t.next=4,R.a.delete("https://conduit.productionready.io/api/articles/".concat(e,"/favorite"));case 4:n=t.sent,a({type:"DELETE_FAVORITED",payload:{article:n.data.article}}),a({type:"FAVORITE_SUCCESS"}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),a({type:"FAVORITE_FAILURE"});case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},I=Object(l.b)((function(e){return{favoriteRequestsStatus:e.favoriteRequestsStatus}}))((function(e){return"requested"===e.favoriteRequestsStatus&&r.a.createElement(S.a,{style:{color:"red"},className:"animated"})})),x={setSlug:function(e){return{type:"SET_SLUG",payload:{slug:e}}},setLike:function(e){return{type:"SET_LIKE",payload:{liked:e}}},getArticles:function(){return function(){var e=Object(C.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"REQUEST_SEND"}),e.prev=1,e.next=4,R.a.get("https://conduit.productionready.io/api/articles?limit=10");case 4:a=e.sent,t(O(a.data.articles)),t({type:"REQUEST_SUCCESS"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:"REQUEST_FAILURE"});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},getPageArticles:function(e){return function(){var t=Object(C.a)(_.a.mark((function t(a){var n,r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"REQUEST_SEND"}),t.prev=1,n=10*(e-1),t.next=5,R.a.get("https://conduit.productionready.io/api/articles?limit=10&offset=".concat(n));case 5:r=t.sent,a(O(r.data.articles)),a({type:"REQUEST_SUCCESS"}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),a({type:"REQUEST_FAILURE"});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},deleteArticle:function(){return{type:"DELETE_ARTICLE"}},fatchFavorite:L,unFavorite:P,filterByTag:function(e){return function(){var t=Object(C.a)(_.a.mark((function t(a){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"REQUEST_SEND"}),t.prev=1,t.next=4,R.a.get("https://conduit.productionready.io/api/articles?limit=10&tag=".concat(e));case 4:n=t.sent,a(O(n.data.articles)),a({type:"REQUEST_SUCCESS"}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a({type:"REQUEST_FAILURE"});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}},j=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleLike=function(e){var t=e.target.closest(".card__content").firstChild.textContent;n.setState({slug:t})},n.componentDidMount=function(){var e=n.props,t=e.getArticles;(0,e.deleteArticle)(),t()},n.state={slug:""},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state.slug,a=this.props,n=a.articles,c=a.getPageArticles,s=a.setSlug,l=a.requestStatus,o=a.fatchFavorite,i=a.unFavorite,u=a.filterByTag;return r.a.createElement("main",{className:"container padding-top margin-bottom"},"success"===l?n.map((function(a){return r.a.createElement("div",{key:N.a.generate(),className:"post-card"},r.a.createElement("img",{className:"avatar",alt:"AVATAR",src:"".concat(a.author.image)}),r.a.createElement("div",{className:"card__content"},r.a.createElement(E.b,{onClick:function(){return s(a.slug)},to:"/articles/".concat(a.slug),className:"title"},a.slug),r.a.createElement("div",{className:"meta"},r.a.createElement("span",{className:"date"},Object(y.a)(new Date(a.createdAt),Date.now(),{addSuffix:!0})),r.a.createElement("span",{className:"author"},a.author.username)),r.a.createElement("p",null,a.body),r.a.createElement("div",{className:"links"},a.tagList.length?a.tagList.map((function(e){return r.a.createElement(h.a,{key:N.a.generate(),color:"orangered",onClick:function(){return u(e)}},e)})):null,r.a.createElement("span",{className:"favorites-count"},a.favoritesCount),a.favorited?r.a.createElement("span",{className:"heart-container",onClick:e.handleLike},r.a.createElement(S.a,{style:{color:"red"},onClick:function(){return i(a.slug)}}),a.slug===t&&r.a.createElement(I,null)):r.a.createElement("span",{className:"heart-container",onClick:e.handleLike},r.a.createElement(S.a,{onClick:function(){return o(a.slug)}}),a.slug===t&&r.a.createElement(I,null)))))})):r.a.createElement("div",{className:"max-width margin-bottom"},r.a.createElement(f.a,{className:"center"})),r.a.createElement("div",{className:"max-width"},r.a.createElement(v.a,{onChange:c,defaultCurrent:"1",total:"500"})))}}]),a}(r.a.Component);j.defaultProps={articles:null};var D=Object(l.b)((function(e){return{articles:e.articles,requestStatus:e.requestStatus}}),x)(j),F=a(333),q=a(155),Q=a(336),G=a(337),V=a(21),H=a(22),M={authenticate:function(e,t){return function(){var a=Object(C.a)(_.a.mark((function a(n){var r;return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"REQUEST_SEND"}),a.prev=1,a.next=4,R.a.post(t,{user:e});case 4:return r=a.sent,localStorage.setItem("user",r.data.user.username),localStorage.setItem("token",r.data.user.token),n({type:"REQUEST_SUCCESS"}),a.next=10,n(U(!1));case 10:a.next=16;break;case 12:a.prev=12,a.t0=a.catch(1),n({type:"REQUEST_FAILURE"}),n(k(a.t0.response.data.errors));case 16:case"end":return a.stop()}}),a,null,[[1,12]])})));return function(e){return a.apply(this,arguments)}}()}},B=function(e){var t=H.a().shape({email:H.b().email("\u0423\u043a\u043e\u0436\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),password:H.b().required("\u0412\u044b \u043d\u0435 \u0432\u0432\u0435\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c").min(8,"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").matches(/(?=.*[0-9])/,"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d\u044c \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u0446\u0438\u0444\u0440\u0443").matches(/(?=.*[a-z])/,"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d\u044c \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u0431\u0443\u043a\u0432\u0443 \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u043e\u0433\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0430")}),a=Object(V.e)({initialValues:{email:"",password:""},validationSchema:t,onSubmit:function(t){(0,e.authenticate)(t,"https://conduit.productionready.io/api/users/login")}}),n=a.errors,c=a.values,s=a.touched,l=a.handleBlur,o=a.handleChange,i=a.handleSubmit,u=e.errorMsg,m=e.requestStatus;return r.a.createElement("form",{className:"form",name:"normal_login",onSubmit:i},r.a.createElement("div",{className:"margin-bottom"},r.a.createElement(F.a,{name:"email",placeholder:"E-mail",prefix:r.a.createElement(Q.a,{className:"site-form-item-icon"}),value:c.email,onChange:o,onBlur:l}),n.email&&s.email&&r.a.createElement("div",{className:"red"},n.email)),r.a.createElement("div",{className:"margin-bottom"},r.a.createElement(F.a.Password,{name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",prefix:r.a.createElement(G.a,{className:"site-form-item-icon"}),value:c.password,onChange:o,onBlur:l}),n.password&&s.password&&r.a.createElement("div",{className:"red"},n.password)),u&&r.a.createElement("div",{className:"red"},u.emailOrPassword),r.a.createElement(q.a,{disabled:"requested"===m,htmlType:"submit",className:"margin-right",type:"primary"},"\u0412\u043e\u0439\u0442\u0438"),"requested"===m&&r.a.createElement(f.a,{className:"left-margin margin-right"}),r.a.createElement(E.b,{to:"/signup"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))};B.defaultProps={errorMsg:null,emailOrPassword:""};var z=Object(l.b)((function(e){return{errorMsg:e.errorMsg,requestStatus:e.requestStatus}}),M)(B),W={addUser:function(e,t){return function(){var a=Object(C.a)(_.a.mark((function a(n){var r;return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"REQUEST_SEND"}),a.prev=1,a.next=4,R.a.post(t,{user:e});case 4:r=a.sent,n({type:"ADD_USERNAME",payload:{name:r.data.user.username}}),localStorage.setItem("user",r.data.user.username),n({type:"REQUEST_SUCCESS"}),n(U()),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(1),n(k(a.t0.response.data.errors)),n({type:"REQUEST_FAILURE"});case 15:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e){return a.apply(this,arguments)}}()}},J=Object(l.b)((function(e){return{errorMsg:e.errorMsg,requestStatus:e.requestStatus}}),W)((function(e){var t=e.errorMsg,a=e.requestStatus,n=e.addUser,c=Object(V.e)({initialValues:{username:"",email:"",password:""},onSubmit:function(e){n(e,"https://conduit.productionready.io/api/users")}}),s=c.values,l=c.handleChange,o=c.handleSubmit;return r.a.createElement("form",{className:"form",onSubmit:o},r.a.createElement("div",{className:"margin-bottom"},r.a.createElement(F.a,{name:"email",placeholder:"E-mail",label:"E-mail",type:"email",value:s.email,onChange:l}),t&&r.a.createElement("div",{className:"red"},t.email)),r.a.createElement("div",{className:"margin-bottom"},r.a.createElement(F.a.Password,{name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",label:"Password",type:"password",value:s.password,onChange:l}),t&&r.a.createElement("div",{className:"red"},t.password)),r.a.createElement("div",{className:"margin-bottom"},r.a.createElement(F.a,{placeholder:"\u0418\u043c\u044f \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",name:"username",label:"Nickname",value:s.username,onChange:l}),t&&r.a.createElement("div",{className:"red"},t.username)),r.a.createElement(q.a,{className:"left-margin",type:"primary",htmlType:"submit"},"Register"),"requested"===a&&r.a.createElement(f.a,{className:"left-margin"}),r.a.createElement(E.b,{to:"/login"},"\u0412\u043e\u0439\u0442\u0438"))})),K={getTargetArticle:function(e){return function(){var t=Object(C.a)(_.a.mark((function t(a){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"REQUEST_SEND"}),t.prev=1,t.next=4,R.a.get("https://conduit.productionready.io/api".concat(e));case 4:n=t.sent,a({type:"SET_ARTICLE",payload:{article:n.data.article}}),a({type:"REQUEST_SUCCESS"}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a({type:"REQUEST_FAILURE"});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},deletePost:function(e){return function(){var t=Object(C.a)(_.a.mark((function t(a){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"POST_CHANGE_REQUESTED"});try{n={method:"Delete",url:"https://conduit.productionready.io/api/articles/".concat(e)},R()(n).then((function(e){return 200===e.status?a({type:"POST_CHANGE_SUCCESS"}):a({type:"POST_CHANGE_FAILURE"})}))}catch(r){a({type:"POST_CHANGE_FAILURE"})}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFavorite:P,fatchFavorite:L,setPostChangeStatusToNone:w},$=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){var t=e.props,a=t.getTargetArticle,n=t.slug;return a("/articles/".concat(n))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.article,a=e.changePostStatus,n=e.setPostChangeStatusToNone,c=e.slug,s=e.deletePost,l=e.unFavorite,o=e.fatchFavorite;return"success"===a?r.a.createElement("div",{className:"container post-card padding-top"},r.a.createElement("p",{className:"margin-right"},"\u041f\u043e\u0441\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u043e\u043b\u0435\u043d"),r.a.createElement("br",null),r.a.createElement(E.b,{onClick:function(){return n()},to:"/"},"ok")):t?r.a.createElement("main",{className:"padding-top"},r.a.createElement("div",{className:"post-card container"},r.a.createElement("img",{className:"avatar",alt:"AVATAR",src:"".concat(t.author.image)}),r.a.createElement("div",{className:"card__content"},r.a.createElement("h1",{className:"title"},t.title),r.a.createElement("div",{className:"meta"},r.a.createElement("span",{className:"date"},Object(y.a)(new Date(t.createdAt),Date.now(),{addSuffix:!0})),r.a.createElement("span",{className:"author"},t.author.username)),r.a.createElement("p",null,t.body),r.a.createElement("div",{className:"links"},t.tagList.length?t.tagList.map((function(e){return r.a.createElement(h.a,{color:"orangered"},e)})):null,r.a.createElement("span",{className:"favorites-count"},t.favoritesCount),t.favorited?r.a.createElement("span",{className:"heart-container"},r.a.createElement(S.a,{style:{color:"red"},onClick:function(){return l(t.slug)},className:"like"}),r.a.createElement(I,null)):r.a.createElement("span",{className:"heart-container"},r.a.createElement(S.a,{onClick:function(){return o(t.slug)},className:"like"}),r.a.createElement(I,null))),t.author.username===localStorage.getItem("user")&&r.a.createElement("div",{className:"remove"},r.a.createElement(q.a,{className:"margin-right",disabled:"sended"===a,onClick:function(){return s(c)},type:"primary",danger:!0},"\u0423\u0434\u043e\u043b\u0438\u0442\u044c"),"sended"===a&&r.a.createElement(f.a,{className:"margin-right"}),r.a.createElement(q.a,{disabled:"sended"===a,type:"primary"},r.a.createElement(E.b,{to:"/articles/".concat(c,"/edit")},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c")))))):r.a.createElement("div",{className:"padding-top max-width margin-bottom"},r.a.createElement(f.a,{className:"center"}))}}]),a}(r.a.Component);$.defaultProps={article:null};var X=Object(l.b)((function(e){return{article:e.article,slug:e.slug,changePostStatus:e.changePostStatus,requestStatus:e.requestStatus}}),K)($),Y=a(330),Z={setAuth:U},ee=Object(l.b)((function(e){return{isAuth:e.isAuth}}),Z)((function(e){var t=e.setAuth,a=e.isAuth;return r.a.createElement("header",null,r.a.createElement("div",{className:"header__wrapper container"},r.a.createElement(E.b,{to:"/"},r.a.createElement("h1",{className:"logo"},"Blog")),r.a.createElement("div",{className:"user"},a&&r.a.createElement(E.b,{className:"user-btn margin-right",to:"/add"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442"),r.a.createElement("div",{className:"user-name"},r.a.createElement(Y.a,{icon:r.a.createElement(Q.a,null)}),a?r.a.createElement("span",{className:"user-nick"},localStorage.getItem("user")):r.a.createElement("span",{className:"user-nick"},"\u0412\u044b \u043d\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u044b")),a?r.a.createElement(E.b,{onClick:function(){t(a),localStorage.clear()},className:"user-btn",to:"/"},"\u0412\u044b\u0439\u0442\u0438"):r.a.createElement(E.b,{className:"user-btn",to:"/login"},"\u0412\u043e\u0439\u0442\u0438"))))})),te=a(338),ae=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Desined by Istamal Dagalaev"),r.a.createElement(te.a,{className:"m-right-gap"}),r.a.createElement("a",{href:"mailto:dagalaev@gmail.com"},"dagalaev@gmail.com"))},ne={addPost:function(e){return function(){var t=Object(C.a)(_.a.mark((function t(a){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"POST_CHANGE_REQUESTED"});try{n={method:"Post",data:{article:e},url:"https://conduit.productionready.io/api/articles"},R()(n).then((function(e){return 200===e.status?a({type:"POST_CHANGE_SUCCESS"}):a({type:"POST_CHANGE_FAILURE"})}))}catch(r){a({type:"POST_CHANGE_FAILURE"})}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setPostChangeStatusToNone:w},re=Object(l.b)((function(e){return{changePostStatus:e.changePostStatus}}),ne)((function(e){var t=e.changePostStatus,a=e.setPostChangeStatusToNone,n=e.addPost,c=H.a().shape({title:H.b().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").min(3,"\u041d\u0435 \u043c\u0435\u043d\u0435\u0435 3 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),description:H.b().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").min(10,"\u041d\u0435 \u043c\u0435\u043d\u0435\u0435 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),body:H.b().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").min(20,"\u041d\u0435 \u043c\u0435\u043d\u0435\u0435 20 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")});return"success"===t?r.a.createElement("main",{className:"container post-card padding-top"},r.a.createElement("p",{className:"margin-right"},"\u041f\u043e\u0441\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d"),r.a.createElement("br",null),r.a.createElement(E.b,{onClick:function(){return a()},to:"/"},"ok")):r.a.createElement(V.d,{initialValues:{title:"",description:"",body:"",tagList:[]},validationSchema:c,onSubmit:function(e){n(e)},render:function(e){var a=e.values,n=e.handleChange,c=e.errors,s=e.handleBlur,l=e.touched;return r.a.createElement(V.c,{className:"form"},r.a.createElement("div",{className:"margin-bottom"},r.a.createElement(F.a,{placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",name:"title",value:a.title,onChange:n,onBlur:s}),c.title&&l.title&&r.a.createElement("div",{className:"red s-size"},c.title)),r.a.createElement("div",{className:"margin-bottom"},r.a.createElement(F.a,{placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",name:"description",value:a.description,onChange:n,onBlur:s}),c.description&&l.description&&r.a.createElement("div",{className:"red s-size"},c.description)),r.a.createElement("div",{className:"margin-bottom"},r.a.createElement(F.a.TextArea,{placeholder:"\u0422\u0435\u043a\u0441\u0442",name:"body",value:a.body,onChange:n,onBlur:s}),c.body&&l.body&&r.a.createElement("div",{className:"red s-size"},c.body)),r.a.createElement(V.b,{placeholder:"\u041c\u0435\u0442\u043a\u0438",name:"tagList",render:function(e){return r.a.createElement("div",null,a.tagList&&a.tagList.length>0?a.tagList.map((function(t,a){return r.a.createElement("div",{key:Math.random(100)},r.a.createElement(V.a,{className:"input margin-bottom m-right-gap",name:"tagList.".concat(a)}),r.a.createElement(q.a,{type:"button",className:"m-right-gap",danger:!0,onClick:function(){return e.remove(a)}},"-"),r.a.createElement(q.a,{type:"button",onClick:function(){return e.insert(a,"")}},"+"))})):r.a.createElement(q.a,{className:"margin-bottom",type:"primary",onClick:function(){return e.push("")}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0435\u0433"),r.a.createElement("div",null,r.a.createElement(q.a,{className:"margin-right",disabled:"sended"===t,type:"primary",htmlType:"submit"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),"sended"===t&&r.a.createElement(f.a,{className:"margin-right"})))}}))}})})),ce=a(206),se={editPost:function(e,t){return function(){var a=Object(C.a)(_.a.mark((function a(n){var r;return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n({type:"POST_CHANGE_REQUESTED"});try{r={method:"Put",data:{article:e},url:"https://conduit.productionready.io/api/articles/".concat(t)},R()(r).then((function(e){return 200===e.status?n({type:"POST_CHANGE_SUCCESS"}):n({type:"POST_CHANGE_FAILURE"})}))}catch(c){n({type:"POST_CHANGE_FAILURE"})}case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},setPostChangeStatusToNone:w},le=function(e){var t=H.a().shape({title:H.b().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").min(3,"\u041d\u0435 \u043c\u0435\u043d\u0435\u0435 3 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),description:H.b().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").min(10,"\u041d\u0435 \u043c\u0435\u043d\u0435\u0435 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),body:H.b().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").min(20,"\u041d\u0435 \u043c\u0435\u043d\u0435\u0435 20 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}),a=e.changePostStatus,n=e.setPostChangeStatusToNone,c=e.editPost,s=e.article,l=e.slug;return"success"===a?r.a.createElement("main",{className:"container post-card padding-top"},r.a.createElement("p",{className:"margin-right"},"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b"),r.a.createElement("br",null),r.a.createElement(E.b,{onClick:function(){return n()},to:"/"},"ok")):r.a.createElement(V.d,{initialValues:{title:s.title,description:s.description,body:s.body,tagList:Object(ce.a)(s.tagList)},validationSchema:t,onSubmit:function(e){c(e,l)},render:function(e){var t=e.values,n=e.handleChange,c=e.errors,s=e.handleBlur,l=e.touched;return r.a.createElement(V.c,{className:"form"},r.a.createElement("div",{className:"margin-bottom"},r.a.createElement(F.a,{placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",name:"title",value:t.title,onChange:n,onBlur:s}),c.title&&l.title&&r.a.createElement("div",{className:"red s-size"},c.title)),r.a.createElement("div",{className:"margin-bottom"},r.a.createElement(F.a,{placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",name:"description",value:t.description,onChange:n,onBlur:s}),c.description&&l.description&&r.a.createElement("div",{className:"red s-size"},c.description)),r.a.createElement("div",{className:"margin-bottom"},r.a.createElement(F.a.TextArea,{placeholder:"\u0422\u0435\u043a\u0441\u0442",name:"body",value:t.body,onChange:n,onBlur:s}),c.body&&l.body&&r.a.createElement("div",{className:"red s-size"},c.body)),r.a.createElement("div",{className:"margin-bottom"},r.a.createElement(V.b,{placeholder:"\u041c\u0435\u0442\u043a\u0438",name:"tagList",render:function(e){return r.a.createElement("div",null,t.tagList&&t.tagList.length>0?t.tagList.map((function(t,a){return r.a.createElement("div",{key:Math.random(100)},r.a.createElement(V.a,{className:"input margin-bottom m-right-gap",name:"tagList[".concat(a,"]")}),r.a.createElement(q.a,{type:"button",className:"m-right-gap",danger:!0,onClick:function(){return e.remove(a)}},"-"),r.a.createElement(q.a,{type:"button",onClick:function(){return e.insert(a,"")}},"+"))})):r.a.createElement(q.a,{className:"margin-bottom",type:"primary",onClick:function(){return e.push("")}},"Add a friend"),r.a.createElement("div",null,r.a.createElement(q.a,{className:"margin-right",disabled:"sended"===a,type:"primary",htmlType:"submit"},"Submit"),"sended"===a&&r.a.createElement(f.a,{className:"margin-right"})))}})))}})};le.defaultProps={article:null};var oe=Object(l.b)((function(e){return{changePostStatus:e.changePostStatus,article:e.article,slug:e.slug}}),se)(le),ie={authenticateWithToken:function(){return function(){var e=Object(C.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"REQUEST_SEND"}),e.prev=1,e.next=4,R.a.get("https://conduit.productionready.io/api/user");case 4:a=e.sent,localStorage.setItem("token",a.data.user.token),t({type:"REQUEST_SUCCESS"}),t(U(!1)),e.next=16;break;case 10:throw e.prev=10,e.t0=e.catch(1),localStorage.clear(),t(U(!0)),t({type:"REQUEST_FAILURE"}),e.t0;case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()}},ue=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){var t=e.props.authenticateWithToken;localStorage.getItem("token")&&t()},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.slug,a=e.isAuth;return r.a.createElement("div",{className:"wrapper"},r.a.createElement(E.a,{basename:"/blog"},r.a.createElement(ee,null),r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",component:D}),r.a.createElement(g.b,{exact:!0,path:"/articles/".concat(t),component:X}),r.a.createElement(g.b,{path:"/signup",component:J}),r.a.createElement(g.b,{path:"/login",render:function(){return a?r.a.createElement(g.a,{to:"/"}):r.a.createElement(z,null)}}),r.a.createElement(g.b,{path:"/add",render:function(){return a?r.a.createElement(re,null):r.a.createElement(g.a,{to:"/Login"})}}),r.a.createElement(g.b,{path:"/articles/".concat(t,"/edit"),component:oe})),r.a.createElement(ae,null)))}}]),a}(r.a.Component);ue.defaultProps={slug:null};var me=Object(l.b)((function(e){return{isAuth:e.isAuth,slug:e.slug}}),ie)(ue);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=Object(o.c)({requestStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"none",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_SEND":return"requested";case"REQUEST_SUCCESS":return"success";case"REQUEST_FAILURE":return"failure";default:return e}},articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"SET_ARTICLES"===t.type?t.payload.articles:"SET_FAVORITED"===t.type||"DELETE_FAVORITED"===t.type?e.map((function(e){return e.slug===t.payload.article.slug?t.payload.article:e})):"SET_FILTERED_ARTICLES"===t.type?e.filter((function(e){return e.tagList.includes(t.payload.tag)})):e},article:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"SET_ARTICLE"===t.type?t.payload.article:"DELETE_ARTICLE"===t.type?null:"SET_FAVORITED"===t.type||"DELETE_FAVORITED"===t.type?t.payload.article:e},favoriteRequestsStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"none",t=arguments.length>1?arguments[1]:void 0;return"FAVORITE_REQUESTED"===t.type?"requested":"FAVORITE_SUCCESS"===t.type?"success":"FAVORITE_FAILURE"===t.type?"failure":e},errorMsg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;if("ADD_ERROR_MESSAGE"===t.type){var a=t.payload.err,n=a.email,r=a.username,c=a.password;return{email:n,username:r,password:c,emailOrPassword:"Email or password is invalid"}}return e},isAuth:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"SET_AUTH"===t.type?!t.payload.auth:e},slug:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"SET_SLUG"===t.type?t.payload.slug:e},changePostStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"none",t=arguments.length>1?arguments[1]:void 0;return"POST_CHANGE_REQUESTED"===t.type?"sended":"POST_CHANGE_SUCCESS"===t.type?"success":"POST_CHANGE_FAILURE"===t.type?"failure":"SET_POSTCHANGE_STATUS_TO_NONE"===t.type?"none":e}}),pe=Object(o.e)(de,Object(o.d)(Object(o.a)(i.a)));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:pe},r.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[209,1,2]]]);
//# sourceMappingURL=main.d8c96191.chunk.js.map