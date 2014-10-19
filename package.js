Package.describe({
    summary: "Easy and effective Hotkeys for your app - powered by mousetrap",
    version: "1.0.0",
    name: "flowkey:hotkeys",
    git: "https://github.com/nerdmed/hotkeys.git"
});

Package.onUse(function(api, where) {
	api.versionsFrom(['METEOR@0.9.0', 'METEOR@0.9.4'])
    api.use(['underscore','check','awatson1978:mousetrap@1.0.2'], "client");
    api.addFiles(['hotkeys.js'], "client");

    api.export("Hotkeys")

});