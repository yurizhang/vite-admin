import"./common.006007ed.js";import{r as n,b as u,R as e,C as m,B as p,n as E,f}from"./vendor.d6654728.js";function d(){const[l,a]=n.exports.useState(0),[c,r]=n.exports.useState({}),o=n.exports.useRef(),i=()=>{a(t=>t+1),s("success")};o.current||(o.current=l),n.exports.useEffect(()=>{u.get("/users/query").then(t=>{console.log(t.data),r(t.data)})},[]);const s=t=>{E[t]({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification."})};return e.createElement("div",{className:"App"},e.createElement(m,{autoplay:!0},e.createElement("div",null,e.createElement("h3",null,"1")),e.createElement("div",null,e.createElement("h3",null,"2")),e.createElement("div",null,e.createElement("h3",null,"3")),e.createElement("div",null,e.createElement("h3",null,"4"))),e.createElement("p",null,"\u8FD9\u662F\u4E00\u4E2Ainfo.html\u9875\u9762 ",o.current),e.createElement("p",null,e.createElement(p,{type:"primary",onClick:i},"count is: ",l)),e.createElement("p",null,c.email))}f.render(e.createElement(e.StrictMode,null,e.createElement(d,null)),document.getElementById("root"));