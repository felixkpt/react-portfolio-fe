-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 17, 2024 at 08:39 PM
-- Server version: 8.0.36-0ubuntu0.22.04.1
-- PHP Version: 8.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `matchoracle22`
--

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_03_17_110649_create_model_instances_table', 1),
(6, '2023_03_28_152041_create_model_files_table', 1),
(7, '2023_06_06_150342_create_game_sources_table', 1),
(8, '2023_06_06_161009_create_continents_table', 1),
(9, '2023_06_06_162912_create_competitions_table', 1),
(10, '2023_06_06_163009_create_countries_table', 1),
(11, '2023_06_10_180001_alter_token_column_personal_access_tokens_table', 1),
(12, '2023_06_10_194523_create_teams_table', 1),
(13, '2023_06_14_215321_create_stadia_table', 1),
(14, '2023_06_18_153422_create_competition_abbreviations_table', 1),
(15, '2023_06_28_010324_create_weather_conditions_table', 1),
(16, '2023_07_03_191007_create_teams_logs_table', 1),
(17, '2023_07_03_192525_create_competitions_logs_table', 1),
(18, '2023_07_04_102313_create_recent_team_detailed_fetches_table', 1),
(19, '2023_07_04_181234_create_recent_competition_detailed_fetches_table', 1),
(20, '2023_07_24_204329_create_permission_tables', 1),
(21, '2023_07_24_205009_add_columns_to_permissions_table', 1),
(22, '2023_07_27_052433_add_columns_to_roles_table', 1),
(23, '2023_07_28_161002_add_columns_to_users_table', 1),
(24, '2023_08_20_082409_password_resets', 1),
(25, '2023_08_28_075213_create_statuses_table', 1),
(26, '2023_08_29_115231_create_post_statuses_table', 1),
(27, '2023_09_04_204144_create_temporary_tokens_table', 1),
(28, '2023_09_12_173132_create_post_categories_table', 1),
(29, '2023_09_12_173132_create_post_topics_table', 1),
(30, '2023_09_12_173133_create_posts_table', 1),
(31, '2023_09_27_213724_create_competition_game_source_table', 1),
(32, '2023_09_27_213724_create_game_source_team_table', 1),
(33, '2023_10_11_150255_create_seasons_table', 1),
(34, '2023_10_11_154321_create_stages_table', 1),
(35, '2023_10_11_174933_create_standings_table', 1),
(36, '2023_10_11_175018_create_standings_tables_table', 1),
(37, '2023_10_12_044441_create_addresses_table', 1),
(38, '2023_10_12_050846_create_coaches_table', 1),
(39, '2023_10_12_051747_create_coach_contracts_table', 1),
(40, '2023_10_12_053616_create_venues_table', 1),
(41, '2023_10_16_140234_create_referees_table', 1),
(42, '2023_10_16_144650_create_games_table', 1),
(43, '2023_10_16_144657_create_game_referee_table', 1),
(44, '2023_10_16_144935_create_game_game_source_table', 1),
(45, '2023_10_16_152746_create_game_scores_table', 1),
(46, '2023_10_24_180446_create_game_votes_table', 1),
(47, '2023_11_13_123830_create_game_predictions_table', 1),
(48, '2023_11_13_191017_create_competition_prediction_logs_table', 1),
(49, '2023_11_21_190555_create_competition_score_target_outcomes_table', 1),
(50, '2023_12_02_113626_create_competition_statistics_table', 1),
(51, '2023_12_02_115148_create_competition_prediction_statistics_table', 1),
(52, '2023_12_08_143557_create_game_prediction_types_table', 1),
(53, '2023_12_23_163644_create_odds_table', 1),
(54, '2023_12_24_145758_create_game_odd_table', 1),
(55, '2023_12_25_200124_create_season_job_logs_table', 1),
(56, '2023_12_25_200127_create_standing_job_logs_table', 1),
(57, '2023_12_25_200149_create_matches_job_logs_table', 1),
(58, '2023_12_25_200201_create_match_job_logs_table', 1),
(59, '2023_12_25_200226_create_prediction_job_logs_table', 1),
(60, '2023_12_25_200226_create_train_prediction_job_logs_table', 1),
(61, '2023_12_27_000201_create_competition_prediction_statistic_job_logs_table', 1),
(62, '2023_12_27_000201_create_competition_statistic_job_logs_table', 1),
(63, '2023_12_27_003107_create_failed_season_logs_table', 1),
(64, '2023_12_27_003107_create_failed_standing_logs_table', 1),
(65, '2023_12_27_005107_create_failed_matches_logs_table', 1),
(66, '2023_12_27_005108_create_failed_match_logs_table', 1),
(67, '2023_12_27_005121_create_failed_prediction_logs_table', 1),
(68, '2023_12_27_005121_create_failed_train_prediction_logs_table', 1),
(69, '2024_01_12_124634_create_competition_last_actions_table', 1),
(70, '2024_01_13_133728_create_betting_tips_statistics_table', 1),
(71, '2024_01_13_200226_create_betting_tips_statistics_job_logs_table', 1),
(72, '2024_01_15_123830_create_game_source_predictions_table', 1),
(73, '2024_02_14_124634_create_game_last_actions_table', 1),
(74, '2024_04_16_084345_create_game_score_statuses_table', 1),
(75, '2024_05_17_203825_add_default_role_id_to_users_table', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
