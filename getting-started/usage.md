# Running Enlightn

## Enlightn Command

After installing Enlightn, simply run the `enlightn` Artisan command to run Enlightn:

```bash
php artisan enlightn
```

<img :src="$withBase('/images/terminal.png')" alt="Enlightn Terminal" />

If you wish to run specific analyzer classes, you may specify them as optional arguments:

```bash
php artisan enlightn Enlightn\\Enlightn\\Analyzers\\Security\\CSRFAnalyzer Enlightn\\EnlightnPro\\Analyzers\\Security\\DirectoryTraversalAnalyzer
```

Note that the class names should be fully qualified and escaped with double slashes as above.

The `enlightn` command will return a `0` status code for success and a `1` status code if any of the analyzers fail. This may be useful if you wish to integrate Enlightn with your CI/CD tool.

## Run At Least Once In Production

If you truly want to get amazing recommendations from Enlightn, it is recommended that you at least run Enlightn once in production.

Several of Enlightn's checks are environment specific. So, some tests that pass in your local environment, can fail in production. For instance, it is recommended to cache your routes in production but doing so in local is not recommended.

Enlightn is meant to be used in all environments as it does not include any overhead. Unlike other packages that record queries or events, Enlightn does not include any additional processing while your application runs. The only time any analysis takes place is when you run the `enlightn` Artisan command.

In case you cannot run Enlightn on production, at the very least, you can set your `APP_ENV` variable to `production` on your local machine, run your deployment script and then run Enlightn. While this will miss out on server configurations, it will ensure that your deployment script contains the recommended performance enhancements for a production environment.

## Failed Checks

All checks that fail will include a description of why they failed along with the associated lines of code (if applicable).

<img :src="$withBase('/images/queue-timeout.png')" alt="Failed Check" />

## Report Card

Finally, after all the checks have run, the `enlightn` Artisan command will output a report card, which contains information on how many and what percentage of checks passed, failed or were skipped.

<img :src="$withBase('/images/report_card.png')" alt="Report Card" />

The checks indicated as "Not Applicable" were not applicable to your specific application and were skipped. For instance, the CSRF analyzer is not applicable for stateless applications.

The checks reported under the "Error" row indicate the analyzers that failed with exceptions during the analysis. Normally, this should not happen but if it does, the associated error message will be displayed and may have something to do with your application.

## How Frequently Should I Run Enlightn?

A good practice would be to run Enlightn every time you are deploying code or pushing or a new release. If your application is stable (not many new releases), then you might want to run Enlightn say once a month or so. Remember that Enlightn not only scans your application code but also monitors your application's health.