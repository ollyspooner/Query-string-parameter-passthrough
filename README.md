# Query string parameter passthrough

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/ollyspooner/stackblitz-starters-fbxrua)

This script takes GET parameters with a specific prefix and applies them to the url of specified links.

## Usage

Add a data attribute of "data-param-prefix" to the A element to be updated. The attribute should specify the prefix that will identify the parameters to include from the query string.

The "href" attribute forms the basis of the new url:
* Any existing parameters will be preserved
* Parameters from the query string with a matching prefix will be appended to the url.
* Parameters from the query string with a matching prefix that are the same as existing parameters will result in the value of the parameter being taken from the query string. This can be used to provide default values that can be overridden.
