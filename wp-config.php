<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'wordpress');

/** MySQL database password */
define('DB_PASSWORD', 'm@1097SP(S');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'leonbgw7tfydyb7tgtwddqdscpfsg7dpbgpynmjmtcqzuto0upvpleprlqu5aiow');
define('SECURE_AUTH_KEY',  '0zvdasyqqlam8urwgfqo8zeyjhtl59ephfor1vj9r7jelxixu43faeurpd9olzhy');
define('LOGGED_IN_KEY',    'lmwypxkjhu0kljgqvcsnmdhbsxrgmb8w5ludmvzhqztnwsfvemfznmrqgj1b7a3v');
define('NONCE_KEY',        'hbyyvtpoimf7jsebgquigsxoijsjsgvexktxlmrn3vksykbsr5wu3olgt6snbcij');
define('AUTH_SALT',        'b8mhs26t3xl4pxqaphf0m87ahndw7nacucwuie5abkujjdcdxlrsm0quw8nvegsa');
define('SECURE_AUTH_SALT', 't5z1ihxdeg5foptzfrx3feeu19on8zl1xvnishzdyjxadqwzqwgecq8apzs8h977');
define('LOGGED_IN_SALT',   'u7ieplagwiqr0s5bs45gtbaxew9n7audo1lpgkvai1lqrcyfayzfjtje4z3ltlox');
define('NONCE_SALT',       'xvk5j2z8b6njwaw2gz0gi96hephhocab9dn9fdy0eoi8f8yp7crba51iv6r0ke2h');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
