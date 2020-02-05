module.exports = client => {
  client.on("ready", async () => {
    var now = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      timeZoneName: "short",
      weekday: "short",
      month: "long",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    //client.user.setActivity("My Music commads are being fucked up");
    //client.user.setActivity("for .help", {type: 'WATCHING'});
    client.channels.get("660560961702461483");
    console.log(`${client.user.username} is ready @ ${now}`);

    client.setInterval(async function() {
      let totalSeconds = client.uptime / 1000;
      let days = Math.floor(totalSeconds / 86400);
      let hours = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = totalSeconds % 60;

     
      client.user.setActivity(
        `~help or ~support | My uptime is ${Math.round(days)} days, ${Math.round(
          hours)}:${Math.round(minutes)}:${Math.round(seconds)}`
      );
    }, 1000);
  });
};
