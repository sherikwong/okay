Run to access CLI postgres

```
sudo -u postgres psql
```

Find PSQL config file
```
psql -U postgres -c 'show config_file'
```


Unlock file in need of admin access
```
sudo chmod go+rx /Library/PostgreSQL/12/data/
```

Authentication failure
https://askubuntu.com/questions/413585/postgres-password-authentication-fails

Change user
```
ALTER USER postgres PASSWORD '1993Bawk!'
```
