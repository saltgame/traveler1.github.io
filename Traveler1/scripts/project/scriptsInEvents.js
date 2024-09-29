


const scriptsInEvents = {

	async _11111111111_Event13_Act4(runtime, localVars)
	{
		ysdk.features.GameplayAPI.stop()
	},

	async _11111111111_Event14_Act4(runtime, localVars)
	{
		ysdk.features.GameplayAPI.start()
	},

	async _11111111111_Event15_Act4(runtime, localVars)
	{
		ysdk.features.GameplayAPI.start()
	},

	async _11111111111_Event17_Act4(runtime, localVars)
	{
		ysdk.features.GameplayAPI.stop()
	},

	async _11111111111_Event18_Act4(runtime, localVars)
	{
		ysdk.features.GameplayAPI.start()
	},

	async _11111111111_Event19_Act4(runtime, localVars)
	{
		ysdk.features.GameplayAPI.start()
	},

	async _11111111111_Event20_Act3(runtime, localVars)
	{
		ysdk.features.GameplayAPI.start()
	},

	async _11111111111_Event25_Act1(runtime, localVars)
	{
		const ysdk = await YaGames.init();
		
		// Сообщаем платформе, что игра загрузилась и можно начинать играть.
		ysdk.features.LoadingAPI?.ready()
	},

	async _11111111111_Event25_Act2(runtime, localVars)
	{
		ysdk.features.LoadingAPI.ready()
	},

	async _11111111111_Event26_Act1(runtime, localVars)
	{
		ysdk.features.GameplayAPI.stop()
	},

	async _11111111111_Event27_Act1(runtime, localVars)
	{
		ysdk.features.GameplayAPI.stop()
	},

	async _11111111111_Event28_Act1(runtime, localVars)
	{
		ysdk.features.GameplayAPI.start()
	},

	async _11111111111_Event29_Act1(runtime, localVars)
	{
		ysdk.features.GameplayAPI.stop()
	},

	async _11111111111_Event30_Act1(runtime, localVars)
	{
		ysdk.features.GameplayAPI.start()
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

