/*


> SET foo bat
> GET foo
"bar"

> INCR foo

> DEL foo

> EXISTS foo

> EXPIRE greeting 50

> TTL greeting - get the remaing time before key expires

> SETX foo 10 bar - set the value along with the expiration

> PERSIST foo - discards the TTL value set on the field

> MSET key1 "Hello" key2 "World" - set multiple key at a time

> RENAME keyOne keyTwo - rename key from keyOne to keyTwo

--- LIST

>LPUSH name "sujan"
>LPUSH name "ryu"
>LPUSH name "shaun"
>LPUSH name 0 -1 - list the value specified in inde
>LLEN name - length of the list
*/
