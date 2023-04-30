## Iframe Workaround for Multiple Excalibur Engines

This uses iframes to isolate different excalibur instances, currently they don't like playing together because of how the graphics context uses the GL context.

See it in action https://eonarheim.github.io/multi-excalibur-engine-workaround/

### Prerequisites

* Node
* NPM

### Running locally

* `npm install`
* `npm start`