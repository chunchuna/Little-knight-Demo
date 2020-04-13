				function HpbarChangeColor (runtime)   //改变角色血条颜色根据血量
				{
					console.log("change color")
					const hpBar =runtime.objects.heroHp.getFirstInstance()
					var hp =hero.instVars.hp;
					if(hp<80)
					{
					hpBar.setAnimation("bad");
					}
					if(hp<50)
					{
					hpBar.setAnimation("low");
					}
				}

				function setHptext (runtime)     //显示玩家血量
				{
						globalThis.hptext=runtime.objects.hptext.getFirstInstance();
						hptext.text=hero.instVars.hp+"/"+hero.instVars.maxhp;
				}