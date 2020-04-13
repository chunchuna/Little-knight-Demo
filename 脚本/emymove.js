				//敌人移动
						function 更新状态 (runtime)
						{
							for(const emy of runtime.objects.emy.instances())
							{
								emy.instVars.dis=distanceTo(emy.x,emy.y,hero.x,hero.y) //获取到角色的距离
							}
						}

						function 敌人状态初始化(runtime)  //敌人状态初始化
						{
							for(const emy of runtime.objects.emy.instances())
							{
								emy.instVars.state="normal"
							}
						}

						function 敌人移动 (runtime)
						{

							for(const emy of runtime.objects.emy.instances())
							{
								if(emy.instVars.hp>0)
								{
									if(emy.instVars.dis>150)
									{
									runtime.callFunction("moveTo",emy.uid,emy.instVars.spd,hero.x,hero.y); //移动移动函数
									emy.instVars.state="move"
									}else
									{
									emy.instVars.state="atc"
									runtime.callFunction("moveTostop",emy.uid)
									}
								}
							}

						}

						function 敌人攻击(runtime)
						{
							for(const emy of runtime.objects.emy.instances())
							{
								if(emy.instVars.dis<150)
								{

									let emyBullet =runtime.objects.emyBullet.createInstance("main",emy.x,emy.y);
									runtime.callFunction("子弹",emyBullet.uid,hero.x,hero.y)
								}
							}
						}

						function debug (runtime)
						{
							const debug =runtime.objects.debug_text.getFirstInstance();
							for(const emy of runtime.objects.emy.instances())
							{
							debug.text="dis"+Math.floor(emy.instVars.dis )
							}

						}
