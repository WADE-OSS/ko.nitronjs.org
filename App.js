const text_blue = styles("color:#3873fc;");
const bg_blue = styles("background-color:#3873fc;");


const nav_styles = media.styles({
    size:"790px",
    style:`
    padding: 10px 16%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 10px;
    `,
    media:`
    padding: 10px 7%;
    display: block;
    text-align: center;
    `
});

const nav_menu = media.styles({
    size:"790px",
    style:`
    text-align: right;
    `,
    media:`
    text-align: center;
    `
});


const nav_logo = styles(`
    font-size: 20px;
`);

const nav_href = `
    text-white hover:text-blue-300
    ${styles(`
        display: inline-block;
        text-decoration: none;
        font-size: 16px;
        vertical-align: middle;
        padding:0 7px;
    `)}
`;

const nav_v = `
    text-white hover:text-blue-300
    ${styles(`
        display: inline-block;
        text-decoration: none;
        font-size: 13px;
        vertical-align: middle;
        padding:0 7px;
    `)}
`;

const nav_info = styles(`
    padding-left: 15px;
    display: inline-block;
`);


nitron.component('nitron-nav',{
    return:`
        <div class="${nav_styles} bg-gray-900">
            <a class="${nav_logo} ${text_blue} text-700 line-none" href="#">Nitron</a>
            <div class="${nav_menu}">
                <a href="./docs/getting-started" class="${nav_href}">문서</a>
                <a href="./support" class="${nav_href}">지원하기</a>
                <div class="${nav_info}">
                    <p class="${nav_v}">v0.0.4</p>
                    <a href="https://github.com/WADE-OSS/nitron" class="${nav_v}">GitHub <svg x="0px" y="0px" viewBox="0 0 100 100" width="15" height="14"><path fill="#ccc" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,  0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="#ccc" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a>
                </div>
            </div>
        </div>
    `
});

const footer_styles = media.styles({
    size:"790px",
    style:`
    padding: 50px 16%;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 0 10px;
    `,
    media:"display: block; padding: 50px 7%;"
});

const footer_logo = styles(`
    font-size: 34px;
`);

const footer_size = styles(`
    font-size: 12px;
`);

const footer_href = `text-gray-400 line-none my-3
${styles(`
    font-size: 15px;
    display: block;
`)}`

nitron.component('nitron-footer',{
    return:`
    <div class="${footer_styles} bg-gray-900">
        <div>
            <a class="${text_blue} ${footer_logo} text-700 line-none" href="#">Nitron</a>
            <p class="text-gray-300 ${footer_size}">Copyright © 2022 wade Interactive.</p>
            <p class="text-gray-300 ${footer_size}">Released under the MIT License</p>
        </div>
        <div>
            <h4 class="text-gray-300 mt-5 mb-3">문서</h4>
            <a class="${footer_href}" href="./docs/getting-started">시작하기</a>
            <a class="${footer_href}" href="./docs/htmlconfig">HTML 기본 구성</a>
        </div>
        <div>
            <h4 class="text-gray-300 mt-5 mb-3">더보기</h4>
            <a class="${footer_href}" href="https://github.com/WADE-OSS/nitron">GitHub</a>
            <a class="${footer_href}" href="./sponsor">후원자</a>
            <a class="${footer_href}" href="./acknowledgements">감사의 말</a>
            <a class="${footer_href}" href="./support">Nitron 지원하기</a>
        </div>
    </div>
    `
});