# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: firsttestcase.spec.js >> Asseccibility testing
- Location: tests\firsttestcase.spec.js:26:6

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 364

- Array []
+ Array [
+   Object {
+     "description": "Ensure the document has a main landmark",
+     "help": "Document should have one main landmark",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright",
+     "id": "landmark-one-main",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [
+           Object {
+             "data": null,
+             "id": "page-has-main",
+             "impact": "moderate",
+             "message": "Document does not have a main landmark",
+             "relatedNodes": Array [],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Document does not have a main landmark",
+         "html": "<html lang=\"en\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "html",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.semantics",
+       "best-practice",
+     ],
+   },
+   Object {
+     "description": "Ensure all page content is contained by landmarks",
+     "help": "All page content should be contained by landmarks",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/region?application=playwright",
+     "id": "region",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<p id=\"logos\"><a href=\"https://www.w3.org/\" title=\"W3C Home\"><img alt=\"W3C logo\" src=\"../img/w3c.png\" height=\"48\" width=\"72\"></a><a href=\"https://www.w3.org/WAI/\" title=\"WAI Home\"><img alt=\"Web Accessibility Initiative (WAI) logo\" src=\"../img/wai.png\" height=\"48\"></a></p>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "#logos",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<h1><span class=\"subhead\">Accessible Home Page</span><span class=\"hidden\"> -</span> Before and After Demonstration</h1>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "#meta-header > h1",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<p class=\"subline\">Improving a Web site using Web Content Accessibility Guidelines (WCAG) 2.0</p>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".subline",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div id=\"mnav\" class=\"accessible\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "#mnav",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<p class=\"skip\" id=\"startcontent\">Demo starts here</p>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "#startcontent",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<ul class=\"skip\">
+             <li><a href=\"#content\">Skip to content (within demo page)</a></li>
+             <li><a href=\"#navtarget\">Skip to navigation (within demo page)</a></li>
+           </ul>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".skip:nth-child(2)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<a><img src=\"./img/toplogo.png\" alt=\"Citylights: your access to the city.\"></a>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "#header > a",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<img src=\"./img/weather.png\" alt=\"Sunny Spells\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "img[src$=\"weather.png\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<label for=\"qkmenu\" id=\"qklabel\">Explore Site by Topic:</label>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "#qklabel",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<select name=\"qkemnu\" id=\"qkmenu\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "#qkmenu",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div id=\"info\">
+             <p class=\"left\"><strong>Traffic:</strong> Construction work on Main Road</p>
+             <p class=\"right\" id=\"weather\"><strong>Today:</strong><span>&nbsp;Saturday 17 October 2026, Sunny Spells, 23°C</span></p>
+           </div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "#info",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div id=\"main\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "#main",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div id=\"footer\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "#footer",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div id=\"meta-footer\" class=\"meta\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "#meta-footer",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.keyboard",
+       "best-practice",
+       "RGAAv4",
+       "RGAA-9.2.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - paragraph:
      - link "Skip to accessible demo page" [ref=e3] [cursor=pointer]:
        - /url: "#page"
    - paragraph [ref=e4]:
      - link [ref=e5] [cursor=pointer]:
        - /url: https://www.w3.org/
        - img "W3C logo" [ref=e6]
      - link [ref=e7] [cursor=pointer]:
        - /url: https://www.w3.org/WAI/
        - img "Web Accessibility Initiative (WAI) logo" [ref=e8]
    - heading "Accessible Home Page - Before and After Demonstration" [level=1] [ref=e9]:
      - generic [ref=e10]: Accessible Home Page
      - generic [ref=e11]: "-"
      - text: Before and After Demonstration
    - paragraph [ref=e12]: Improving a Web site using Web Content Accessibility Guidelines (WCAG) 2.0
    - generic [ref=e13]:
      - list:
        - listitem [ref=e14]:
          - link "Overview" [ref=e15] [cursor=pointer]:
            - /url: ../Overview.html
        - listitem [ref=e16]:
          - generic [ref=e17]: "Current location:"
          - text: Home
          - generic [ref=e18]:
            - list:
              - listitem [ref=e19]:
                - strong [ref=e20]: "Inaccessible:"
                - link "Inaccessible Home Page" [ref=e21] [cursor=pointer]:
                  - /url: ../before/home.html
                  - generic [ref=e22]: Inaccessible
                  - text: Home Page
                - link "Inaccessible Home Page Report" [ref=e23] [cursor=pointer]:
                  - /url: ../before/reports/home.html
                  - generic [ref=e24]: Inaccessible Home Page
                  - text: Report
              - listitem [ref=e25]:
                - strong [ref=e26]: "Accessible:"
                - generic [ref=e27]:
                  - generic [ref=e28]: Accessible
                  - text: Home Page
                - link "Accessible Home Page Report" [ref=e29] [cursor=pointer]:
                  - /url: ./reports/home.html
                  - generic [ref=e30]: Accessible Home Page
                  - text: Report
            - link "Show Annotations" [ref=e31] [cursor=pointer]:
              - /url: ./annotated/home.html
        - listitem:
          - link "News" [ref=e32] [cursor=pointer]:
            - /url: news.html
        - listitem:
          - link "Tickets" [ref=e33] [cursor=pointer]:
            - /url: tickets.html
        - listitem:
          - link "Survey" [ref=e34] [cursor=pointer]:
            - /url: survey.html
        - listitem:
          - link "Template" [ref=e35] [cursor=pointer]:
            - /url: template.html
  - generic [ref=e39]:
    - paragraph [ref=e40]: Demo starts here
    - list:
      - listitem:
        - link "Skip to content (within demo page)" [ref=e41] [cursor=pointer]:
          - /url: "#content"
      - listitem:
        - link "Skip to navigation (within demo page)" [ref=e42] [cursor=pointer]:
          - /url: "#navtarget"
    - generic [ref=e43]:
      - 'img "Citylights: your access to the city." [ref=e45]'
      - img "Sunny Spells" [ref=e46]
      - generic [ref=e48]:
        - generic [ref=e49]: "Explore Site by Topic:"
        - combobox "Explore Site by Topic:" [ref=e50]:
          - option "Quick Menu" [selected]
          - option "Broadcasting"
          - option "Education"
          - option "Electricity"
          - option "Fire service"
          - option "Gas service"
          - option "Health care"
          - option "Police service"
          - option "Public Libraries"
          - option "Social services"
          - option "Social housing"
          - option "Telecommunications"
          - option "Town planning"
          - option "Transportation"
          - option "Waste management"
          - option "Water services"
        - button "Go" [ref=e51]
    - generic [ref=e52]:
      - paragraph [ref=e53]:
        - strong [ref=e54]: "Traffic:"
        - text: Construction work on Main Road
      - paragraph [ref=e55]:
        - strong [ref=e56]: "Today:"
        - text: Saturday 17 October 2026, Sunny Spells, 23°C
    - generic [ref=e57]:
      - heading "Navigation menu:" [level=2] [ref=e58]
      - list [ref=e60]:
        - listitem [ref=e61]:
          - generic [ref=e62]: Home
        - listitem [ref=e63]:
          - link "News" [ref=e64] [cursor=pointer]:
            - /url: news.html
        - listitem [ref=e65]:
          - link "Tickets" [ref=e66] [cursor=pointer]:
            - /url: tickets.html
        - listitem [ref=e67]:
          - link "Survey" [ref=e68] [cursor=pointer]:
            - /url: survey.html
      - generic [ref=e69]:
        - generic [ref=e70]:
          - heading "Welcome to CityLights" [level=1] [ref=e71]
          - paragraph [ref=e72]: Citylights is the new portal for visitors and residents. Find out what's on, book tickets, and get the latest news.
          - generic [ref=e73]:
            - heading [level=2] [ref=e74]:
              - link "Heat wave linked to temperatures" [ref=e75] [cursor=pointer]:
                - /url: news.html#story1
            - paragraph [ref=e76]
            - paragraph [ref=e77]:
              - text: After three years of effort city scientists now agree that the primary cause of the 2003 heatwave was hot air from...
              - link "Heat wave - full story" [ref=e78] [cursor=pointer]:
                - /url: news.html#story1
                - text: Heat wave -full story
          - generic [ref=e79]:
            - heading [level=2] [ref=e80]:
              - link "Man Gets Nine Months in Violin Case" [ref=e81] [cursor=pointer]:
                - /url: news.html#story2
            - paragraph [ref=e82]
            - paragraph [ref=e83]:
              - text: "Mayor: These kinds of crimes need more creative, effective punishments. For example, we could require..."
              - link "Violin case - full story" [ref=e84] [cursor=pointer]:
                - /url: news.html#story2
                - text: Violin case -full story
          - generic [ref=e85]:
            - heading [level=2] [ref=e86]:
              - link "Lack of brains hinders research" [ref=e87] [cursor=pointer]:
                - /url: news.html#story3
            - paragraph [ref=e88]
            - paragraph [ref=e89]:
              - text: "Brain donations: huge drop off in brain donations due to the great 'success' of 'Slow Traffic, Safe..."
              - link "Brain donations - full story" [ref=e90] [cursor=pointer]:
                - /url: news.html#story3
                - text: Brain donations -full story
          - heading "Elsewhere on the Web" [level=2] [ref=e91]
          - paragraph [ref=e92]: Please see the following websites for important information. Citylights take no responsibility for their content. For artichoke advice, call the number below.
          - list [ref=e93]:
            - listitem [ref=e94]:
              - link "Killer Bees" [ref=e95] [cursor=pointer]:
                - /url: ../offsite.html
            - listitem [ref=e96]:
              - link "Onions" [ref=e97] [cursor=pointer]:
                - /url: ../offsite.html
          - paragraph [ref=e98]:
            - strong [ref=e99]: Artichoke advice telephone hotline:(1) 269 24653 / (1) 269 C-H-O-K-E
        - generic [ref=e100]:
          - heading "Citylights Concert" [level=2] [ref=e101]
          - img "Free Penguins playing on stage" [ref=e102]
          - paragraph [ref=e103]:
            - text: Free penguins slogan at zoo benefit concert causes confusion among city rockers. Adjective or verb?
            - link "Buy Tickets" [ref=e104] [cursor=pointer]:
              - /url: tickets.html
          - heading "Citylights Survey" [level=2] [ref=e105]
          - img "Anemone-Snowdrop flower blooming" [ref=e106]
          - paragraph [ref=e107]:
            - text: More parks and more green space throughout the city at the price of already rare car parking spaces; how will this affect you?
            - link "Take Survey" [ref=e108] [cursor=pointer]:
              - /url: survey.html
    - paragraph [ref=e110]:
      - link "Copyright" [ref=e111] [cursor=pointer]:
        - /url: https://www.w3.org/Consortium/Legal/ipr-notice#Copyright
      - text: © 2012
      - link "W3C" [ref=e112] [cursor=pointer]:
        - /url: https://www.w3.org/
      - superscript [ref=e113]: ®
      - text: (
      - link "MIT" [ref=e114] [cursor=pointer]:
        - /url: http://www.csail.mit.edu/
      - text: ","
      - link "ERCIM" [ref=e115] [cursor=pointer]:
        - /url: http://www.ercim.org/
      - text: ","
      - link "Keio" [ref=e116] [cursor=pointer]:
        - /url: http://www.keio.ac.jp/
      - text: )
  - generic [ref=e118]:
    - separator [ref=e119]
    - paragraph [ref=e120]:
      - strong [ref=e121]: "Status:"
      - text: 20 February 2012 (see
      - link "changelog" [ref=e122] [cursor=pointer]:
        - /url: ../changelog.html
      - text: ") Editors:"
      - link "Shadi Abou-Zahra" [ref=e123] [cursor=pointer]:
        - /url: https://www.w3.org/People/shadi/
      - text: and the
      - link "Education and Outreach Working Group (EOWG)" [ref=e124] [cursor=pointer]:
        - /url: https://www.w3.org/WAI/EO/
      - text: . Developed with support from
      - link "WAI-TIES" [ref=e125] [cursor=pointer]:
        - /url: https://www.w3.org/WAI/TIES/
      - text: and
      - link "WAI-AGE" [ref=e126] [cursor=pointer]:
        - /url: https://www.w3.org/WAI/WAI-AGE/
      - text: projects, co-funded by the European Commission IST Programme. [see
      - link "Acknowledgements" [ref=e127] [cursor=pointer]:
        - /url: ../acks.html
      - text: "]"
    - paragraph [ref=e128]:
      - text: "["
      - link "WAI Site Map" [ref=e129] [cursor=pointer]:
        - /url: https://www.w3.org/WAI/sitemap.html
      - text: "] ["
      - link "Help with WAI Website" [ref=e130] [cursor=pointer]:
        - /url: https://www.w3.org/WAI/sitehelp.html
      - text: "] ["
      - link "Search" [ref=e131] [cursor=pointer]:
        - /url: https://www.w3.org/WAI/search.php
      - text: "] ["
      - link "Contacting WAI" [ref=e132] [cursor=pointer]:
        - /url: https://www.w3.org/WAI/contacts
      - text: "]"
      - strong [ref=e133]:
        - text: Feedback welcome to
        - link "wai-eo-editors@w3.org" [ref=e134] [cursor=pointer]:
          - /url: mailto:wai-eo-editors@w3.org
      - text: (a publicly archived list) or
      - link "wai@w3.org" [ref=e135] [cursor=pointer]:
        - /url: mailto:wai@w3.org
      - text: (a WAI staff-only list).
    - paragraph [ref=e137]:
      - link "Copyright" [ref=e138] [cursor=pointer]:
        - /url: https://www.w3.org/Consortium/Legal/ipr-notice#Copyright
      - text: © 2012
      - link "W3C" [ref=e139] [cursor=pointer]:
        - /url: https://www.w3.org/
      - superscript [ref=e140]: ®
      - text: (
      - link "MIT" [ref=e141] [cursor=pointer]:
        - /url: http://www.csail.mit.edu/
      - text: ","
      - link "ERCIM" [ref=e142] [cursor=pointer]:
        - /url: http://www.ercim.org/
      - text: ","
      - link "Keio" [ref=e143] [cursor=pointer]:
        - /url: http://www.keio.ac.jp/
      - text: ), All Rights Reserved. W3C
      - link "liability" [ref=e144] [cursor=pointer]:
        - /url: https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer
      - text: ","
      - link "trademark" [ref=e145] [cursor=pointer]:
        - /url: https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks
      - text: ","
      - link "document use" [ref=e146] [cursor=pointer]:
        - /url: https://www.w3.org/Consortium/Legal/copyright-documents
      - text: and
      - link "software licensing" [ref=e147] [cursor=pointer]:
        - /url: https://www.w3.org/Consortium/Legal/copyright-software
      - text: rules apply. Your interactions with this site are in accordance with our
      - link "public" [ref=e148] [cursor=pointer]:
        - /url: https://www.w3.org/Consortium/Legal/privacy-statement#Public
      - text: and
      - link "Member" [ref=e149] [cursor=pointer]:
        - /url: https://www.w3.org/Consortium/Legal/privacy-statement#Members
      - text: privacy statements.
```

# Test source

```ts
  1  | const {test,expect} = require('@playwright/test');
  2  | 
  3  | const AxeBuilder = require('@axe-core/playwright').default;
  4  | 
  5  | //we use {} to pick only test property from all properties 
  6  | // of {@playwright/test}: destructuring
  7  | 
  8  | /*Here the browser is a playwright fixture.
  9  | Its ready to use. We can use it to create a new page and perform actions on it.*/
  10 | 
  11 | test('first test case',{tag:'@smoke'},async({browser}) =>{
  12 | const context = await browser.newContext();
  13 | const page = await context.newPage();
  14 | await page.goto('https://www.google.com/');
  15 | console.log("Navigated to google successfully");
  16 | });
  17 | 
  18 | test('second test case',{tag:'@smoke'}, async({page}) => {
  19 |    await page.goto('https://www.google.com/');
  20 |    const pagetitle = await page.title();
  21 |    await expect(pagetitle).toBe("Google");
  22 |     console.log("Expected and Actual is same: " +pagetitle);
  23 | });
  24 | 
  25 | 
  26 | test.only('Asseccibility testing',async({page})=>{
  27 |     await page.goto("https://www.w3.org/WAI/demos/bad/after/home.html");
  28 |     const abc = await new AxeBuilder({page}).analyze();
> 29 |     expect(abc.violations).toEqual([]);
     |                            ^ Error: expect(received).toEqual(expected) // deep equality
  30 | });
  31 | 
  32 | 
```