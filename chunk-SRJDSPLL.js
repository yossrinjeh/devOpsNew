import{a as _t}from"./chunk-7X7GLT7D.js";import{a as G,d as z,e as dt,g as lt,i as K,j as mt,n as pt,o as ht,p as ut,t as gt,u as ft}from"./chunk-6AOILKHN.js";import{a as k}from"./chunk-45VFKY7Y.js";import{a as Y}from"./chunk-EAQ7ETCC.js";import{a as at,b as rt,c as st,e as ct,m as R,o as tt}from"./chunk-NCDLYK7T.js";import{$ as nt,$a as w,$b as P,Aa as x,Bb as $,Cb as L,Db as j,Eb as a,Fb as r,Gb as m,Hb as C,I as et,Ib as M,Kb as V,Nb as y,Nc as J,Oc as q,Pb as u,Rc as ot,Xb as s,Yb as _,Zb as Q,_a as l,ac as I,bc as F,ga as D,ha as B,ja as b,ka as v,qa as O,ra as W,tb as S,vb as f,xb as it}from"./chunk-H2VV5PGB.js";var A=(()=>{let n=class n{constructor(t){this.http=t,this.URL="http://20.49.205.136:3000/attendance-tracking",this.httpOptions={headers:new at({"Content-type":"application/json"})}}create(t,e){return this.http.post(`${this.URL}/${t}`,e,this.httpOptions)}findAll(){return this.http.get(this.URL,this.httpOptions)}findOne(t){return this.http.get(`${this.URL}/${t}`,this.httpOptions)}update(t,e){return this.http.put(`${this.URL}/updateAttendance/${t}`,e,this.httpOptions)}updateUserAndAttendance(t,e){let i=`${this.URL}/updateUser/${t}`;return this.http.put(i,e)}remove(t){return this.http.delete(`${this.URL}/${t}`,this.httpOptions)}find(t){return this.http.get(`${this.URL}/getUser/${t}`,this.httpOptions)}updateAttendanceRecord(t,e){let i=`${this.URL}/${t}`;return this.http.put(i,e,this.httpOptions)}findAllUsers(){return this.http.get(`${this.URL}/users`,this.httpOptions).pipe(nt(t=>console.log("Response from findAllUsers():",t)),et(t=>{throw console.error("Error in findAllUsers():",t),t}))}findAllUsersWithAttendance(){return this.http.get(`${this.URL}/with-attendance`)}getAttendanceByUserIdAndDate(t,e){let i=`${this.URL}/${t}?date=${e}`;return this.http.get(i)}getUserIdByEmail(t){let e=`${this.URL}/getUserByEmail/${t}`;return this.http.get(e)}createAttendance(t,e){return this.http.post(`${this.URL}/create/${t}`,e,this.httpOptions)}getTotalHalfShiftDaysForUserInMonth(t,e){let i=new rt().set("month",e.toString());return this.http.get(`${this.URL}/total-half-shift-days/${t}`,{params:i})}};n.\u0275fac=function(e){return new(e||n)(x(st))},n.\u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"});let o=n;return o})();function wt(o,n){if(o&1&&(a(0,"th"),s(1),r()),o&2){let c=n.$implicit;l(),Q(" ",c," ")}}function Tt(o,n){if(o&1&&(C(0),S(1,wt,2,1,"th",22),M()),o&2){let c=n.$implicit;l(),f("ngForOf",c.days)}}function Pt(o,n){o&1&&(C(0),m(1,"span",11),M())}function It(o,n){o&1&&(C(0),m(1,"span",12),M())}function Ft(o,n){o&1&&(C(0),m(1,"span",13),M())}function Rt(o,n){o&1&&(C(0),m(1,"span",14),M())}function kt(o,n){o&1&&(C(0),m(1,"span",15),M())}function Ut(o,n){if(o&1&&(a(0,"td")(1,"div",24),S(2,Pt,2,0,"ng-container",25)(3,It,2,0,"ng-container",25)(4,Ft,2,0,"ng-container",25)(5,Rt,2,0,"ng-container",25)(6,kt,2,0,"ng-container",25),r()()),o&2){let c=n.$implicit,t=u().$implicit,e=u().$implicit,i=u();l(2),f("ngIf",i.isWeekend(c)),l(),f("ngIf",i.getStatusForDay(e,c,t.monthIndex)==="PRESENT"&&i.getShiftTypeForDay(e,c,t.monthIndex)==="FULL_DAY"&&!i.isWeekend(c)),l(),f("ngIf",i.getStatusForDay(e,c,t.monthIndex)==="PRESENT"&&i.getShiftTypeForDay(e,c,t.monthIndex)==="QUARTER_SHIFT"&&!i.isWeekend(c)),l(),f("ngIf",i.getStatusForDay(e,c,t.monthIndex)==="PRESENT"&&i.getShiftTypeForDay(e,c,t.monthIndex)==="HALF_DAY"&&!i.isWeekend(c)),l(),f("ngIf",i.getStatusForDay(e,c,t.monthIndex)==="ABSENT")}}function Nt(o,n){if(o&1&&(C(0),S(1,Ut,7,5,"td",22),M()),o&2){let c=n.$implicit;l(),f("ngForOf",c.days)}}function $t(o,n){if(o&1&&(C(0),a(1,"tr")(2,"td",23),s(3),r(),S(4,Nt,2,1,"ng-container",22),r(),M()),o&2){let c=n.$implicit,t=u();l(3),_(c.firstname),l(),f("ngForOf",t.monthData)}}var bt=(()=>{let n=class n{constructor(t){this.attendanceService=t,this.monthData=[],this.users=[],this.daysInMonth=[],this.currentMonthYear="",this.selectedDate=new Date}ngOnInit(){this.generateMonthData(this.selectedDate),this.attendanceService.findAllUsers().subscribe({next:t=>{console.log(t),this.users=t},error:t=>{console.error("There was an error!",t)}})}getStatusForDay(t,e,i){let d=t.attendanceRecord.filter(g=>{let h=new Date(g.date);return h.getMonth()===i&&h.getDate()===e});return d.length>0?d[0].status:""}isWeekend(t){let i=new Date(this.selectedDate.getFullYear(),this.selectedDate.getMonth(),t).getDay();return i===0||i===6}getShiftTypeForDay(t,e,i){let d=t.attendanceRecord.filter(g=>{let h=new Date(g.date);return h.getMonth()===i&&h.getDate()===e}),p=d.length>0?d[0].shiftType:"";return p!==""?p:null}generateMonthData(t){let e=t.getMonth(),i=t.getFullYear(),d=new Date(i,e+1,0).getDate();this.daysInMonth=Array.from({length:d},(h,N)=>N+1);let p=["January","February","March","April","May","June","July","August","September","October","November","December"];this.currentMonthYear=`${p[e]} ${i}`;let g={monthName:this.currentMonthYear,monthIndex:e,days:this.daysInMonth,users:this.users};this.monthData.push(g)}switchMonth(t){this.monthData=[],this.selectedDate.setMonth(this.selectedDate.getMonth()+t),this.generateMonthData(this.selectedDate)}};n.\u0275fac=function(e){return new(e||n)(w(A))},n.\u0275cmp=D({type:n,selectors:[["app-update-attendance"]],decls:48,vars:3,consts:[[1,"pcoded-main-container"],[1,"pcoded-wrapper"],[1,"pcoded-content"],[1,"container"],[1,"row"],[1,"col-md-12"],[1,"card","status-card"],[1,"card-body"],[1,"card-title"],[1,"status-legend","row"],[1,"col-md-2","legend-item"],[1,"holiday-icon","bi","bi-star-fill","text-warning"],[1,"far","fa-check-circle","text-success"],[1,"bi","bi-clock-history","text-dark"],[1,"fas","fa-adjust","col-orange"],[1,"far","fa-times-circle","text-danger"],[1,"calendar-container"],[1,"month-nav"],[1,"nav-button",3,"click"],[1,"bi","bi-arrow-left"],[1,"bi","bi-arrow-right"],[1,"calendar"],[4,"ngFor","ngForOf"],[1,"employee-column"],[1,"status-container"],[4,"ngIf"]],template:function(e,i){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h5",8),s(9,"Type icons :"),r(),a(10,"div",9)(11,"div",10),m(12,"span",11),a(13,"span"),s(14,"Weekend"),r()(),a(15,"div",10),m(16,"span",12),a(17,"span"),s(18,"Present - Full Day"),r()(),a(19,"div",10),m(20,"span",13),a(21,"span"),s(22,"Present - Quarter Shift"),r()(),a(23,"div",10),m(24,"span",14),a(25,"span"),s(26,"Present - Half Day"),r()(),a(27,"div",10),m(28,"span",15),a(29,"span"),s(30,"Absent"),r()()()()()()()(),a(31,"div",16)(32,"div",17)(33,"button",18),y("click",function(){return i.switchMonth(-1)}),m(34,"span",19),r(),a(35,"h2"),s(36),r(),a(37,"button",18),y("click",function(){return i.switchMonth(1)}),m(38,"span",20),r()(),a(39,"div",21)(40,"table")(41,"thead")(42,"tr")(43,"th"),s(44,"Name of Employee"),r(),S(45,Tt,2,1,"ng-container",22),r()(),a(46,"tbody"),S(47,$t,5,2,"ng-container",22),r()()()()()()()),e&2&&(l(36),_(i.currentMonthYear),l(9),f("ngForOf",i.monthData),l(2),f("ngForOf",i.users))},dependencies:[J,q],styles:["th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:1px solid #ccc;padding:8px;text-align:center}thead[_ngcontent-%COMP%]{background-color:#f2f2f2}tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}tr[_ngcontent-%COMP%]:hover{background-color:#ddd}.month-nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.nav-button[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;border:none;padding:10px 20px;border-radius:5px;cursor:pointer}.calendar[_ngcontent-%COMP%]{margin-top:20px}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:8px;text-align:center}.employee-column[_ngcontent-%COMP%]{font-weight:700}.status-container[_ngcontent-%COMP%]{display:flex;align-items:center}"]});let o=n;return o})();var T=function(o){return o.FULL_DAY="FULL_DAY",o.HALF_DAY="HALF_DAY",o.QUARTER_SHIFT="QUARTER_SHIFT",o}(T||{});var U=function(o){return o.PRESENT="PRESENT",o.ABSENT="ABSENT",o}(U||{});function jt(o,n){if(o&1&&(a(0,"th"),s(1),r()),o&2){let c=n.$implicit;l(),_(c)}}function Vt(o,n){if(o&1){let c=V();a(0,"td")(1,"div",12)(2,"button",13),y("click",function(){let i=b(c).$implicit,d=u().$implicit,p=u();return v(p.openModal(d,i))}),s(3," P "),r(),a(4,"div",14)(5,"div",15)(6,"div",16)(7,"div",17)(8,"h4",18),s(9,"Modal Heading"),r(),m(10,"button",19),r(),a(11,"p"),s(12,"Select Shift type please :"),r(),a(13,"div")(14,"input",20),y("change",function(){b(c);let e=u(2);return v(e.choose(0))}),r(),a(15,"label",21),s(16,"Half Day"),r()(),a(17,"div")(18,"input",22),y("change",function(){b(c);let e=u(2);return v(e.choose(1))}),r(),a(19,"label",23),s(20,"Quarter Day"),r()(),a(21,"div")(22,"input",24),y("change",function(){b(c);let e=u(2);return v(e.choose(2))}),r(),a(23,"label",25),s(24,"Full Day"),r()(),a(25,"div",26)(26,"button",27),s(27," Close "),r(),a(28,"button",28),y("click",function(){b(c);let e=u(2);return v(e.handleUpdate())}),s(29," Update "),r()()()()()(),m(30,"br"),a(31,"div",12)(32,"button",29),y("click",function(){let i=b(c).$implicit,d=u().$implicit,p=u();return v(p.openModal(d,i))}),s(33," A "),r(),a(34,"div",30)(35,"div",15)(36,"div",16)(37,"div",17)(38,"h4",18),s(39,"Modal Heading"),r(),m(40,"button",19),r(),a(41,"div",31)(42,"div",32)(43,"label",33),s(44,"Reason for Absence:"),r(),a(45,"input",34),F("ngModelChange",function(e){b(c);let i=u(2);return I(i.absenceReason,e)||(i.absenceReason=e),v(e)}),r()()(),a(46,"div",26)(47,"button",27),s(48," Close "),r(),a(49,"button",28),y("click",function(){b(c);let e=u(2);return v(e.updateAttendanceRecord())}),s(50," Update "),r()()()()()()()}if(o&2){let c=u(2);l(45),P("ngModel",c.absenceReason)}}function Yt(o,n){if(o&1&&(C(0),a(1,"tr")(2,"td",11),s(3),r(),L(4,Vt,51,1,"td",null,$),r(),M()),o&2){let c=n.$implicit,t=n.index,e=u();l(),it("even-row",t%2!==0),l(2),_(c.firstname),l(),j(e.daysInMonth)}}var vt=(()=>{let n=class n{choose(t){console.log(t),t==0?this.selectedDuration=T.HALF_DAY:t==1?this.selectedDuration=T.QUARTER_SHIFT:this.selectedDuration=T.FULL_DAY}constructor(t){this.attendanceService=t,this.monthData=[],this.users=[],this.daysInMonth=[],this.currentMonthYear="",this.selectedDate=new Date,this.absenceReason="",this.selectedDuration=T.HALF_DAY,this.isModalOpened=!1}ngOnInit(){this.generateMonthData(new Date),this.attendanceService.findAllUsers().subscribe({next:t=>{console.log(t),this.users=t},error:t=>{console.error("There was an error!",t)}})}openModal(t,e){console.log(t,e),this.user=t,this.day=e,this.isModalOpened=!0}handleUpdate(){console.log("User:",this.user),console.log("Day:",this.day);let t=this.selectedDate.getFullYear(),e=this.selectedDate.getMonth()+1,i=this.day<10?`0${this.day}`:this.day,d=`${t}-${e<10?"0":""}${e}-${i}`;this.attendanceService.getAttendanceByUserIdAndDate(this.user.id,d).subscribe(p=>{if(console.log(this.user.id),console.log(d),p){console.log(p.id);let g={date:d,absent_reason:null,shiftType:this.selectedDuration,status:U.PRESENT,userId:this.user.id};this.attendanceService.update(p.id,g).subscribe(h=>{console.log(this.user,"succesfully")},h=>{console.error("Error updating attendance record:",h)})}else{let g={date:d,shiftType:this.selectedDuration,status:U.PRESENT,absent_reason:null,userId:this.user.id};this.attendanceService.createAttendance(g.userId,g).subscribe(h=>{console.log("Attendance record created successfully:",h)},h=>{console.error("Error creating attendance record:",h)})}},p=>{console.error("Error fetching attendance record:",p)})}isWeekend(t){let i=new Date(this.selectedDate.getFullYear(),this.selectedDate.getMonth(),t).getDay();return i===0||i===6}generateMonthData(t){let e=t.getMonth(),i=t.getFullYear(),d=new Date(i,e+1,0).getDate();this.daysInMonth=Array.from({length:d},(h,N)=>N+1);let p=["January","February","March","April","May","June","July","August","September","October","November","December"];this.currentMonthYear=`${p[e]} ${i}`;let g={monthName:this.currentMonthYear,monthIndex:e,days:this.daysInMonth,users:this.users};this.monthData.push(g)}switchMonth(t){this.monthData=[],this.selectedDate.setMonth(this.selectedDate.getMonth()+t),this.generateMonthData(this.selectedDate)}updateAttendanceRecord(){let t=this.selectedDate.getFullYear(),e=this.selectedDate.getMonth()+1,i=this.day<10?`0${this.day}`:this.day,d=`${t}-${e<10?"0":""}${e}-${i}`;this.attendanceService.getAttendanceByUserIdAndDate(this.user.id,d).subscribe(p=>{if(console.log(this.user.id),console.log(d),p){let g={date:d,shiftType:null,status:U.ABSENT,absent_reason:this.absenceReason,userId:this.user.id};this.attendanceService.update(this.user.id,g).subscribe(h=>{console.log("Attendance record updated successfully:",h)},h=>{console.error("Error updating attendance record:",h)})}else{let g={date:d,shiftType:null,status:U.ABSENT,absent_reason:this.absenceReason,userId:this.user.id};this.attendanceService.createAttendance(g.userId,g).subscribe(h=>{console.log("Attendance record created successfully:",h)},h=>{console.error("Error creating attendance record:",h)})}})}};n.\u0275fac=function(e){return new(e||n)(w(A))},n.\u0275cmp=D({type:n,selectors:[["app-add-attendance"]],decls:21,vars:2,consts:[[1,"pcoded-main-container"],[1,"pcoded-wrapper"],[1,"pcoded-content"],[1,"calendar-container"],[1,"month-nav"],[1,"btn","nav-button",3,"click"],[1,"bi","bi-arrow-left"],[1,"bi","bi-arrow-right"],[1,"table-responsive"],[1,"table","table-bordered","smaller-table"],[4,"ngFor","ngForOf"],[1,"employee-column"],[1,"button-container"],["data-bs-toggle","modal","data-bs-target","#myModal",1,"btn","btn-primary","small-button",3,"click"],["id","myModal",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal",1,"btn-close"],["type","radio","id","halfDayRadio","name","durationRadio",3,"change"],["for","halfDayRadio"],["type","radio","id","quarterDayRadio","name","durationRadio",3,"change"],["for","quarterDayRadio"],["type","radio","id","fullDayRadio","name","durationRadio",3,"change"],["for","fullDayRadio"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-danger"],["type","button",1,"btn","btn-primary",3,"click"],["data-bs-toggle","modal","data-bs-target","#myModal2",1,"btn","btn-danger","small-button",3,"click"],["id","myModal2",1,"modal","fade"],[1,"modal-body"],[1,"mb-3"],["for","absenceReason",1,"form-label"],["type","text","id","absenceReason","name","absenceReason",1,"form-control",3,"ngModel","ngModelChange"]],template:function(e,i){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"button",5),y("click",function(){return i.switchMonth(-1)}),m(6,"span",6),r(),a(7,"h2"),s(8),r(),a(9,"button",5),y("click",function(){return i.switchMonth(1)}),m(10,"span",7),r()(),a(11,"div",8)(12,"table",9)(13,"thead")(14,"tr")(15,"th"),s(16,"Name"),r(),L(17,jt,2,1,"th",null,$),r()(),a(19,"tbody"),S(20,Yt,6,3,"ng-container",10),r()()()()()()()),e&2&&(l(8),_(i.currentMonthYear),l(9),j(i.daysInMonth),l(3),f("ngForOf",i.users))},dependencies:[J,G,z,K],styles:["th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:1px solid #ccc;padding:8px;text-align:center}thead[_ngcontent-%COMP%]{background-color:#f2f2f2}tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}tr[_ngcontent-%COMP%]:hover{background-color:#d3d3d3}.month-nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.nav-button[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;border:none;padding:10px 20px;border-radius:5px;cursor:pointer}.calendar[_ngcontent-%COMP%]{margin-top:20px}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:8px;text-align:center}.employee-column[_ngcontent-%COMP%]{font-weight:700}.status-container[_ngcontent-%COMP%]{display:flex;align-items:center}.disabled[_ngcontent-%COMP%]{background-color:#f2f2f2;color:#999;pointer-events:none;width:.5px}"]});let o=n;return o})();function Ht(o,n){if(o&1&&(a(0,"tr"),m(1,"td",16),a(2,"td",17),s(3),r(),a(4,"td",18),s(5),r(),a(6,"td",19),s(7),r(),a(8,"td",20),s(9),r(),m(10,"td",21),r()),o&2){let c=n.$implicit;l(3),_(c.date),l(2),_(c.status),l(2),Q(" ",c.absent_reason," "),l(2),_(c.shiftType)}}var Z=(()=>{let n=class n{constructor(t){this.attendanceService=t,this.attendanceRecord=[]}ngOnInit(){let t=localStorage.getItem("user");if(console.log(t),t){let e=JSON.parse(t).email;this.attendanceService.getUserIdByEmail(e).subscribe(i=>{this.id=i.id,this.attendanceService.find(this.id).subscribe(d=>{this.user=d,console.log("user",this.user)})})}}getAttendanceStatus(t,e){let i=t.attendanceRecord.find(d=>d.date===e);return i?i.status:""}};n.\u0275fac=function(e){return new(e||n)(w(A))},n.\u0275cmp=D({type:n,selectors:[["app-list-attendance"]],decls:24,vars:0,consts:[[1,"pcoded-wrapper"],[1,"pcoded-content"],[1,"pcoded-inner-content"],[1,"container"],[1,"d-flex","align-items-center","justify-content-end","my-3"],["id","tableExample","data-list",'{"valueNames":["name","job","date","status","reason","shift"],"page":5,"pagination":true}'],[1,"table-responsive","mx-n1","px-1"],[1,"table","table-sm","border-top","border-200","fs--1","mb-0"],[1,"white-space-nowrap","fs--1","align-middle","ps-0",2,"max-width","20px","width","18px"],["data-sort","date",1,"sort","align-middle"],["data-sort","status",1,"sort","align-middle"],["data-sort","reason",1,"sort","align-middle"],["data-sort","shift",1,"sort","align-middle"],["id","bulk-select-body",1,"list"],[1,"d-flex","flex-between-center","pt-3","mb-3"],[1,"pagination","d-none"],[1,"fs--1","align-middle"],[1,"align-middle","date"],[1,"align-middle","status"],[1,"align-middle","reason"],[1,"align-middle","shift"],[1,"align-middle","white-space-nowrap","text-end","pe-0"]],template:function(e,i){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),m(4,"div",4),a(5,"div",5)(6,"div",6)(7,"table",7)(8,"thead")(9,"tr"),m(10,"th",8),a(11,"th",9),s(12,"Date"),r(),a(13,"th",10),s(14,"Status"),r(),a(15,"th",11),s(16,"Reason"),r(),a(17,"th",12),s(18,"Shift"),r()()(),a(19,"tbody",13),L(20,Ht,11,4,"tr",null,$),r()()(),a(22,"div",14),m(23,"div",15),r()()()()()()),e&2&&(l(20),j(i.user.attendanceRecord))},styles:[".table-responsive[_ngcontent-%COMP%]{border-radius:10px;overflow-x:auto}.table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:12px 15px}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#f5f5f5;border-bottom:2px solid #ddd}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#f9f9f9}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#e9ecef}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:20px}.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{margin:0 5px}.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]{color:#007bff;border:1px solid #007bff;padding:6px 12px;border-radius:5px}.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover{background-color:#007bff;color:#fff}.container[_ngcontent-%COMP%]{margin-top:20px}.d-flex[_ngcontent-%COMP%]{display:flex}.align-items-center[_ngcontent-%COMP%]{align-items:center}.justify-content-end[_ngcontent-%COMP%]{justify-content:flex-end}.my-3[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:1rem}.px-1[_ngcontent-%COMP%]{padding-left:.25rem;padding-right:.25rem}.pt-3[_ngcontent-%COMP%]{padding-top:1rem}.mb-3[_ngcontent-%COMP%]{margin-bottom:1rem}.flex-between-center[_ngcontent-%COMP%]{justify-content:space-between;align-items:center}.white-space-nowrap[_ngcontent-%COMP%]{white-space:nowrap}.pe-0[_ngcontent-%COMP%]{padding-right:0}.fs--1[_ngcontent-%COMP%]{font-size:.875rem}@media (max-width: 768px){.container[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px}}"]});let o=n;return o})();function Wt(o,n){if(o&1){let c=V();a(0,"div",31)(1,"label",39),s(2,"Shift Type:"),r(),a(3,"select",40),F("ngModelChange",function(e){b(c);let i=u();return I(i.selectedShiftType,e)||(i.selectedShiftType=e),v(e)}),a(4,"option",41),s(5,"Quarter Shift"),r(),a(6,"option",42),s(7,"Half Day"),r(),a(8,"option",43),s(9,"Full Day"),r()()()}if(o&2){let c=u();l(3),P("ngModel",c.selectedShiftType)}}function Qt(o,n){if(o&1){let c=V();a(0,"div",31)(1,"label",44),s(2,"Absent Reason:"),r(),a(3,"input",45),F("ngModelChange",function(e){b(c);let i=u();return I(i.absentReason,e)||(i.absentReason=e),v(e)}),r()()}if(o&2){let c=u();l(3),P("ngModel",c.absentReason)}}var xt=(()=>{let n=class n{constructor(t){this.attendanceService=t}ngOnInit(){let t=localStorage.getItem("user");if(t){let N=JSON.parse(t).email;this.attendanceService.getUserIdByEmail(N).subscribe(Ot=>{this.id=Ot.id,this.attendanceService.getTotalHalfShiftDaysForUserInMonth(this.id,d).subscribe(H=>{this.halfShifts=H.halfShifts,this.fullShifts=H.fullShifts,this.quarterShifts=H.quarterShifts,this.absences=H.absences})})}let e=new Date,i=e.getFullYear(),d=e.getMonth()+1,p=e.getDate(),g=d<10?`0${d}`:d,h=p<10?`0${p}`:p;this.dateStr=`${i}-${g}-${h}`}submitForm(){this.attendanceService.find(this.id).subscribe(i=>i);let t=this.selectedShiftType;Object.values(T).includes(t);let e={status:this.selectedStatus,shiftType:t,absent_reason:this.absentReason,id:"",date:this.dateStr,userId:this.id};this.attendanceService.create(this.id,e).subscribe(i=>{alert(i.message)},i=>{console.error("You have already :",i)})}};n.\u0275fac=function(e){return new(e||n)(w(A))},n.\u0275cmp=D({type:n,selectors:[["app-create-attendance"]],decls:89,vars:7,consts:[["rel","stylesheet","type","text/css","href","https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"],["rel","stylesheet","type","text/css","href","https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/css/bootstrap-extended.min.css"],["rel","stylesheet","type","text/css","href","https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/fonts/simple-line-icons/style.min.css"],["rel","stylesheet","type","text/css","href","https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/css/colors.min.css"],["rel","stylesheet","type","text/css","href","https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/css/bootstrap.min.css"],["href","https://fonts.googleapis.com/css?family=Montserrat&display=swap","rel","stylesheet"],[1,"pcoded-main-container"],[1,"pcoded-wrapper"],[1,"pcoded-content"],[1,"row","mb-4"],[1,"col-lg-12"],[1,"text-uppercase"],[1,"row"],[1,"col-xl-3","col-sm-6","col-12"],[1,"card"],[1,"card-content"],[1,"card-body"],[1,"media","d-flex"],[1,"align-self-center"],[1,"icon-graph","success","font-large-2","float-left"],[1,"media-body","text-right"],[1,"media-body","text-left"],[1,"danger"],[1,"icon-rocket","danger","font-large-2","float-right"],[1,"warning"],[1,"icon-pie-chart","warning","font-large-2","float-right"],[1,"icon-pencil","primary","font-large-2","float-left"],[1,"col-lg-6"],[1,"card","form-card"],[1,"card-title","mb-4"],[1,"animated-form",3,"ngSubmit"],[1,"mb-3"],["for","status",1,"form-label"],["name","status","id","status",1,"form-select",3,"ngModel","ngModelChange"],["value","PRESENT"],["value","ABSENT"],["class","mb-3",4,"ngIf"],["type","submit",1,"btn","btn-primary"],[1,"card","list-card"],["for","shiftType",1,"form-label"],["name","shiftType","id","shiftType",1,"form-select",3,"ngModel","ngModelChange"],["value","QUARTER_SHIFT"],["value","HALF_DAY"],["value","FULL_DAY"],["for","absentReason",1,"form-label"],["type","text","name","absentReason","id","absentReason",1,"form-control",3,"ngModel","ngModelChange"]],template:function(e,i){e&1&&(m(0,"link",0)(1,"link",1)(2,"link",2)(3,"link",3)(4,"link",4)(5,"link",5),a(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",10)(11,"h4",11),s(12,"Attendance"),r(),a(13,"p"),s(14,"My Statistics"),r()()(),a(15,"div",12)(16,"div",13)(17,"div",14)(18,"div",15)(19,"div",16)(20,"div",17)(21,"div",18),m(22,"i",19),r(),a(23,"div",20)(24,"h3"),s(25,"Total Half Shift"),r(),a(26,"span"),s(27),r()()()()()()(),a(28,"div",13)(29,"div",14)(30,"div",15)(31,"div",16)(32,"div",17)(33,"div",21)(34,"h3",22),s(35,"Total Full Shift"),r(),a(36,"span"),s(37),r()(),a(38,"div",18),m(39,"i",23),r()()()()()(),a(40,"div",13)(41,"div",14)(42,"div",15)(43,"div",16)(44,"div",17)(45,"div",21)(46,"h3",24),s(47,"Total Quarter Shift"),r(),a(48,"span"),s(49),r()(),a(50,"div",18),m(51,"i",25),r()()()()()(),a(52,"div",13)(53,"div",14)(54,"div",15)(55,"div",16)(56,"div",17)(57,"div",18),m(58,"i",26),r(),a(59,"div",20)(60,"h3"),s(61,"Total Absent"),r(),a(62,"span"),s(63),r()()()()()()()(),a(64,"div",12)(65,"div",27)(66,"div",28)(67,"div",16)(68,"h2",29),s(69,"Create Attendance for Today"),r(),a(70,"form",30),y("ngSubmit",function(){return i.submitForm()}),a(71,"div",31)(72,"label",32),s(73,"Status:"),r(),a(74,"select",33),F("ngModelChange",function(p){return I(i.selectedStatus,p)||(i.selectedStatus=p),p}),a(75,"option",34),s(76,"Present"),r(),a(77,"option",35),s(78,"Absent"),r()()(),S(79,Wt,10,1,"div",36)(80,Qt,4,1,"div",36),a(81,"button",37),s(82," Create Attendance "),r()()()()(),a(83,"div",27)(84,"div",38)(85,"div",16)(86,"h2",29),s(87,"My Attendances"),r(),m(88,"app-list-attendance"),r()()()()()()()),e&2&&(l(27),_(i.halfShifts),l(10),_(i.fullShifts),l(12),_(i.quarterShifts),l(14),_(i.absences),l(11),P("ngModel",i.selectedStatus),l(5),f("ngIf",i.selectedStatus==="PRESENT"),l(),f("ngIf",i.selectedStatus==="ABSENT"))},dependencies:[q,mt,ht,ut,G,pt,z,dt,K,lt,Z],styles:[".form-card[_ngcontent-%COMP%], .list-card[_ngcontent-%COMP%]{border-radius:10px;box-shadow:0 4px 6px #0000001a}.form-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .list-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:30px}.card-title[_ngcontent-%COMP%]{color:#333}.form-select[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]{border-radius:5px}.submit-btn[_ngcontent-%COMP%]{margin-top:15px}.list-card[_ngcontent-%COMP%]{margin-top:30px}@media (max-width: 768px){.list-card[_ngcontent-%COMP%]{margin-top:15px}}.grey-bg[_ngcontent-%COMP%]{background-color:#f5f7fa}"]});let o=n;return o})();var Mt=(()=>{let n=class n{constructor(t,e){this.encryptionService=t,this.router=e}canActivate(t,e){let i=localStorage.getItem("authorities");return this.encryptionService.decrypt(i,"2f7").includes("ADD::ATTENDANCE")?!0:(this.router.navigate(["/notfound"]),!1)}};n.\u0275fac=function(e){return new(e||n)(x(k),x(R))},n.\u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"});let o=n;return o})();var At=(()=>{let n=class n{constructor(t,e){this.encryptionService=t,this.router=e}canActivate(t,e){let i=localStorage.getItem("authorities");return this.encryptionService.decrypt(i,"2f7").includes("CREATE::ATTENDANCE")?!0:(this.router.navigate(["/notfound"]),!1)}};n.\u0275fac=function(e){return new(e||n)(x(k),x(R))},n.\u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"});let o=n;return o})();var Et=(()=>{let n=class n{constructor(t,e){this.encryptionService=t,this.router=e}canActivate(t,e){let i=localStorage.getItem("authorities");return this.encryptionService.decrypt(i,"2f7").includes("EDIT::ATTENDANCE")?!0:(this.router.navigate(["/notfound"]),!1)}};n.\u0275fac=function(e){return new(e||n)(x(k),x(R))},n.\u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"});let o=n;return o})();var Jt=[{path:"ListAttendance",component:Z,canActivate:[Y,_t]},{path:"addAttendance",component:vt,canActivate:[Y,Mt]},{path:"updateAttendance",component:bt,canActivate:[Y,Et]},{path:"createAttendance",component:xt,canActivate:[Y,At]}],Dt=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=B({type:n}),n.\u0275inj=W({imports:[tt.forChild(Jt),tt]});let o=n;return o})();var Ie=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=B({type:n}),n.\u0275inj=W({providers:[A],imports:[ot,Dt,ct,gt,ft]});let o=n;return o})();export{Ie as a};
