			//EMY CLASS
						//受伤

					function emy_ini ()
						{

						}

					function emy_creat(runtime)  //敌人被创建时
						{
							const emy =getPickIns(emy,runtime)
							emy.instVars.hp=Math.floor (SetRandom(500,1300))  //随机敌人的生命值
						}

					function emy_getHurt(hurt,uid,runtime)  //伤害值 敌人的UID 运行时
						{
							let emy =runtime.getInstanceByUid(uid);
							var emyHp =emy.instVars.hp;
							//被攻击动画
							ScreenShake(runtime)  //屏幕震动
							伤害显示(runtime,emy.uid,hurt)   //伤害文本蹦出
							startCoroutine(敌人受伤动画(emy.uid,runtime))  //敌人受伤shader
							emy击退(runtime,emy.uid)  //击退
							//扣血 
							if(emyHp>=0)
							{
							emy.instVars.hp-=hurt;
							}else
							{
							emy_die(uid,runtime);
							}
						}
						//死亡

					function emy_die (uid,runtime) 
						{
							let emy =runtime.getInstanceByUid(uid)
							emy.destroy();
						}
					//EFF
					function * 敌人受伤动画(uid,runtime)
					{
						const emy =runtime.getInstanceByUid(uid)
						emy.effects[0].setParameter(0,100)
						yield new WaitForSeconds(0.15)
						emy.effects[0].setParameter(0,1)
					}

					function emy击退(runtime,uid)
					{
						const emy =runtime.getInstanceByUid(uid)
						//runtime.callFunction("moveTostop",uid)
						const emy8dir =emy.behaviors.move;
						if(hero.x>emy.x)
						{
						emy8dir.vectorX=-10000;
						}
						else
						{
						emy8dir.vectorX=10000;
						}

					}
					function 伤害显示 (runtime,uid,dmg)
					{
						const emy =runtime.getInstanceByUid(uid)
						const dmgText =runtime.objects.dmgText.createInstance("main",emy.x,emy.y)
						dmgText.text=" "+dmg
					}
