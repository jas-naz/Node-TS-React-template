import * as React from "react";
import * as ReactDOM from "react-dom";
import "./css/styles.less";

import { Leadership } from "./components/leadership"
// import { Util } from "./components/utilities"
// import { Sites } from "./components/sites";

const devData: Array<any> = [
    // Empty for placeholders
    {name: "Loading...", company: "Loading...", location: "Loading...", status:"", client: "", date: "05 Jan 1970 14:38:41 GMT"}, 
    {name: "Loading...", company: "Loading...", location: "Loading...", status:"", client: "", date: "05 Jan 1970 14:38:41 GMT"}, 
    {name: "Loading...", company: "Loading...", location: "Loading...", status:"", client: "", date: "05 Jan 1970 14:38:41 GMT"}, 
    {name: "Loading...", company: "Loading...", location: "Loading...", status:"", client: "", date: "05 Jan 1970 14:38:41 GMT"}, 
    {name: "Loading...", company: "Loading...", location: "Loading...", status:"", client: "", date: "05 Jan 1970 14:38:41 GMT"}
];

let data: Array<any>=[];

const DEV = true;
if (DEV) {//
    data = devData;
    console.log("in DEV mode");
}
// if (!tabs[0]) {
//     tabs = [{label: "No Tabs", items:[], filterOptions:["cs1|","cs2|","cs3|"], activeFilters:[], active:true}];
// }
// tabs[0].active = true;
{/*  */}
ReactDOM.render(
    <Leadership data={data} DEV={DEV} />,
    document.getElementById("MillimanLeadershipAddin")
);