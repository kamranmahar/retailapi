-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 29, 2020 at 05:27 AM
-- Server version: 8.0.21-0ubuntu0.20.04.4
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Trango`
--

-- --------------------------------------------------------

--
-- Table structure for table `Brands`
--

CREATE TABLE `Brands` (
  `ID` int NOT NULL,
  `Name` varchar(250) NOT NULL,
  `Description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Slug` varchar(250) NOT NULL,
  `Thumbnail` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Brands`
--

INSERT INTO `Brands` (`ID`, `Name`, `Description`, `Slug`, `Thumbnail`) VALUES
(1, 'Nokia', NULL, 'nokia', NULL),
(2, 'Niki', NULL, 'niki', NULL),
(3, 'Gucci', NULL, 'gucci', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Categories`
--

CREATE TABLE `Categories` (
  `ID` int NOT NULL,
  `Name` varchar(250) NOT NULL,
  `Description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Slug` varchar(250) NOT NULL,
  `Thumbnail` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Categories`
--

INSERT INTO `Categories` (`ID`, `Name`, `Description`, `Slug`, `Thumbnail`) VALUES
(1, 'Men\'s ', NULL, 'men', NULL),
(2, 'Women\'s', NULL, 'women', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `ID` int NOT NULL,
  `Brand_Ids` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Category_Ids` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Tag_Ids` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Name` varchar(250) NOT NULL,
  `Slug` varchar(250) NOT NULL,
  `ShortDescription` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `LongDescription` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ProductTypeId` int NOT NULL,
  `RegularPrice` double NOT NULL,
  `SalePrice` double DEFAULT NULL,
  `SKU` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ManageStock` varchar(10) DEFAULT NULL,
  `StockStatus` varchar(100) NOT NULL,
  `StockQuantity` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `LowStockThreshold` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `SoldIndividually` varchar(10) DEFAULT NULL,
  `WeightType` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Weight` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `DimensionType` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `DimensionsHeight` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `DimensionsWidth` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `DimensionsLength` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ShippingClassIds` int DEFAULT NULL,
  `PurchaseNote` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `EnableReviews` varchar(10) NOT NULL,
  `ProductStatus` varchar(50) NOT NULL,
  `ProductVisibility` varchar(50) NOT NULL,
  `CatalogVisibility` varchar(50) NOT NULL,
  `MainThumbnail` varchar(250) NOT NULL,
  `ProductGallery` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `CreatedDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`ID`, `Brand_Ids`, `Category_Ids`, `Tag_Ids`, `Name`, `Slug`, `ShortDescription`, `LongDescription`, `ProductTypeId`, `RegularPrice`, `SalePrice`, `SKU`, `ManageStock`, `StockStatus`, `StockQuantity`, `LowStockThreshold`, `SoldIndividually`, `WeightType`, `Weight`, `DimensionType`, `DimensionsHeight`, `DimensionsWidth`, `DimensionsLength`, `ShippingClassIds`, `PurchaseNote`, `EnableReviews`, `ProductStatus`, `ProductVisibility`, `CatalogVisibility`, `MainThumbnail`, `ProductGallery`, `CreatedDate`) VALUES
(1, '2', '2', NULL, 'BTW MEN Shirt Blue Blend Multi shirt in 100% Cotton Material', 'btw-men-shirt-blue-blend-multi-shirt-in-100%-cotton-material', NULL, NULL, 1, 2590, NULL, NULL, NULL, 'In Stock', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'true', 'Published', 'Public', 'Search & Shop', 'https://picsum.photos/200/300?random=1', NULL, '2020-09-27 17:48:37'),
(2, '2', '2', NULL, 'Regular Fit Men Cotton Blend Trouser, Sweatpants For Men', 'Regular-Fit-Men-Cotton-Blend-Trouser-Sweatpants-For-Men', NULL, NULL, 1, 390, NULL, NULL, NULL, 'In Stock', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'true', 'Published', 'Public', 'Search & Shop', 'https://picsum.photos/200/300?random=2', NULL, '2020-09-27 17:51:01'),
(3, '2', '2', NULL, 'Regular Fit Men Cotton Blend Trouser', 'Regular-Fit-Men-Cotton-Blend-Trouser', NULL, NULL, 1, 690, NULL, NULL, NULL, 'In Stock', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'true', 'Published', 'Public', 'Search & Shop', 'https://picsum.photos/200/300?random=3', NULL, '2020-09-27 17:51:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Brands`
--
ALTER TABLE `Brands`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Categories`
--
ALTER TABLE `Categories`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Brands`
--
ALTER TABLE `Brands`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Categories`
--
ALTER TABLE `Categories`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Products`
--
ALTER TABLE `Products`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
