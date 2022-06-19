
# Description

This is to show that `Prromise.all` runs tasks concurrently

```bash

 ~/Projects/play/promise-playground | master +2 !2  time node src/promise-sequential.js                                                                 1 err | 08:56:30 PM 
Waited 5000 ms
Waited 5000 ms
Waited 10000 ms
node src/promise-sequential.js  0.06s user 0.01s system 0% cpu 15.061 total
```

```bash

 ~/Projects/play/promise-playground | master +4 !3  time node src/parallel-v-sequential/promise-parallel.js                                             1 err | 09:05:11 PM 
Waited 5000 ms
Waited 10000 ms
node src/parallel-v-sequential/promise-parallel.js  0.04s user 0.01s system 0% cpu 10.052 total
 ~/Projects/play/promise-playground | master +4 !3
 ```
