(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/mentions/index.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/mentions/index.en-US.md":
/*!************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/mentions/index.en-US.md ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"content\": [\n    \"section\",\n    [\n      \"p\",\n      \"Mention component.\"\n    ],\n    [\n      \"h2\",\n      \"When To Use\"\n    ],\n    [\n      \"p\",\n      \"When you need to mention someone or something.\"\n    ]\n  ],\n  \"meta\": {\n    \"category\": \"Components\",\n    \"type\": \"Data Entry\",\n    \"title\": \"Mentions\",\n    \"cover\": \"https://gw.alipayobjects.com/zos/alicdn/0pF5j477V/Mentions.svg\",\n    \"filename\": \"components/mentions/index.en-US.md\"\n  },\n  \"toc\": [\n    \"ul\",\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#When-To-Use\",\n          \"title\": \"When To Use\"\n        },\n        \"When To Use\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#API\",\n          \"title\": \"API\"\n        },\n        \"API\"\n      ]\n    ]\n  ],\n  \"api\": [\n    \"section\",\n    [\n      \"h2\",\n      \"API\"\n    ],\n    [\n      \"pre\",\n      {\n        \"lang\": \"jsx\",\n        \"highlighted\": \"<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>Mentions</span> <span class=\\\"token attr-name\\\">onChange</span><span class=\\\"token script language-javascript\\\"><span class=\\\"token punctuation\\\">=</span><span class=\\\"token punctuation\\\">{</span>onChange<span class=\\\"token punctuation\\\">}</span></span><span class=\\\"token punctuation\\\">></span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>Mentions.Option</span> <span class=\\\"token attr-name\\\">value</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>sample<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">></span></span>Sample<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>Mentions.Option</span><span class=\\\"token punctuation\\\">></span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>Mentions</span><span class=\\\"token punctuation\\\">></span></span>\"\n      },\n      [\n        \"code\",\n        \"<Mentions onChange={onChange}>\\n  <Mentions.Option value=\\\"sample\\\">Sample</Mentions.Option>\\n</Mentions>\"\n      ]\n    ],\n    [\n      \"h3\",\n      \"Mention\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"Property\"\n          ],\n          [\n            \"th\",\n            \"Description\"\n          ],\n          [\n            \"th\",\n            \"Type\"\n          ],\n          [\n            \"th\",\n            \"Default\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"autoFocus\"\n          ],\n          [\n            \"td\",\n            \"Auto get focus when component mounted\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"autoSize\"\n          ],\n          [\n            \"td\",\n            \"Textarea height autosize feature, can be set to true \",\n            \"|\",\n            \" false or an object { minRows: 2, maxRows: 6 }\"\n          ],\n          [\n            \"td\",\n            \"boolean \",\n            \"|\",\n            \" object\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"defaultValue\"\n          ],\n          [\n            \"td\",\n            \"Default value\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"filterOption\"\n          ],\n          [\n            \"td\",\n            \"Customize filter option logic\"\n          ],\n          [\n            \"td\",\n            \"false \",\n            \"|\",\n            \" (input: string, option: OptionProps) => boolean\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"getPopupContainer\"\n          ],\n          [\n            \"td\",\n            \"Set the mount HTML node for suggestions\"\n          ],\n          [\n            \"td\",\n            \"() => HTMLElement\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"notFoundContent\"\n          ],\n          [\n            \"td\",\n            \"Set mentions content when not match\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"Not Found\"\n            ]\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"placement\"\n          ],\n          [\n            \"td\",\n            \"Set popup placement\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"top\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"bottom\"\n            ]\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"bottom\"\n            ]\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"prefix\"\n          ],\n          [\n            \"td\",\n            \"Set trigger prefix keyword\"\n          ],\n          [\n            \"td\",\n            \"string \",\n            \"|\",\n            \" string\",\n            \"[\",\n            \"]\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"@\"\n            ]\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"split\"\n          ],\n          [\n            \"td\",\n            \"Set split string before and after selected mention\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"\"\n            ]\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"validateSearch\"\n          ],\n          [\n            \"td\",\n            \"Customize trigger search logic\"\n          ],\n          [\n            \"td\",\n            \"(text: string, props: MentionsProps) => void\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"value\"\n          ],\n          [\n            \"td\",\n            \"Set value of mentions\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onBlur\"\n          ],\n          [\n            \"td\",\n            \"Trigger when mentions lose focus\"\n          ],\n          [\n            \"td\",\n            \"() => void\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onChange\"\n          ],\n          [\n            \"td\",\n            \"Trigger when value changed\"\n          ],\n          [\n            \"td\",\n            \"(text: string) => void\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onFocus\"\n          ],\n          [\n            \"td\",\n            \"Trigger when mentions get focus\"\n          ],\n          [\n            \"td\",\n            \"() => void\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onResize\"\n          ],\n          [\n            \"td\",\n            \"The callback function that is triggered when textarea resize\"\n          ],\n          [\n            \"td\",\n            \"function({ width, height })\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onSearch\"\n          ],\n          [\n            \"td\",\n            \"Trigger when prefix hit\"\n          ],\n          [\n            \"td\",\n            \"(text: string, prefix: string) => void\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onSelect\"\n          ],\n          [\n            \"td\",\n            \"Trigger when user select the option\"\n          ],\n          [\n            \"td\",\n            \"(option: OptionProps, prefix: string) => void\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"Mention methods\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"Name\"\n          ],\n          [\n            \"th\",\n            \"Description\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"blur()\"\n          ],\n          [\n            \"td\",\n            \"Remove focus\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"focus()\"\n          ],\n          [\n            \"td\",\n            \"Get focus\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"Option\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"Property\"\n          ],\n          [\n            \"th\",\n            \"Description\"\n          ],\n          [\n            \"th\",\n            \"Type\"\n          ],\n          [\n            \"th\",\n            \"Default\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"children\"\n          ],\n          [\n            \"td\",\n            \"Suggestion content\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"value\"\n          ],\n          [\n            \"td\",\n            \"The value of suggestion, the value will insert into input filed while selected\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ]\n      ]\n    ]\n  ]\n};\n\n//# sourceURL=webpack:///./components/mentions/index.en-US.md?./node_modules/bisheng/lib/loaders/source-loader.js");

/***/ })

}]);