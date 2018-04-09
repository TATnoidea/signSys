/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50719
Source Host           : localhost:3306
Source Database       : student

Target Server Type    : MYSQL
Target Server Version : 50719
File Encoding         : 65001

Date: 2018-04-09 13:05:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admins
-- ----------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `adminname` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admins
-- ----------------------------
INSERT INTO `admins` VALUES ('1', 'ccc', '123');
INSERT INTO `admins` VALUES ('3', 'test', 'test');

-- ----------------------------
-- Table structure for courses
-- ----------------------------
DROP TABLE IF EXISTS `courses`;
CREATE TABLE `courses` (
  `c_id` int(10) NOT NULL,
  `c_name` varchar(20) NOT NULL,
  `c_dept_id` varchar(20) DEFAULT NULL,
  `c_time_id` int(10) NOT NULL,
  `c_week_id` int(10) NOT NULL,
  `c_type` tinyint(4) NOT NULL,
  `c_teacher_id` int(11) NOT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of courses
-- ----------------------------
INSERT INTO `courses` VALUES ('1', '高等数学1\r\n高等数学1\r\n高等数学1', '1', '1', '1', '1', '1');
INSERT INTO `courses` VALUES ('2', '高等数学2', '1', '1', '1', '1', '2');
INSERT INTO `courses` VALUES ('3', '西方经济学', '2', '1', '1', '1', '3');
INSERT INTO `courses` VALUES ('4', '证券与投资', '2', '1', '1', '2', '4');
INSERT INTO `courses` VALUES ('5', '统计学', '2', '1', '1', '1', '5');
INSERT INTO `courses` VALUES ('6', 'C语言', '3', '2', '2', '1', '6');
INSERT INTO `courses` VALUES ('7', 'java', '3', '2', '2', '1', '7');
INSERT INTO `courses` VALUES ('8', '网页与图像设计', '3', '2', '2', '1', '8');
INSERT INTO `courses` VALUES ('9', '计算机网络', '3', '2', '2', '1', '9');
INSERT INTO `courses` VALUES ('10', '数据结构', '3', '2', '3', '1', '10');
INSERT INTO `courses` VALUES ('11', '算法分析', '3', '2', '4', '1', '11');
INSERT INTO `courses` VALUES ('12', '大学英语1', '4', '3', '5', '1', '12');
INSERT INTO `courses` VALUES ('13', '大学英语2', '4', '3', '6', '1', '13');
INSERT INTO `courses` VALUES ('14', '大学英语3', '4', '3', '7', '1', '14');
INSERT INTO `courses` VALUES ('15', '大学英语4', '4', '3', '3', '1', '15');
INSERT INTO `courses` VALUES ('16', '口译', '4', '3', '2', '1', '16');

-- ----------------------------
-- Table structure for depts
-- ----------------------------
DROP TABLE IF EXISTS `depts`;
CREATE TABLE `depts` (
  `d_id` int(10) NOT NULL,
  `d_name` varchar(20) NOT NULL,
  PRIMARY KEY (`d_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of depts
-- ----------------------------
INSERT INTO `depts` VALUES ('1', '金融系');
INSERT INTO `depts` VALUES ('2', '经济系');
INSERT INTO `depts` VALUES ('3', '计算机系');
INSERT INTO `depts` VALUES ('4', '英语系');
INSERT INTO `depts` VALUES ('12', '12');

-- ----------------------------
-- Table structure for selects
-- ----------------------------
DROP TABLE IF EXISTS `selects`;
CREATE TABLE `selects` (
  `sel_id` int(10) NOT NULL AUTO_INCREMENT,
  `sel_s_id` int(11) NOT NULL,
  `sel_c_id` int(11) NOT NULL,
  PRIMARY KEY (`sel_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of selects
-- ----------------------------

-- ----------------------------
-- Table structure for signs
-- ----------------------------
DROP TABLE IF EXISTS `signs`;
CREATE TABLE `signs` (
  `s_id` int(11) NOT NULL,
  `stu_id` int(11) NOT NULL,
  `sign_time` datetime NOT NULL,
  `cou_id` int(11) NOT NULL,
  `tea_id` int(11) NOT NULL,
  PRIMARY KEY (`s_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of signs
-- ----------------------------

-- ----------------------------
-- Table structure for students
-- ----------------------------
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `s_no` int(11) NOT NULL AUTO_INCREMENT,
  `s_name` varchar(8) NOT NULL,
  `s_class` varchar(20) NOT NULL,
  `s_sex` tinyint(4) NOT NULL,
  `s_dept_id` int(10) NOT NULL,
  `s_password` varchar(20) NOT NULL DEFAULT '123456',
  PRIMARY KEY (`s_no`)
) ENGINE=MyISAM AUTO_INCREMENT=235 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of students
-- ----------------------------
INSERT INTO `students` VALUES ('1', 'sddsd', 'sdds', '1', '1', '123456');
INSERT INTO `students` VALUES ('2', '15', '23', '2', '2332', '123456');
INSERT INTO `students` VALUES ('3', '小孙', '3', '1', '1', '123456');
INSERT INTO `students` VALUES ('4', '小赵', '4', '1', '1', '123456');
INSERT INTO `students` VALUES ('5', '小周', '5', '1', '2', '123456');
INSERT INTO `students` VALUES ('6', '小吴', '6', '1', '3', '123456');
INSERT INTO `students` VALUES ('7', '小郑', '7', '2', '3', '123456');
INSERT INTO `students` VALUES ('8', '小朱', '8', '2', '3', '123456');
INSERT INTO `students` VALUES ('9', '小程', '9', '2', '3', '123456');
INSERT INTO `students` VALUES ('10', '小徐', '10', '2', '3', '123456');
INSERT INTO `students` VALUES ('11', '小张', '11', '2', '3', '123456');
INSERT INTO `students` VALUES ('12', '小熊', '12', '2', '3', '123456');
INSERT INTO `students` VALUES ('13', '小高', '13', '1', '4', '123456');
INSERT INTO `students` VALUES ('14', '小陶', '14', '2', '4', '123456');
INSERT INTO `students` VALUES ('15', '小薛', '15', '1', '4', '123456');
INSERT INTO `students` VALUES ('16', '小龚', '16', '2', '4', '123456');
INSERT INTO `students` VALUES ('232', '15', '23', '2', '2332', '123456');
INSERT INTO `students` VALUES ('233', 'ccc', 'sdsd', '1', '1', '123456');
INSERT INTO `students` VALUES ('234', 'sdsd', 'sdsdsd', '1', '1', '123456');

-- ----------------------------
-- Table structure for teachers
-- ----------------------------
DROP TABLE IF EXISTS `teachers`;
CREATE TABLE `teachers` (
  `t_id` int(20) NOT NULL,
  `t_name` varchar(10) NOT NULL,
  `t_dept_id` int(10) NOT NULL,
  `t_password` varchar(20) NOT NULL DEFAULT '123456',
  PRIMARY KEY (`t_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teachers
-- ----------------------------
INSERT INTO `teachers` VALUES ('4', 'æŽè€å¸ˆ', '3', '123456');
INSERT INTO `teachers` VALUES ('5', '周老师', '2', '123456');
INSERT INTO `teachers` VALUES ('6', '吴老师', '3', '123456');
INSERT INTO `teachers` VALUES ('7', '郑老师', '3', '123456');
INSERT INTO `teachers` VALUES ('8', '朱老师', '3', '123456');
INSERT INTO `teachers` VALUES ('9', '程老师', '3', '123456');
INSERT INTO `teachers` VALUES ('10', '徐老师', '3', '123456');
INSERT INTO `teachers` VALUES ('11', '张老师', '3', '123456');
INSERT INTO `teachers` VALUES ('12', '熊老师', '3', '123456');
INSERT INTO `teachers` VALUES ('13', '高老师', '4', '123456');
INSERT INTO `teachers` VALUES ('14', '陶老师', '4', '123456');
INSERT INTO `teachers` VALUES ('15', '龚老师', '4', '123456');
INSERT INTO `teachers` VALUES ('16', '薛老师', '4', '123456');
INSERT INTO `teachers` VALUES ('123', '123', '123', '123456');
INSERT INTO `teachers` VALUES ('1234', '1234', '123', '123456');
INSERT INTO `teachers` VALUES ('23', 'çŽ‹è€å¸ˆ', '1', '123456');

-- ----------------------------
-- Table structure for times
-- ----------------------------
DROP TABLE IF EXISTS `times`;
CREATE TABLE `times` (
  `time_id` int(10) NOT NULL,
  `time_name` varchar(20) NOT NULL,
  PRIMARY KEY (`time_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of times
-- ----------------------------
INSERT INTO `times` VALUES ('1', '8:00~8:50');
INSERT INTO `times` VALUES ('2', '9:00~9:50');
INSERT INTO `times` VALUES ('3', '10:10~11:00');
INSERT INTO `times` VALUES ('4', '11:10~12:00');
INSERT INTO `times` VALUES ('5', '13:30~14:20');
INSERT INTO `times` VALUES ('6', '14:30~15:20');
INSERT INTO `times` VALUES ('7', '15:30~16:20');
INSERT INTO `times` VALUES ('8', '16:30~17:20');

-- ----------------------------
-- Table structure for week
-- ----------------------------
DROP TABLE IF EXISTS `week`;
CREATE TABLE `week` (
  `w_id` int(11) NOT NULL,
  `week` varchar(10) NOT NULL,
  PRIMARY KEY (`w_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of week
-- ----------------------------
INSERT INTO `week` VALUES ('1', 'Mon');
INSERT INTO `week` VALUES ('2', 'Tues');
INSERT INTO `week` VALUES ('3', 'Wed');
INSERT INTO `week` VALUES ('4', 'Thu');
INSERT INTO `week` VALUES ('5', 'Fri');
INSERT INTO `week` VALUES ('6', 'Sat');
INSERT INTO `week` VALUES ('7', 'Sun');
