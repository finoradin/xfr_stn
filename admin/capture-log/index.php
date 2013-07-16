<?php

include_once('../resources/init.php');

$foo =  mysql_query("SELECT * FROM items;") or die(mysql_error());

?>

<!DOCTYPE html>
<html>
  <head>
    <title>XFR STN Ingest Log</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link href="../../css/bootstrap.min.css" rel="stylesheet" media="screen">
        <style>
      body {
        padding-top: 60px; /* 60px to make the container go all the way to the bottom of the topbar */
      }
      .wider{
      	width: 350px;
      }

            .fullwidth{
        width: 97%;
      }


    </style>

  </head>
  <body>
        <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="brand" href="#">XFR STN</a>
          <div class="nav-collapse collapse">
            <ul class="nav">
              <li><a href="../video/">Video</a></li>
              <li><a href="../born-digital/">Born-Digital</a></li>
              <li class="active"><a href="#">Capture inventory</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>

    <div class="container">

      <h1>Everything captured so far. Click for XML.

      </h1>
      <hr>

<?php
if (mysql_num_rows($foo) > 0) {
echo '<table class="table table-striped table-bordered table-hover">';
echo '<td width="130px"><b>Identifier</b></td><td><b>Operator</b></td><td width="100px"><b>Title</b></td><td width="150px"><b>Creator</b></td><td width="150px"><b>Format</b></td><td width="150px"><b>XML metadata</b></td>';
while ($row = mysql_fetch_assoc($foo)) {
echo "<tr>
<td>{$row['id_number']}</td>
<td>{$row['operator']}</td>
<td>{$row['title']}</td>
<td>{$row['creator']}</td>
<td>{$row['format']}</td>
<td><a href='xml_downloader.php?item={$row['id_number']}'>{$row['id_number']}.xml</a></td>
</tr>";
}
echo '</table>';
}
else
echo 'No rows in selected table';
?>








<hr>

    </div> <!-- /container --><script src="../../js/jquery-1.10.1.min.js"></script>
    <script src="../../js/bootstrap.min.js"></script>
    <script src="app.js"></script>
  </body>
</html>