# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: firsttestcase.spec.js >> Asseccibility testing
- Location: tests\firsttestcase.spec.js:26:6

# Error details

```
Error: expect(received).toHaveLength(expected)

Expected length: 0
Received length: 1
Received array:  [{"description": "Ensure that the page, or at least one of its frames contains a level-one heading", "help": "Page should contain a level-one heading", "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright", "id": "page-has-heading-one", "impact": "moderate", "nodes": [{"all": [{"data": null, "id": "page-has-heading-one", "impact": "moderate", "message": "Page must have a level-one heading", "relatedNodes": []}], "any": [], "failureSummary": "Fix all of the following:
  Page must have a level-one heading", "html": "<html lang=\"en\">", "impact": "moderate", "none": [], "target": ["html"]}], "tags": ["cat.semantics", "best-practice"]}]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - paragraph [ref=e7]: This domain is for use in documentation examples without needing permission. This is not a service; avoid relying on it for testing and monitoring purposes.
  - paragraph [ref=e8]: هذا النطاق مُخصص للاستخدام في أمثلة التوثيق دون الحاجة إلى إذن. هذه ليست خدمة، يُرجى تجنب الاعتماد عليها لأغراض الاختبار والمراقبة.
  - paragraph [ref=e9]: 该域名仅用于文档示例，无需获得许可。这并非一项服务，请勿将其用于测试和监控目的。
  - paragraph [ref=e10]: L’usage de ce domaine est réservé à des exemples de documentation, sans autorisation préalable. Il ne s’agit pas d’un service ; son utilisation à des fins de test ou de surveillance est à éviter.
  - paragraph [ref=e11]: Данный домен предназначен для использования в примерах документации без необходимости получения предварительного разрешения. Это не сервис; не рекомендуется его использование для тестирования и мониторинга.
  - paragraph [ref=e12]: Este dominio está destinado al uso en ejemplos de documentación sin necesidad de permiso. Esto no es un servicio; evitar utilizarlo para realizar pruebas o monitoreos.
  - link "Learn more" [ref=e13] [cursor=pointer]:
    - /url: https://iana.org/help/example-domains
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
  27 |     await page.goto("https://example.com");
  28 |     const results = await new AxeBuilder({page})
  29 |     .disableRules(['landmark-one-main', 'region'])
  30 |     .analyze();
> 31 |     expect(results.violations).toHaveLength(0);
     |                                ^ Error: expect(received).toHaveLength(expected)
  32 |     console.log(
  33 |         results.violations.map(v => ({
  34 |             id: v.id,
  35 |             impact: v.impact,
  36 |             description: v.description
  37 |         }))
  38 |     );
  39 | });
  40 | 
  41 | 
```