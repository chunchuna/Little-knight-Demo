						function 开始界面初始化(runtime)
						{
							globalThis.rt_call=runtime.callFunction
							globalThis.keyboard=runtime.keyboard
							globalThis.UIbar= runtime.objects.UIbar.getFirstInstance();
							var pos_x=UIbar.x;
							var pos_y=UIbar.y;
							//线性移动
							runtime.callFunction("tweenUIbar",pos_x,pos_y+460,3)
							console.log("已经执行tween 当前位置"+UIbar.x+"/"+UIbar.y)
						}


						function KeyListener (runtime)
						{
							if(keyboard.isKeyDown("KeyJ")&&runtime.callFunction("TweenIsdown","pos")==1) //检测是否已经tween 和是否按下跳转按键

							{
								//runtime.callFunction("jumpSence","game1") //跳转到下一个页面
								rt_call("jumpSence","game1");
								console.log("跳转下一个页面")
							}

						}

