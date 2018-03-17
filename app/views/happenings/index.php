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
	<br>

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
	<br>

	<!-- Add Check from JS to avoid negative numbers -->
	<label>
		<b>Recovery Rate:</b><br>
		<input type="number" name="recover_rate">
	</label>
	<br>

	<br>
	<input type="submit" name="submit" value="BRING EVENT">

</form>

<?php require APPROOT.'/views/inc/footer.php'; ?>