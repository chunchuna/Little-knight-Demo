
							function iniHero (runtime)   //初始化角色
							{
								globalThis.hero=runtime.objects.hero.getFirstInstance()
								globalThis.heroBehavior=hero.behaviors.move;  //8方向行为
								globalThis.HeroState="normal"
								globalThis.HeroMove =1;
								globalThis.heroInAtack=0; //是否在攻击状态
								//heroatackshpae
								globalThis.heroatactShape=runtime.objects.HeroAtackShape; //角色的攻击遮罩
								globalThis.keyboard=runtime.keyboard //键盘监听器
								//角色属性初始化
								hero.instVars.hp=900; 
								hero.instVars.maxhp=hero.instVars.hp;
							}

							function HeroAnimation (runtime)  //根据状态机切换动画
							{
								if(HeroState=="normal")
								{
									hero.setAnimation("normal")
								}
								if(HeroState=="run")
								{
								 hero.setAnimation("run")
								}
							}

							function SetHeroState(runtime)
							{
								if(heroBehavior.speed>0&&HeroState!="atack") //判断是否在攻击状态
								{
									HeroState="run"
								}else
								{
									HeroState="normal"
								}

							}

							function MirrHero (runtime)//人物的镜像切换
							{
								if(keyboard.isKeyDown("KeyA"))
								{
									console.log("prees a")
									runtime.callFunction("Flip",-1,hero.uid)
								}
								if(keyboard.isKeyDown("KeyD"))
								{
									runtime.callFunction("Flip",1,hero.uid)
								}

							}

							function SetHeroMove (runtime)  //键盘移动
							{
								if(HeroMove==1)
								{
									if(keyboard.isKeyDown("KeyA"))
									{
										heroBehavior.simulateControl("left")
									}
									if(keyboard.isKeyDown("KeyD"))
									{
										heroBehavior.simulateControl("right")
									}
									if(keyboard.isKeyDown("KeyW"))
									{
										heroBehavior.simulateControl("up")
									}
									if(keyboard.isKeyDown("KeyS"))
									{
										heroBehavior.simulateControl("down")
									}
								}
							}

							function HeroAtack(runtime)  //攻击
							{
								if(keyboard.isKeyDown("KeyJ"))
								{
									if(heroInAtack==0)
									{
										HeroState="atack"
										//攻击遮罩
										const newShape = heroatactShape.createInstance("main",hero.x,hero.y)  //生成攻击遮罩
										newShape.instVars.lifetime=1; //攻击遮罩的生命周期
										newShape.opacity=0.2;
										//异步切换状态
										heroInAtack=1; 
										startCoroutine(SetheroInAtack()) 
										//攻击动画

									}

								}
							}
							function* SetheroInAtack () //异步切换状态
							{
								yield new WaitForSeconds(0.25)
								heroInAtack=0;

							}

							function 角色受伤 (dmg)
							{
								if(hero.instVars.hp>0)
								{
									hero.instVars.hp-=dmg;
									console.log("角色受伤 伤害:"+dmg+"hero生命值"+hero.instVars.hp)
								}

							}

							function 角色死亡 (runtime)
							{

								if(hero.instVars.hp<=0)
								{
									console.log("死亡")
									hero.x=-10;
									hero.y=-10;
									gameState="end"
									runtime.objects.gameoverText.getFirstInstance().opacity=1;

								}
							}	

							function ScreenShake(runtime)
							{
								runtime.callFunction("shake");
							}