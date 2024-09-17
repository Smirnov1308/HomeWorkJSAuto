let page;

const setupPage = async (url) => {
  page = await browser.newPage();
  await page.goto(url);
};

const closePage = async () => {
  await page.close();
};

describe("Github page tests", () => {
  beforeEach(async () => {
    await setupPage("https://github.com/team");
  });

  afterEach(async () => {
    await closePage();
  });

  test("The h1 header content", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  }, 20000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 10000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, { visible: true });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team");
  }, 10000);
});

// 
describe("Github other pages tests", () => {
  afterEach(async () => {
    await closePage();
  });

test("Check h1 on GitHub Docs page", async () => {
  await setupPage("https://docs.github.com/ru");
  await page.waitForSelector("h1#title-h1");
  const headerText = await page.$eval("h1#title-h1", (h1) =>
    h1.textContent.trim()
  );
  expect(headerText).toContain("Документация по GitHub");
}, 40000);


test("Check h2 on Pull Requests page", async () => {
  await setupPage("https://github.com/pullrequests");
  await page.waitForSelector("h2");
  const headerText = await page.$eval("h2.blankslate-heading", (h2) =>
    h2.textContent.trim()
  );
  expect(headerText).toContain(
    "pullrequests doesn't have any public repositories yet."
  ); 
}, 10000);

test("Check h1 on Marketplace page", async () => {
  await setupPage("https://github.com/marketplace");
  await page.waitForSelector("h1");
  const headerText = await page.$eval(
    "h1.lh-condensed.text-wrap-balance",
    (h1) => h1.textContent.trim()
  );
  expect(headerText).toContain("Enhance your workflow with extensions");
}, 10000);
});
