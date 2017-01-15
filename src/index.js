// Copyright, 2013-2016, by Tomas Korcak. <korczis@gmail.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var querystring = require('querystring');
var url = require('url');

var default_url = 'https://www.sreality.cz/hledani/prodej/byty/jihomoravsky-kraj,vysocina-kraj,jihocesky-kraj,plzensky-kraj,karlovarsky-kraj,ustecky-kraj,stredocesky-kraj,praha,liberecky-kraj,kralovehradecky-kraj,pardubicky-kraj,moravskoslezsky-kraj,olomoucky-kraj,zlinsky-kraj?velikost=1%2Bkk,1%2B1,2%2Bkk,2%2B1,4%2B1,4%2Bkk,3%2Bkk,3%2B1,5%2Bkk,5%2B1,6-a-vice,atypicky&stav=spatny-stav,dobry-stav,velmi-dobry-stav,ve-vystavbe,developerske-projekty,novostavby,k-demolici,pred-rekonstrukci,po-rekonstrukci?_escaped_fragment_=';

var exports = module.exports = function($, item) {
    return [
        {
            type: 'url',
            url: default_url,
            processor: 'sreality.cz/listing'
        }
    ];
};
