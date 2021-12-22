### Flag global:

[stackoverflow](https://stackoverflow.com/questions/34279517/using-css-modules-how-do-i-define-a-global-class)
  ```
:global(.tweet) {
    text-align: left;
}
:global(.user) {
    text-align: left;
}
Or define a global block

:global {
    .tweet {
        text-align: left;
    }
    .user {
        text-align: left;
    }   
}

  ```
