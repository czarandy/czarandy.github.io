<html>
<head>
</head>
<body>
<table>
<?php

$tickers = $_GET['s'];

$data = file_get_contents("http://download.finance.yahoo.com/d/quotes.csv?s=$tickers&f=snl1");

$lines = split("\n", $data);

foreach ($lines as $line)
{
    $line = str_replace('"', '', $line);
    print "<tr>";
    $parts = split(",", $line);
    foreach ($parts as $part)
    {
        print "<td>$part</td>";
    }
    print "</tr>";
}

?>
</table>
</body>
</html>
