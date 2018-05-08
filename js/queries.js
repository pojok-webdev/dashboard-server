getdailyvisits = function(){
    sql = "select a.username name,count(b.id)val from users a ";
    sql+= "left outer join visits b on b.sale_id=a.id ";
    //sql+= "where date(b.createdate)='2018-1-1' ";
    //sql+= "and a.id="+sale_id+" ";
    sql+= "group by a.username ";
    sql+= "limit 1,10 ";
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
module.exports = {
    visits: getdailyvisits(),
    offers: 'select username name,id val from users where group_id=3 limit 1,4',
    newfbs: 'select username name,id val from users where group_id=3 limit 1,4',
    sellings: 'select username name,id val from users where group_id=3 limit 1,4',
    ticketdaily: ticketdaily()
}