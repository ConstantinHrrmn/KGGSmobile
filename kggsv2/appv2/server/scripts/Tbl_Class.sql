SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


INSERT INTO `Tbl_Class` (`Id_Class`, `Nm_Class`, `Is_Available_For_All`, `Id_Gender`) VALUES
(1, 'Noble', 0, 1),
(2, 'Commoner', 0, 1),
(3, 'Myrmidon', 1, 1),
(4, 'Soldier', 1, 1),
(5, 'Figther', 1, 1),
(6, 'Monk', 1, 1),
(7, 'Lord', 0, 1),
(8, 'Mercenary', 1, 1),
(9, 'Thief', 1, 1),
(10, 'Armored Knight', 1, 1),
(11, 'Cavalier', 1, 1),
(12, 'Brigand', 1, 1),
(13, 'Archer', 1, 1),
(14, 'Brawler', 1, 3),
(15, 'Mage', 1, 1),
(16, 'Dark Mage', 1, 3),
(17, 'Priest', 1, 1),
(18, 'Pegasus Knight', 1, 2),
(19, 'Hero', 1, 3),
(20, 'Swordmaster', 1, 1),
(21, 'Assassin', 1, 1),
(22, 'Fortress Knight', 1, 1),
(23, 'Paladin', 1, 1),
(24, 'Wyvern Rider', 1, 1),
(25, 'Warrior', 1, 1),
(26, 'Sniper', 1, 1),
(27, 'Grappler', 1, 3),
(28, 'Warlkock', 1, 1),
(29, 'Dark Bishop', 1, 3),
(30, 'Bishop', 1, 2),
(31, 'Dancer', 0, 1),
(32, 'Enlightened One', 0, 1),
(33, 'Armored Lord', 0, 2),
(34, 'High Lord', 0, 3),
(35, 'Wyvern Master', 0, 3),
(36, 'Emperor', 0, 2),
(37, 'Great Lord', 0, 3),
(38, 'Barbarossa', 0, 3),
(39, 'Death Knight', 0, 3),
(40, 'Falcon Knight', 1, 2),
(41, 'Wyvern Lord', 1, 1),
(42, 'Mortal Savant', 1, 1),
(43, 'Great Knight', 1, 1),
(44, 'Bow Knight', 1, 1),
(45, 'Dark Knight', 1, 1),
(46, 'Holy Knight', 1, 1),
(47, 'War Master', 1, 3),
(48, 'Gremory', 1, 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
