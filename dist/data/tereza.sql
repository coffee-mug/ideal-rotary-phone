-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 30 Mars 2017 à 07:56
-- Version du serveur :  5.7.14
-- Version de PHP :  5.6.25
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `tereza`
--

-- --------------------------------------------------------

--
-- Structure de la table `appartient`
--

CREATE TABLE `appartient` (
  `SalonID` int(11) NOT NULL,
  `categorie_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `appointement`
--

CREATE TABLE `appointement` (
  `AppointementID` int(11) NOT NULL,
  `DateAppointement` date DEFAULT NULL,
  `ProfessionelID` int(11) DEFAULT NULL,
  `UserID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `atout`
--

CREATE TABLE `atout` (
  `AtoutID` int(11) NOT NULL,
  `Name` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `categorie_id` int(11) NOT NULL,
  `Nom` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `compose`
--

CREATE TABLE `compose` (
  `AppointementID` int(11) NOT NULL,
  `PrestationID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `possede`
--

CREATE TABLE `possede` (
  `SalonID` int(11) NOT NULL,
  `AtoutID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `prestation`
--

CREATE TABLE `prestation` (
  `PrestationID` int(11) NOT NULL,
  `Name` varchar(150) DEFAULT NULL,
  `Duration` time DEFAULT NULL,
  `Price` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `profession`
--

CREATE TABLE `profession` (
  `ProfessionID` int(11) NOT NULL,
  `Name` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `professionel`
--

CREATE TABLE `professionel` (
  `ProfessionelID` int(11) NOT NULL,
  `Mail` varchar(150) NOT NULL,
  `FirstName` varchar(150) DEFAULT NULL,
  `LastName` varchar(150) DEFAULT NULL,
  `Password` varchar(150) NOT NULL,
  `SalonID` int(11) DEFAULT NULL,
  `ProfessionID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `salon`
--

CREATE TABLE `salon` (
  `SalonID` int(11) NOT NULL,
  `NationalID` varchar(25) DEFAULT NULL,
  `Mail` varchar(150) DEFAULT NULL,
  `Name` varchar(150) DEFAULT NULL,
  `Street` varchar(150) DEFAULT NULL,
  `City` varchar(150) DEFAULT NULL,
  `PostalCode` varchar(150) DEFAULT NULL,
  `Phone` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `UserID` int(11) NOT NULL,
  `Mail` varchar(150) DEFAULT NULL,
  `FirtName` varchar(150) DEFAULT NULL,
  `LastName` varchar(150) DEFAULT NULL,
  `Password` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `appartient`
--
ALTER TABLE `appartient`
  ADD PRIMARY KEY (`SalonID`,`categorie_id`),
  ADD KEY `FK_Appartient_categorie_id` (`categorie_id`);

--
-- Index pour la table `appointement`
--
ALTER TABLE `appointement`
  ADD PRIMARY KEY (`AppointementID`),
  ADD KEY `FK_Appointement_ProfessionelID` (`ProfessionelID`),
  ADD KEY `FK_Appointement_UserID` (`UserID`);

--
-- Index pour la table `atout`
--
ALTER TABLE `atout`
  ADD PRIMARY KEY (`AtoutID`);

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`categorie_id`);

--
-- Index pour la table `compose`
--
ALTER TABLE `compose`
  ADD PRIMARY KEY (`AppointementID`,`PrestationID`),
  ADD KEY `FK_compose_PrestationID` (`PrestationID`);

--
-- Index pour la table `possede`
--
ALTER TABLE `possede`
  ADD PRIMARY KEY (`SalonID`,`AtoutID`),
  ADD KEY `FK_Possede_AtoutID` (`AtoutID`);

--
-- Index pour la table `prestation`
--
ALTER TABLE `prestation`
  ADD PRIMARY KEY (`PrestationID`);

--
-- Index pour la table `profession`
--
ALTER TABLE `profession`
  ADD PRIMARY KEY (`ProfessionID`);

--
-- Index pour la table `professionel`
--
ALTER TABLE `professionel`
  ADD PRIMARY KEY (`ProfessionelID`),
  ADD UNIQUE KEY `Mail` (`Mail`),
  ADD KEY `FK_Professionel_SalonID` (`SalonID`),
  ADD KEY `FK_Professionel_ProfessionID` (`ProfessionID`);

--
-- Index pour la table `salon`
--
ALTER TABLE `salon`
  ADD PRIMARY KEY (`SalonID`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `Mail` (`Mail`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `appointement`
--
ALTER TABLE `appointement`
  MODIFY `AppointementID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `atout`
--
ALTER TABLE `atout`
  MODIFY `AtoutID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `categorie_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `prestation`
--
ALTER TABLE `prestation`
  MODIFY `PrestationID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `profession`
--
ALTER TABLE `profession`
  MODIFY `ProfessionID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `professionel`
--
ALTER TABLE `professionel`
  MODIFY `ProfessionelID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `salon`
--
ALTER TABLE `salon`
  MODIFY `SalonID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `appartient`
--
ALTER TABLE `appartient`
  ADD CONSTRAINT `FK_Appartient_SalonID` FOREIGN KEY (`SalonID`) REFERENCES `salon` (`SalonID`),
  ADD CONSTRAINT `FK_Appartient_categorie_id` FOREIGN KEY (`categorie_id`) REFERENCES `categorie` (`categorie_id`);

--
-- Contraintes pour la table `appointement`
--
ALTER TABLE `appointement`
  ADD CONSTRAINT `FK_Appointement_ProfessionelID` FOREIGN KEY (`ProfessionelID`) REFERENCES `professionel` (`ProfessionelID`),
  ADD CONSTRAINT `FK_Appointement_UserID` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);

--
-- Contraintes pour la table `compose`
--
ALTER TABLE `compose`
  ADD CONSTRAINT `FK_compose_AppointementID` FOREIGN KEY (`AppointementID`) REFERENCES `appointement` (`AppointementID`),
  ADD CONSTRAINT `FK_compose_PrestationID` FOREIGN KEY (`PrestationID`) REFERENCES `prestation` (`PrestationID`);

--
-- Contraintes pour la table `possede`
--
ALTER TABLE `possede`
  ADD CONSTRAINT `FK_Possede_AtoutID` FOREIGN KEY (`AtoutID`) REFERENCES `atout` (`AtoutID`),
  ADD CONSTRAINT `FK_Possede_SalonID` FOREIGN KEY (`SalonID`) REFERENCES `salon` (`SalonID`);

--
-- Contraintes pour la table `professionel`
--
ALTER TABLE `professionel`
  ADD CONSTRAINT `FK_Professionel_ProfessionID` FOREIGN KEY (`ProfessionID`) REFERENCES `profession` (`ProfessionID`),
  ADD CONSTRAINT `FK_Professionel_SalonID` FOREIGN KEY (`SalonID`) REFERENCES `salon` (`SalonID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
