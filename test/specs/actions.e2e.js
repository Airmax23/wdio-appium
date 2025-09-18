import { $$, browser, expect} from '@wdio/globals'

// клік в апці

describe('Actions', () => {
    it('Accessability ID', async () => {
        await $('~App').click();
        await $('~Device Admin').click();

        await browser.pause(10000);
    });
// отримання тексту

    it('Get Text', async () => {
        console.log('Element text:' + await $('~Accessibility').getText());
        await expect ($('~Accessibility')).toHaveText('Accessibility');
        await expect ($('~Accessibility')).toHaveAttr('text','Accessibility');
    });
// введення тексту

    it('Set Text', async () => {
        await $('~App').click();
        await $('~Search').click();
        await $('~Invoke Search').click();
        await $('id=io.appium.android.apis:id/txt_query_prefill').setValue('Airmax');
        
        await expect ($('id=io.appium.android.apis:id/txt_query_prefill')).toHaveText('Airmax');
        await expect ($('id=io.appium.android.apis:id/txt_query_prefill')).toHaveAttr('text','Airmax');
    
    });

// дропдаун

    it('Dropdowns', async () => {
        await $('~App').click();
        await $('~Menu').click();
        await $('~Inflate from XML').click();
        await $('id=android:id/text1').click();
        await $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Order"]').click();
        await expect ($('android.widget.ListView')).not.toBeExisting();
        await expect ($('id=android:id/text1')).toHaveText('Order');


    });

    it('Checkboxes and Radio Button', async () => {
        await $('~Views').click();
        await $('~Controls').click();
        await $('~2. Dark Theme').click();
        await expect ($('id=io.appium.android.apis:id/check1')).toHaveAttr('checked', 'false');
        await $('id=io.appium.android.apis:id/check1').click();
        await expect ($('id=io.appium.android.apis:id/check1')).toHaveAttr('checked', 'true');


    });

    it('Multiple elements', async () => {
        const elements = await $$('android.widget.TextView');
        for (const element of elements){
            console.log(await element.getText());

        }
         await expect(elements[1]).toHaveText("Access'ibility");

    });

    it.only('Waits', async () => {
        await $('~Views').click();
        await $('~Chronometer').click();
        await $('~Start').click();
        await $('~5 seconds').waitForDisplayed();
        await $('~Stop').click();
        await browser.pause(2000);

    });



})

