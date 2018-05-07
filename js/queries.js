getdailyvisits = function(){
    sql = "select count(b.id)cnt from users a ";
    sql+= "left outer join visits b on b.sale_id=a.id ";
    sql+= "where date(b.createdate)='2018-1-1' ";
    sql+= "and a.id="+sale_id+" ";
    return sql;
}

module.exports = {
    visits: 'select username name,id val from users where group_id=3 limit 1,4',
    offers: 'select username name,id val from users where group_id=3 limit 1,4',
    newfbs: 'select username name,id val from users where group_id=3 limit 1,4',
    sellings: 'select username name,id val from users where group_id=3 limit 1,4'
}