<?php

$price = file_get_contents('http://download.finance.yahoo.com/d/quotes.csv?s=FB&f=l1&e=.csv');

$grants = array(
  array(1630 / 4, strtotime('02/15/2018')),
  array(4400 / 4, strtotime('02/15/2017')),
  array(4630 / 4, strtotime('02/15/2016')),
  array(11050 / 5, strtotime('01/15/2016')),
  //array(40000 / 4, strtotime('03/15/2014')),
);

$now = time();
$total = 0;
$month = 0;
foreach ($grants as $grant) {
  list($amt, $final_time) = $grant;
  if ($now < $final_time) {
    $total += $amt * min(1, ($final_time - $now) / (86400 * 365));
    $month += $amt * min(1, ($final_time - $now) / (86400 * 30)) / 12;
  }
}

// $salary = 133950 * 1.15;
//$salary = 171105 * 1.2;
$salary = 183510 * 1.2;

print '$'.number_format(($salary / 12) + $month * $price, 0)."\n";
print "<br />\n";
print '$'.number_format($salary + $total * $price, 0)."\n";
