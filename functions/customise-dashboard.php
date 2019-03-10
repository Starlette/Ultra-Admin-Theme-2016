<?php
// remember to add your database connections here

// get ajax posted data
$data = $_POST;

// loop through array of data
foreach($data as $a){
	foreach($a as $b) {
		$block = split("_",$b['block']);
		$column = split("_",$b['column']);
		$order = $b['order'];
		
		// save your data
		$query = "UPDATE your_table SET BlockID=".$block[1].", Order=".$order." WHERE ColumnID=".$column[1];
	}
}
?>