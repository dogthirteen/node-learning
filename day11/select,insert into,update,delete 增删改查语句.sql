-- 查询对应数据表
-- select * from my_db_01.users

-- 查询数据表 对应字段
-- select userName from my_db_01.users

-- 查询数据表id不等于4的数据
-- select * from my_db_01.users where id<>4

-- 模糊查询数据表 中 名称包含张的数据
-- select * from my_db_01.users where userName like '%张%'

-- 使用AND 查询 状态为0 且  id小于5的数据
-- select * from my_db_01.users where status=0 and id<5

-- 使用or查询 密码为123456 或 名称包含o的数据
-- select * from my_db_01.users where password='123456' or userName like '%o%'

-- 对数据表中 按照 status 字段进行升序排序 升序asc  降序desc  
-- select * from my_db_01.users order by status asc

-- 对数据表中，先按照status 进行升序排序，在按照userName 进行降序排序
-- select * from my_db_01.users order by status asc, userName desc

-- 查询数据表中 status=0 的数据总数量
-- select count(*) from my_db_01.users where status=1

-- 使用AS关键字给列起别名
-- select count(*) as total from my_db_01.users where status=0
-- select userName as uName, password as uPwd from my_db_01.users 

-- 向对应数据表插入数据
-- insert into my_db_01.users (userName,password) values ('李四','123456') 
-- select * from my_db_01.users

-- 更新数据表中数据
-- update my_db_01.users set userName='bob' where id=3
-- update my_db_01.users set userName='jim',status=1 where id=1
-- select * from my_db_01.users 

-- 删除数据表中 id为2数据
-- delete from my_db_01.users where id=2
-- select * from my_db_01.users
