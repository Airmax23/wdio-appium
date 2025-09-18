import { $$, browser, expect} from '@wdio/globals'

// клік в апці

describe('Actions', () => {
    it('Accessability ID', async () => {
        await $('~App').click();
        await $('~Search').click();
        await $('~Invoke Search').click();
        await expect($('id=io.appium.android.apis:id/btn_start_search')).toBeDisplayed();
        await $('id=io.appium.android.apis:id/txt_query_prefill').setValue('Airmax');
        await $('id=io.appium.android.apis:id/txt_query_appdata').setValue('KissMyApps');

        
        await expect ($('id=io.appium.android.apis:id/txt_query_prefill')).toHaveText('Airmax');
        await expect ($('id=io.appium.android.apis:id/txt_query_appdata')).toHaveText('KissMyApps');
        

        await $('id=io.appium.android.apis:id/txt_query_prefill').clearValue(); 
        await expect($('id=io.appium.android.apis:id/txt_query_prefill')).toHaveText(''); 

        await browser.pause(10000);
    });

})