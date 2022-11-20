## Server

```nomnoml
[<start> server]

[saco una carta del maso]



```

- 

## Client

```nomnoml
[<actor>Jugador1] -> [<input> nombre]
[nombre] -> [<state>waiting room]
[waiting room] -> [game]
[waiting room] - [<label> listo]
[<label> listo] -> [waiting room]
[game] -> [saco carta]
[saco carta] - [agrego tiempo a la temporada]
[saco carta] -> [carta emboscada]
[saco carta] -> [carta comun]
[saco carta] -> [carta ruina]
[carta ruina] -> [saco nueva carta]
[carta comun] -> [<choice> se puede colocar]
[saco nueva carta] -> [se puede colocar]
[carta emboscada] -> [rotamos mapa]
[rotamos mapa] ->  [se puede colocar]
[se puede colocar] -> si[selecciona lugar]
[se puede colocar] -> no[se cambia a;cuadrado unico]
[se cambia a;cuadrado unico] -> [selecciona lugar]
[selecciona lugar] -> [<choice> confirma;lugar]
[confirma;lugar] -> no[selecciona lugar]
[confirma;lugar] -> si[esperando a otros jugadores]
[esperando a otros jugadores] - [<label>todos listos]
[todos listos] -> [<choice> termino la;temporada]
[termino la;temporada] no -> [saco carta]
[termino la;temporada] si -> [se cuentan puntos]
[se cuentan puntos] -> [<choice> termino el juego]
[termino el juego] -> no[se cambian los objetivos]
[termino el juego] -> si[se define un ganador]
[se cambian los objetivos] -> [saco carta]

```


