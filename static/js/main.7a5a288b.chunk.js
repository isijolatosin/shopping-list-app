(this["webpackJsonpshopping-list-app"]=this["webpackJsonpshopping-list-app"]||[]).push([[0],{109:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},113:function(e,t,c){"use strict";c.r(t);var a=c(3),i=c.n(a),n=c(23),s=c.n(n),r=(c(68),c(13)),o=(c(69),c(14)),l=c(10),d=(c(70),c(37)),j=(c(48),c(2));var h=function(){return Object(j.jsx)("div",{className:"Banner2",children:Object(j.jsxs)(d.Carousel,{autoPlay:!0,infiniteLoop:!0,showStatus:!1,showIndicators:!1,showThumbs:!1,interval:5e3,children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"banner_gradient",loading:"lazy",src:"https://links.papareact.com/gi1",alt:""})}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"banner_gradient",loading:"lazy",src:"https://links.papareact.com/6ff",alt:""})}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"banner_gradient",loading:"lazy",src:"https://links.papareact.com/7ma",alt:""})})]})})},u=(c(80),c(9)),p=c(26),b=c(38),m={items:[],historyBasket:[],user:"".concat(JSON.parse(localStorage.getItem("user")))},g=Object(b.b)({name:"basket",initialState:m,reducers:{addToBasket:function(e,t){e.items=[].concat(Object(p.a)(e.items),[t.payload])},addToHistoryBasket:function(e,t){e.historyBasket=[].concat(Object(p.a)(e.historyBasket),[t.payload])},loggedIn:function(e,t){e.user=t.payload},loggedOut:function(e){e.user=""},removeFromBasket:function(e,t){var c=e.items.findIndex((function(e){return e.id===t.payload})),a=Object(p.a)(e.items);c>=0?a.splice(c,1):console.warn("Can not remove product (is: ".concat(t.payload,") as it is not in the basket")),e.items=a}}}),O=g.actions,x=O.addToBasket,f=(O.addToHistoryBasket,O.removeFromBasket),v=O.loggedIn,y=O.loggedOut,N=function(e){return e.basket.items},_=function(e){return e.basket.user},k=g.reducer;var S=function(){var e=Object(u.c)(_);return Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)(h,{}),Object(j.jsxs)("div",{className:"bottom_container",children:[Object(j.jsx)("h1",{children:"It\u2019s never too early to prepare your retail customer experience for holiday shoppers."}),Object(j.jsx)("h3",{children:"find your ecomm landing page inspiration from your creative ability within..."}),Object(j.jsx)(o.b,{to:e?"/product-page":"/login",children:Object(j.jsx)("button",{className:"explore_button",children:"Explore Products Here"})})]})]})};c(83);var C=function(e){var t=i.a.useState(""),c=Object(r.a)(t,2),a=c[0],n=c[1],s=Object(u.b)();return Object(j.jsxs)("div",{className:"login",children:[Object(j.jsx)("h1",{className:"login_header",children:"Login"}),Object(j.jsxs)("div",{className:"input_container",children:[Object(j.jsx)("span",{children:"Email:"}),Object(j.jsx)("input",{className:"input",onChange:function(e){return n(e.target.value)},type:"text",value:a,placeholder:"Enter your Email Address..."})]}),Object(j.jsx)(o.b,{onClick:function(){localStorage.setItem("user",JSON.stringify(a)),0!==a.length&&(s(v(a)),n(""))},to:0!==a.length&&"/",children:Object(j.jsx)("button",{className:"submit_button",children:"Submit"})})]})},w=c(57),B=c(31),I=c(30),H=I.a.apps.length?I.a.app():I.a.initializeApp({apiKey:"AIzaSyCE0lH68NQDweB6haeEUih9hTPkqnzcXHQ",authDomain:"shopping-list-app-a2d29.firebaseapp.com",projectId:"shopping-list-app-a2d29",storageBucket:"shopping-list-app-a2d29.appspot.com",messagingSenderId:"127664412728",appId:"1:127664412728:web:8f1556e52dba7e26e52ecd",measurementId:"G-37Q8XYV8XY"}),P=I.a.firestore.FieldValue.serverTimestamp,E=H.firestore();var T=function(){var e=i.a.useState(!0),t=Object(r.a)(e,2),c=t[0],a=t[1],n=i.a.useState(!1),s=Object(r.a)(n,2),o=s[0],l=s[1],d=Object(u.c)(_),h=i.a.useState([]),b=Object(r.a)(h,2),m=b[0],g=b[1],O=i.a.useState(!1),x=Object(r.a)(O,2),f=x[0],v=x[1],y=i.a.useState({header:[],data:[],id:""}),N=Object(r.a)(y,2),k=N[0],S=N[1],C=i.a.useState(""),I=Object(r.a)(C,2),H=I[0],P=I[1],T=function(e){e.preventDefault();var t=Object(B.a)(Object(B.a)({},k),{},{data:Object(p.a)(k.data)}),c=t.data.filter((function(e){return e.category===H.toLowerCase()||e.price.toString()===H||e.title===H?e:null}));S({header:t.header,data:c}),P(""),a(!0)},A=function(e){var t=[];return null!==e&&Object.keys(e.data).forEach((function(e){t.push(e)})),t.sort()};return i.a.useEffect((function(){d&&E.collection("histories").doc("".concat(d,"/")).collection("shopping-history").orderBy("timestamp","asc").onSnapshot((function(e){var t=e.docs.map((function(e){return{data:e.data()}}));t&&(g(t),function(e){var t,c=e[0],a=[],i=Object(w.a)(e);try{for(i.s();!(t=i.n()).done;){var n=t.value;null!==n&&a.push({category:n.data.category,description:n.data.description,hasPrime:"".concat(n.data.hasPrime?"Has Prime":"No Prime Status"),id:n.data.id,image:n.data.image,price:n.data.price,timestamp:"".concat(n.data.timestamp.toDate().toDateString(),", ").concat(n.data.timestamp.toDate().toLocaleString([],{hour:"2-digit",minute:"2-digit",hour12:!1},"en-GB")),title:n.data.title})}}catch(s){i.e(s)}finally{i.f()}null!==e&&S({header:A(c),data:a})}(t))}))}),[d]),Object(j.jsxs)("div",{style:{position:"relative"},children:[Object(j.jsx)("h1",{style:{padding:5,color:"gray"},children:1===m.length?"".concat(m.length," Total History"):m.length>1?"".concat(m.length," Total Histories"):0===m.length?"You Have No Recorded History Yet":null}),Object(j.jsxs)("form",{onSubmit:T,style:{marginTop:20,marginBottom:20,backgroundColor:"whitesmoke",padding:10,display:"flex"},children:[Object(j.jsx)("input",{style:{padding:5,border:"none",backgroundColor:"lightgray",borderRadius:3,marginRight:10,outline:"none",flex:1},type:"text",value:H,onChange:function(e){e.preventDefault(),P(e.target.value),a(!1)},placeholder:"Search by Category, Price or Title..."}),Object(j.jsx)("input",{disabled:c,style:{border:"none",paddingTop:5,paddingBottom:5,paddingLeft:15,paddingRight:15,borderRadius:3,marginLeft:30,marginRight:20},type:"submit",onClick:T})]}),o&&Object(j.jsx)("span",{style:{textAlign:"center",fontSize:18,color:"gray",textTransform:"uppercase",backgroundColor:"rgba(0,0,0,0.8)",padding:10,position:"absolute",right:600,top:300},children:"Click header cells to sort columns"}),Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{onMouseOver:function(){return l(!0)},onMouseLeave:function(){return l(!1)},children:Object(j.jsx)("tr",{style:{backgroundColor:"blue",color:"white",padding:"10px"},children:k.header.map((function(e,t){return Object(j.jsx)("th",{onClick:function(){return function(e){var t=Object(B.a)(Object(B.a)({},k),{},{data:Object(p.a)(k.data)});!1===f?(t.data.sort((function(t,c){var a=t[e],i=c[e];return a<i?-1:a>i?1:0})),S(t),v(!0)):(t.data.sort((function(t,c){var a=t[e],i=c[e];return a>i?-1:a<i?1:0})),S(t),v(!1))}(e)},style:{padding:"10px"},children:e},t)}))})}),Object(j.jsx)("tbody",{children:k.data.map((function(e,t){return Object(j.jsx)("tr",{style:{backgroundColor:"lightgrey"},children:Object.values(e).map((function(e,t){return Object(j.jsx)("td",{style:{padding:10},children:e},t)}))},t)}))})]})]})},A=(c(88),c(28)),D=c.n(A);var L=function(e){var t=e.item,c=Object(u.b)();return Object(j.jsxs)("div",{className:"checkout_container",children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"checkout_image",src:t.image,alt:"Selected-item"})}),Object(j.jsxs)("div",{className:"checkout_info",children:[Object(j.jsx)("span",{children:t.category}),Object(j.jsx)("h5",{children:t.title}),Object(j.jsx)("span",{className:"checkout_description",children:t.description}),t.hasPrime&&Object(j.jsxs)("div",{className:"product_del",children:[Object(j.jsx)("img",{className:"product_del_image",src:"https://links.papareact.com/fdw",alt:""}),Object(j.jsx)("p",{className:"product_del_text",children:"FREE Next-day Delivery"})]}),Object(j.jsxs)("p",{className:"products_price",children:["CA",Object(j.jsx)(D.a,{quantity:t.price,currency:"CAD"})]}),Object(j.jsx)("button",{onClick:function(){var e={id:t.id,title:t.title,price:t.price,description:t.description,category:t.category,image:t.image,hasPrime:t.hasPrime};c(x(e))},children:"Add More"}),Object(j.jsx)("button",{onClick:function(){c(f(t.id))},children:"Remove"})]})]})};c(89);var z=function(){var e=Object(u.c)(N),t=Object(u.c)(_),c=i.a.useState([]),a=Object(r.a)(c,2),n=(a[0],a[1]);i.a.useEffect((function(){t&&E.collection("checkout").doc("".concat(t,"/")).collection("shopping-history").orderBy("timestamp","asc").onSnapshot((function(e){var t=e.docs.map((function(e){return{data:e.data()}}));t&&n(t)}))}),[t]);var s=e.reduce((function(e,t){return e+t.price}),0);return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"top_wrapper",children:[Object(j.jsxs)("h3",{className:"user",children:["Hi ",t]}),Object(j.jsx)("h2",{className:"container_header",children:e.length<=1?"You Have ".concat(e.length," item in Your Cart"):e.length>1?"You Have ".concat(e.length," items in Your Cart"):null})]}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"items_container",children:e.map((function(e){return Object(j.jsx)(L,{item:e},e.id)}))}),Object(j.jsxs)("div",{className:"proceed_container",children:[Object(j.jsx)(o.b,{to:"/shopping-history",children:Object(j.jsx)("button",{className:"button",children:"Proceed to Your Shopping History"})}),Object(j.jsxs)("span",{children:["Your Subtotal is:"," ",Object(j.jsxs)("span",{className:"currency",children:["CA",Object(j.jsx)(D.a,{quantity:s,currency:"CAD"})]})]})]})]})]})},Y=(c(90),c(58)),F=c.n(Y),M=c(59),R=c.n(M);var J=function(){var e=Object(u.c)(N),t=Object(u.c)(_),c=Object(u.b)();return Object(j.jsxs)("nav",{className:"header",children:[Object(j.jsx)(o.b,{className:"header_link",to:"/",children:Object(j.jsx)("img",{className:"header_img",src:"",alt:"company-logo"})}),Object(j.jsxs)("div",{className:"header_search",children:[Object(j.jsx)("input",{placeholder:"Search Component not Active. It is Just for User Interface",type:"text",className:"header_searchInput"}),Object(j.jsx)(F.a,{className:"header_searchIcon"})]}),Object(j.jsxs)("div",{className:"header_info",children:[t?Object(j.jsx)(o.b,{to:"/",onClick:function(){c(y())},className:"header_link",children:Object(j.jsxs)("div",{className:"header_signin_option",children:[Object(j.jsx)("div",{children:Object(j.jsxs)("span",{children:["Hello ",t]})}),Object(j.jsx)("div",{className:"header_text_bold",children:Object(j.jsx)("span",{children:"Account & Lists"})})]})}):Object(j.jsx)(o.b,{to:"/login",className:"header_link",children:Object(j.jsxs)("div",{className:"header_signin_option",children:[Object(j.jsx)("div",{children:Object(j.jsx)("span",{children:"Hello, Sign In"})}),Object(j.jsx)("div",{className:"header_text_bold",children:Object(j.jsx)("span",{children:"Account & Lists"})})]})}),Object(j.jsx)(o.b,{onClick:function(){t||alert("Please Sign In to View Hostory!")},to:t?"/shopping-history":"/",className:"header_link",children:Object(j.jsxs)("div",{className:"header_history",children:[Object(j.jsx)("span",{children:"Shopping"}),Object(j.jsx)("span",{className:"header_text_bold",children:"Histories"})]})}),Object(j.jsx)(o.b,{to:"/cart",className:"header_link",children:Object(j.jsxs)("div",{className:"header_basket",children:[Object(j.jsx)(R.a,{fontSize:"large"}),Object(j.jsxs)("div",{className:"count",children:[Object(j.jsx)("span",{className:"header_item_count",children:e.length}),Object(j.jsx)("span",{children:"Basket"})]})]})})]})]})},q=c(60),Q=c.n(q);c(109);var U=function(){return Object(j.jsx)("div",{className:"Banner",children:Object(j.jsxs)(d.Carousel,{autoPlay:!0,infiniteLoop:!0,showStatus:!1,showIndicators:!1,showThumbs:!1,interval:5e3,children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"banner_gradient",loading:"lazy",src:"https://links.papareact.com/gi1",alt:""})}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"banner_gradient",loading:"lazy",src:"https://links.papareact.com/6ff",alt:""})}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"banner_gradient",loading:"lazy",src:"https://links.papareact.com/7ma",alt:""})})]})})},V=c(62),X=c.n(V),G=(c(110),c(61)),K=c.n(G);var W=function(e){var t,c,a=e.id,n=e.title,s=e.price,o=e.image,l=e.category,d=e.description,h=Object(u.c)(_),p=i.a.useState(!1),b=Object(r.a)(p,2),m=b[0],g=b[1],O=Object(u.b)(),f=i.a.useState(Math.floor(5*Math.random()+1)),v=Object(r.a)(f,1)[0],y=i.a.useState(Math.random()<.5),N=Object(r.a)(y,1)[0];return Object(j.jsxs)("div",{onMouseOver:function(){return g(!0)},onMouseLeave:function(){return g(!1)},className:"products",children:[Object(j.jsx)("p",{className:"products_category",children:l}),Object(j.jsx)("div",{className:"products_rate",children:Array(v).fill().map((function(e,t){return Object(j.jsx)(K.a,{})}))}),Object(j.jsx)("img",{className:"product_image",src:o,alt:"product_picture",height:250,width:250}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"products_description",children:(t=d,c=60,t.length>c?t.substring(0,c)+"...":t)}),Object(j.jsxs)("p",{className:"products_price",children:["CA",Object(j.jsx)(D.a,{quantity:s,currency:"CAD"})]}),N&&Object(j.jsxs)("div",{className:"product_del",children:[Object(j.jsx)("img",{className:"product_del_image",src:"https://links.papareact.com/fdw",alt:""}),Object(j.jsx)("p",{className:"product_del_text",children:"FREE Next-day Delivery"})]})]}),m&&Object(j.jsx)("div",{className:"product_title",children:Object(j.jsx)("h4",{className:"product_title_text",children:n})}),Object(j.jsx)("button",{onClick:function(){O(x({id:a,title:n,price:s,description:d,category:l,image:o,hasPrime:N})),E.collection("histories").doc("".concat(h,"/")).collection("shopping-history").add({id:a,title:n,price:s,description:d,category:l,image:o,hasPrime:N,timestamp:P()},{merge:!0}).then((function(){console.log("SUCCESS: item ".concat(h," had been added to the DB"))})).catch((function(e){return console.log("Error"+e.message)}))},className:"product_btn",children:Object(j.jsx)(X.a,{className:"text-white"})})]})};c(111);var Z=function(e){var t=e.products;return Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)(U,{}),Object(j.jsx)("div",{className:"home_row",children:t.slice(0,3).map((function(e){var t=e.id,c=e.title,a=e.price,i=e.description,n=e.category,s=e.image;return Object(j.jsx)(W,{id:t,title:c,price:a,description:i,category:n,image:s},t)}))}),Object(j.jsx)("div",{className:"home_row",children:t.slice(3,6).map((function(e){var t=e.id,c=e.title,a=e.price,i=e.description,n=e.category,s=e.image;return Object(j.jsx)(W,{id:t,title:c,price:a,description:i,category:n,image:s},t)}))}),Object(j.jsx)("div",{className:"home_row",children:t.slice(6,9).map((function(e){var t=e.id,c=e.title,a=e.price,i=e.description,n=e.category,s=e.image;return Object(j.jsx)(W,{id:t,title:c,price:a,description:i,category:n,image:s},t)}))}),Object(j.jsx)("div",{className:"home_row",children:t.slice(8,12).map((function(e){var t=e.id,c=e.title,a=e.price,i=e.description,n=e.category,s=e.image;return Object(j.jsx)(W,{id:t,title:c,price:a,description:i,category:n,image:s},t)}))}),Object(j.jsx)("div",{className:"home_row",children:t.slice(12,15).map((function(e){var t=e.id,c=e.title,a=e.price,i=e.description,n=e.category,s=e.image;return Object(j.jsx)(W,{id:t,title:c,price:a,description:i,category:n,image:s},t)}))}),Object(j.jsx)("div",{className:"home_row",children:t.slice(15,18).map((function(e){var t=e.id,c=e.title,a=e.price,i=e.description,n=e.category,s=e.image;return Object(j.jsx)(W,{id:t,title:c,price:a,description:i,category:n,image:s},t)}))}),Object(j.jsx)("div",{className:"home_row",children:t.slice(18,t.length).map((function(e){var t=e.id,c=e.title,a=e.price,i=e.description,n=e.category,s=e.image;return Object(j.jsx)(W,{id:t,title:c,price:a,description:i,category:n,image:s},t)}))})]})};var $=function(){var e=i.a.useState([]),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(u.c)(_);return i.a.useEffect((function(){Q.a.get("https://fakestoreapi.com/products?sort=desc").then((function(e){return e.data})).catch((function(e){return console.log(e.message)})).then((function(e){return a(e)}))}),[]),Object(j.jsx)(o.a,{children:Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(J,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/cart",children:Object(j.jsx)(z,{})}),Object(j.jsx)(l.a,{path:"/shopping-history",children:Object(j.jsx)(T,{})}),n?Object(j.jsx)(l.a,{path:"/product-page",children:Object(j.jsx)(Z,{products:c})}):Object(j.jsx)(l.a,{path:"/login",children:Object(j.jsx)(C,{})}),Object(j.jsx)(l.a,{path:"/",children:Object(j.jsx)(S,{})})]})]})})},ee=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,125)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),a(e),i(e),n(e),s(e)}))},te=Object(b.a)({reducer:{basket:k}});s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(u.a,{store:te,children:Object(j.jsx)($,{})})}),document.getElementById("root")),ee()},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},80:function(e,t,c){},83:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){}},[[113,1,2]]]);
//# sourceMappingURL=main.7a5a288b.chunk.js.map