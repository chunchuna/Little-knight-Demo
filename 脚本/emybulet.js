					function 子弹碰撞到角色 (runtime)
					{
						const bullet =getPickIns("emyBullet",runtime)
						角色受伤(bullet.instVars.dmg);
						bullet.destroy();

					}

