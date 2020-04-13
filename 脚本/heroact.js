//HeroActShape
//攻击遮罩的生命周期
		function lifetime(runtime)  
			{
			let newActShape =getPickIns("HeroAtackShape",runtime)
			//const newActShape=runtime.objects.HeroAtackShape.getPickedInstances();
			if(newActShape.instVars.lifetime>0)
			{
				newActShape.instVars.lifetime-=1;
				
			}else
			{
				newActShape.destroy()
			}
			}

		function getPickIns(a,runtime)
		{
		 const ins =runtime.objects[a];
		 for(const insins of ins.getPickedInstances())
		 {
		 return insins;
		 }
		}
		//碰撞到怪物
		function heroActTouchEmy (runtime)  
		{
			let emy =getPickIns("emy",runtime)
			let shape =getPickIns("HeroAtackShape",runtime)
			shape.destroy()
			//call怪物受伤
			emy_getHurt(10,emy.uid,runtime)


		}