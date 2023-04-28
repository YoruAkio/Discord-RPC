const RichPresence = require("discord-rpc")
const browser = typeof window != 'undefined'
const rpc = new RichPresence.Client({ transport: "ipc"})
const config = require("./config.json")

rpc.on("ready", () => {
	console.log("Running discord rpc")

	rpc.setActivity({
		details: config.Details,
		startTimestamp: new Date()
	})

	console.log(`Rich Presence is logged on: ${rpc.user.username}`)
})

rpc.login({ clientId: "967967669871579167" })