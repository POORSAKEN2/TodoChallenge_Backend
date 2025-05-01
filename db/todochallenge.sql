-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 01, 2025 at 02:56 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todochallenge`
--

-- --------------------------------------------------------

--
-- Table structure for table `todos`
--

CREATE TABLE `todos` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `completed` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `todos`
--

INSERT INTO `todos` (`id`, `user_id`, `title`, `completed`) VALUES
(3, 4, 'Eat Dinner', 0),
(7, 1, 'asd', 0),
(8, 4, 'Do angular JS', 0),
(9, 4, 'Make SDLC', 0),
(10, 4, 'stick to timeline', 0),
(11, 4, 'grocery', 0),
(12, 4, 'scatter', 0),
(13, 4, 'max win', 0),
(14, 4, 'do UI/UX', 0),
(15, 4, 'feed the fishes', 0),
(16, 7, 'Coding', 0),
(17, 7, 'Cook Tinola', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `created_at`) VALUES
(1, 'poorsaken', '$2b$10$gqXMsuNSnYbJPsMhq7swye8nO0Ig6bg095CCNMrHf.Znhtydxx1hy', '2025-05-01 08:54:23'),
(2, 'admin@6100.com', '$2b$10$K17YKat2M1vGrBya1kRjz.7ns/KHHv3dsTznJxSx2rvGgAQXHx/wK', '2025-05-01 09:39:09'),
(3, 'kocyfafi@mailinator.com', '$2b$10$f8FC5B.3egIro8VKA7Wfze1QYa5dB5NisgltgzrCMRCjJVx2jfmq.', '2025-05-01 09:45:17'),
(4, 'poorsaken2', '$2b$10$9T2uCx7pvmtPR76KYd.wjudIjY7lfHnedPoxg1/8sPQfXp/7aCxX.', '2025-05-01 09:49:21'),
(5, 'poorsaken233', '$2b$10$CzjOMKVYtg9T7QYL2uql/uQlVCq8dXXh3mLGhnV8esIrVXgJW7xnq', '2025-05-01 11:14:51'),
(6, 'poorsaken2234', '$2b$10$Hura.7RSjsxgjISLdQxLqeG2M4KFh958MJXZKqya8ifwZ.SHQtT9m', '2025-05-01 11:16:17'),
(7, 'adminko', '$2b$10$ZuvutXwiGX5ADiECeYkNNu4V5BP10ugcdTwB.9kSD8ardqMbvBLDe', '2025-05-01 12:32:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todos`
--
ALTER TABLE `todos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `todos`
--
ALTER TABLE `todos`
  ADD CONSTRAINT `todos_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
