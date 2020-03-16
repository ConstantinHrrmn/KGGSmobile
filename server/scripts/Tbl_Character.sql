SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


INSERT INTO `Tbl_Character` (`Id_Character`, `Nm_First`, `Nm_Last`, `Nm_File_Img`, `Id_House`, `Id_Gender`) VALUES
(1, 'Byleth (M)', 'Eisner', './img/characters/Byleth (M).png', 1, 3),
(2, 'Byleth (F)', 'Eisner', './img/characters/Byleth (F).png', 1, 2),
(3, 'Edelgard', 'von Hresvelg', './img/characters/Edelgard.png', 2, 2),
(4, 'Hubert', 'von Vestra', './img/characters/Hubert.png', 2, 3),
(5, 'Ferdinand', 'von Aegir', './img/characters/Ferdinand.png', 2, 3),
(6, 'Linhardt', 'von Hevring', './img/characters/Linhardt.png', 2, 3),
(7, 'Caspar', 'von Bergliez', './img/characters/Caspar.png', 2, 3),
(8, 'Bernadetta', 'von Varley', './img/characters/Bernadetta.png', 2, 2),
(9, 'Dorothea', 'Arnault', './img/characters/Dorothea.png', 2, 2),
(10, 'Petra', 'Macneary', './img/characters/Petra.png', 2, 2),
(11, 'Dimitri', 'Alexandre Blaiddyd', './img/characters/Dimitri.png', 3, 3),
(12, 'Dedue', 'Dedue Molinaro', './img/characters/Dedue.png', 3, 3),
(13, 'Felix', 'Hugo Fraldarius', './img/characters/Felix.png', 3, 3),
(14, 'Ashe', 'Ubert', './img/characters/Ashe.png', 3, 3),
(15, 'Sylvain', 'Jose Gautier', './img/characters/Sylvain.png', 3, 3),
(16, 'Mercedes', 'von Martritz', './img/characters/Mercedes.png', 3, 2),
(17, 'Annette', 'Fantine Dominic', './img/characters/Annette.png', 3, 2),
(18, 'Ingrid', 'Brandl Galatea', './img/characters/Ingrid.png', 3, 2),
(19, 'Claude', 'von Riegan', './img/characters/Claude.png', 4, 3),
(20, 'Lorenz', 'Hellman Gloucester', './img/characters/Lorenz.png', 4, 3),
(21, 'Raphael', 'Kirsten', './img/characters/Raphael.png', 4, 3),
(22, 'Ignatz', 'Victor', './img/characters/Ignatz.png', 4, 3),
(23, 'Lysithea', 'von Cordelia', './img/characters/Lysithea.png', 4, 2),
(24, 'Marianne', 'von Edmund', './img/characters/Marianne.png', 4, 2),
(25, 'Hilda', 'Valentine Goneril', './img/characters/Hilda.png', 4, 2),
(26, 'Leonie', 'Pinelli', './img/characters/Leonie.png', 4, 2),
(27, 'Seteth', NULL, './img/characters/Seteth.png', 5, 3),
(28, 'Flayn', NULL, './img/characters/Flayn.png', 5, 2),
(29, 'Hanneman', 'von Essar', './img/characters/Hanneman.png', 5, 3),
(30, 'Manuela', 'Casagranda', './img/characters/Manuela.png', 5, 2),
(31, 'Gilbert', 'Pronislav', './img/characters/Gilbert.png', 5, 3),
(32, 'Alois', 'Rangeld', './img/characters/Alois.png', 5, 3),
(33, 'Catherine', 'Rubens Charon', './img/characters/Catherine.png', 5, 2),
(34, 'Shamir', 'Nevrand', './img/characters/Shamir.png', 5, 2),
(35, 'Cyril', NULL, './img/characters/Cyril.png', 5, 3),
(36, 'Jeritza', 'von Hrym', './img/characters/Jeritza.png', 1, 3),
(37, 'Anna', NULL, './img/characters/Anna.png', 1, 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
