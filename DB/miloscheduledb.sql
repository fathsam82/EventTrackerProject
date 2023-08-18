-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema miloscheduledb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `miloscheduledb` ;

-- -----------------------------------------------------
-- Schema miloscheduledb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `miloscheduledb` DEFAULT CHARACTER SET utf8 ;
USE `miloscheduledb` ;

-- -----------------------------------------------------
-- Table `task_type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `task_type` ;

CREATE TABLE IF NOT EXISTS `task_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pet_task`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pet_task` ;

CREATE TABLE IF NOT EXISTS `pet_task` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` TEXT NULL,
  `frequency` VARCHAR(200) NULL,
  `task_type_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pet_task_task_type_idx` (`task_type_id` ASC),
  CONSTRAINT `fk_pet_task_task_type`
    FOREIGN KEY (`task_type_id`)
    REFERENCES `task_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS miloscheduleuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'miloscheduleuser'@'localhost' IDENTIFIED BY 'miloscheduleuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'miloscheduleuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `task_type`
-- -----------------------------------------------------
START TRANSACTION;
USE `miloscheduledb`;
INSERT INTO `task_type` (`id`, `name`) VALUES (1, 'Meal');
INSERT INTO `task_type` (`id`, `name`) VALUES (2, 'Walk');
INSERT INTO `task_type` (`id`, `name`) VALUES (3, 'Play');
INSERT INTO `task_type` (`id`, `name`) VALUES (4, 'Groom');
INSERT INTO `task_type` (`id`, `name`) VALUES (5, 'Vet Visit');

COMMIT;


-- -----------------------------------------------------
-- Data for table `pet_task`
-- -----------------------------------------------------
START TRANSACTION;
USE `miloscheduledb`;
INSERT INTO `pet_task` (`id`, `name`, `description`, `frequency`, `task_type_id`) VALUES (1, 'Breakfast', '1 cup of kibble', 'Once a day', 1);
INSERT INTO `pet_task` (`id`, `name`, `description`, `frequency`, `task_type_id`) VALUES (2, 'Morning treats', '1 Dental Bone', 'Once a day', 1);
INSERT INTO `pet_task` (`id`, `name`, `description`, `frequency`, `task_type_id`) VALUES (3, 'Afternoon treats', '1 Dental Bone', 'Once a day', 1);
INSERT INTO `pet_task` (`id`, `name`, `description`, `frequency`, `task_type_id`) VALUES (4, 'Dinner', '1 cup of kibble', 'Once a day', 1);
INSERT INTO `pet_task` (`id`, `name`, `description`, `frequency`, `task_type_id`) VALUES (5, 'Weekly canned dinner', '1 can of gormet dog food', 'Once a week', 1);
INSERT INTO `pet_task` (`id`, `name`, `description`, `frequency`, `task_type_id`) VALUES (6, 'Morning walk', '20 minute walk around the neighborhood', 'Once a day', 2);
INSERT INTO `pet_task` (`id`, `name`, `description`, `frequency`, `task_type_id`) VALUES (7, 'Evening walk', '20 minute walk around the neighborhood', 'Once a day', 2);
INSERT INTO `pet_task` (`id`, `name`, `description`, `frequency`, `task_type_id`) VALUES (8, 'Afternoon potty break', '10 minute potty break in the backyard', 'Once a day', 2);
INSERT INTO `pet_task` (`id`, `name`, `description`, `frequency`, `task_type_id`) VALUES (9, 'Play fetch', '10 minutes of fetch in backyard', 'Once a day', 3);
INSERT INTO `pet_task` (`id`, `name`, `description`, `frequency`, `task_type_id`) VALUES (10, 'Hiking', '2 hour hike in the mountains', 'Once a month', 3);
INSERT INTO `pet_task` (`id`, `name`, `description`, `frequency`, `task_type_id`) VALUES (11, 'Brushing', '30 minutes of brushing', 'Once a week', 4);
INSERT INTO `pet_task` (`id`, `name`, `description`, `frequency`, `task_type_id`) VALUES (12, 'Nail clipping', '15 minutes of clipping', 'Every other month', 4);
INSERT INTO `pet_task` (`id`, `name`, `description`, `frequency`, `task_type_id`) VALUES (13, 'Teeth brushing', '15 minutes of teeth brushing', 'Twice a week', 4);
INSERT INTO `pet_task` (`id`, `name`, `description`, `frequency`, `task_type_id`) VALUES (14, 'Vet visit', '1 hour vet visit', 'Once every few months', 5);

COMMIT;

