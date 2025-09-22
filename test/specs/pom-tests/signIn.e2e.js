/* 
import SignInForm from '../../page-jbjects/forms/SignInForm';
import SignUpForm from '../../page-jbjects/forms/SignUpForm';
import HomeScreen from '../../page-jbjects/screens/HomeScreen';
import ForgotPasswordForm from '../../page-jbjects/forms/ForgotPasswordForm';
import GarageScreen from '../../page-jbjects/screens/GarageScreen';
import { activateApp, closeApp } from '../../helpers/appStatesHelper';
import { users } from '../../test-data/credentials';



describe('Log in tests', () => {

        beforeEach(async () =>{
            // activate the app
        
            await activateApp('com.hillelAuto');
            await HomeScreen.openSignInForm();
        
        })

        afterEach(async () =>{
            // terminate the app
             await GarageScreen.logOutIfLoggedIn();
             await closeApp('com.hillelAuto');

        })
  
    
    it('Log in with correct credentials', async () => {

        await SignInForm.setEmail(users.mainUser.email);
        await SignInForm.setPassword(users.mainUser.password);
        await SignInForm.clickLoginButton();
        await expect(GarageScreen.screenTitle).toBeDisplayed();


    })


    it('Log in with incorrect credentials', async () => {

        await SignInForm.setEmail('airmax@gmail.om');
        await SignInForm.setPassword('airmaxairmax');
        await SignInForm.clickLoginButton();
        await expect(SignInForm.wrongDataMessage).toBeDisplayed();


    })

    it('Log in with without email', async () => {

        await SignInForm.setEmail('');
        await SignInForm.setPassword('airmaxairmax');
        await SignInForm.clickLoginButton(); 
        await expect(SignInForm.emptyEmailErrorMessage).toBeDisplayed();


    })
    
    it('Log in without password', async () => {

        await SignInForm.setEmail('airmax@gmail.om');
        await SignInForm.setPassword('');
        await SignInForm.clickLoginButton(); 
        await expect(SignInForm.emptyPasswordErrorMessage).toBeDisplayed();


    })

    it('Opening Registration popup', async () => {
        
        await SignInForm.clickRegistrationButton();
        await expect(SignUpForm.formTitle).toBeDisplayed();

    })  

    it('Opening Restore Access popup', async () => {
        await SignInForm.clickForgotPasswordButton();
        await expect(ForgotPasswordForm.formTitle).toBeDisplayed();

    })  


})     */

    import SignInForm from '../../page-jbjects/forms/SignInForm';
import SignUpForm from '../../page-jbjects/forms/SignUpForm';
import HomeScreen from '../../page-jbjects/screens/HomeScreen';
import ForgotPasswordForm from '../../page-jbjects/forms/ForgotPasswordForm';
import GarageScreen from '../../page-jbjects/screens/GarageScreen';
import { activateApp, closeApp } from '../../helpers/appStatesHelper';
import { users } from '../../test-data/credentials';
//import { isBrowserStack } from '../../wdio.conf.js'; // імпорт змінної для BrowserStack

const isBrowserStack = process.env.TEST_ENV === 'browserstack';

describe('Log in tests', () => {

    beforeEach(async () => {
        // activate the app
        await activateApp('com.hillelAuto');
        await HomeScreen.openSignInForm();
    });

    afterEach(async () => {
        // безпечний logOut
        try {
            await GarageScreen.logOutIfLoggedIn();
        } catch (err) {
            console.warn('AfterEach hook failed, skipping logout:', err.message);
        }

        // безпечне закриття апки
        try {
            if (!isBrowserStack) {
                // на BrowserStack апка перезапускається автоматично
                await closeApp('com.hillelAuto');
            }
        } catch (err) {
            console.warn('Closing app failed:', err.message);
        }
    });

    it('Log in with correct credentials', async () => {
        await SignInForm.setEmail(users.mainUser.email);
        await SignInForm.setPassword(users.mainUser.password);
        await SignInForm.clickLoginButton();
        await expect(GarageScreen.screenTitle).toBeDisplayed();
    });

    it('Log in with incorrect credentials', async () => {
        await SignInForm.setEmail('airmax@gmail.om');
        await SignInForm.setPassword('airmaxairmax');
        await SignInForm.clickLoginButton();
        await expect(SignInForm.wrongDataMessage).toBeDisplayed();
    });

    it('Log in without email', async () => {
        await SignInForm.setEmail('');
        await SignInForm.setPassword('airmaxairmax');
        await SignInForm.clickLoginButton();
        await expect(SignInForm.emptyEmailErrorMessage).toBeDisplayed();
    });

    it('Log in without password', async () => {
        await SignInForm.setEmail('airmax@gmail.om');
        await SignInForm.setPassword('');
        await SignInForm.clickLoginButton();
        await expect(SignInForm.emptyPasswordErrorMessage).toBeDisplayed();
    });

    it('Opening Registration popup', async () => {
        await SignInForm.clickRegistrationButton();
        await expect(SignUpForm.formTitle).toBeDisplayed();
    });

    it('Opening Restore Access popup', async () => {
        await SignInForm.clickForgotPasswordButton();
        await expect(ForgotPasswordForm.formTitle).toBeDisplayed();
    });
});
