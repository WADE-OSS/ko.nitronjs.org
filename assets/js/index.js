const title = styles(`
  font-size: 50px;
`)

const subtitle = styles(`
  font-size: 28px;
  color: #fff;
`)

const start_btn = styles(`
  padding: 7px 25px;
  border-radius: 50px;
`)

const guide = media.styles({
    size: "790px",
    style:`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0 55px;
    `,
    media:"display: block;"
});

const code_grid =  media.styles({
    size: "790px",
    style:`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 0 60px;
    `,
    media:"display: block;"
});

const grid_2 =  media.styles({
    size: "790px",
    style:`
    display: grid;
    grid-template-columns: 2fr 1fr;
    `,
    media:"display: none;"
});

const grid_3 =  media.styles({
    size: "790px",
    style:`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0 1px;
    `,
    media:"display: block;"
});

nitron.component('code-component',{
    return:`
    <div class="container ${code_grid}">
        <div>
            <h1 class="mb-1">기초부터 시작하기</h1>
            <a href="./docs/getting-started" class="line-none text-blue-500">지금 시작하기</a>
        </div>
        <div class="${grid_2}">
            <div class="border-solid border-gray-900 border-1 bg-gray-900 edge-l-25 p-15">
                <code>
                    <span class="text-blue-500">const</span> <span class="text-blue-400">element</span> <span class="text-white">=</span> <span class="text-yellow-600">"Hello, world!"</span>
                    <br><br>
                    <span class="text-blue-500">nitronDOM</span><span class="text-white">.</span><span class="text-yellow-400">render</span><span class="text-white">(element,<br><span class="text-blue-500">document</span><span class="text-white">.</span><span class="text-blue-400">getElementById</span>('root'))</span>
                </code>
            </div>
            <div class="border-solid border-gray-900 border-1 edge-r-25 p-15">
                Hello, world!
            </div>
        </div>
    </div>
    `
});

function tick(){
    var sec = 0;
    setInterval(function (){
        sec++
        
        var data = {
            seconds: sec
        };

        var time = function () {
        return `
            지난 초 : {{ seconds }}
        `};

        nitronDOM.render(placeholders(time, data),
        document.getElementById('tick'));
    },1000)

    return `<span class="text-blue-500">var</span> sec = 0;<br>
<span class="text-yellow-400">setInterval</span>(function (){
    sec++
    
    <span class="text-blue-500">var</span> data = {
        seconds: sec
    };

    <span class="text-blue-500">var</span> time = function () {
        <span class="text-pink-500">return</span> "지난 초 : {{ seconds }}"
    };
    <span class="text-blue-500">nitronDOM</span><span class="text-white">.</span><span class="text-yellow-400">render</span><span class="text-white">(<span class="text-yellow-400">placeholders</span>(time, data),
    <span class="text-blue-500">document</span><span class="text-white">.</span><span class="text-blue-400">getElementById</span>('root'))</span>
},1000)`};

nitron.component('code-time',{
    return:`
    <div class="container ${code_grid}">
        <div>
            <h1 class="mb-1">자리표시자를 사용한 변수 사용하기</h1>
            <p>컴포넌트에서 자리표시자를 사용하고, render 될때 자리표시자 번역기가 data 내용을 가져옵니다.</p>
            <a href="https://codepen.io/pen/?template=mdBNRPe" class="line-none text-blue-500 mt-5 inline-block">템플릿으로 Codepen에서 시작하기</a>
        </div>
        <div class="${grid_2}">
            <div class="border-solid border-gray-900 border-1 bg-gray-900 edge-l-25 p-15">
            <code>
            <pre class="text-white">${tick()}</pre>
            </code>
            </div>
            <div class="border-solid border-gray-900 border-1 edge-r-25 p-15">
                <div id="tick"></div>
            </div>
        </div>
    </div>
    `
});

nitron.component('code-placeholders',{
    return:`
    <div class="container mb-30">
        <div class="text-center mb-25">
            <h1 class="mb-1">자리 표시자의 예시</h1>
            <p>아래 변수와 같이 객체를 생성하고, 함수 컴포넌트에서 <br> {{ }}(이중 중괄호) 및 괄호 안의 내용이 객체 키인 경우 키 값이 출력됩니다.</p>
        </div>
        <div class="${grid_3} border-solid border-gray-900 border-2 edge-25">
            <div class="bg-gray-900">
                <span class="text-yellow-500 text-500 block mb-3 px-15 py-5">Component</span>
                <div class="pt-0 pb-15 px-15">
                    <code>
                        <span class="text-blue-500">var</span> <span class="text-white">template =</span> <span class="text-blue-400">function</span><span class="text-white">() {</span><br>
                            <div class="block ml-10">
                            <span class="text-pink-500">return</span> <span class="text-yellow-500">&#96;</span>
                            <span class="text-yellow-500 block ml-10">&lt;h1>Nitron.js&lt;/h1><br>&lt;p&gt; {{ msg }} &lt;/p&gt;<br></span>
                            </div>
                            <span class="text-yellow-500">&#96;</span><span class="text-white">}</span><br>
                        <br>
                        <span class="text-blue-500">nitronDOM</span><span class="text-white">.</span><span class="text-yellow-400">render</span><span class="text-white">(<span class="text-yellow-400">placeholders</span>(<span class="text-yellow-400">template</span>, <span class="text-blue-500">data</span>),
                        <span class="text-blue-500">document</span><span class="text-white">.</span><span class="text-blue-400">getElementById</span>('root'))</span>
                    </code>
                </div>
            </div>
            <div class="bg-gray-900">
                <span class="text-blue-500 text-500 block mb-3 px-15 py-5">Variable</span>
                <div class="pt-0 pb-15 px-15">
                    <code>
                        <span class="text-blue-500">var</span> <span class="text-white">data = {</span><br>
                            <span class="text-blue-500 inline-block ml-10">msg</span> <span class="text-white">:</span> <span class="text-yellow-500">"Nitron.js is A framework for constructing web interfaces"</span>
                        <br>
                        <span class="text-white">}</span>
                    </code>
                </div>
            </div>
            <div>
                <span class="text-pink-500 text-500 block mb-3 bg-gray-900 px-15 py-5">print</span>
                <div class="p-15">
                    <h1 class="mt-0 mb-3">Nitron.js</h1>
                    <p>Nitron.js is A framework for constructing web interfaces</p>
                </div>
            </div>
        </div>
    </div>
    `
});

const index = `
    <nitron-nav></nitron-nav>
    <div class="container bg-gray-800 text-center">
        <h1 class="${title} mb-0 text-blue-500">Nitron.js</h1>
        <p class="${subtitle}">웹 인터페이스 구성을 위한 프레임워크</p>
        <a href="./docs/getting-started" class="${start_btn} text-black bg-blue-500 inline-block mt-10 line-none">시작하기</a><a href="https://github.com/WADE-OSS/nitron" class="${start_btn} line-none ml-5 text-gray-200 border-1 border-solid border-blue-500 inline-block mt-10">GitHub</a>
        <div class="${guide} text-center text-white mt-75">
            <div>
                <h2>사용성</h2>
                <p class="text-left">HTML, CSS, JavaScript를 사용해본적 있나요?</p>
                <p class="text-left">HTML에서 기본적인것을 구성하고 나머지는 JavaScript에서 HTML과 CSS로 웹을 만든다고 생각하시면 됩니다.</p>
                <p class="text-left mt-10">또한, Mustache 같은 문법을 지원하여 쉽게 웹을 구성할 수 있습니다.</p>
            </div>
            <div>
                <h2>확장성</h2>
                <p class="text-left">Nitron은 넓은 확장성을 가지고 있습니다. Nitron의 컴포넌트 캡슐을 배포한다던지, 다른기능을 갖춘 프레임워크, 라이브러리와 혼용하여 사용한다던지, 혹은 내가 직접 그런 프레임워크, 라이브러리를 제작하고 컴포넌트 캡슐로 배포할 수 있습니다.</p>
            </div>
            <div>
                <h2>기능성</h2>
                <p class="text-left">Nitron은 컴포넌트 형식 입니다. 한번 코드를 짜두고 캡슐에 담아두면 HTML 혹은 JavaScript에서 호출하여 사용할 수 있습니다.</p>
                <p class="text-left mt-10">즉, 내가 지금까지 짜둔 코드 전체를 복사하고 붙여넣어서 쓰는게 아니라 함수처럼 사용할 수 있습니다.</p>
            </div>
        </div>
    </div>
    <code-component></code-component>
    <code-time></code-time>
    <code-placeholders></code-placeholders>
    <nitron-footer></nitron-footer>
`

nitronDOM.render(index,document.getElementById("root"))