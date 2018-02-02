//Resizing add-in part
//http://blog.ch.atosconsulting.com/resizing-app-parts-with-postmessage-in-sharepoint-2013/
//https://dev.office.com/sharepoint/docs/sp-add-ins/create-add-in-parts-to-install-with-your-sharepoint-add-in
import * as $ from "jquery";

export class Util
{
    static getTestData()
    {
        const siteData: Array<any> = [
            {name:"Site Name 1", company: "ABC Company", location: "Seattle, WA", status:"Archived", client: "John Doe", date: "Sat, 01 Aug 2015 14:38:41 GMT", url: "http://google.com"},
            {name:"Repellat natus magnam nam", company: "Loading...", location: "Loading...", status:"Inactive", client: "", date: "Sun, 02 Aug 2015 14:38:41 GMT"},
            {name:"Suscipit deleniti dolorem", company: "Loading...", location: "Loading...", status:"Active", client: "", date: "Mon, 03 Aug 2015 14:38:41 GMT"},
            {name:"Dolore aut quos facilis asperiores", company: "Loading...", location: "Loading...", status:"Active", client: "", date: "Tue, 04 Aug 2015 14:38:41 GMT"},
            {name:"Ad numquam ea, tempore", company: "Loading...", location: "Loading...", status:"Inactive", client: "Active", date: "Tue, 04 Aug 2015 14:38:41 GMT"},
            {name:"Fios de id ex", company: "Loading...", location: "Loading...", status:"Inactive", client: "", date: "Tue, 04 Aug 2015 14:38:41 GMT"},
            {name:"Similique repellat quidem", company: "Loading...", location: "Loading...", status:"Active", client: "", date: "Tue, 04 Aug 2015 14:38:41 GMT"},
            {name:"Quos id ex quo", company: "Loading...", location: "Loading...", status:"Inactive", client: "", date: "Tue, 04 Aug 2015 14:38:41 GMT"},
            {name:"Lique quidem repellat", company: "Loading...", location: "Loading...", status:"Active", client: "", date: "Tue, 04 Aug 2015 14:38:41 GMT"},
            {name:"Nobis quia", company: "Loading...", location: "Loading...", status:"Archived", client: "", date: "Wed, 05 Aug 2015 14:38:41 GMT"},
            {name:"Lique quidem repellat", company: "Loading...", location: "Loading...", status:"Active", client: "", date: "Tue, 04 Aug 2015 14:38:41 GMT"},
            {name:"Nobis quia", company: "Loading...", location: "Loading...", status:"Archived", client: "", date: "Wed, 05 Aug 2015 14:38:41 GMT"},
            {name:"Quos id ex quo", company: "Loading...", location: "Loading...", status:"Inactive", client: "", date: "Tue, 04 Aug 2015 14:38:41 GMT"},
            {name:"Lique quidem repellat", company: "Loading...", location: "Loading...", status:"Active", client: "", date: "Tue, 04 Aug 2015 14:38:41 GMT"},
            {name:"Nobis quia", company: "Loading...", location: "Loading...", status:"Archived", client: "", date: "Wed, 05 Aug 2015 14:38:41 GMT"},
            {name:"Lique quidem repellat", company: "Loading...", location: "Loading...", status:"Active", client: "", date: "Tue, 04 Aug 2015 14:38:41 GMT"},
            {name:"Nobis quia", company: "Loading...", location: "Loading...", status:"Archived", client: "", date: "Wed, 05 Aug 2015 14:38:41 GMT"},
            {name:"Chuck Nobis quia", company: "Here, Inc.", location: "Loading...", status:"Archived", client: "", date: "Wed, 05 Aug 2017 14:38:41 GMT"}
        ];

        return siteData;
    }

    static getQueryStringParameter(paramToRetrieve:string):string {
        var params: Array<String>;
        var strParams;
        params = (document.URL.indexOf("?") !== -1)?document.URL.split("?")[1].split("&"):[];
        strParams = "";

        for (var i = 0; i < params.length; i = i + 1) {
            var singleParam = params[i].split("=");
            if (singleParam[0] == paramToRetrieve)
                return decodeURIComponent(singleParam[1]);
        }
    }
    
    static resizeIframe () {
        let w="100%";
        
        let h=Math.round($("#MillimanMyWork").height()+50);
        let senderId=Util.getQueryStringParameter("SenderId");
        let postmessage=`<Message senderId=${senderId}>resize(${w},${h})</Message>`;
        console.log(postmessage);
        window.parent.postMessage(postmessage,Util.getQueryStringParameter("SPHostUrl"));
        //window.parent.postMessage("<message senderId=" + this.getQueryStringParameter("SenderId") + ">resize(" + w + "," + h + ")</message>", "*");
    }

}