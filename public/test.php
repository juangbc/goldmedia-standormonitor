~~NOCACHE~~

====== Testing embedding of tableau ======

<?php
/**
 * Created by PhpStorm.
 * User: Juan
 * Date: 05.06.2019
 * Time: 11:16
 */

$userid = $_SERVER['klaus.goldhammer@goldmedia.de'];

if ($userid) {

    echo 'debug: Authenticated on tableau as ', $userid, '<br />';

    $loginparams = 'username='. $userid;

    $urlparams = ':embed=yes&:toolbar=no';

    $url = 'https://eu-west-1a.online.tableau.com/#/trusted/';

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL,$url);

    curl_setopt($ch, CURLOPT_POST, 1);

    curl_setopt($ch, CURLOPT_POSTFIELDS,$loginparams);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));

    $ticket = curl_exec ($ch);

    curl_close ($ch);



    echo '<iframe src=', $url, $ticket, '/views/WORKBOOK_NAME/VIEW_NAME?', $urlparams, '"

            width="700" height="400">

    </iframe>';

} else {

    echo 'Log on to see Tableau content';

}
