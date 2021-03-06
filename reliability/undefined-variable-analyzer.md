# Undefined Variable Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major     | 5 minutes    |

## Introduction

This analyzer scans your application code to ensure that your code does not reference undefined variables.

There may be cases where the variable is only defined if certain conditions are met. For instance, consider the following code:

```php
switch (foo()) {
    case 1:
        $definedInCases = foo();
        break;
    case 2:
        $definedInCases = 5;
        break;
}

echo (string) $definedInCases; // may be undefined
```

In the code above, the variable `$definedInCases` may only be defined if certain conditions are met. The analyzer will also flag such situations. This may also lead to "false positives" so if that is the case, feel free to ignore the warnings or the analyzer.

## How To Fix

The analyzer highlights the files and lines of code where these undefined variables may appear. To fix them, make sure they are defined in advance before referencing them.