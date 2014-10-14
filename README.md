<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>21457014김세랑</title>
  <style>
    * {font-family:"NanumGothic", "AppleGothic", "Malgun Gothic", Sans-serif;}
    div.total {margin:0 auto;
            padding: 10px;
            max-width: 600px;
    }
    h1 {background-color: black;
       color: white;
      font-size: 60px;
    text-align: center;}
    .name {text-align:right;}
    p {text-align:justify;}
    h2 {color: blue;
    text-align:right;
    margin: 5px;
    padding: 1px;
    border-bottom: 3px solid blue;
    }
    strong {background-color: yellow;}
    .date {border-top: 1px solid black;
    padding: 10px 0px 0px 0px}
table {background-color: gray;
      text-align: center;
           margin: 0 auto;
 }
    li {margin: 3px;}
  </style>
</head>
<body>
<div class="total">
  <h1>중간고사</h1>
 <p class="name">김세랑</p>
  <h2>인라인 요소 목록</h2>
  <p>다음은 HTML에서 자주 사용되는 요소들 입니다.</p>
       <ul>
          <li>
          <strong>a</strong>:하이퍼링크(Anchor)
          </li>
          <li>
          <strong>img</strong>: 이미지(Image)
          </li>
         <li>
          <strong>span</strong>: 일반용도의 인라인(Span)
          </li>
          <li>
         <strong>strong</strong>: 중요(Strong)
          </li>
         <li>
          <strong>em</strong>: 강조(Emphasis)
          </li>
       </ul>
  <h2>블럭 요소 목록</h2>
  <p>다음은 HTML에서 자주 사용되는 요소들 입니다.</p>
       <ol>
          <li>
          <strong>p</strong>: 단락(Paragraph)
          </li>
          <li>
         <strong>h1</strong>: 큰제목(Heading 1)
          </li>
         <li>
          <strong>ul</strong>: 순서없는 목록 (Unordered)
          </li>
          <li>
          <strong>ol</strong>: 순서 있는 목록 (Ordered List)
          </li>
         <li>
          <strong>table</strong> 표(table)
          </li>
       </ol>
  <h2>표만들기</h2>
  <p>표를 만들려면 table 요소를 사용합니다.
 </p>
  <table>
  <thead>
    <tr>
      <th>음료</th>
      <th>가격</th>
      <th>알콜</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>아메리카노</td>
      <td>2,000</td>
      <td>X</td>
    </tr>
     <tr>
      <td>카페모카</td>
      <td>2,500</td>
      <td>X</td>
    </tr>
     <tr>
      <td>맥주</td>
      <td>3,000</td>
      <td>Y</td>
    </tr>
    </tbody>
</table>
  <h2>이미지 넣기</h2>
  <p>이미지를 넣으려면 img요소를 사용합니다.</p>
  <p>src속성에는 이미지의 경로(URL)를 적습니다.</p>
  <p>이미지를 요소에서는 항상 alt속성을 사용하며 대체 텍스트를 명시해 주어야 합니다."alt"는 Alternative text"의 약자로, 이미지를 표시할수없을 때 이미지를 대신하여 나타낼 텍스트를 뜻합니다.</p>
 <h2>CSS란?</h2>
 CSS는 Cascading Stylesheet의 약자 이며 HTML 같은 마크업 언어로 작성된 문서를 꾸미기 위해 사용합니다. HTML문서의 head요소 안에 style요소를 넣고 CSS 코드를 적으면 해당문서를 다양하게 꾸밀수있습니다.
<p>CSS에 대한 더 자세한 설명은 <a href="#">CSS</a>문서를 참고하세요.</p>
 <h2>중첩된 목록</h2>
  <p>목록 요소 안에 또다른 목록 요소를 중첩하여 사용할수 있습니다.</p>
    <ol><li>
        <div class="entry">
         홍길동
        
        </div>
      </li>
        <ol>
        
          <li>
            <div class="entry">
             지각 없음
              
            </div>
          </li>
          <li>
            <div class="entry">
             결석 없음
             
            </div>
          </li>
          <li>
            <div class="entry">
              과제 만점
            </div>
          </li>
            
        </ol>
   <li>
        <div class="entry">
         이몽룡
       </div>
      </li>
<ol>
          <li>
            <div class="entry">
              지각 2회
            </div>
          </li>
          <li>
            <div class="entry">
             결석 없음
             
            </div>
          </li>
          <li>
            <div class="entry">
             과제 만점
            </div>
          </li>
        </ol>
      </ol>
  <div class="bottom">
    <p class="date"><i>2014년 10월 14일 중간고사, 김세랑 작성</i></p>
    </div>
  </div>
</body>
</html>
