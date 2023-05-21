/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS `easypass` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci */;
USE `easypass`;

CREATE TABLE IF NOT EXISTS `admin` (
  `adm_id` int(11) NOT NULL AUTO_INCREMENT,
  `adm_nome` varchar(45) NOT NULL,
  `adm_email` varchar(45) NOT NULL,
  `adm_senha` varchar(45) NOT NULL,
  PRIMARY KEY (`adm_id`),
  UNIQUE KEY `adm_email_UNIQUE` (`adm_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `bus` (
  `bus_id` int(11) NOT NULL,
  `bus_nome` varchar(45) NOT NULL,
  `bus_num` varchar(45) NOT NULL,
  `bus_placa` varchar(7) NOT NULL,
  `bus_fabricacao` date NOT NULL,
  `bus_status` varchar(45) NOT NULL,
  `bus_modelo` varchar(45) NOT NULL,
  `bus_tarifa` decimal(10,0) NOT NULL,
  `bussines_bus_buss_CNPJ` varchar(14) NOT NULL,
  PRIMARY KEY (`bus_id`,`bussines_bus_buss_CNPJ`),
  UNIQUE KEY `bus_placa_UNIQUE` (`bus_placa`),
  KEY `fk_bus_bussines_bus1_idx` (`bussines_bus_buss_CNPJ`),
  CONSTRAINT `fk_bus_bussines_bus1` FOREIGN KEY (`bussines_bus_buss_CNPJ`) REFERENCES `bussines_bus` (`buss_CNPJ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `bussines` (
  `buss_CNPJ` varchar(14) NOT NULL,
  `buss_nome` varchar(45) NOT NULL,
  `buss_contato` varchar(11) NOT NULL,
  `buss_FotoPerfil` blob DEFAULT NULL,
  `buss_CEP` varchar(9) NOT NULL,
  `buss_endUF` varchar(2) NOT NULL,
  `buss_endbairro` varchar(45) NOT NULL,
  `buss_endrua` varchar(45) NOT NULL,
  `buss_endnum` varchar(45) NOT NULL,
  `buss_endcomplemento` varchar(45) DEFAULT NULL,
  `buss_endcidade` varchar(45) NOT NULL,
  PRIMARY KEY (`buss_CNPJ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `bussines_bus` (
  `buss_CNPJ` varchar(14) NOT NULL,
  `buss_nome` varchar(45) NOT NULL,
  `buss_contato` varchar(11) NOT NULL,
  `buss_FotoPerfil` blob DEFAULT NULL,
  `buss_CEP` varchar(9) NOT NULL,
  `buss_endUF` varchar(2) NOT NULL,
  `buss_endbairro` varchar(45) NOT NULL,
  `buss_endrua` varchar(45) NOT NULL,
  `buss_endnum` varchar(45) NOT NULL,
  `buss_endcomplemento` varchar(45) DEFAULT NULL,
  `buss_endcidade` varchar(45) NOT NULL,
  PRIMARY KEY (`buss_CNPJ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `bus_route` (
  `route_id` int(11) NOT NULL AUTO_INCREMENT,
  `rote_nome` varchar(45) NOT NULL,
  `route_num` varchar(45) NOT NULL,
  `bus_bus_id` int(11) NOT NULL,
  `bus_bussines_bus_buss_CNPJ` varchar(14) NOT NULL,
  PRIMARY KEY (`route_id`,`bus_bus_id`,`bus_bussines_bus_buss_CNPJ`),
  KEY `fk_bus_route_bus1_idx` (`bus_bus_id`,`bus_bussines_bus_buss_CNPJ`),
  CONSTRAINT `fk_bus_route_bus1` FOREIGN KEY (`bus_bus_id`, `bus_bussines_bus_buss_CNPJ`) REFERENCES `bus` (`bus_id`, `bussines_bus_buss_CNPJ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `bus_stop` (
  `stop_id` int(11) NOT NULL AUTO_INCREMENT,
  `stop_CEP` varchar(9) NOT NULL,
  `stop_UF` varchar(2) NOT NULL,
  `stop_endbairro` varchar(45) NOT NULL,
  `stop_endrua` varchar(45) NOT NULL,
  `stop_endnum` varchar(45) NOT NULL,
  `stop_endcomplemento` varchar(45) DEFAULT NULL,
  `stop_endcidade` varchar(45) NOT NULL,
  PRIMARY KEY (`stop_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `card` (
  `card_id` varchar(16) NOT NULL,
  `card_validade` date NOT NULL,
  `card_saldo` decimal(10,0) DEFAULT NULL,
  `card_tipo` varchar(45) NOT NULL,
  `card_status` varchar(45) NOT NULL,
  `card_ultimouso` varchar(45) DEFAULT NULL,
  `card_ultimoonibus` varchar(45) DEFAULT NULL,
  `request_card_req_id` int(11) NOT NULL,
  `request_card_user_CPF` varchar(45) NOT NULL,
  PRIMARY KEY (`card_id`,`request_card_req_id`,`request_card_user_CPF`),
  KEY `fk_card_request_card1_idx` (`request_card_req_id`),
  CONSTRAINT `fk_card_request_card1` FOREIGN KEY (`request_card_req_id`) REFERENCES `request_card` (`req_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `driver_bus` (
  `driver_CPF` varchar(11) NOT NULL,
  `driver_RG` varchar(45) NOT NULL,
  `driver_nome` varchar(45) NOT NULL,
  `driver_nascimento` date NOT NULL,
  `driver_admissao` date NOT NULL,
  `driver_demissao` date DEFAULT NULL,
  PRIMARY KEY (`driver_CPF`),
  UNIQUE KEY `driver_RG_UNIQUE` (`driver_RG`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `list_students` (
  `stud_matricula` int(11) NOT NULL,
  `stud_CPF` varchar(11) NOT NULL,
  `stud_RG` varchar(7) NOT NULL,
  `stud_name` varchar(45) NOT NULL,
  `stud_nascimento` varchar(45) NOT NULL,
  `schools_sch_CNPJ` varchar(14) NOT NULL,
  PRIMARY KEY (`stud_matricula`,`schools_sch_CNPJ`),
  UNIQUE KEY `stud_CPF_UNIQUE` (`stud_CPF`),
  UNIQUE KEY `stud_RG_UNIQUE` (`stud_RG`),
  KEY `fk_list_students_schools_idx` (`schools_sch_CNPJ`),
  CONSTRAINT `fk_list_students_schools` FOREIGN KEY (`schools_sch_CNPJ`) REFERENCES `schools` (`sch_CNPJ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `list_worker` (
  `work_CPF` varchar(11) NOT NULL,
  `work_RG` varchar(7) NOT NULL,
  `work_nome` varchar(45) NOT NULL,
  `work_nascimento` varchar(45) NOT NULL,
  `bussines_buss_CNPJ` varchar(14) NOT NULL,
  PRIMARY KEY (`work_CPF`,`bussines_buss_CNPJ`),
  UNIQUE KEY `stud_CPF_UNIQUE` (`work_CPF`),
  UNIQUE KEY `stud_RG_UNIQUE` (`work_RG`),
  KEY `fk_list_worker_bussines1_idx` (`bussines_buss_CNPJ`),
  CONSTRAINT `fk_list_worker_bussines1` FOREIGN KEY (`bussines_buss_CNPJ`) REFERENCES `bussines` (`buss_CNPJ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `request_card` (
  `req_id` int(11) NOT NULL AUTO_INCREMENT,
  `req_data` date NOT NULL,
  `req_envio` date DEFAULT NULL,
  `req_TipoCartao` varchar(45) NOT NULL,
  `user_user_CPF` varchar(11) NOT NULL,
  PRIMARY KEY (`req_id`),
  KEY `fk_request_card_user1_idx` (`user_user_CPF`),
  CONSTRAINT `fk_request_card_user1` FOREIGN KEY (`user_user_CPF`) REFERENCES `user` (`user_CPF`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `routes` (
  `bus_route_route_id` int(11) NOT NULL,
  `bus_route_bus_bus_id` int(11) NOT NULL,
  `bus_route_bus_bussines_bus_buss_CNPJ` varchar(14) NOT NULL,
  `bus_stop_stop_id` int(11) NOT NULL,
  PRIMARY KEY (`bus_route_route_id`,`bus_route_bus_bus_id`,`bus_route_bus_bussines_bus_buss_CNPJ`,`bus_stop_stop_id`),
  KEY `fk_bus_route_has_bus_stop_bus_stop1_idx` (`bus_stop_stop_id`),
  KEY `fk_bus_route_has_bus_stop_bus_route1_idx` (`bus_route_route_id`,`bus_route_bus_bus_id`,`bus_route_bus_bussines_bus_buss_CNPJ`),
  CONSTRAINT `fk_bus_route_has_bus_stop_bus_route1` FOREIGN KEY (`bus_route_route_id`, `bus_route_bus_bus_id`, `bus_route_bus_bussines_bus_buss_CNPJ`) REFERENCES `bus_route` (`route_id`, `bus_bus_id`, `bus_bussines_bus_buss_CNPJ`),
  CONSTRAINT `fk_bus_route_has_bus_stop_bus_stop1` FOREIGN KEY (`bus_stop_stop_id`) REFERENCES `bus_stop` (`stop_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `sac` (
  `sac_ticket` varchar(9) NOT NULL,
  `sac_data` datetime NOT NULL,
  `user_user_CPF` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`sac_ticket`),
  KEY `fk_sac_user_default1_idx` (`user_user_CPF`),
  CONSTRAINT `fk_sac_user1` FOREIGN KEY (`user_user_CPF`) REFERENCES `user` (`user_CPF`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `sac_message` (
  `sacmen_id` int(11) NOT NULL AUTO_INCREMENT,
  `sacmen_texto` longtext NOT NULL,
  `user_user_CPF` varchar(11) DEFAULT NULL,
  `admin_adm_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`sacmen_id`),
  KEY `fk_sac_message_user1_idx` (`user_user_CPF`),
  KEY `fk_sac_message_admin1_idx` (`admin_adm_id`),
  CONSTRAINT `fk_sac_message_admin1` FOREIGN KEY (`admin_adm_id`) REFERENCES `admin` (`adm_id`),
  CONSTRAINT `fk_sac_message_user1` FOREIGN KEY (`user_user_CPF`) REFERENCES `user` (`user_CPF`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `schools` (
  `sch_CNPJ` varchar(14) NOT NULL,
  `sch_nome` varchar(45) NOT NULL,
  `sch_contato` varchar(11) NOT NULL,
  `sch_FotoPerfil` blob DEFAULT NULL,
  `sch_CEP` varchar(9) NOT NULL,
  `sch_endUF` varchar(2) NOT NULL,
  `sch_endbairro` varchar(45) NOT NULL,
  `sch_endrua` varchar(45) NOT NULL,
  `sch_endnum` varchar(45) NOT NULL,
  `sch_endcomplemento` varchar(45) DEFAULT NULL,
  `sch_endcidade` varchar(45) NOT NULL,
  PRIMARY KEY (`sch_CNPJ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `turn_bus` (
  `turn_id` int(11) NOT NULL AUTO_INCREMENT,
  `bus_bus_id` int(11) NOT NULL,
  `bus_bussines_bus_buss_CNPJ` varchar(14) NOT NULL,
  `driver_bus_driver_CPF` varchar(11) NOT NULL,
  `turn_inicio` time NOT NULL,
  `turn_fim` time DEFAULT NULL,
  PRIMARY KEY (`turn_id`,`bus_bus_id`,`bus_bussines_bus_buss_CNPJ`,`driver_bus_driver_CPF`),
  KEY `fk_bus_has_driver_bus_driver_bus1_idx` (`driver_bus_driver_CPF`),
  KEY `fk_bus_has_driver_bus_bus1_idx` (`bus_bus_id`,`bus_bussines_bus_buss_CNPJ`),
  CONSTRAINT `fk_bus_has_driver_bus_bus1` FOREIGN KEY (`bus_bus_id`, `bus_bussines_bus_buss_CNPJ`) REFERENCES `bus` (`bus_id`, `bussines_bus_buss_CNPJ`),
  CONSTRAINT `fk_bus_has_driver_bus_driver_bus1` FOREIGN KEY (`driver_bus_driver_CPF`) REFERENCES `driver_bus` (`driver_CPF`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `user` (
  `user_CPF` varchar(11) NOT NULL,
  `user_RG` varchar(7) NOT NULL,
  `user_nome` varchar(45) NOT NULL,
  `user_email` varchar(45) NOT NULL,
  `user_senha` varchar(45) NOT NULL,
  `user_nascimento` date NOT NULL,
  `user_FotoPerfil` blob DEFAULT NULL,
  `user_FotoRGFrente` blob DEFAULT NULL,
  `user_FotoRGTras` blob DEFAULT NULL,
  `user_endCEP` varchar(9) NOT NULL,
  `user_endUF` varchar(2) NOT NULL,
  `user_endbairro` varchar(45) NOT NULL,
  `user_endrua` varchar(45) NOT NULL,
  `user_endnum` varchar(45) NOT NULL,
  `user_endcomplemento` varchar(45) DEFAULT NULL,
  `user_endcidade` varchar(45) NOT NULL,
  `user_tipo` enum('default','student','worker') NOT NULL,
  `list_worker_work_CPF` varchar(11) DEFAULT NULL,
  `list_worker_bussines_buss_CNPJ` varchar(14) DEFAULT NULL,
  `list_students_stud_matricula` int(11) DEFAULT NULL,
  `list_students_schools_sch_CNPJ` varchar(14) DEFAULT NULL,
  PRIMARY KEY (`user_CPF`),
  UNIQUE KEY `user_RG_UNIQUE` (`user_RG`),
  UNIQUE KEY `user_email_UNIQUE` (`user_email`),
  KEY `fk_user_student_list_students1_idx` (`list_students_stud_matricula`,`list_students_schools_sch_CNPJ`),
  KEY `fk_user_worker_list_worker1_idx` (`list_worker_work_CPF`,`list_worker_bussines_buss_CNPJ`),
  CONSTRAINT `fk_user_student_list_students1` FOREIGN KEY (`list_students_stud_matricula`, `list_students_schools_sch_CNPJ`) REFERENCES `list_students` (`stud_matricula`, `schools_sch_CNPJ`),
  CONSTRAINT `fk_user_worker_list_worker1` FOREIGN KEY (`list_worker_work_CPF`, `list_worker_bussines_buss_CNPJ`) REFERENCES `list_worker` (`work_CPF`, `bussines_buss_CNPJ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `validation_card` (
  `val_id` int(11) NOT NULL AUTO_INCREMENT,
  `card_card_id` varchar(16) NOT NULL,
  `card_request_card_req_id` int(11) NOT NULL,
  `card_request_card_user_CPF` varchar(45) NOT NULL,
  `turn_bus_turn_id` int(11) NOT NULL,
  `turn_bus_bus_bus_id` int(11) NOT NULL,
  `turn_bus_bus_bussines_bus_buss_CNPJ` varchar(14) NOT NULL,
  `turn_bus_driver_bus_driver_CPF` varchar(11) NOT NULL,
  `val_datetime` datetime NOT NULL,
  PRIMARY KEY (`val_id`,`card_card_id`,`card_request_card_req_id`,`card_request_card_user_CPF`,`turn_bus_turn_id`,`turn_bus_bus_bus_id`,`turn_bus_bus_bussines_bus_buss_CNPJ`,`turn_bus_driver_bus_driver_CPF`),
  KEY `fk_card_has_turn_bus_turn_bus1_idx` (`turn_bus_turn_id`,`turn_bus_bus_bus_id`,`turn_bus_bus_bussines_bus_buss_CNPJ`,`turn_bus_driver_bus_driver_CPF`),
  KEY `fk_card_has_turn_bus_card1_idx` (`card_card_id`,`card_request_card_req_id`,`card_request_card_user_CPF`),
  CONSTRAINT `fk_card_has_turn_bus_card1` FOREIGN KEY (`card_card_id`, `card_request_card_req_id`, `card_request_card_user_CPF`) REFERENCES `card` (`card_id`, `request_card_req_id`, `request_card_user_CPF`),
  CONSTRAINT `fk_card_has_turn_bus_turn_bus1` FOREIGN KEY (`turn_bus_turn_id`, `turn_bus_bus_bus_id`, `turn_bus_bus_bussines_bus_buss_CNPJ`, `turn_bus_driver_bus_driver_CPF`) REFERENCES `turn_bus` (`turn_id`, `bus_bus_id`, `bus_bussines_bus_buss_CNPJ`, `driver_bus_driver_CPF`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
