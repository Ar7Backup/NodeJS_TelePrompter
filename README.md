# NodeJS_TelePrompter
Simple NodeJS app remote texting via web-sockets to mirrored teleprompter styled viewer, controller by serial COM communication.

## Common setup
```bash
npm install
```
IP address
```bash
app.js - httpServer.listen(8000,'IP HERE');
index.html - io.connect(8000,'IP HERE');
tele.html - io.connect(8000,'IP HERE');
```

# Screenshot
  ![SS](Images/Screenshot.PNG?raw=true "SS")
