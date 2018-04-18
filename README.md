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
<a href="#" id="first">Nicebord</a>

<a href="#" class="nice">Nicebord</a>
<a href="#" class="nice">Nicebord Nicebord</a>
<script>
$(document).ready(function(){
	$('#first').nicebord();
	//or class
	$('.nice').nicebord({
		color: '#000',
		orientation: 'ackw',
		size:3,
		pos:'bottom',
		speed:500,
		direction:false,
		fix:false,
		center:false
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
		speed:500,
		direction:false,
		fix:false,
		center:false
		});
```
| Attribute | Type | Default | Description
| --- | --- | --- | --- |
| `color` | String | '000000' | Set border color |
| `orientation` | String | 'ckw' | Set direction animation: clockwise(ckw), anticlockwise(ackw) |
| `size` | Number | 1 | Set border size |
| `pos` | String | 'top,right,bottom,left' | Animate top or right or bottom or left border |
| `speed` | Number | 500 | Animation time |
| `direction` | Boolean | false | Direction of animation, if false the animation occurs along the sides of the element, if true the inside of the element  |
| `fix` | Boolean | false | Sets the fixed size of the element to which nicebord is applied. Usually images.  |
| `center` | Boolean | false | Begins animation from the center of the block.  |


## Demo
See demo [project page](https://dkdevru.github.io/nicebord/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

