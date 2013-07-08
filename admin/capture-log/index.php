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
    <link href="../css/bootstrap.min.css" rel="stylesheet" media="screen">
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
              <li><a href="../">Intake form</a></li>
              <li class="active"><a href="#about">Capture inventory</a></li>
              <li><a href="faq.html">FAQ</a></li>
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
echo '<td width="130px"><b>Identifier</b></td><td><b>Title</b></td><td width="100px"><b>Capture date</b></td><td width="150px"><b>Format</b></td><td width="150px"><b>Captured by</b></td>';
while ($row = mysql_fetch_assoc($foo)) {
echo "<tr>
<td><a href='xml_renderer.php?item={$row['xfr_identifier']}' data-target='#modal-item' data-toggle='modal'>{$row['xfr_identifier']}</a></td>
<td>{$row['title']}</td>
<td>{$row['capture_date']}</td>
<td>{$row['format_type']}</td>
<td>{$row['captured_by']}</td>
</tr>";
}
echo '</table>';
}
else
echo 'No rows in selected table';
?>



<!-- Modal -->
<div id="modal-item" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
    <h3 id="myModalLabel">XML for the Internet Archive</h3>
  </div>
  <div class="modal-body">
    Loading content...
  </div>
  <div class="modal-footer">
    <button class="btn" data-dismiss="modal" aria-hidden="true">Go back</button>
    <button type="submit" class="btn btn-success">Download XML file</button>
  </div>
</div>





<hr>

    </div> <!-- /container --><script src="../js/jquery-1.10.1.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="app.js"></script>
  </body>
</html>