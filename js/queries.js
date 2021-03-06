getdailyvisits = function(){
    sql = "select a.username name,count(b.id)val from users a ";
    sql+= "left outer join visits b on b.sale_id=a.id ";
    //sql+= "where date(b.createdate)='2018-1-1' ";
    //sql+= "and a.id="+sale_id+" ";
    sql = "select telegram_id,clientname,address,createuser,createdate ";
    sql = "select createuser name,count(createuser)val ";
    sql+= "from visits ";
    sql+= "group by createuser ";
    return sql;
}
ticketdaily = function(){
    sql = "select 'FFR' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id where date(create_date)=date(now()) and a.clientcategory = '1' ";
    sql+= "union ";
    sql+= "select 'PLATINUM' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id where date(create_date)=date(now()) and a.clientcategory = '2' ";
    sql+= "union ";
    sql+= "select 'GOLD' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id where date(create_date)=date(now()) and a.clientcategory = '3' ";
    sql+= "union ";
    sql+= "select 'BRONZE' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id where date(create_date)=date(now()) and a.clientcategory = '4' ";
    sql+= "union ";
    sql+= "select 'SILVER' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id where date(create_date)=date(now()) and a.clientcategory = '5' ";
    return sql;
}
ticketweekly = function(){
    sql = "select 'FFR' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id  where date(create_date)>=date_sub(date(now()),interval dayofweek(date(now())) day)  and a.clientcategory = '1' ";
    sql+="union ";
    sql+="select 'PLATINUM' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id  where date(create_date)>=date_sub(date(now()),interval dayofweek(date(now())) day)  and a.clientcategory = '2'  ";
    sql+="union ";
    sql+="select 'GOLD' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id  where date(create_date)>=date_sub(date(now()),interval dayofweek(date(now())) day)  and a.clientcategory = '3'  ";
    sql+="union ";
    sql+="select 'BRONZE' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id  where date(create_date)>=date_sub(date(now()),interval dayofweek(date(now())) day)  and a.clientcategory = '4'  ";
    sql+="union ";
    sql+="select 'SILVER' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id  where date(create_date)>=date_sub(date(now()),interval dayofweek(date(now())) day)  and a.clientcategory = '5'  ";
return sql;
}
ticketmonthly = function(){
    sql = "select 'FFR' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '1' ";
    sql+= "union ";
    sql+= "select 'PLATINUM' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '2'  ";
    sql+= "union ";
    sql+= "select 'GOLD' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '3'  ";
    sql+= "union ";
    sql+= "select 'BRONZE' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '4'  ";
    sql+= "union ";
    sql+= "select 'SILVER' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '5'  ";
    return sql;
}
ticketquarterly = function(){
    sql = "select 'FFR' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day)  and a.clientcategory = '1' ";
    sql+= "union ";
    sql+= "select 'PLATINUM' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day)  and a.clientcategory = '2' ";
    sql+= "union ";
    sql+= "select 'GOLD' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day)  and a.clientcategory = '3' ";
    sql+= "union ";
    sql+= "select 'BRONZE' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day)  and a.clientcategory = '4' ";
    sql+= "union ";
    sql+= "select 'SILVER' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day)  and a.clientcategory = '5' ";
    return sql;
}
ticketyearly = function(){
    sql= "select 'FFR' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofyear(date(now())) day) and a.clientcategory = '1' ";
    sql+= "union ";
    sql+= "select 'PLATINUM' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofyear(date(now())) day) and a.clientcategory = '2'  ";
    sql+= "union ";
    sql+= "select 'GOLD' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofyear(date(now())) day) and a.clientcategory = '3'  ";
    sql+= "union ";
    sql+= "select 'BRONZE' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofyear(date(now())) day) and a.clientcategory = '4'  ";
    sql+= "union ";
    sql+= "select 'SILVER' name,count(b.kdticket)val from clients a left outer join tickets b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofyear(date(now())) day) and a.clientcategory = '5'  ";
    return sql;
}
bts = function(){
    sql = "select a.id,a.name bts,a.location,b.name branch,count(c.name)apcount  ";
    sql+= "from btstowers a ";
    sql+= "left outer join branches b on b.id=a.branch_id  ";
    sql+= "left outer join aps c on c.btstower_id=a.id  group by a.id,a.name,a.location,b.name";
    return sql;
}
surveydaily = function(){
    sql = "select '1' cat,'FFR' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)=date(now())  and a.clientcategory = '1' ";
    sql+= "union ";
    sql+= "select '2' cat,'PLATINUM' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)=date(now())  and a.clientcategory = '2' ";
    sql+= "union ";
    sql+= "select '3' cat,'GOLD' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)=date(now())  and a.clientcategory = '3' ";
    sql+= "union ";
    sql+= "select '4' cat,'BRONZE' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)=date(now())  and a.clientcategory = '4' ";
    sql+= "union ";
    sql+= "select '5' cat,'SILVER' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)=date(now())  and a.clientcategory = '5' ";
return sql;
}
surveyweekly = function(){
    sql = "select '1' cat,'FFR' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofweek(date(now())) day) and a.clientcategory = '1' ";
    sql+= "union ";
    sql+= "select '2' cat,'GOLD' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofweek(date(now())) day) and a.clientcategory = '2'  ";
    sql+= "union ";
    sql+= "select '3' cat,'SILVER' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofweek(date(now())) day) and a.clientcategory = '3'  ";
    sql+= "union ";
    sql+= "select '4' cat,'BRONZE' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofweek(date(now())) day) and a.clientcategory = '4'  ";
    sql+= "union ";
    sql+= "select '5' cat,'SILVER' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofweek(date(now())) day) and a.clientcategory = '5'  ";
return sql;
}
surveymonthly = function(){
    sql = "select '1' cat,'FFR' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '1'  ";
    sql+= "union ";
    sql+= "select '2' cat,'PLATINUM' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '2' "; 
    sql+= "union ";
    sql+= "select '3' cat,'GOLD' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '3'  ";
    sql+= "union ";
    sql+= "select '4' cat,'BRONZE' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '4'  ";
    sql+= "union ";
    sql+= "select '5' cat,'SILVER' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '5' ";
return sql;
}
surveyquarterly = function(){
    sql = "select '1' cat,'FFR' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '1' ";
    sql+= "union ";
    sql+= "select '2' cat,'PLATINUM' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '2'  ";
    sql+= "union ";
    sql+= "select '3' cat,'GOLD' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '3'  ";
    sql+= "union ";
    sql+= "select '4' cat,'BRONZE' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '4'  ";
    sql+= "union ";
    sql+= "select '5' cat,'SILVER' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '5'  ";
return sql;
}
function surveyyearly(){
    sql = " select '1' cat,'FFR' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofyear(date(now())) day) and a.clientcategory = '1' ";
    sql+= " union ";
    sql+= " select '2' cat,'PLATINUM' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofyear(date(now())) day) and a.clientcategory = '2'  ";
    sql+= " union ";
    sql+= " select '3' cat,'GOLD' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofyear(date(now())) day) and a.clientcategory = '3'  ";
    sql+= " union ";
    sql+= " select '4' cat,'BRONZE' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofyear(date(now())) day) and a.clientcategory = '4'  ";
    sql+= " union ";
    sql+= " select '5' cat,'SILVER' name,count(b.id)val from clients a left outer join survey_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofyear(date(now())) day) and a.clientcategory = '5'  ";
return sql;
}
function detailsurveydaily(category){
    sql = "select a.address,a.createuser sales,a.survey_date,a.create_date,b.name client ";
    sql+= "from survey_requests a ";
    sql+= "left outer join clients b on b.id=a.client_id ";
    sql+= "where date(create_date)=date(now())  and b.clientcategory = '"+category+"' ";
    return sql;
}
function detailsurveyweekly(category){
    sql = "select a.address,a.createuser sales,a.survey_date,a.create_date,b.name client ";
    sql+= "from survey_requests a ";
    sql+= "left outer join clients b on b.id=a.client_id ";
    sql+= " where date(create_date)>=date_sub(date(now()),interval dayofweek(date(now())) day) and b.clientcategory = '"+category+"'  ";
    return sql;
}
function detailsurveymonthly(category){
    sql = "select a.address,a.createuser sales,a.survey_date,a.create_date,b.name client ";
    sql+= "from survey_requests a ";
    sql+= "left outer join clients b on b.id=a.client_id ";
    sql+= " where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and b.clientcategory = '"+category+"' ";
    return sql;
}
function detailsurveyquarterly(category){
    sql = "select a.address,a.createuser sales,a.survey_date,a.create_date,b.name client ";
    sql+= "from survey_requests a ";
    sql+= "left outer join clients b on b.id=a.client_id ";
    sql+= "where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and b.clientcategory = '"+category+"' ";
    return sql;
}
function detailsurveyyearly(category){
    sql = "select a.address,a.createuser sales,a.survey_date,a.create_date,b.name client ";
    sql+= "from survey_requests a ";
    sql+= "left outer join clients b on b.id=a.client_id ";
    sql+= "where date(create_date)>=date_sub(date(now()),interval dayofyear(date(now())) day) and b.clientcategory = '"+category+"' ";
    return sql;
}
function installdaily(){
    sql = "select 'FFR' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)=date(now()) and a.clientcategory = '1' ";
    sql+= "union ";
    sql+= "select 'PLATINUM' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)=date(now()) and a.clientcategory = '2'  ";
    sql+= "union ";
    sql+= "select 'GOLD' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)=date(now()) and a.clientcategory = '3'  ";
    sql+= "union ";
    sql+= "select 'BRONZE' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)=date(now()) and a.clientcategory = '4'  ";
    sql+= "union ";
    sql+= "select 'SILVER' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)=date(now()) and a.clientcategory = '5'  ";
return sql;
}
function installweekly(){
    sql = "select 'FFR' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofweek(date(now())) day) and a.clientcategory = '1' ";
    sql+= "union ";
    sql+= "select 'PLATINUM' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofweek(date(now())) day) and a.clientcategory = '2' ";
    sql+= "union ";
    sql+= "select 'GOLD' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofweek(date(now())) day) and a.clientcategory = '3' ";
    sql+= "union ";
    sql+= "select 'BRONZE' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofweek(date(now())) day) and a.clientcategory = '4' ";
    sql+= "union ";
    sql+= "select 'SILVER' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofweek(date(now())) day) and a.clientcategory = '5' ";
return sql;
}
function installmonthly(){
    sql = "select 'FFR' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '1' ";
    sql+= "union ";
    sql+= "select 'PLATINUM' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '2'  ";
    sql+= "union ";
    sql+= "select 'GOLD' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '3'  ";
    sql+= "union ";
    sql+= "select 'BRONZE' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '4'  ";
    sql+= "union ";
    sql+= "select 'SILVER' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '5'  ";
return sql;
}
function installquarterly(){
    sql = "select 'FFR' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '1' ";
    sql+= "union ";
    sql+= "select 'PLATINUM' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '2' ";
    sql+= "union ";
    sql+= "select 'GOLD' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '3' ";
    sql+= "union ";
    sql+= "select 'BRONZE' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '4' ";
    sql+= "union ";
    sql+= "select 'SILVER' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '5' ";
    return sql; 
}
function installyearly(){
    sql = "select 'FFR' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofyear(date(now())) day) and a.clientcategory = '1' ";
    sql+= "union ";
    sql+= "select 'PLATINUM' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofyear(date(now())) day) and a.clientcategory = '2'  ";
    sql+= "union ";
    sql+= "select 'GOLD' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofyear(date(now())) day) and a.clientcategory = '3'  ";
    sql+= "union ";
    sql+= "select 'BRONZE' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofyear(date(now())) day) and a.clientcategory = '4'  ";
    sql+= "union ";
    sql+= "select 'SILVER' name,count(b.id)val from clients a left outer join install_requests b on b.client_id=a.id where date(create_date)>=date_sub(date(now()),interval dayofyear(date(now())) day) and a.clientcategory = '5'  ";
return sql;
}
function troubleshootdaily(){
    sql = "select 'FFR' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)=date(now()) and a.clientcategory = '1' ";
    sql+= "union ";
    sql+= "select 'PLATINUM' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)=date(now()) and a.clientcategory = '2'  ";
    sql+= "union ";
    sql+= "select 'GOLD' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)=date(now()) and a.clientcategory = '3'  ";
    sql+= "union ";
    sql+= "select 'BRONZE' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)=date(now()) and a.clientcategory = '4'  ";
    sql+= "union ";
    sql+= "select 'SILVER' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)=date(now()) and a.clientcategory = '5'  ";
return sql;
}
troubleshootweekly = function(){
    sql = "select 'FFR' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)>=date_sub(date(now()),interval dayofweek(date(now())) day) and a.clientcategory = '1' ";
    sql+= "union ";
    sql+= "select 'PLATINUM' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)>=date_sub(date(now()),interval dayofweek(date(now())) day) and a.clientcategory = '2'  ";
    sql+= "union ";
    sql+= "select 'GOLD' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)>=date_sub(date(now()),interval dayofweek(date(now())) day) and a.clientcategory = '3'  ";
    sql+= "union ";
    sql+= "select 'BRONZE' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)>=date_sub(date(now()),interval dayofweek(date(now())) day) and a.clientcategory = '4'  ";
    sql+= "union ";
    sql+= "select 'SILVER' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)>=date_sub(date(now()),interval dayofweek(date(now())) day) and a.clientcategory = '5' ";
return sql;
}
troubleshootmonthly = function(){
    sql = "select 'FFR' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '1' ";
    sql+= "union ";
    sql+= "select 'PLATINUM' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '2' ";
    sql+= "union ";
    sql+= "select 'GOLD' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '3' ";
    sql+= "union ";
    sql+= "select 'BRONZE' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '4' ";
    sql+= "union ";
    sql+= "select 'SILVER' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '5' ";
return sql;
}
function troubleshootquarterly(){
    sql = "select 'FFR' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '1' ";
    sql+= "union ";
    sql+= "select 'PLATINUM' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '2 ' ";
    sql+= "union ";
    sql+= "select 'GOLD' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '3' ";
    sql+= "union ";
    sql+= "select 'BRONZE' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '4' ";
    sql+= "union ";
    sql+= "select 'SILVER' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)>=date_sub(date(now()),interval dayofmonth(date(now())) day) and a.clientcategory = '5' ";
return sql;
}
function troubleshootyearly(){
    sql = "select 'FFR' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)>=date_sub(date(now()),interval dayofyear(date(now())) day) and a.clientcategory = '1' ";
    sql+= "union ";
    sql+= "select 'PLATINUM' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)>=date_sub(date(now()),interval dayofyear(date(now())) day) and a.clientcategory = '2'  ";
    sql+= "union ";
    sql+= "select 'GOLD' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)>=date_sub(date(now()),interval dayofyear(date(now())) day) and a.clientcategory = '3'  ";
    sql+= "union ";
    sql+= "select 'BRONZE' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)>=date_sub(date(now()),interval dayofyear(date(now())) day) and a.clientcategory = '4'  ";
    sql+= "union ";
    sql+= "select 'SILVER' name,count(c.id)val from clients a left outer join client_sites b on b.client_id=a.id left outer join troubleshoot_requests c on c.client_site_id=b.id where date(c.create_date)>=date_sub(date(now()),interval dayofyear(date(now())) day) and a.clientcategory = '5'  ";
return sql;
}
module.exports = {
    visits: getdailyvisits(),
    offers: 'select username name,id val from users where group_id=3 limit 1,4',
    newfbs: 'select username name,id val from users where group_id=3 limit 1,4',
    sellings: 'select username name,id val from users where group_id=3 limit 1,4',
    ticketdaily: ticketdaily(),
    ticketweekly: ticketweekly(),
    ticketmonthly: ticketmonthly(),
    ticketquarterly: ticketquarterly(),
    ticketyearly: ticketyearly(),
    bts:bts(),
    surveydaily: surveydaily(),
    surveyweekly: surveyweekly(),
    surveymonthly: surveymonthly(),
    surveyquarterly: surveyquarterly(),
    surveyyearly: surveyyearly(),
    detailsurveydaily: detailsurveydaily,
    detailsurveyweekly: detailsurveyweekly,
    detailsurveymonthly: detailsurveymonthly,
    detailsurveyquarterly: detailsurveyquarterly,
    detailsurveyyearly: detailsurveyyearly,
    installdaily: installdaily(),
    installweekly: installweekly(),
    installmonthly: installmonthly(),
    installquarterly: installquarterly(),
    installyearly: installyearly(),
    troubleshootdaily: troubleshootdaily(),
    troubleshootweekly: troubleshootweekly(),
    troubleshootmonthly: troubleshootmonthly(),
    troubleshootquarterly: troubleshootquarterly(),
    troubleshootyearly: troubleshootyearly()
}
