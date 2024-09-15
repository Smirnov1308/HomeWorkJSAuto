  // auth.test.js
  const { test, expect } = require('@playwright/test');
  const { EMAIL, PASSWORD } = require('../user');

 test('Успешная авторизация', async ({ page }) => {
   await page.goto('https://netology.ru/?modal=sign_in');

 await page.waitForSelector('input[type="email"]');
 await page.fill('input[type="email"]', EMAIL);

 await page.waitForSelector('input[type="password"]');
 await page.fill('input[type="password"]', PASSWORD);

 await page.click('button[data-testid="login-submit-btn"]');

   // Проверка, что открылась страница профиля
     await expect(page).toHaveURL('https://netology.ru/profile/8148934');
     const header = await page.locator(
       'h2.src-components-pages-Profile-Programs--title--Kw5NH'
     );
     await expect(header).toHaveText('Моё обучение');
 });

 test('Неуспешная авторизация', async ({ page }) => {
   await page.goto('https://netology.ru/?modal=sign_in');

   await page.fill('input[name="email"]', 'invalid_email@example.com');
   await page.fill('input[name="password"]', 'invalid_password');
   await page.click('button[data-testid="login-submit-btn"]');

   // Проверка текста об ошибке
     const errorMessage = await page.locator(
       '.hint_hint__bpsEa.inputHint[data-testid="login-error-hint"]'
     );
     await expect(errorMessage).toHaveText(
      'Вы ввели неправильно логин или пароль.'
     );
 });

