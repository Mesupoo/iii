SET NAMES UTF8;
DROP DATABASE IF EXISTS chinaFood;
CREATE DATABASE chinaFood CHARSET=UTF8;
USE chinaFood;

/**用户信息表**/
CREATE TABLE userInfo(
  userName VARCHAR(32) PRIMARY KEY,
  userUpwd VARCHAR(32)
);
/**商品信息表**/
CREATE TABLE foodProduct(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pstyle VARCHAR(32),
  pname VARCHAR(32),
  pic VARCHAR(100)
);
INSERT INTO foodProduct VALUES
(NULL,"food_chuan","宫爆鸡丁","images/img_food/food_chuan/gongbaojiding.jpg"),
(NULL,"food_chuan","夫妻肺片","images/img_food/food_chuan/fuqifeipian.jpg"),
(NULL,"food_chuan","鱼香肉丝1","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝2","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝3","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝4","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝5","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝6","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝7","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝8","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝9","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝10","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝11","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝12","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝13","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝14","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝15","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝16","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝17","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝18","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝19","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝20","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝21","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝22","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝23","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝24","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝25","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝26","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝27","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝28","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝29","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝30","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝31","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝32","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝33","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝34","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝35","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝36","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝37","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝38","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝39","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝40","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝41","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝42","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝43","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝44","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝45","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝46","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝47","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝48","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝49","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝50","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝51","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝52","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝53","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝54","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_chuan","鱼香肉丝55","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_lu","鲁菜1","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_lu","鲁菜2","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_yue","粤菜1","images/img_food/food_chuan/yuxiangrousi.jpg"),
(NULL,"food_yue","粤菜2","images/img_food/food_chuan/yuxiangrousi.jpg");
/**我的收藏**/
CREATE TABLE collection(
    userName VARCHAR(32),
    cname VARCHAR(32),
    cpic VARCHAR(100),
    PRIMARY KEY(userName,cname)
);
/**我的论坛**/
CREATE TABLE forum(
    userName VARCHAR(32),
    title VARCHAR(100),
    content VARCHAR(2000)
);