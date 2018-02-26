# Nicebord.js

Create nice border animation in block elements

## Usage

Include plugin's CSS and JS:
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<link rel="stylesheet" href="path/to/nicebord.css">
<script src="path/to/nicebord.js"></script>
```
## Example use
```
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="./js/nicebord.js"></script>
<link href="./css/nicebord.css" rel="stylesheet" type="text/css" />
<title>NiceBord</title>
</head>

<body>
<a href="#" id='first'>Nicebord</a>
<a href="#">Test Test</a>
<a href="#">Test Test Test</a>
<script>
$(document).ready(function(){
	$('#first').nicebord();
	//or
	$('a').each(function() {
		$(this).nicebord({color: '000',orientation: 'ckw',size:3});
	});
});
</script>
</body>
</html>
```
## Options
Here's a list of available settings.
```
$('#id').nicebord({
		color: '#000',
		orientation: 'ackw',
		size:3,
		pos:'bottom',
		speed:500
		});
```
| Attribute | Type | Default | Description
| --- | --- | --- | --- |
| `color` | String | '000000' | Set border color |
| `orientation` | String | 'ckw' | Set direction animation: clockwise(ckw), anticlockwise(ackw) |
| `size` | Number | 1 | Set border size |
| `pos` | String | 'top' | Animate top or right or bottom or left border |
| `speed` | Number | 500 | Animation time |
## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

