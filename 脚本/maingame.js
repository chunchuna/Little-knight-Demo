					var gameState ="run";
					// Put any global functions etc. here

					runOnStartup(async runtime =>
					{
						// Code to run on the loading screen.
						// Note layouts, objects etc. are not yet available.

						runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
					});

					function OnBeforeProjectStart(runtime)
					{
						// Code to run just before 'On start of layout' on
						// the first layout. Loading has finished and initial
						// instances are created and available to use here.

						runtime.addEventListener("tick", () => Tick(runtime));
					}

					function Tick(runtime)
					{
						// Code to run every tic
					}

					function reStartGame(runtime)  //重新开始游戏
					{

						if(keyboard.isKeyDown("KeyJ")&&gameState=="end")
						{
							gameState="run";
							runtime.callFunction("restart");
						}
					}
