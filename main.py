from mcstatus import JavaServer


# You can pass the same address you'd enter into the address field in minecraft into the 'lookup' function
# If you know the host and port, you may skip this and use JavaServer("example.org", 1234)
server = JavaServer.lookup("s6.joinserver.ru:25615")

status = server.status()
print(f"Сейчас играет на сервере: {status.players.online} Задержка сервера: {status.latency} ms")
latency = server.ping()
print(f"Задержка сервера: {latency} ms")
globvar = 0
def set_globvar_to_one():
    global globvar    # Needed to modify global copy of globvar
    globvar = 1
