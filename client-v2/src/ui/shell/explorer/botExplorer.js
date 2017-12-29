//
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license.
//
// Microsoft Bot Framework: http://botframework.com
//
// Bot Framework Emulator Github:
// https://github.com/Microsoft/BotFramwork-Emulator
//
// Copyright (c) Microsoft Corporation
// All rights reserved.
//
// MIT License:
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED ""AS IS"", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//

import { css } from 'glamor';
import React from 'react';

import ExpandCollapse from '../../layout/expandCollapse';

const CSS = css({
    backgroundColor: 'skyblue',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    width: 200
});

const BOTS_CSS = css({
    display: 'flex',
    flexDirection: 'column',
    listStyleType: 'none',
    margin: 0,
    padding: 0
});

export default props =>
    <ul className={ CSS }>
        <li>
            <ExpandCollapse
                initialExpanded={ true }
                title="Bots"
            >
                <ExpandCollapseTitle>Bots</ExpandCollapseTitle>
                <ul className={ BOTS_CSS }>
                    <li>http://localhost:3000/</li>
                    <li>http://localhost:3001/</li>
                    <li>http://localhost:3002/</li>
                </ul>
            </ExpandCollapse>
        </li>
    </ul>

const ExpandCollapseTitle = props => false;