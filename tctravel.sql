-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2022 at 04:46 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tctravel`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `lat` float DEFAULT NULL,
  `lng` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `name`, `address`, `lat`, `lng`) VALUES
(1, 'Cầu Long Biên', 'Cầu Long Biên, Phúc xá, Long Biên, Hà Nội, Việt Nam', 21.0419, 105.854),
(2, 'Hồ Hoàn Kiếm', 'Hàng Trống, Hoàn Kiếm, Hà Nội, Việt Nam', 21.0287, 105.852),
(3, 'Phố Đi Bộ Hồ Gươm', 'P. Đinh Tiên Hoàng, Hàng Trống, Hoàn Kiếm, Hà Nội, Việt Nam', 21.0319, 105.852),
(4, 'Bia Phố Cổ Tạ Hiện', '18 P. Tạ Hiện, Hàng Buồm, Hoàn Kiếm, Hà Nội, Việt Nam', 21.0349, 105.852),
(5, 'Phố ẩm thực Hàng Buồm', '45 B P. Lương Ngọc Quyến, Hàng Buồm, Hoàn Kiếm, Hà Nội, Việt Nam', 21.0351, 105.852),
(6, 'Phố sách Đinh Lễ', '5 P.Đinh Lễ, Tràng Tiền, Hoàn Kiếm, Hà Nội 100000, Việt Nam', 21.0258, 105.854),
(7, 'Phố sách Hà Nội', 'Phố P. 19 Tháng 12, Trần Hưng Đạo, Hoàn Kiếm, Hà Nội, Việt Nam', 21.0257, 105.848),
(8, 'Nhà Thờ Lớn Hà Nội', 'Hàng Trống, Hoàn Kiếm, Hà Nội, Việt Nam', 21.0288, 105.849),
(9, 'Chợ Đồng Xuân', 'Chợ Đồng Xuân, Đồng Xuân, Hoàn Kiếm, Hà Nội, Việt Nam', 21.0381, 105.849),
(10, 'Vincom Center Bà Triệu', '191 Bà Triệu, Lê Đại Hành, Hai Bà Trưng, Hà Nội Hà Nội Hanoi City, 100000, Việt Nam', 21.0111, 105.849),
(11, 'Vinhomes Royal City', 'Ng. 72 Nguyễn Trãi, Thượng Đình, Thanh Xuân, Hà Nội, Việt Nam', 21.0008, 105.816),
(12, 'Khu đô thị Times City', '458 phố Minh Khai, phường Vĩnh Tuy, quận Hai Bà Trưng', 20.9958, 105.868),
(13, 'Vincom Center Nguyễn Chí Thanh', '54A Đ. Nguyễn Chí Thanh, Láng Thượng, Đống Đa, Hà Nội, Việt Nam', 21.0235, 105.809),
(14, 'Vincom Phạm Ngọc Thạch', '02 P.Phạm Ngọc Thạch, Kim Liên, Đống Đa, Hà Nội 11000, Việt Nam', 21.0064, 105.832),
(15, 'Vincom Plaza Long Biên', '3W28+6HP, P. Chu Huy Mân, Phúc Lợi, Long Biên, Hà Nội, Việt Nam', 21.0507, 105.916),
(16, 'Vincom Center Trần Duy Hưng', '119 Đ. Trần Duy Hưng, Trung Hoà, Cầu Giấy, Hà Nội 100000, Việt Nam', 21.0064, 105.795),
(17, 'Vincom Plaza Bắc Từ Liêm', '234 Phạm Văn Đồng, Cổ Nhuế, Bắc Từ Liêm, Hà Nội, Việt Nam', 21.0529, 105.781),
(18, 'MM Mega Market Thăng Long', '236 Phạm Văn Đồng, Cổ Nhuế, Bắc Từ Liêm, Hà Nội, Việt Nam', 21.0545, 105.78),
(19, 'Hồ Tây', 'Tây Hồ, Hà Nội, Việt Nam', 21.0543, 105.825),
(20, 'Nhà hát Lớn Hà Nội', '1 Tràng Tiền, Phan Chu Trinh, Hoàn Kiếm, Hà Nội, Việt Nam', 21.0243, 105.858),
(21, 'Tràng Tiền Plaza', '24 P. Hai Bà Trưng, Tràng Tiền, Hoàn Kiếm, Hà Nội 100000, Việt Nam', 21.0244, 105.853),
(22, 'Lăng Chủ tịch Hồ Chí Minh', '8 Hùng Vương, Điện Biên, Ba Đình, Hà Nội 100000, Việt Nam', 21.0371, 105.835),
(23, 'Hoàng Thành Thăng Long', '19C Hoàng Diệu, Điện Biên, Ba Đình, Hà Nội 100000, Việt Nam', 21.0354, 105.84),
(24, 'Văn Miếu – Quốc Tử Giám', '58 P. Quốc Tử Giám, Văn Miếu, Đống Đa, Hà Nội 100000, Việt Nam', 21.0274, 105.836),
(25, 'Di tích Nhà tù Hỏa Lò', '1 P. Hoả Lò, Trần Hưng Đạo, Hoàn Kiếm, Hà Nội, Việt Nam', 21.0254, 105.847),
(26, 'Vườn hoa Lênin', '28A Điện Biên Phủ, Điện Biên, Ba Đình, Hà Nội 100000, Việt Nam', 21.0315, 105.84),
(27, 'Chợ Hoa Quảng Bá', '236 Đ. Âu Cơ, Quảng An, Tây Hồ, Hà Nội 100000, Việt Nam', 21.068, 105.827),
(28, 'Phố đi bộ Trịnh Công Sơn', 'P. Trịnh Công Sơn, Nhật Tân, Tây Hồ, Hà Nội, Việt Nam', 21.0781, 105.817),
(29, 'Bãi Đá Sông Hồng', 'Ngõ 264 Âu Cơ, Nhật Tân, Tây Hồ, Hà Nội 100000, Việt Nam', 21.079, 105.835),
(30, 'Công viên nước Hồ Tây', '614 Đ. Lạc Long Quân, Nhật Tân, Tây Hồ, Hà Nội, Việt Nam', 21.0734, 105.817),
(31, 'Indochina Plaza Hanoi Residences', '241 Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà Nội 100000, Việt Nam', 21.036, 105.783),
(32, 'Keangnam Hanoi Landmark Tower', 'Mễ Trì, Từ Liêm, Hà Nội, Việt Nam', 21.0168, 105.784),
(33, 'Lotte Center Hà Nội', '54 P. Liễu Giai, Ngọc Khánh, Ba Đình, Hà Nội, Việt Nam', 21.0319, 105.813),
(34, 'Công viên Thủ Lệ', 'Đ. Bưởi, Thủ Lệ, Ba Đình, Hà Nội 100000, Việt Nam', 21.0306, 105.806),
(35, 'Công viên Thống Nhất', '354A Đ. Lê Duẩn, Phương Liên, Đống Đa, Hà Nội, Việt Nam', 21.0111, 105.842),
(36, 'Công viên Cầu Giấy', 'P. Duy Tân, Dịch Vọng, Cầu Giấy, Hà Nội, Việt Nam', 21.0284, 105.791),
(37, 'Chùa Trấn Quốc', '46 Đ. Thanh Niên, Trúc Bạch, Tây Hồ, Hà Nội, Việt Nam', 21.0479, 105.837),
(38, 'Đền Quán Thánh', 'Đ. Thanh Niên, Quán Thánh, Ba Đình, Hà Nội 118810, Việt Nam', 21.043, 105.836),
(39, 'Chùa Hà', '96 P. Chùa Hà, Dịch Vọng, Cầu Giấy, Hà Nội, Việt Nam', 21.0369, 105.795),
(40, 'Công viên Hòa Bình', 'Đường Phạm Văn Đồng, Xuân Đỉnh, Bắc Từ Liêm, Hà Nội 100000, Việt Nam', 21.0638, 105.788),
(41, 'Công viên Yên Sở', 'QL1A, Gamuda Central, Hoàng Mai, Hà Nội 100000, Việt Nam', 20.9631, 105.854),
(42, 'Aeon Mall Hà Đông', 'Dương Nội, Hà Đông, Hà Nội, Việt Nam', 20.9899, 105.751),
(43, 'Công Viên Thiên Đường Bảo Sơn', 'Km5+200, Đ. Lê Trọng Tấn, An Khánh, Hoài Đức, Hà Nội, Việt Nam', 20.9994, 105.734),
(44, 'Con Đường Gốm Sứ', '11 P. Hàng Vôi, Lý Thái Tổ, Hoàn Kiếm, Hà Nội, Việt Nam', 21.0302, 105.857),
(45, 'cầu Nhật Tân', 'Hà Nội, Việt Nam', 21.0934, 105.821),
(46, 'Sân vận động Quốc gia Mỹ Đình', '1 Đ. Lê Đức Thọ, Mỹ Đình, Nam Từ Liêm, Hà Nội, Việt Nam', 21.0206, 105.764),
(47, 'Rạp Chiếu Phim Quốc Gia', 'Thái Hà, Chợ Dừa, Hà Nội, Thành Công Đống Đa Hà Nội, Việt Nam', 21.0161, 105.816),
(48, 'Rạp Beta Thanh Xuân', 'Tầng hầm B1, tòa nhà Golden West, 2 P. Lê Văn Thiêm, Nhân Chính, Thanh Xuân, Hà Nội 100000, Việt Nam', 21.0026, 105.802),
(49, 'Big C Thăng Long', '222 Đ. Trần Duy Hưng, Trung Hoà, Cầu Giấy, Hà Nội 100000, Việt Nam', 21.0075, 105.793),
(50, 'Big C Long Biên', 'Tầng Hầm TTTM Savico Megamall, 7-9 Nguyễn Văn Linh, Việt Hưng, Long Biên, Hà Nội, Việt Nam', 21.0508, 105.894),
(51, 'Đại học Quốc gia Hà Nội', 'Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam', 21.0377, 105.782),
(52, 'Đại Học Bách Khoa Hà Nội', '1 Giải Phóng, Bách Khoa, Hai Bà Trưng, Hà Nội, Việt Nam', 21.0053, 105.842),
(53, 'Đại học kinh tế quốc dân', '624 P. Minh Khai, Vĩnh Phú, Hai Bà Trưng, Hà Nội, Việt Nam', 20.9992, 105.871),
(54, 'Trường Đại học Ngoại thương', '91 P. Chùa Láng, Láng Thượng, Đống Đa, Hà Nội, Việt Nam', 21.0231, 105.805),
(55, 'Bảo tàng Dân tộc học Việt Nam', 'Đ. Nguyễn Văn Huyên, Quan Hoa, Cầu Giấy, Hà Nội 100000, Việt Nam', 21.0404, 105.799),
(56, 'Cung Văn hóa Lao động Hữu nghị Việt - Xô', '91 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội, Việt Nam', 21.0227, 105.844),
(57, 'Bốt Nước Hàng Đậu', 'Bốt Hàng Đậu, Quán Thánh, Hoàn Kiếm, Hà Nội, Việt Nam', 21.0403, 105.847),
(58, 'phố Hàng Mã', 'Hàng Mã, Hoàn Kiếm, Hà Nội, Việt Nam', 21.0367, 105.846);

-- --------------------------------------------------------

--
-- Table structure for table `collections`
--

CREATE TABLE `collections` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `url` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `experiences`
--

CREATE TABLE `experiences` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ratings`
--

CREATE TABLE `ratings` (
  `user_id` int(11) NOT NULL,
  `addr_id` int(11) NOT NULL,
  `rating` int(11) DEFAULT NULL,
  `weather` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `partner` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ratings`
--

INSERT INTO `ratings` (`user_id`, `addr_id`, `rating`, `weather`, `time`, `partner`, `description`, `id`) VALUES
(1, 1, 5, 'sunny', 'weekday', 'friend', NULL, 1),
(1, 1, 5, 'sunny', 'weekday', 'alone', NULL, 2),
(3, 1, 5, 'sunny', 'weekday', 'friend', NULL, 3),
(3, 1, 5, 'sunny', 'weekday', 'alone', NULL, 4),
(1, 2, 5, 'sunny', 'weekend', 'friend', NULL, 5),
(1, 2, 5, 'nice', 'holiday', 'family', NULL, 6),
(1, 2, 4, 'nice', 'weekend', 'alone', NULL, 7),
(1, 2, 5, 'nice', 'weekend', 'lover', NULL, 8),
(1, 2, 2, 'rainy', 'weekday', 'family', NULL, 9),
(1, 3, 1, 'rainy', 'weekday', 'alone', NULL, 10),
(1, 3, 3, 'cloudy', 'holiday', 'friend', NULL, 11),
(1, 3, 4, 'sunny', 'weekday', 'lover', NULL, 12),
(1, 3, 5, 'nice', 'weekend', 'friend', NULL, 13),
(1, 3, 4, 'nice', 'weekend', 'family', NULL, 14),
(1, 3, 2, 'rainy', 'weekday', 'family', NULL, 15),
(1, 4, 5, 'nice', 'weekend', 'friend', NULL, 16),
(1, 4, 4, 'sunny', 'weekend', 'alone', NULL, 17),
(1, 4, 1, 'rainy', 'holiday', 'family', NULL, 18),
(1, 4, 2, 'rainy', 'weekend', 'lover', NULL, 19),
(3, 4, 3, 'cloudy', 'holiday', 'alone', NULL, 20),
(4, 4, 4, 'sunny', 'weekday', 'friend', NULL, 21),
(5, 4, 5, 'nice', 'weekend', 'friend', NULL, 22),
(6, 4, 2, 'rainy', 'holiday', 'lover', NULL, 23),
(1, 5, 3, 'cloudy', 'weekend', 'family', NULL, 24),
(3, 5, 4, 'sunny', 'weekday', 'friend', NULL, 25),
(4, 5, 5, 'nice', 'weekend', 'friend', NULL, 26),
(5, 5, 4, 'nice', 'weekend', 'lover', NULL, 27),
(6, 5, 2, 'cloudy', 'weekday', 'alone', NULL, 28),
(1, 6, 5, 'nice', 'weekend', 'friend', NULL, 29),
(3, 6, 4, 'sunny', 'weekday', 'alone', NULL, 30),
(4, 6, 2, 'cloudy', 'holiday', 'lover', NULL, 31),
(5, 6, 3, 'rainy', 'weekday', 'friend', NULL, 32),
(6, 6, 3, 'sunny', 'weekend', 'family', NULL, 33),
(1, 8, 4, 'sunny', 'weekend', 'friend', NULL, 34),
(3, 8, 5, 'nice', 'holiday', 'family', NULL, 35),
(4, 8, 3, 'cloudy', 'weekday', 'lover', NULL, 36),
(5, 8, 2, 'sunny', 'weekend', 'alone', NULL, 37),
(6, 8, 4, 'nice', 'holiday', 'friend', NULL, 38),
(1, 9, 2, 'cloudy', 'weekday', 'alone', NULL, 39),
(3, 9, 3, 'nice', 'holiday', 'friend', NULL, 40),
(4, 9, 4, 'sunny', 'weekend', 'lover', NULL, 41),
(5, 9, 3, 'rainy', 'weekday', 'family', NULL, 42),
(6, 9, 4, 'nice', 'weekday', 'family', NULL, 43),
(1, 10, 5, 'rainy', 'weekend', 'family', NULL, 44),
(3, 10, 4, 'cloudy', 'holiday', 'friend', NULL, 45),
(4, 10, 3, 'sunny', 'weekday', 'lover', NULL, 46),
(5, 10, 2, 'nice', 'weekday', 'alone', NULL, 47),
(6, 10, 3, 'nice', 'weekend', 'friend', NULL, 48),
(5, 10, 4, 'rainy', 'holiday', 'lover', NULL, 49),
(1, 10, 4, 'cloudy', 'weekend', 'family', NULL, 50),
(3, 10, 3, 'nice', 'holiday', 'lover', NULL, 51),
(4, 10, 2, 'sunny', 'weekday', 'alone', NULL, 52),
(5, 10, 5, 'rainy', 'weekend', 'family', NULL, 53),
(6, 10, 3, 'cloudy', 'weekday', 'lover', NULL, 54),
(1, 12, 5, 'cloudy', 'holiday', 'family', NULL, 55),
(3, 12, 4, 'rainy', 'weekend', 'friend', NULL, 56),
(4, 12, 3, 'sunny', 'weekday', 'lover', NULL, 57),
(5, 12, 1, 'nice', 'holiday', 'alone', NULL, 58),
(6, 12, 3, 'nice', 'weekend', 'lover', NULL, 59),
(6, 11, 4, 'cloudy', 'weekend', 'lover', NULL, 60),
(1, 14, 4, 'rainy', 'weekend', 'family', NULL, 61),
(5, 13, 3, 'nice', 'holiday', 'friend', NULL, 62),
(3, 15, 4, 'cloudy', 'weekend', 'family', NULL, 63),
(1, 16, 4, 'rainy', 'weekday', 'lover', NULL, 64),
(4, 17, 3, 'nice', 'holiday', 'friend', NULL, 65),
(5, 18, 5, 'cloudy', 'weekend', 'family', NULL, 66),
(6, 18, 4, 'rainy', 'holiday', 'family', NULL, 67),
(1, 19, 5, 'nice', 'weekday', 'friend', NULL, 68),
(3, 19, 4, 'sunny', 'weekday', 'lover', NULL, 69),
(1, 20, 4, 'sunny', 'weekday', 'friend', NULL, 70),
(3, 21, 4, 'sunny', 'weekday', 'lover', NULL, 71),
(4, 22, 5, 'nice', 'holiday', 'family', NULL, 72),
(5, 23, 3, 'cloudy', 'weekday', 'lover', NULL, 73),
(6, 24, 4, 'sunny', 'holiday', 'alone', NULL, 74),
(6, 25, 4, 'nice', 'weekday', 'friend', NULL, 75),
(5, 26, 4, 'sunny', 'weekend', 'lover', NULL, 76),
(4, 27, 5, 'nice', 'weekday', 'lover', NULL, 77),
(3, 28, 4, 'sunny', 'weekday', 'alone', NULL, 78),
(4, 29, 5, 'sunny', 'weekday', 'friend', NULL, 79),
(4, 30, 5, 'sunny', 'weekend', 'family', NULL, 80),
(5, 31, 3, 'nice', 'weekend', 'lover', NULL, 81),
(6, 32, 5, 'rainy', 'weekday', 'alone', NULL, 82),
(6, 33, 4, 'sunny', 'weekend', 'lover', NULL, 83),
(5, 34, 5, 'nice', 'weekend', 'family', NULL, 84),
(4, 35, 4, 'sunny', 'holiday', 'family', NULL, 85),
(3, 36, 3, 'cloudy', 'weekday', 'alone', NULL, 86),
(1, 37, 3, 'sunny', 'weekend', 'friend', NULL, 87),
(1, 38, 4, 'nice', 'holiday', 'alone', NULL, 88),
(3, 39, 5, 'cloudy', 'holiday', 'lover', NULL, 89),
(4, 40, 2, 'rainy', 'weekday', 'family', NULL, 90),
(5, 41, 5, 'nice', 'weekend', 'family', NULL, 91),
(6, 42, 4, 'cloudy', 'weekday', 'friend', NULL, 92),
(6, 43, 5, 'sunny', 'holiday', 'family', NULL, 93),
(5, 44, 4, 'sunny', 'weekday', 'friend', NULL, 94),
(4, 45, 5, 'nice', 'weekday', 'alone', NULL, 95),
(3, 46, 3, 'sunny', 'weekday', 'friend', NULL, 96),
(1, 47, 5, 'rainy', 'weekday', 'lover', NULL, 97),
(1, 48, 4, 'cloudy', 'weekday', 'friend', NULL, 98),
(3, 49, 4, 'cloudy', 'weekend', 'family', NULL, 99),
(4, 50, 3, 'nice', 'weekday', 'family', NULL, 100),
(5, 51, 4, 'sunny', 'weekday', 'alone', NULL, 101),
(6, 52, 4, 'nice', 'weekday', 'friend', NULL, 102),
(6, 53, 3, 'nice', 'weekend', 'lover', NULL, 103),
(5, 54, 2, 'cloudy', 'weekday', 'family', NULL, 104),
(4, 55, 4, 'cloudy', 'weekend', 'alone', NULL, 105),
(3, 56, 4, 'nice', 'weekday', 'friend', NULL, 106),
(1, 57, 3, 'cloudy', 'weekday', 'alone', NULL, 107),
(5, 58, 5, 'nice', 'holiday', 'lover', NULL, 108),
(6, 58, 4, 'sunny', 'weekend', 'lover', NULL, 109),
(5, 58, 5, 'sunny', 'weekend', 'lover', NULL, 110);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `firstName`, `lastName`, `address`, `phone`, `gender`) VALUES
(1, 'tuan@gmail.com', '$2a$10$eyN8c4hwpJM6LrDR7/h2veg/mFbAdW2TV1u3nEG2yhIN2spz.79ei', 'Tuấn', 'Đặng Văn', 'Vĩnh Tường', '0343698845', 1),
(3, 'duc@gmail.com', '$2a$10$AeguH1bKte.ivqjpGWnu1.xf0y8scO3lTyGq.GdTvfCdGkXfQ./te', 'Đức', 'Nguyễn Việt', 'Vĩnh Phúc', '0123456789', 1),
(4, 'test1@gmail.com', '123456', 'A', 'Nguyễn Thị', 'Hà Nội', '0123456789', 0),
(5, 'chi@gmail.com', '123456', 'Chi', 'Nguyễn Thị Mai', 'Lũng Hòa', '0123456789', 0),
(6, 'bien@gmail.com', '123456', 'Biên', 'Lê Long', 'Vân Xuân', '0123456789', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `collections`
--
ALTER TABLE `collections`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `experiences`
--
ALTER TABLE `experiences`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `addr_id` (`addr_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `collections`
--
ALTER TABLE `collections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `experiences`
--
ALTER TABLE `experiences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `collections`
--
ALTER TABLE `collections`
  ADD CONSTRAINT `collections_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `ratings`
--
ALTER TABLE `ratings`
  ADD CONSTRAINT `ratings_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `ratings_ibfk_3` FOREIGN KEY (`addr_id`) REFERENCES `address` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
