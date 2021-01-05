# Cache Prefix Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major | 1 minute    |

## Introduction

`laravel_cache` is the default cache prefix for all Laravel applications. If you share the same cache servers for multiple applications, this may result in a collision with other applications.

Some examples where the collision can create issues are as follows:

1. Queueing system: For instance, a `queue:restart` on any one of the shared applications will restart queue workers of all applications and a `horizon:terminate` may terminate Horizon running on all shared applications.
2. Rate limiting: Named rate limiters with the same name will share counts between the applications.
3. Unique Job Locks: Unique job locks will be shared across applications if jobs have the same class name.

## How To Fix

To avoid a collision with other applications that share the same cache servers, you may modify the cache prefix in your `config/cache.php` file or the corresponding `CACHE_PREFIX` env variable:

```php
/*
|--------------------------------------------------------------------------
| Cache Key Prefix
|--------------------------------------------------------------------------
|
| When utilizing a RAM based store such as APC or Memcached, there might
| be other applications utilizing the same cache. So, we'll specify a
| value to get prefixed to all our keys so we can avoid collisions.
|
*/

'prefix' => env('CACHE_PREFIX', 'my_appname'),
```

If you use Redis, it is also a good practice to use separate Redis cache databases when sharing the same Redis cache servers.

## References

- [Laravel Caching Documentation](https://laravel.com/docs/cache)