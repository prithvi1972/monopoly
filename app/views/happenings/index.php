<?php require APPROOT.'/views/inc/header.php'; ?>

<!-- Happening Page -->
<h1 style="border-bottom-style: solid; border-bottom-width: 1px; border-bottom-color: #262626;">Happenings</h1>

<form id="happenings" method="POST" action="/monopoly/happenings">

	<!-- Fetch Properties from Database -->
	<label>
		<b>Property:</b><br>
		<select>
			<option>land 1</option>
			<option>land 2</option>
			<option>land 3</option>
		</select>
	</label>

	<!-- Fetch Events from Database -->
	<label>
		<b>Events:</b><br>
		<select>
			<option>Event 1</option>
			<option>Event 2</option>
			<option>Event 3</option>
		</select>
	</label>
	<br>

	<!-- Add Check from JS to avoid negative numbers -->
	<label>
		<b>Level:</b><br>
		<input type="number" name="level">
	</label>

	<!-- Add Check from JS to avoid negative numbers -->
	<label>
		<b>Recovery Rate:</b><br>
		<input type="number" name="recover_rate">
	</label>

	<input type="submit" name="submit" value="Call Event">

</form>

<!-- Fetch Past Events from Database -->
<br>
<h1 style="border-bottom-style: solid; border-bottom-width: 1px; border-bottom-color: #262626;">History</h1>
<p>Fetch Past Events from Database</p>

<?php require APPROOT.'/views/inc/footer.php'; ?>