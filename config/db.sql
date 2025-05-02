-- Active: 1745317111693@@127.0.0.1@3306@n21

CREATE TABLE `User`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL
);

CREATE TABLE `address`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT NOT NULL,
    `region` ENUM('') NOT NULL,
    `street` VARCHAR(255) NOT NULL,
    `house_number` BIGINT NOT NULL,
    `intercom_number` TINYINT NOT NULL,
    `intercom_code` VARCHAR(255) NOT NULL,
    `home_num` BIGINT NOT NULL,
    `location` VARCHAR(255) NOT NULL
);
CREATE TABLE `phone`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `adress_id` BIGINT NOT NULL,
    `number` BIGINT NOT NULL,
    `owner_name` VARCHAR(255) NOT NULL
);

CREATE TABLE `orders`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT NOT NULL,
    `deliver_id` BIGINT NOT NULL,
    `water_count` BIGINT NOT NULL,
    `total_price` DECIMAL(8, 2) NOT NULL,
    `date` DATETIME NOT NULL,
    `promised_time` BIGINT NOT NULL,
    `status` ENUM(
        'pending',
        'confirmed',
        'delivered',
        'cancelled'
    ) NOT NULL
);
CREATE TABLE `deliver`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(255) NOT NULL,
    `car_model` VARCHAR(255) NOT NULL,
    `current_location` VARCHAR(255) NOT NULL
);
CREATE TABLE `payment`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `order_id` BIGINT NOT NULL,
    `type` ENUM('cash', 'card') NOT NULL,
    `status` ENUM('pending', 'completed', 'failed') NOT NULL
);



SELECT DISTINCT u.id, u.first_name, u.last_name, u.phone_number, u.email
FROM `orders` o
JOIN `User` u ON o.user_id = u.id
WHERE o.date BETWEEN '2024-11-01' AND '2025-04-30';

SELECT o.*
FROM `orders` o
JOIN `User` u ON o.user_id = u.id
WHERE u.first_name = 'Elbek'
AND TIMESTAMPDIFF(MONTH, o.date, CURDATE()) <= 6
;