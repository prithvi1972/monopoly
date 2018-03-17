<?php require APPROOT.'/views/inc/header.php'; ?>

<!-- Happening Page -->
<h1 style="border-bottom-style: solid; border-bottom-width: 1px; border-bottom-color: #262626;">Add new Users</h1>

<form id="users" method="POST" action="/monopoly/users">

	<!-- Team name -->
	<label>
		<b>Team Name:</b><br>
		<input type="text" name="team_name">
	</label>

	<!-- Add Check from JS to avoid negative numbers -->
	<label>
		<b>Money:</b><br>
		<input type="number" name="money">
	</label>

	<input type="submit" name="submit" value="Create User">

</form>

<!-- Fetch current users standing down here -->
<br>
<h1 style="border-bottom-style: solid; border-bottom-width: 1px; border-bottom-color: #262626;">Previously Added Users</h1>
<p>Fetch current users standing down here</p>

<?php require APPROOT.'/views/inc/footer.php'; ?>