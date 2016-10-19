---
layout: page
title: About
permalink: /about/
---
<style>

ol, ul {
    padding: 0;
}

.pull-right {
  float: right;
}
.pull-left {
  float: left;
}

.style-content-1 {
  *zoom: 1;
}
.style-content-1:before,
.style-content-1:after {
  display: table;
  content: "";
  line-height: 0;
}
.style-content-1:after {
  clear: both;
}
.style-content-1:before,
.style-content-1:after {
  display: table;
  content: "";
  line-height: 0;
}
.style-content-1:after {
  clear: both;
}
.style-content-1 ul {
  margin-bottom: 0;
  margin-top: 0;
}
.style-content-1 .alignnone,
.style-content-1 .alignleft,
.style-content-1 .alignright,
.style-content-1 .aligncenter {
  margin: 0;
}
.style-content-1 .big {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .style-content-1 {
    margin: 30px 0;
  }
  .style-content-1 .small {
    width: 230px;
    position: relative;
  }
  .style-content-1 .big {
    width: 100%;
  }
  .style-content-1.left .small {
    float: left;
  }
  .style-content-1.left .big {
    float: left;
    margin-left: -230px;
    padding-left: 260px;
  }
  .style-content-1.right .small {
    float: right;
  }
  .style-content-1.right .big {
    float: right;
    margin-right: -230px;
    padding-right: 260px;
  }
}
@media (max-width: 767px) {
  .style-content-1 {
    margin: 20px 0;
  }
  .style-content-1 .big,
  .style-content-1 .small {
    width: 100%;
  }
  .style-content-1 .small {
    margin-bottom: 20px;
    margin: 0 auto 20px auto;
    width: 230px;
  }
}

ul.style-1,
ol.style-1 {
  list-style: none;
  margin-left: 0;
  padding: 0;
  border-top: 1px solid #D8D8D8;
  border-bottom: 1px solid #ECECEC;
}
ul.style-1 br,
ol.style-1 br {
  display: none;
}
ul.style-1 li,
ol.style-1 li {
  overflow: hidden;
  border-bottom: 1px solid #D8D8D8;
  border-top: 1px solid #ECECEC;
  line-height: 37px;
}
ul.style-1 .pull-right,
ol.style-1 .pull-right {
  color: #aaa;
}

.timeline {
  list-style: none;
  *zoom: 1;
}
.timeline:before,
.timeline:after {
  display: table;
  content: "";
  line-height: 0;
}
.timeline:after {
  clear: both;
}
.timeline:before,
.timeline:after {
  display: table;
  content: "";
  line-height: 0;
  box-sizing: content-box;
}
.timeline:after {
  clear: both;
}
.timeline .tl-wrap {
  background: #fff;
  padding: 20px;
  margin-top: 20px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  box-shadow: 0 0 10px #bbb;
}
.timeline strong {
  font-weight: normal;
  display: block;
  text-shadow: 0 0 2px #bbb;
}
.timeline .tl-wrap:first-child {
  margin-top: 0;
}
.timeline .tl-wrap.tl-info {
  background: #3498db;
  color: #ffffff;
}
.timeline .tl-wrap.tl-success {
  background: #7cc576;
  color: #ffffff;
}
.timeline .tl-wrap.tl-warning {
  background: #f1c40f;
  color: #ffffff;
}
.timeline .tl-wrap.tl-danger {
  background: #e74c3c;
  color: #ffffff;
}
.timeline .tl-content {
  font-size: 12px;
  margin-bottom: 0;
  text-shadow:none;
}

@media (min-width: 768px) {
  .timeline {
    position: relative;
    margin: 30px 0;
  }
  .timeline:before {
    content: "";
    display: block;
    width: 2px;
    height: 100%;
    background: #dddddd;
    position: absolute;
    left: 50%;
  }
  .timeline .pull-left {
    clear: left;
  }
  .timeline .pull-right {
    clear: right;
  }
  .timeline .tl-wrap {
    width: 47%;
  }
  .timeline .tl-wrap:first-child + .tl-wrap {
    margin-top: 40px;
  }
  .timeline strong {
    position: relative;
  }
  .timeline strong:before {
    content: "";
    border-top: 6px dashed transparent;
    border-bottom: 6px solid transparent;
    position: absolute;
  }
  .timeline .pull-left strong:before {
    border-left: 6px solid #fff;
    right: -26px;
  }
  .timeline .pull-left.tl-info strong:before {
    border-left-color: #3498db;
  }
  .timeline .pull-left.tl-success strong:before {
    border-left-color: #7cc576;
  }
  .timeline .pull-left.tl-warning strong:before {
    border-left-color: #f1c40f;
  }
  .timeline .pull-left.tl-danger strong:before {
    border-left-color: #e74c3c;
  }
  .timeline .pull-right strong:before {
    border-right: 6px solid #fff;
    left: -26px;
  }
  .timeline .pull-right.tl-info strong:before {
    border-right-color: #3498db;
  }
  .timeline .pull-right.tl-success strong:before {
    border-right-color: #7cc576;
  }
  .timeline .pull-right.tl-warning strong:before {
    border-right-color: #f1c40f;
  }
  .timeline .pull-right.tl-danger strong:before {
    border-right-color: #e74c3c;
  }
  .timeline .tl-wrap:before {
    content: "";
    width: 6px;
    height: 6px;
    background: #bbb;
    position: absolute;
    border: 2px solid #ffffff;
    top: auto;
    left: 50%;
    margin-left: -4px;
    margin-top: 1px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }
}
@media (max-width: 767px) {
  .timeline {
    margin: 15px 0;
  }
  .timeline .tl-wrap {
    width: 100%;
  }
}

.progress {
  overflow: hidden;
  height: 25px;
  margin-bottom: 25px;
  background-color: rgba(215,215,215,0.2);
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
border-bottom: 1px solid #FFFFFF;
border-right: 1px solid #FFFFFF;
border-top: 1px #D5D5D5 solid;
border-left: 1px #D5D5D5 solid;
    border-radius: 5px;
}
@media (max-width: 767px) {
  .progress {
    margin-bottom: 0px;
  }
  [class*="span"] {
    min-height: 0 !important;
  }
}
.progress .bar {
  width: 0%;
  height: 100%;
  color: #fff;
  text-shadow: none;
  float: left;
  font-size: 12px;
  text-align: center;
  box-shadow: 0 0 5px #aaa;
  background-color: #1abc9c;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: width 0.6s ease;
  -moz-transition: width 0.6s ease;
  -o-transition: width 0.6s ease;
  transition: width 0.6s ease;
}
.progress-danger .bar,
.progress .bar-danger {
  background-color: #e74c3c;
}
.progress-success .bar,
.progress .bar-success {
  background-color: #7cc576;
}
.progress-info .bar,
.progress .bar-info {
  background-color: #3498db;
}
.progress-warning .bar,
.progress .bar-warning {
  background-color: #f1c40f;
}

.row-fluid {
  width: 100%;
  *zoom: 1;
}
.row-fluid:before,
.row-fluid:after {
  display: table;
  content: "";
  line-height: 0;
}
.row-fluid:after {
  clear: both;
}
.row-fluid:before,
.row-fluid:after {
  display: table;
  content: "";
  line-height: 0;
}
.row-fluid:after {
  clear: both;
}
.row-fluid strong{
  font-weight:normal;
}
.row-fluid [class*="span"] {
  display: block;
  width: 100%;
  min-height: 35px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  float: left;
  margin-left: 2.127659574468085%;
  *margin-left: 2.074468085106383%;
}
.row-fluid [class*="span"]:first-child {
  margin-left: 0;
}
.row-fluid .controls-row [class*="span"] + [class*="span"] {
  margin-left: 2.127659574468085%;
}
.row-fluid .span12 {
  width: 100%;
  *width: 99.94680851063829%;
}
.row-fluid .span11 {
  width: 91.48936170212765%;
  *width: 91.43617021276594%;
}
.row-fluid .span10 {
  width: 82.97872340425532%;
  *width: 82.92553191489361%;
}
.row-fluid .span9 {
  width: 74.46808510638297%;
  *width: 74.41489361702126%;
}
.row-fluid .span8 {
  width: 65.95744680851064%;
  *width: 65.90425531914893%;
}
.row-fluid .span7 {
  width: 57.44680851063829%;
  *width: 57.39361702127659%;
}
.row-fluid .span6 {
  width: 48.93617021276595%;
  *width: 48.88297872340425%;
}
.row-fluid .span5 {
  width: 40.42553191489362%;
  *width: 40.37234042553192%;
}
.row-fluid .span4 {
  width: 31.914893617021278%;
  *width: 31.861702127659576%;
}
.row-fluid .span3 {
  width: 23.404255319148934%;
  *width: 23.351063829787233%;
}
.row-fluid .span2 {
  width: 14.893617021276595%;
  *width: 14.840425531914894%;
}
.row-fluid .span1 {
  width: 6.382978723404255%;
  *width: 6.329787234042553%;
}

@media (min-width: 1200px) {
  .row-fluid {
    width: 100%;
    *zoom: 1;
  }
  .row-fluid:before,
  .row-fluid:after {
    display: table;
    content: "";
    line-height: 0;
  }
  .row-fluid:after {
    clear: both;
  }
  .row-fluid:before,
  .row-fluid:after {
    display: table;
    content: "";
    line-height: 0;
  }
  .row-fluid:after {
    clear: both;
  }
  .row-fluid [class*="span"] {
    display: block;
    width: 100%;
    min-height: 35px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    float: left;
    margin-left: 2.564102564102564%;
    *margin-left: 2.5109110747408616%;
  }
  .row-fluid [class*="span"]:first-child {
    margin-left: 0;
  }
  .row-fluid .controls-row [class*="span"] + [class*="span"] {
    margin-left: 2.564102564102564%;
  }
  .row-fluid .span12 {
    width: 100%;
    *width: 99.94680851063829%;
  }
  .row-fluid .span11 {
    width: 91.45299145299145%;
    *width: 91.39979996362975%;
  }
  .row-fluid .span10 {
    width: 82.90598290598291%;
    *width: 82.8527914166212%;
  }
  .row-fluid .span9 {
    width: 74.35897435897436%;
    *width: 74.30578286961266%;
  }
  .row-fluid .span8 {
    width: 65.81196581196582%;
    *width: 65.75877432260411%;
  }
  .row-fluid .span7 {
    width: 57.26495726495726%;
    *width: 57.21176577559556%;
  }
  .row-fluid .span6 {
    width: 48.717948717948715%;
    *width: 48.664757228587014%;
  }
  .row-fluid .span5 {
    width: 40.17094017094017%;
    *width: 40.11774868157847%;
  }
  .row-fluid .span4 {
    width: 31.623931623931625%;
    *width: 31.570740134569924%;
  }
  .row-fluid .span3 {
    width: 23.076923076923077%;
    *width: 23.023731587561375%;
  }
  .row-fluid .span2 {
    width: 14.52991452991453%;
    *width: 14.476723040552828%;
  }
  .row-fluid .span1 {
    width: 5.982905982905983%;
    *width: 5.929714493544281%;
  }
}
@media (min-width: 768px) and (max-width: 979px) {
  .row-fluid {
    width: 100%;
    *zoom: 1;
  }
  .row-fluid:before,
  .row-fluid:after {
    display: table;
    content: "";
    line-height: 0;
  }
  .row-fluid:after {
    clear: both;
  }
  .row-fluid:before,
  .row-fluid:after {
    display: table;
    content: "";
    line-height: 0;
  }
  .row-fluid:after {
    clear: both;
  }
  .row-fluid [class*="span"] {
    display: block;
    width: 100%;
    min-height: 35px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    float: left;
    margin-left: 2.7624309392265194%;
    *margin-left: 2.709239449864817%;
  }
  .row-fluid [class*="span"]:first-child {
    margin-left: 0;
  }
  .row-fluid .controls-row [class*="span"] + [class*="span"] {
    margin-left: 2.7624309392265194%;
  }
  .row-fluid .span12 {
    width: 100%;
    *width: 99.94680851063829%;
  }
  .row-fluid .span11 {
    width: 91.43646408839778%;
    *width: 91.38327259903608%;
  }
  .row-fluid .span10 {
    width: 82.87292817679558%;
    *width: 82.81973668743387%;
  }
  .row-fluid .span9 {
    width: 74.30939226519337%;
    *width: 74.25620077583166%;
  }
  .row-fluid .span8 {
    width: 65.74585635359117%;
    *width: 65.69266486422946%;
  }
  .row-fluid .span7 {
    width: 57.18232044198895%;
    *width: 57.12912895262725%;
  }
  .row-fluid .span6 {
    width: 48.61878453038674%;
    *width: 48.56559304102504%;
  }
  .row-fluid .span5 {
    width: 40.05524861878453%;
    *width: 40.00205712942283%;
  }
  .row-fluid .span4 {
    width: 31.491712707182323%;
    *width: 31.43852121782062%;
  }
  .row-fluid .span3 {
    width: 22.92817679558011%;
    *width: 22.87498530621841%;
  }
  .row-fluid .span2 {
    width: 14.3646408839779%;
    *width: 14.311449394616199%;
  }
  .row-fluid .span1 {
    width: 5.801104972375691%;
    *width: 5.747913483013988%;
  }
}
@media (max-width: 767px) {
  .row-fluid {
    width: 100%;
  }
  [class*="span"],
  .row-fluid [class*="span"] {
    float: none;
    display: block;
    width: 100%;
    margin-left: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .span12,
  .row-fluid .span12 {
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .row-fluid [class*="offset"]:first-child {
    margin-left: 0;
  }
}
</style>
<article id="About-Me" class="entry group format-standard" style="max-witdh:800px;">
  <div class="entry-contain">
    <div class="entry-content">

<div class="page-content"><p>Hi，这里是Todd Xander的个人博客，此人是技术宅，深度代码洁癖症患者，轻度摄影爱好者.</p>
  <div class="style-content-1 right">
    <div class="small"><img alt="" src="/images/logo.png" class="alignnone">
    </div>
    <div class="big">
      <ul class="style-1">
        <li>DOB
<span class="pull-right">Oct. 23rd 1984</span>
        </li>
        <li>Gender
<span class="pull-right">Male</span>
        </li>
        <li>Nationality
<span class="pull-right">China</span>
        </li>
        <li>Relationship Status
<span class="pull-right">Single</span>
        </li>
        <li>Mobile Phone
<span class="pull-right">186-XXXX-XXXX</span>
        </li>
        <li>Website
<a href="/"><span class="pull-right">xander.farbox.com</span></a>
        </li>
        <li>Languages
<span class="pull-right">Mandarin/English</span>
        </li>
      </ul>
    </div>
  </div>
</div>
<h3>Work and Education</h3>
<p>打工是一辈子的事~</p>
<ol class="timeline">
  <li class="tl-wrap pull-left tl-danger"><strong class="tl-title">SenseTime Co., LTD.</strong>

<span class="tl-content">Dec 2014 to Now · Video Algorithm Leader</span>
  </li>
  <li class="tl-wrap pull-right"><strong class="tl-title">Sumavision Co., LTD.</strong>

<span class="tl-content">Jul 2007 to Dec 2012 · Chief Architecture</span>
  </li>
  <li class="tl-wrap pull-left"><strong class="tl-title">BUPT</strong>

<span class="tl-content">Sep 2003 to Jul 2007 · Telecom.</span>
  </li>
  <li class="tl-wrap pull-right"><strong class="tl-title">№1 School of TsingHai Oilfield</strong>

<span class="tl-content">Sep 2000 to Jun 2003 · DunHuang</span>
  </li>
</ol>
<h3>Technical Experience</h3>
<p>学习是一辈子的事~</p><strong>C/C++</strong>
<div class="progress progress-info">


  <div style="width: 90%;" class="bar">9/10</div>
</div><strong>Linux</strong>
<div class="progress progress-success">


  <div style="width: 70%;" class="bar">7/10</div>
</div><strong>Lua</strong>
<div class="progress progress-warning">


  <div style="width: 60%;" class="bar">6/10</div>
</div><strong>Python</strong>
<div class="progress progress-danger">


  <div style="width: 60%;" class="bar">6/10</div>
</div>

    </div>
    <div class="entry-meta"><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/3.0/cn/" title="CC:BY-NC-ND" target="_BLANK" class="cc"><i class="icon-cc-by"></i><i class="icon-cc-nc"></i><i class="icon-cc-nd"></i></a>
    </div>
  </div>
</article>
