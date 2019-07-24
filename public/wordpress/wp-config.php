<?php
/**
 * Grundeinstellungen für WordPress
 *
 * Zu diesen Einstellungen gehören:
 *
 * * MySQL-Zugangsdaten,
 * * Tabellenpräfix,
 * * Sicherheitsschlüssel
 * * und ABSPATH.
 *
 * Mehr Informationen zur wp-config.php gibt es auf der
 * {@link https://codex.wordpress.org/Editing_wp-config.php wp-config.php editieren}
 * Seite im Codex. Die Zugangsdaten für die MySQL-Datenbank
 * bekommst du von deinem Webhoster.
 *
 * Diese Datei wird zur Erstellung der wp-config.php verwendet.
 * Du musst aber dafür nicht das Installationsskript verwenden.
 * Stattdessen kannst du auch diese Datei als wp-config.php mit
 * deinen Zugangsdaten für die Datenbank abspeichern.
 *
 * @package WordPress
 */

// ** MySQL-Einstellungen ** //
/**   Diese Zugangsdaten bekommst du von deinem Webhoster. **/

/**
 * Ersetze datenbankname_hier_einfuegen
 * mit dem Namen der Datenbank, die du verwenden möchtest.
 */
define( 'DB_NAME', 'dbstandort' );

/**
 * Ersetze benutzername_hier_einfuegen
 * mit deinem MySQL-Datenbank-Benutzernamen.
 */
define( 'DB_USER', 'root' );

/**
 * Ersetze passwort_hier_einfuegen mit deinem MySQL-Passwort.
 */
define( 'DB_PASSWORD', '' );

/**
 * Ersetze localhost mit der MySQL-Serveradresse.
 */
define( 'DB_HOST', '127.0.0.1' );

/**
 * Der Datenbankzeichensatz, der beim Erstellen der
 * Datenbanktabellen verwendet werden soll
 */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Der Collate-Type sollte nicht geändert werden.
 */
define('DB_COLLATE', '');

/**#@+
 * Sicherheitsschlüssel
 *
 * Ändere jeden untenstehenden Platzhaltertext in eine beliebige,
 * möglichst einmalig genutzte Zeichenkette.
 * Auf der Seite {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * kannst du dir alle Schlüssel generieren lassen.
 * Du kannst die Schlüssel jederzeit wieder ändern, alle angemeldeten
 * Benutzer müssen sich danach erneut anmelden.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'bl<[aK1p/iBT=JP)@~B%TKRryu2u)}x>bAd={2w;g&B7):#*D#igGBq)|w 51_[(' );
define( 'SECURE_AUTH_KEY',  '{&UQtn[*xh4Hfx|tN _t~06PjZ+SC6A8U$uXRTXe:ua/g~[Ppcs~_/Z7P.ym/E>g' );
define( 'LOGGED_IN_KEY',    'D6z?S1!Nh,YIG98[/:tp=JgIjxFv4@iPERUU6H_e!;/X$K@d5c3l}wOceT~qIL:I' );
define( 'NONCE_KEY',        '3P<y(en<.GM]_:O2TK[8|xAgex3z=_a+u*p9X2L|LrGyo(l`<lS Zx;)S53ck+.1' );
define( 'AUTH_SALT',        'J4HCNTj+]l<y;E`15R*l*HnXkB=,u?n,%[c|ChBob~9Ug8w;tT]d:NfQ +%k2 q~' );
define( 'SECURE_AUTH_SALT', 'hOg;T!s~+WE*qX4Cdu+yT*YcZS`SY[e-Gbbz;<HyXvzH_[q}XV_i%9H>(}BV6j=z' );
define( 'LOGGED_IN_SALT',   'x7=EH{]4m(0W$hS_<f0eREG(n- /T( j J)o34m~ZJ1Q?(fw,gY xlRrQCwF#O9T' );
define( 'NONCE_SALT',       'RBy).q>uq}z2.6f,b:B*u2>l`sUh/;v_gv%oi82C%SRuG(/zy[5YNq:LU-G] fp$' );

/**#@-*/

/**
 * WordPress Datenbanktabellen-Präfix
 *
 * Wenn du verschiedene Präfixe benutzt, kannst du innerhalb einer Datenbank
 * verschiedene WordPress-Installationen betreiben.
 * Bitte verwende nur Zahlen, Buchstaben und Unterstriche!
 */
$table_prefix = 'wp_';

/**
 * Für Entwickler: Der WordPress-Debug-Modus.
 *
 * Setze den Wert auf „true“, um bei der Entwicklung Warnungen und Fehler-Meldungen angezeigt zu bekommen.
 * Plugin- und Theme-Entwicklern wird nachdrücklich empfohlen, WP_DEBUG
 * in ihrer Entwicklungsumgebung zu verwenden.
 *
 * Besuche den Codex, um mehr Informationen über andere Konstanten zu finden,
 * die zum Debuggen genutzt werden können.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* Das war’s, Schluss mit dem Bearbeiten! Viel Spaß. */
/* That's all, stop editing! Happy publishing. */

/** Der absolute Pfad zum WordPress-Verzeichnis. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Definiert WordPress-Variablen und fügt Dateien ein.  */
require_once( ABSPATH . 'wp-settings.php' );
