@echo off
for /f "delims=" %%i in (config.txt) do (
	node "%~dp0\.\server\serverPage\JServer.js" %%i
)
pause