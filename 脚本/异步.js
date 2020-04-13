						//******************** COROUTINE CLASSES
						class CoroutineYield {
							constructor(){

						  }
						  process(){
							return new Promise((resolve, reject)=>{
								resolve()
							})
						  }
						}

						class WaitForSeconds extends CoroutineYield{
							constructor(time){
							super()
							this.time = time
						  }

						  process(){
							return new Promise((resolve, reject)=>{
							  setTimeout(()=>{
								resolve()
							  }, this.time*1000)
							})
						  }
						}

						//******************** COROUTINE PROCESS

						function startCoroutine(coroutine){
							console.log('Start Coroutine')
						  const coroutineId = id++
						  //runningCoroutines.push(coroutine)
							return new Promise((resolve, reject) => {
							function progress(){
								let ret = coroutine.next()
							  if(ret.done){
								resolve()
								delete tickCallbacks[coroutineId]
							  } else {
								let promise
								let usePromise = true
								if(ret.value instanceof Promise){
									promise = ret.value
								} else if(ret.value instanceof CoroutineYield) {
									//console.log("Hey I am a coroutine Yield")
									promise = ret.value.process()
								}

								if(promise != undefined){
									delete tickCallbacks[coroutineId]
								  promise.then(()=>{
									tickCallbacks[coroutineId] = progress
									progress()
								  })
								}
							  }
							}
							tickCallbacks[coroutineId] = progress
						  })
						}

						//******************** TICK

						let tickCallbacks = {}
						let id = 0

						setInterval(()=>{
						  Tick()
						}, 100)

						function Tick(){
						  //console.log('Tick')
						  Object.values(tickCallbacks).forEach(fn => {
							fn()
						  })
						}


						//********************* STARTUP


