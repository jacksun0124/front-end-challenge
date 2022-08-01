import React from 'react';

class Tester extends React.Component {

    render() {
        return (
            <div>
                <ol>
                    <li>(Check) [npm](https://www.npmjs.com) as package manager </li>
                    <li>(Check) [npm scripts](https://docs.npmjs.com/misc/scripts) as automation tool</li>
                    <li>(Check) [webpack](http://webpack.github.io) as bundler (+ loaders & plugins)</li>
                    <li>(Check) [babel](https://babeljs.io) for ES6/7 to JS compilation</li>
                    <li>(Check) [react](https://facebook.github.io/react) (+ jsx)</li>
                    <li>(Check) [redux](http://redux.js.org) (+ middleware)</li>
                    <li>(Check) [react-router](https://github.com/reactjs/react-router)</li>
                    <li>(Check) [lodash](https://lodash.com) ([lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) is encouraged)</li>
                    <li>(Not yet) [immutable.js](http://facebook.github.io/immutable-js) or [seamless-immutable](https://github.com/rtfeldman/seamless-immutable)</li>
                    <li>(Not yet) [mocha](http://mochajs.org) + [chai](http://chaijs.com) + [enzyme](http://airbnb.io/enzyme/) for testing</li>
                </ol>
            </div>
        );
    }
}

export default Tester;