			 function SetRandom(max,min)
			{
							let num = Math.random() * (max - min) + min
							return num;
			}

			function distanceTo(x1, y1, x2, y2)
			{
				return Math.hypot(x2 - x1, y2 - y1);
			}
