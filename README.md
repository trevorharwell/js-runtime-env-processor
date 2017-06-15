JS Runtime Env Processor
=====================
Use runtime environment variables in bundled/minified javascript apps.

[![Build Status](https://travis-ci.org/trevorharwell/js-runtime-env-processor.svg?branch=master)](https://travis-ci.org/trevorharwell/js-runtime-env-processor)
[![npm Module](https://img.shields.io/npm/v/js-runtime-env-processor.svg)](https://www.npmjs.com/package/js-runtime-env-processor)

Usage
-----

Designed for [create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack). See its documentation to use this module for [Runtime configuration](https://github.com/mars/create-react-app-buildpack/blob/master/README.md#environment-variables).

Background
-----------

Normally javascript apps are compiled into a bundle before being deployed. During this build phase, environment variables may be embedded in the javascript bundle, such as with [Webpack DefinePlugin](https://webpack.github.io/docs/list-of-plugins.html#defineplugin).

When hosting on a [12-factor](https://12factor.net) platform like [Heroku](https://www.heroku.com), these embedded values may go stale when setting new [config vars](https://devcenter.heroku.com/articles/config-vars) or promoting through a [pipeline](https://devcenter.heroku.com/articles/pipelines).
